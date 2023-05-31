import React from "react";
import { LinearGradient, RadialGradient } from "@visx/gradient";
import { curveMonotoneX } from "@visx/curve";
import { Group } from "@visx/group";
import { scaleBand, scaleLinear } from "@visx/scale";
import { Bar, Line, LinePath, SplitLinePath } from "@visx/shape";
import { useTooltip, useTooltipInPortal } from "@visx/tooltip";

const segmentedData = [
  [
    {
      date: "2021-07-01T07:00:00.000Z",
      value: 167288882,
    },
    {
      date: "2021-08-01T07:00:00.000Z",
      value: 253875121,
    },
    {
      date: "2021-09-01T07:00:00.000Z",
      value: 246258960,
    },
    {
      date: "2021-10-01T07:00:00.000Z",
      value: 104582316,
    },
    {
      date: "2021-11-01T07:00:00.000Z",
      value: 183080124,
    },
    {
      date: "2021-12-01T08:00:00.000Z",
      value: 217751471,
    },
    {
      date: "2022-01-01T08:00:00.000Z",
      value: 206262007,
    },
    {
      date: "2022-02-01T08:00:00.000Z",
      value: 177863516,
    },
    {
      date: "2022-03-01T08:00:00.000Z",
      value: 165054633,
    },
    {
      date: "2022-04-01T07:00:00.000Z",
      value: 174267707,
    },
    {
      date: "2022-05-01T07:00:00.000Z",
      value: 175882615,
    },
    {
      date: "2022-06-01T07:00:00.000Z",
      value: 184217843,
    },
    {
      date: "2022-07-01T07:00:00.000Z",
      value: 71362036,
    },
    {
      date: "2022-08-01T07:00:00.000Z",
      value: 79267542,
    },
  ],
  [
    {
      date: "2022-09-01T07:00:00.000Z",
      value: 85752103,
    },
    {
      date: "2022-10-01T07:00:00.000Z",
      value: 85752103,
    },
    {
      date: "2022-11-01T07:00:00.000Z",
      value: 75526203,
    },
    {
      date: "2022-12-01T08:00:00.000Z",
      value: 68292403,
    },
    {
      date: "2023-01-01T08:00:00.000Z",
      value: 60980303,
    },
    {
      date: "2023-02-01T08:00:00.000Z",
      value: 53759703,
    },
    {
      date: "2023-03-01T08:00:00.000Z",
      value: 47423703,
    },
    {
      date: "2023-04-01T07:00:00.000Z",
      value: 41031803,
    },
    {
      date: "2023-05-01T07:00:00.000Z",
      value: 34470703,
    },
    {
      date: "2023-06-01T07:00:00.000Z",
      value: 28134703,
    },
    {
      date: "2023-07-01T07:00:00.000Z",
      value: 21798703,
    },
  ],
];

const getMaxDimensions = (width, height, margin) => ({
  xMax: Math.abs(width - margin.left - margin.right),
  yMax: Math.abs(height - margin.top - margin.bottom),
});

const minMaxValues = (data) => [Math.max(...data), Math.min(...data)];

const defaultChartMargin = { top: 20, right: 100, bottom: 20, left: 50 };

const Chart = ({
  lineColor = "red",
  width = 500,
  height = 300,
  margin = defaultChartMargin,
  tooltip = null,
}) => {
  const getDate = React.useMemo(() => (d) => d.date, []);
  const getValue = React.useMemo(() => (d) => Number(d.value), []);
  const getX = React.useMemo(() => (d) => d.x, []);
  const getY = React.useMemo(() => (d) => d.y, []);

  const { xMax, yMax } = getMaxDimensions(width, height, margin);
  let tooltipTimeout;

  const data = segmentedData[0].concat(segmentedData[1]);

  const dateScale = React.useMemo(
    () =>
      scaleBand({
        domain: data.map((d) => getDate(d)),
        range: [0, xMax],
        padding: 1,
      }),
    [(data, getDate, xMax)]
  );

  const valueScale = React.useMemo(
    () =>
      scaleLinear({
        domain: minMaxValues(data.map((d) => getValue(d))),
        range: [0, yMax],
        clamp: true,
        nice: true,
      }),
    [data, getValue, yMax]
  );

  const { tooltipOpen, tooltipData, tooltipLeft, tooltipTop } = useTooltip();

  const { containerRef, TooltipInPortal } = useTooltipInPortal({
    scroll: true,
  });

  const splitLineGetX = React.useCallback(
    (d) => dateScale(getDate(d)) || 0,
    [dateScale, getDate]
  );

  const splitLineGetY = React.useCallback(
    (d) => valueScale(getValue(d)) || 0,
    [valueScale, getValue]
  );

  const splitLineStyles = React.useMemo(
    () => [
      {
        stroke: "#80BE1A",
        strokeWidth: "2px",
        filter: "drop-shadow(0px 0px 15px #80BE1A)",
      },
      {
        stroke: lineColor,
        strokeWidth: "2px",
        filter: "drop-shadow(0px 13px 12px rgba(255, 0, 0, 0.63))",
      },
    ],
    [lineColor]
  );

  return (
    <>
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${width} ${height}`}
        ref={containerRef}
      >
        <LinearGradient
          from="rgba(255, 77, 0, 0.38)"
          to="rgba(234, 73, 4, 0.0973965)"
          toOpacity={38}
          id="redish"
        />
        <defs>
          <clipPath id="reverse-trapezoid">
            <polygon points="0,0 80,0 100,40 20,40" />
          </clipPath>
        </defs>
        <Group top={margin.top} left={margin.left}>
          <Group>
            <SplitLinePath
              segments={segmentedData}
              x={splitLineGetX}
              y={splitLineGetY}
              styles={splitLineStyles}
              segmentation="x"
              curve={curveMonotoneX}
            >
              {({ segment, styles }) => (
                <LinePath data={segment} x={getX} y={getY} {...styles} />
              )}
            </SplitLinePath>
            {data.length > 0 && (
              <circle
                cx={
                  dateScale(getDate(data[data.length - 1])) +
                  dateScale.bandwidth() / 2
                }
                cy={valueScale(getValue(data[data.length - 1]))}
                r={12}
                fill="#80BE1A"
              />
            )}

            <Bar
              width={width - defaultChartMargin.right}
              height={21}
              cx={dateScale(getDate(data[data.length - 1]))}
              y={valueScale(getValue(segmentedData[1][0])) + 20}
              fill="url(#redish)"
              // clipPath="url(#reverse-trapezoid)"
            />
          </Group>
        </Group>
        <Bar
          x={margin.left}
          y={margin.top}
          width={xMax}
          height={yMax}
          fill="transparent"
        />
        {tooltipData && (
          <g>
            <Line
              from={{ x: tooltipLeft, y: margin.top }}
              to={{ x: tooltipLeft, y: height - margin.bottom }}
              stroke="#627491"
              strokeWidth={1}
              pointerEvents="none"
            />
            <circle
              cx={tooltipLeft}
              cy={tooltipTop + 1}
              r={4}
              fill="black"
              fillOpacity={0.1}
              stroke="black"
              strokeOpacity={0.1}
              strokeWidth={2}
              pointerEvents="none"
            />
            <circle
              cx={tooltipLeft}
              cy={tooltipTop}
              r={4}
              fill="#627491"
              stroke="white"
              strokeWidth={2}
              pointerEvents="none"
            />
          </g>
        )}
      </svg>
      {tooltip && tooltipOpen && tooltipData && (
        <TooltipInPortal top={tooltipTop} left={tooltipLeft}>
          {tooltip(tooltipData)}
        </TooltipInPortal>
      )}
    </>
  );
};

export default Chart;

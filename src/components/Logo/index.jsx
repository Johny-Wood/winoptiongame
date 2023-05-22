import React from "react";
import "./index.scss";
import logo from "@/assets/logo.svg";

const Logo = () => {
  return (
    <div className="logo">
      <div className="logo__container">
        <img
          className="logo__img"
          src={logo}
          width="248px"
          height="31px"
          alt="Win option logo"
        />
        <span className="logo__underline"></span>
        <svg
          width="246"
          height="36"
          viewBox="0 0 246 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_dd_107_4852)">
            <path
              d="M17.745 23.9225L13.3533 23.9107L13.8714 20.9319L17.8745 20.9437C18.4239 20.9437 18.9263 20.8456 19.3815 20.6494C19.8368 20.4531 20.2096 20.1666 20.5 19.7899C20.7983 19.4131 20.9867 18.9422 21.0652 18.377C21.1437 17.9061 21.1241 17.4744 21.0063 17.0819C20.8964 16.6894 20.6884 16.3715 20.3823 16.1282C20.0762 15.877 19.668 15.7397 19.1578 15.7161L16.1437 15.7044L13.683 29.8683H9.95068L12.9177 12.7256L19.2756 12.7374C20.3823 12.7609 21.3713 13.0003 22.2426 13.4556C23.1217 13.9108 23.7967 14.5505 24.2677 15.3747C24.7465 16.1989 24.9388 17.1918 24.8446 18.3535C24.7425 19.6172 24.3462 20.6611 23.6554 21.4853C22.9725 22.3095 22.1091 22.9217 21.0652 23.322C20.0212 23.7223 18.9145 23.9225 17.745 23.9225Z"
              fill="url(#paint0_linear_107_4852)"
            />
            <path
              d="M36.5007 26.9013L35.9826 29.8683H27.5643L28.0824 26.9013H36.5007ZM31.8265 12.7256L28.8477 29.8683H25.1154L28.0824 12.7256H31.8265Z"
              fill="url(#paint1_linear_107_4852)"
            />
            <path
              d="M47.3208 16.1753L40.7157 29.8683H36.5831L45.7196 12.7256H48.3452L47.3208 16.1753ZM48.5453 29.8683L46.6262 15.7986L46.7439 12.7256H49.2164L52.4189 29.8683H48.5453ZM49.4401 23.4869L48.9103 26.4539H40.2212L40.751 23.4869H49.4401Z"
              fill="url(#paint2_linear_107_4852)"
            />
            <path
              d="M57.7642 12.7256L59.6951 20.3315L64.2752 12.7256H68.4902L61.0609 23.8519L60.0248 29.8683H56.2219L57.3404 23.4869L53.8318 12.7374L57.7642 12.7256Z"
              fill="url(#paint3_linear_107_4852)"
            />
            <path
              d="M84.1141 26.9013L83.596 29.8683H75.1777L75.6958 26.9013H84.1141ZM79.4399 12.7256L76.4611 29.8683H72.7288L75.6958 12.7256H79.4399Z"
              fill="url(#paint4_linear_107_4852)"
            />
            <path
              d="M92.344 12.7256L89.377 29.8683H85.6447L88.6234 12.7256H92.344Z"
              fill="url(#paint5_linear_107_4852)"
            />
            <path
              d="M99.0551 12.7256L96.0763 29.8683H92.344L95.311 12.7256H99.0551ZM109.122 12.7256L101.045 21.3911L96.4884 25.6415L96.4295 21.7914L99.5025 18.1769L104.294 12.7256H109.122ZM101.798 29.8683L98.4899 21.9092L101.575 19.7428L106.037 29.8683H101.798Z"
              fill="url(#paint6_linear_107_4852)"
            />
            <path
              d="M119.118 26.9013L118.6 29.8683H109.722L110.24 26.9013H119.118ZM113.984 12.7256L111.006 29.8683H107.273L110.24 12.7256H113.984ZM119.224 19.6251L118.729 22.4979H110.994L111.5 19.6251H119.224ZM121.578 12.7256L121.06 15.7044H112.171L112.701 12.7256H121.578Z"
              fill="url(#paint7_linear_107_4852)"
            />
            <path
              d="M135.672 16.1753L129.067 29.8683H124.934L134.07 12.7256H136.696L135.672 16.1753ZM136.896 29.8683L134.977 15.7986L135.095 12.7256H137.567L140.77 29.8683H136.896ZM137.791 23.4869L137.261 26.4539H128.572L129.102 23.4869H137.791Z"
              fill="url(#paint8_linear_107_4852)"
            />
            <path
              d="M158.23 12.7256L155.263 29.8683H151.519L154.498 12.7256H158.23ZM163.293 12.7256L162.775 15.7044H149.011L149.541 12.7256H163.293Z"
              fill="url(#paint9_linear_107_4852)"
            />
            <path
              d="M165.083 12.7256L171.276 12.7374C172.32 12.7531 173.273 12.9454 174.137 13.3143C175.008 13.6753 175.687 14.2248 176.174 14.9626C176.66 15.7004 176.864 16.6463 176.786 17.8001C176.715 18.7342 176.495 19.5269 176.127 20.1784C175.766 20.8221 175.279 21.3715 174.667 21.8268C174.054 22.2742 173.34 22.6666 172.524 23.0041L171.193 23.6753H165.554L166.06 20.6965L169.922 20.72C170.463 20.7122 170.954 20.6062 171.394 20.4021C171.833 20.198 172.194 19.9076 172.477 19.5309C172.759 19.1462 172.936 18.6753 173.007 18.118C173.077 17.6549 173.054 17.2467 172.936 16.8935C172.826 16.5403 172.618 16.2617 172.312 16.0576C172.014 15.8535 171.629 15.7397 171.158 15.7161L168.309 15.7044L165.848 29.8683H162.116L165.083 12.7256ZM171.405 29.8683L168.992 22.2506L172.771 22.2388L175.397 29.6799L175.385 29.8683H171.405Z"
              fill="url(#paint10_linear_107_4852)"
            />
            <path
              d="M186.535 16.1753L179.93 29.8683H175.797L184.933 12.7256H187.559L186.535 16.1753ZM187.759 29.8683L185.84 15.7986L185.958 12.7256H188.43L191.633 29.8683H187.759ZM188.654 23.4869L188.124 26.4539H179.435L179.965 23.4869H188.654Z"
              fill="url(#paint11_linear_107_4852)"
            />
            <path
              d="M198.532 29.8683H194.659L195.2 26.9013L198.65 26.9248C199.67 26.9248 200.522 26.6776 201.205 26.1831C201.888 25.6886 202.425 25.041 202.818 24.2404C203.21 23.4319 203.473 22.5724 203.607 21.6619L203.701 20.8731C203.772 20.3158 203.799 19.7428 203.783 19.1541C203.768 18.5576 203.67 18.0042 203.489 17.494C203.308 16.9838 203.018 16.5678 202.618 16.246C202.217 15.9163 201.664 15.7397 200.958 15.7161L197.049 15.7044L197.567 12.7256L201.075 12.7374C202.221 12.7609 203.222 12.9964 204.078 13.4438C204.941 13.8833 205.644 14.4838 206.185 15.2452C206.735 15.9987 207.119 16.8621 207.339 17.8354C207.567 18.8009 207.618 19.8174 207.492 20.8849L207.398 21.6737C207.249 22.8275 206.927 23.9029 206.432 24.8997C205.938 25.8966 205.302 26.7678 204.525 27.5135C203.748 28.2592 202.853 28.84 201.841 29.256C200.828 29.6721 199.725 29.8761 198.532 29.8683ZM199.768 12.7256L196.79 29.8683H193.057L196.024 12.7256H199.768Z"
              fill="url(#paint12_linear_107_4852)"
            />
            <path
              d="M220.067 26.9013L219.548 29.8683H210.671L211.189 26.9013H220.067ZM214.933 12.7256L211.954 29.8683H208.222L211.189 12.7256H214.933ZM220.173 19.6251L219.678 22.4979H211.943L212.449 19.6251H220.173ZM222.527 12.7256L222.009 15.7044H213.12L213.65 12.7256H222.527Z"
              fill="url(#paint13_linear_107_4852)"
            />
            <path
              d="M224.329 12.7256L230.522 12.7374C231.566 12.7531 232.519 12.9454 233.383 13.3143C234.254 13.6753 234.933 14.2248 235.42 14.9626C235.906 15.7004 236.11 16.6463 236.032 17.8001C235.961 18.7342 235.741 19.5269 235.373 20.1784C235.011 20.8221 234.525 21.3715 233.913 21.8268C233.3 22.2742 232.586 22.6666 231.77 23.0041L230.439 23.6753H224.8L225.306 20.6965L229.168 20.72C229.709 20.7122 230.2 20.6062 230.639 20.4021C231.079 20.198 231.44 19.9076 231.723 19.5309C232.005 19.1462 232.182 18.6753 232.252 18.118C232.323 17.6549 232.3 17.2467 232.182 16.8935C232.072 16.5403 231.864 16.2617 231.558 16.0576C231.26 15.8535 230.875 15.7397 230.404 15.7161L227.555 15.7044L225.094 29.8683H221.362L224.329 12.7256ZM230.651 29.8683L228.238 22.2506L232.017 22.2388L234.643 29.6799L234.631 29.8683H230.651Z"
              fill="url(#paint14_linear_107_4852)"
            />
          </g>
          <defs>
            <filter
              id="filter0_dd_107_4852"
              x="0.950684"
              y="0.725586"
              width="244.098"
              height="35.1429"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.65 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_107_4852"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="-3" />
              <feGaussianBlur stdDeviation="4.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 0.792105 0 0 0 0 0.341667 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_107_4852"
                result="effect2_dropShadow_107_4852"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_107_4852"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_107_4852"
              x1="123.373"
              y1="7.31114"
              x2="123.373"
              y2="35.3131"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FEFE8C" />
              <stop offset="1" stopColor="#FFDEAE" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_107_4852"
              x1="123.373"
              y1="7.31114"
              x2="123.373"
              y2="35.3131"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FEFE8C" />
              <stop offset="1" stopColor="#FFDEAE" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_107_4852"
              x1="123.373"
              y1="7.31114"
              x2="123.373"
              y2="35.3131"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FEFE8C" />
              <stop offset="1" stopColor="#FFDEAE" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_107_4852"
              x1="123.373"
              y1="7.31114"
              x2="123.373"
              y2="35.3131"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FEFE8C" />
              <stop offset="1" stopColor="#FFDEAE" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_107_4852"
              x1="123.373"
              y1="7.31114"
              x2="123.373"
              y2="35.3131"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FEFE8C" />
              <stop offset="1" stopColor="#FFDEAE" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_107_4852"
              x1="123.373"
              y1="7.31114"
              x2="123.373"
              y2="35.3131"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FEFE8C" />
              <stop offset="1" stopColor="#FFDEAE" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_107_4852"
              x1="123.373"
              y1="7.31114"
              x2="123.373"
              y2="35.3131"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FEFE8C" />
              <stop offset="1" stopColor="#FFDEAE" />
            </linearGradient>
            <linearGradient
              id="paint7_linear_107_4852"
              x1="123.373"
              y1="7.31114"
              x2="123.373"
              y2="35.3131"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FEFE8C" />
              <stop offset="1" stopColor="#FFDEAE" />
            </linearGradient>
            <linearGradient
              id="paint8_linear_107_4852"
              x1="123.373"
              y1="7.31114"
              x2="123.373"
              y2="35.3131"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FEFE8C" />
              <stop offset="1" stopColor="#FFDEAE" />
            </linearGradient>
            <linearGradient
              id="paint9_linear_107_4852"
              x1="123.373"
              y1="7.31114"
              x2="123.373"
              y2="35.3131"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FEFE8C" />
              <stop offset="1" stopColor="#FFDEAE" />
            </linearGradient>
            <linearGradient
              id="paint10_linear_107_4852"
              x1="123.373"
              y1="7.31114"
              x2="123.373"
              y2="35.3131"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FEFE8C" />
              <stop offset="1" stopColor="#FFDEAE" />
            </linearGradient>
            <linearGradient
              id="paint11_linear_107_4852"
              x1="123.373"
              y1="7.31114"
              x2="123.373"
              y2="35.3131"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FEFE8C" />
              <stop offset="1" stopColor="#FFDEAE" />
            </linearGradient>
            <linearGradient
              id="paint12_linear_107_4852"
              x1="123.373"
              y1="7.31114"
              x2="123.373"
              y2="35.3131"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FEFE8C" />
              <stop offset="1" stopColor="#FFDEAE" />
            </linearGradient>
            <linearGradient
              id="paint13_linear_107_4852"
              x1="123.373"
              y1="7.31114"
              x2="123.373"
              y2="35.3131"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FEFE8C" />
              <stop offset="1" stopColor="#FFDEAE" />
            </linearGradient>
            <linearGradient
              id="paint14_linear_107_4852"
              x1="123.373"
              y1="7.31114"
              x2="123.373"
              y2="35.3131"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FEFE8C" />
              <stop offset="1" stopColor="#FFDEAE" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Logo;

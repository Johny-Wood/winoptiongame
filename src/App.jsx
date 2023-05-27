import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import Side from "./components/Side";
import Layout from "./reusable/Layout";
import GraphBoard from "./components/GraphBoard";
import getGameSession from "./api/handlers/getGameSessin";
import { setGameSession } from "./store/slices/gameSessionSlice";
// import getGamers from "./api/handlers/getGamers";
// import { setGamers } from "./store/slices/gamersSlice";

function App() {
  const gamersUp = useSelector((state) => state.gameSession.gamersUp);
  const gamersDown = useSelector((state) => state.gameSession.gamersDown);
  const dispatch = useDispatch();

  useEffect(() => {
    const requestGamers = (async () => {
      const response = await getGameSession();

      dispatch(setGameSession(response));
    })();
  }, []);

  return (
    <Layout>
      <div className="container">
        <div className="side">
          <Side direction="up" gamers={gamersUp} />
        </div>
        <div className="graph-board">
          <GraphBoard />
        </div>
        <div className="side">
          <Side direction="down" gamers={gamersDown} />
        </div>
      </div>
    </Layout>
  );
}

export default App;

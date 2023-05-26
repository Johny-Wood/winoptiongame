import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import Side from "./components/Side";
import Layout from "./reusable/Layout";
import getGamers from "./api/handlers/getGamers";
import { setGamers } from "./store/slices/gamersSlice";
import { useEffect } from "react";

function App() {
  const gamersUp = useSelector((state) => state.gamers.gamersUp);
  const gamersDown = useSelector((state) => state.gamers.gamersDown);
  const dispatch = useDispatch();

  useEffect(() => {
    const requestGamers = (async () => {
      const response = await getGamers();

      dispatch(setGamers(response));
    })();
  }, []);

  return (
    <Layout>
      <div className="container">
        <div className="side">
          <Side direction="up" gamers={gamersUp} />
        </div>
        <div className="side">
          <Side direction="down" gamers={gamersDown} />
        </div>
      </div>
    </Layout>
  );
}

export default App;

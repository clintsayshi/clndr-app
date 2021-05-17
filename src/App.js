import a from "./app.module.scss";
import { useSelector } from "react-redux";

function App() {
  //const actions = useSelector((state) => state.actions);

  return (
    <div className={a.app}>
      <p>App Started</p>
    </div>
  );
}

export default App;

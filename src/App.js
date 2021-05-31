import Nav from "./components/nav/nav";
import Main from "./components/main/main";
import { useSelector, useDispatch } from "react-redux";
import "./app.scss";
import Selected from "./components/selected/selected";

function App() {
  // current value of dark__mode
  const darkmode = useSelector((state) => state.actions.dark__mode);

  return (
    <div data-theme={darkmode ? "dark" : "light"} className="app">
      <Nav />
      <Main />
      <Selected />
    </div>
  );
}

export default App;

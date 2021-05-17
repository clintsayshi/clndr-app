import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import { useSelector } from "react-redux";
import Layout from "./pages/home";
import Pages from "./pages";

function App() {
  //const actions = useSelector((state) => state.actions);

  return (
    <>
      <Pages />
    </>
  );
}

export default App;

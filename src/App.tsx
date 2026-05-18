import { Outlet } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import { Reset } from "./styles/reset";

function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Outlet />
    </>
  );
}

export default App;

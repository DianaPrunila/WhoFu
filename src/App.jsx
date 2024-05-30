import { Outlet } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

import Navibar from "./parts/Navbar";

function App() {
  return (
    <>
      <Navibar />
      <Outlet />
      <div>Footer</div>
    </>
  );
}

export default App;

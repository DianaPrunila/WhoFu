import { Outlet } from "react-router-dom";

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

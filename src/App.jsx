import { Outlet } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

import Navibar from "./parts/Navbar";
import Footer from "./parts/Footer";

function App() {
  return (
    <>
      <Navibar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;

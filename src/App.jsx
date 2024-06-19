import "./index.css";
import { Outlet } from "react-router-dom";
import Footer from "./parts/Footer.jsx";
import NaviBar from "./parts/Navibar.jsx";

function App() {
  return (
    <div className="App">
      <NaviBar />
      <Outlet />
      <Footer />
    </div>
  );
}
export default App;

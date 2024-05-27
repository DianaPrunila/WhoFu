import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./parts/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <div>Footer</div>
    </>
  );
}

export default App;

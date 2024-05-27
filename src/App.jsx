import { Outlet } from "react-router-dom";
import "./App.css";
import NavScrollExample from "./parts/Navbar";

function App() {
  return (
    <>
      <NavScrollExample />
      <Outlet />
      <div>Footer</div>
    </>
  );
}

export default App;

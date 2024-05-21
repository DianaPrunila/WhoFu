import "./App.css";
import {
  createBrouserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "..pages/Home";
import Cart from "../pages/Cart";

function App() {
  const routes = createBrouserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/Home" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
      </Route>
    )
  );

  return <></>;
}

export default App;

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { persistor, store } from "./store/Store";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./pages/Home";
import About from "./pages/About";
import { AllProducts } from "./pages/AllProducts";
import Blog from "./pages/Blog";
import { Cart } from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import Contact from "./pages/Contact";
import Fermented from "./pages/Fermented";
import Fruits from "./pages/Fruits";
import Grains from "./pages/Grains";
import Legumes from "./pages/Legumes";
import Pasta from "./pages/Pasta";
import { PersistGate } from "redux-persist/integration/react";
import PopUp from "./parts/PopUp";
import SgProd from "./pages/SgProd";
import Vegetables from "./pages/Vegetables";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/AllProducts" element={<AllProducts />} />
      <Route path="/AllProducts/:id" element={<SgProd />} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/CheckOut" element={<CheckOut />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Fermented" element={<Fermented />} />
      <Route path="/Fermented/:id" element={<SgProd />} />
      <Route path="/Fruits" element={<Fruits />} />
      <Route path="/Fruits/:id" element={<SgProd />} />
      <Route path="/Grains" element={<Grains />} />
      <Route path="/Grains/:id" element={<SgProd />} />
      <Route path="/Legumes" element={<Legumes />} />
      <Route path="/Legumes/:id" element={<SgProd />} />
      <Route path="/Pasta" element={<Pasta />} />
      <Route path="/Pasta/:id" element={<SgProd />} />
      <Route path="/PopUp" element={<PopUp />} />
      <Route path="/Vegetables" element={<Vegetables />} />
      <Route path="/Vegetables/:id" element={<SgProd />} />

      <Route
        path="*"
        element={
          <div className="text-red-700 font-extrabold d-flex justify-content-center  ">
            404
          </div>
        }
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={routes} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import About from "./pages/About.jsx";
import AllProducts from "./pages/AllProducts.jsx";
import Blog from "./pages/Blog.jsx";
import Cart from "./pages/Cart.jsx";
import Contact from "./pages/Contact.jsx";
import Favorites from "./pages/Favorites.jsx";
import Fermented from "./pages/Fermented.jsx";
import Fruits from "./pages/Fruits.jsx";
import Grains from "./pages/Grains.jsx";
import { Home } from "./pages/Home";
import Legumes from "./pages/Legumes.jsx";
import Pasta from "./pages/Pasta.jsx";
import Profile from "./pages/Profile.jsx";
import NutsSeeds from "./pages/NutsSeeds.jsx";
import Vegetables from "./pages/Vegetables.jsx";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/AllProducts" elment={<AllProducts />} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Favorites" element={<Favorites />} />
      <Route path="/Fermented" element={<Fermented />} />
      <Route path="/Fruits" elment={<Fruits />} />
      <Route path="/Grains" element={<Grains />} />
      <Route path="/Legumes" element={<Legumes />} />
      <Route path="/Pasta" elment={<Pasta />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="NutsSeeds" element={<NutsSeeds />} />
      <Route path="Vegetables" element={<Vegetables />} />
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
    <RouterProvider router={routes} />
  </React.StrictMode>
);

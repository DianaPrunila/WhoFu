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
import { Home } from "./pages/Home";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Cart from "./pages/Cart.jsx";
import Profile from "./pages/Profile.jsx";
import Favorites from "./pages/Favorites.jsx";
import AllProducts from "./pages/AllProducts.jsx";
import Legumes from "./pages/Legumes.jsx";
import Fruits from "./pages/Fruits.jsx";
import LegumeProducts from "./pages/AllProducts.jsx";
import NutsSeeds from "./pages/NutsSeeds.jsx";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Favorites" element={<Favorites />} />
      <Route path="/AllProducts" elment={<AllProducts />} />
      <Route path="/Fruits" elment={<Fruits />} />
      <Route path="/Legumes" element={<Legumes />} />
      <Route path="NutsSeeds" element={<NutsSeeds />} />
      <Route path="/LegumeProducts" elment={<LegumeProducts />} />
      <Route path="*" element={<div>You are not where you should</div>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);

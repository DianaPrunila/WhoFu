import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About.jsx";
import { AllProducts } from "./pages/AllProducts.jsx";
import Blog from "./pages/Blog.jsx";
import { Cart } from "./pages/Cart.jsx";
import CheckOut from "./pages/CheckOut.jsx";
import Contact from "./pages/Contact.jsx";
import Favorites from "./pages/Favorites.jsx";
import Fermented from "./pages/Fermented.jsx";
import Footer from "./parts/Footer.jsx";
import Fruits from "./pages/Fruits.jsx";
import Grains from "./pages/Grains.jsx";
import { Home } from "./pages/Home";
import Legumes from "./pages/Legumes.jsx";
import Pasta from "./pages/Pasta.jsx";
import NutsSeeds from "./pages/NutsSeeds.jsx";
import NaviBar from "./parts/Navibar.jsx";
import Vegetables from "./pages/Vegetables.jsx";

import { ShopContextProvider } from "./pages/context/ShopContext.jsx";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <NaviBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/AllProducts" element={<AllProducts />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/CheckOut" element={<CheckOut />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Favorites" element={<Favorites />} />
            <Route path="/Fermented" element={<Fermented />} />
            <Route path="/Fruits" element={<Fruits />} />
            <Route path="/Grains" element={<Grains />} />
            <Route path="/Legumes" element={<Legumes />} />
            <Route path="/Pasta" element={<Pasta />} />
            <Route path="/NutsSeeds" element={<NutsSeeds />} />
            <Route path="/Vegetables" element={<Vegetables />} />
            <Route
              path="*"
              element={
                <div className="text-red-700 font-extrabold d-flex justify-content-center  ">
                  404
                </div>
              }
            />
          </Routes>
          <Footer />
        </Router>
      </ShopContextProvider>
    </div>
  );
}
export default App;

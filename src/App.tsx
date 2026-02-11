import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages";
import Products from "@pages/Product";
import Packages from "@pages/Packages";
import Bonuses from "@pages/Bonuses";
import Faq from "@pages/Faq";
import Blog from "@pages/Blog";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/product" element={<Products />} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/bonuses" element={<Bonuses />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}

export default App;

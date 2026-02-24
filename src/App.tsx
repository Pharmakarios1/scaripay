import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "@pages/Product";
import Packages from "@pages/Packages";
import Bonuses from "@pages/Bonuses";
import Faq from "@pages/Faq";
import Blog from "@pages/Blog";
import SignUp from "@pages/Auth/sign-Up";
import DashboardLayout from "@layouts/DashboardLayout";
import { dashboardRoutes } from "./configs";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/product" element={<Products />} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/bonuses" element={<Bonuses />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
        {dashboardRoutes.map((route) => (
          <Route
            key={route.path}
            index={route.path === ""}
            path={route.path}
            element={route.element}
          />
        ))}
      </Route>
    </Routes>
  );
}

export default App;

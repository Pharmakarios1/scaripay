import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "@pages/Product";
import Packages from "@pages/Packages";
import Bonuses from "@pages/Bonuses";
import Faq from "@pages/Faq";
import Blog from "@pages/Blog";
import SignUp from "@pages/Auth/sign-Up";
import Login from "@pages/Auth/login";
import PhoneValidation from "@pages/Auth/phone";
import Dashboard from "@pages/Dashboard";
import ResetPassword from "@pages/Auth/reset-password/_partials/InputText";
import ForgotPasswordCOm from "@pages/Auth/forgot-password";

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
      <Route path="/signin" element={<Login />} />
      <Route path="/otp" element={<PhoneValidation />} />
      <Route path="/forgot-password" element={<ForgotPasswordCOm />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;

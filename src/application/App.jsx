import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ThemeToggler from "./components/ThemeToggler";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import ProfilePage from "../pages/ProfilePage";
import LoginPage from "../pages/LoginPage";
import LandingPage from "../pages/LandingPage";

import Header from "../components/Header";
import PrivateRoutes from "../components/PrivateRoutes";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route element={<PrivateRoutes />}>
            <Route exact path="/home" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

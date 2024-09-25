import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import ProfilePage from "../pages/ProfilePage";
import LoginPage from "../pages/LoginPage";
import LandingPage from "../pages/LandingPage";
import Header from "../components/Header/Header";
import PrivateRoutes from "../components/PrivateRoutes";
import EmptyPage from "../pages/EmptyPage";
import VerifyAuth from "../components/VerifyAuth";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route element={<PrivateRoutes />}>
            <Route exact path="/home" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
          <Route path="/home/product/:id" element={<ProductPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/*" element={<EmptyPage />} />
        </Routes>
        <VerifyAuth />
      </BrowserRouter>
    </>
  );
}

export default App;

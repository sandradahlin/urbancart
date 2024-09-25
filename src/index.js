import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./application/App";
import { AuthProvider } from "./context/AuthProvider/AuthProvider";
import { ThemeProvider } from "./context/ThemeProvider/ThemeProvider";
import { ProductProvider } from "./context/ProductProvider/ProductProvider";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <AuthProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </AuthProvider>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

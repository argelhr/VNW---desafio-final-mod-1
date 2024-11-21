import React from "react";
import AppRoutes from "./routes/AppRoutes";
import "./globalStyles.scss";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <AppRoutes />
      <Toaster />
    </>
  );
}

export default App;

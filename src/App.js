import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/UI/Navbar/Navbar";
import "./styles/NullStyle.css";
import "./styles/app.css";
import { AuthContext } from "./context/context";

function App() {
  const [isAuth, setisAuth] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setisAuth(true);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setisAuth,
      }}
    >
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;

import React, { useContext } from "react";
import Input from "../components/UI/input/Input";
import Button from "../components/UI/button/Button";
import { AuthContext } from "../context/context";

function Login() {
  const { setisAuth } = useContext(AuthContext);
  const login = event => {
    event.preventDefault();
    setisAuth(true);
  };
  return (
    <div>
      <h1>Страница для логина</h1>
      <form action="" onSubmit={login}>
        <Input type="text" placeholder="введите логин" />
        <Input type="password" placeholder="введите пароль" />
        <Button>Войти</Button>
      </form>
    </div>
  );
}

export default Login;

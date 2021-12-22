import { createContext, useContext, useState } from "react";
import jwt from "jsonwebtoken";
import axios from "axios";
import Router from "next/router";
const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const tokenUrl = baseUrl + "/api/token/";

const AuthContext = createContext();

export function useAuth(props) {
  const auth = useContext(AuthContext);
  if (!auth) throw new Error("You forgot AuthProvider!");
  return auth;
}

export function AuthProvider(props) {
  const [state, setState] = useState({
    tokens: null,
    user: null,
    login,
    logout,
  });

 async function login(email, password,changeState) {
    try {
      const response = await axios.post(tokenUrl, { email, password });
      const decodedAccess = jwt.decode(response.data.access);
      const newState = {
        tokens: response.data,
        user: {
          email: decodedAccess.email,
          password: decodedAccess.password,
          id: decodedAccess.user_id
        },
      };
      changeState(1);
      localStorage.setItem("userData", JSON.stringify(newState))
      setState((prevState) => ({ ...prevState, ...newState }));
    } catch (err) {
      console.log("your not authenticated");
      changeState((state) => state + 2);
      return false;
    }
  }

  function logout() {
    const newState = {
      tokens: null,
      user: null,
    };
    setState((prevState) => ({ ...prevState, ...newState }));
  }

  return (
    <>

    <AuthContext.Provider value={state}>{props.children}</AuthContext.Provider>
    </>
  );
}

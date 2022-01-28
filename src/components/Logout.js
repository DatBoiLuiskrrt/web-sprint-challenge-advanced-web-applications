import axios from "axios";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";

const Logout = () => {
  const { push } = useHistory();

  useEffect(() => {
    axiosWithAuth()
      .post("/logout")
      .then((resp) => {
        localStorage.removeItem("authToken");
        push("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return <div></div>;
};

export default Logout;

// Task List
// 1. On mount, execute a http request to the logout endpoint.
// 2. On a successful request, remove the token from localStorage and redirect to the login page.

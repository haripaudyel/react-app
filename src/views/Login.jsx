import { useRef } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios-client";

export default function Login() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const onSubmit = (ev) => {
    ev.preventDefault();
    const payload = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    }
    axiosClient
      .post("/login", payload)
      .then((response) => {
        //set Token

        //Set User
        
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(payload);
  };

  return (
    <div className="login-signup-form animated fadeInDown">
      <div className="form">
        <form onSubmit={onSubmit}>
          <h1 className="title">Login into your account</h1>
          <input ref={usernameRef} type="text" placeholder="Username" />
          <input ref={passwordRef} type="password" placeholder="Password" />
          <button className="btn btn-block">Login</button>
          <p className="message">
            Not Register? <Link to="/signup">Create an account</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

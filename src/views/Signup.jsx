import { useRef } from "react";
import axiosClient from "../axios-client.js";
import { Link } from "react-router-dom";

export default function Signup() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const onSubmit = (ev) => {
    ev.preventDefault();
    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      confirm_password: confirmPasswordRef.current.value,
    };
    axiosClient
      .post("/login", payload)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    console.table(payload);
  };

  return (
    <div className="login-signup-form animated fadeInDown">
      <div className="form">
        <form onSubmit={onSubmit}>
          <h1 className="title">Create your account</h1>
          <input ref={nameRef} type="text" placeholder="Full Name" />
          <input ref={emailRef} type="email" placeholder="Email Address" />
          <input ref={passwordRef} type="password" placeholder="Password" />
          <input ref={confirmPasswordRef} type="password" placeholder="Confirm Password" />
          <button className="btn btn-block">Signup</button>
          <p className="message">
            Already Registered? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

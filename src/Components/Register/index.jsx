import React, { useState } from "react";
import "./style.css";
import image1 from "./images.png";

const Register = () => {
  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleForm = (e) => {
    e.preventDefault();
    console.log("state", registerForm);
  };

  return (
    <div>
      <div class="wrapper fadeInDown">
        <div id="formContent">
          <div class="fadeIn first">
            <img
              width={50}
              height={120}
              src={image1}
              id="icon"
              alt="User Icon"
            />
          </div>

          <form onSubmit={handleForm}>
            <input
              type="text"
              id="name"
              class="fadeIn second"
              name="name"
              value={registerForm.name}
              onChange={(event) => {
                setRegisterForm({ ...registerForm, name: event.target.value });
              }}
              placeholder="Name"
            />

            <input
              type="text"
              id="email"
              class="fadeIn second"
              name="email"
              value={registerForm.email}
              onChange={(event) => {
                setRegisterForm({
                  ...registerForm,
                  email: event.target.value,
                });
              }}
              placeholder="Email"
            />
            <input
              type="text"
              id="password"
              class="fadeIn third"
              name="Register"
              value={registerForm.password}
              onChange={(event) => {
                setRegisterForm({
                  ...registerForm,
                  password: event.target.value,
                });
              }}
              placeholder="Password"
            />
            <input
              type="text"
              id="confirmPassword"
              class="fadeIn third"
              name="Register"
              value={registerForm.confirmPassword}
              onChange={(event) => {
                setRegisterForm({
                  ...registerForm,
                  confirmPassword: event.target.value,
                });
              }}
              placeholder="Confirm Password"
            />
            <input type="submit" class="fadeIn fourth" value="Register" />
          </form>

          <div id="formFooter">
            <a class="underlineHover" href="/#">
              I have and Account.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

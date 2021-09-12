import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register, login } from "../../JS/actions/action";

import "./Login.css";

const Login = ({ history }) => {
  const [confirm, setConfirm] = useState("");

  const errors = useSelector((state) => state.userReducer.errors);

  const dispatch = useDispatch();

  const handelChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const [user, setUser] = useState({ name: "", email: "", password: "" });

  return (
    <div className="Login">
      <div className="row">
        <div className="col-md-6 mx-auto p-0">
          <div className="card">
            <div className="login-box">
              <div className="login-snip">
                {" "}
                <input
                  id="tab-1"
                  type="radio"
                  name="tab"
                  className="sign-in"
                  defaultChecked
                />
                <label htmlFor="tab-1" className="tab">
                  Login
                </label>{" "}
                <input id="tab-2" type="radio" name="tab" className="sign-up" />
                <label htmlFor="tab-2" className="tab">
                  Sign Up
                </label>
                <div className="login-space">
                  <div className="login">
                    {/* errors */}
                    {errors.map((error, i) => (
                      <h6 key={i} style={{ color: "red" }}>
                        {error.msg}
                      </h6>
                    ))}

                    <div className="group">
                      {" "}
                      <label htmlFor="user" className="label">
                        User email
                      </label>{" "}
                      <input
                        id="user"
                        type="text"
                        className="input"
                        placeholder="Enter your email"
                        name="email"
                        value={user.email}
                        onChange={handelChange}
                      />{" "}
                    </div>
                    <div className="group">
                      {" "}
                      <label htmlFor="pass" className="label">
                        Password
                      </label>{" "}
                      <input
                        id="pass"
                        type="password"
                        className="input"
                        data-type="password"
                        placeholder="Enter your password"
                        name="password"
                        value={user.password}
                        onChange={handelChange}
                      />{" "}
                    </div>
                    <div className="group">
                      {" "}
                      <input
                        id="check"
                        type="checkbox"
                        className="check"
                        defaultChecked
                      />{" "}
                      <label htmlFor="check">
                        <span className="icon" /> Keep me Signed in
                      </label>{" "}
                    </div>
                    <div className="group">
                      {" "}
                      <input
                        type="submit"
                        className="button"
                        defaultValue="Sign In"
                        onClick={() => dispatch(() => login(user, history))}
                      />{" "}
                    </div>
                    <div className="hr" />
                    {/* <div className="foot">
                    {" "}
                    <a href="#">Forgot Password?</a>{" "}
                  </div> */}
                  </div>
                  <div className="sign-up-form">
                    <div className="group">
                      {/* errors */}
                      {errors.map((error, i) => (
                        <h6 key={i} style={{ color: "red" }}>
                          {error.msg}
                        </h6>
                      ))}{" "}
                      <label htmlFor="user" className="label">
                        Username
                      </label>{" "}
                      <input
                        type="text"
                        className="input"
                        placeholder="Create your Username"
                        name="name"
                        value={user.name}
                        onChange={handelChange}
                      />{" "}
                    </div>
                    <div className="group">
                      {" "}
                      <label htmlFor="pass" className="label">
                        Password
                      </label>{" "}
                      <input
                        type="password"
                        className="input"
                        data-type="password"
                        placeholder="Create your password"
                        name="password"
                        value={user.password}
                        onChange={handelChange}
                      />{" "}
                    </div>
                    <div className="group">
                      {" "}
                      <label htmlFor="pass" className="label">
                        Repeat Password
                      </label>{" "}
                      <input
                        type="password"
                        className="input"
                        data-type="password"
                        placeholder="Repeat your password"
                        name="repeat"
                        onChange={(e) => setConfirm(e.target.value)}
                      />{" "}
                    </div>
                    <div className="group">
                      {" "}
                      <label htmlFor="pass" className="label">
                        Email Address
                      </label>{" "}
                      <input
                        type="text"
                        className="input"
                        placeholder="Enter your email address"
                        name="email"
                        value={user.email}
                        onChange={handelChange}
                      />{" "}
                    </div>
                    <div className="group">
                      {" "}
                      <button
                        type="submit"
                        className="button"
                        defaultValue="Sign Up"
                        onClick={() => {
                          confirm && dispatch(() => register(user, history));
                        }}
                      >
                        Signe in
                      </button>{" "}
                    </div>
                    <div className="hr" />
                    <div className="foot">
                      {" "}
                      <label htmlFor="tab-1">Already Member?</label>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import NavBar from "../../Components/NavBar/NavBar";
import { register, login, getBannedUsers } from "../../JS/actions/action";
import Alert from "../../Components/Alert/Alert";
=======
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register, login } from "../../JS/actions/action";
>>>>>>> 0e2a531d39ae815637780e2befef972ed99cfec9

import "./Login.css";

const Login = ({ history }) => {
<<<<<<< HEAD
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBannedUsers());
  }, [dispatch]);

  const errors = useSelector((state) => state.userReducer.errors);
  const blackList = useSelector((state) => state.userReducer.blackList);

  const [confirm, setConfirm] = useState("");
  const [pass, setPass] = useState(false);
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    imgLink: "https://i.stack.imgur.com/YaL3s.jpg",
  });
=======
  const [confirm, setConfirm] = useState("");

  const errors = useSelector((state) => state.userReducer.errors);

  const dispatch = useDispatch();
>>>>>>> 0e2a531d39ae815637780e2befef972ed99cfec9

  const handelChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

<<<<<<< HEAD
  return (
    <div>
      <NavBar />
      {show && <Alert setShow={setShow} />}

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
                  <input
                    id="tab-2"
                    type="radio"
                    name="tab"
                    className="sign-up"
                  />
                  <label htmlFor="tab-2" className="tab">
                    Sign Up
                  </label>
                  <div className="login-space">
                    <div className="login">
                      
                      {errors &&
                        errors.map(
                          (error, i) =>
                            error.msg === "Bad credentials !!!" && (
                              <h5 key={i} style={{ color: "red" }}>
                                {error.msg}
                              </h5>
                            )
                        )}

                      <div className="group">
                        {" "}
                        <label htmlFor="user" className="label">
                          User email
                          {errors &&
                            errors.map(
                              (error, i) =>
                                error.msg === "Enter a valid email !" && (
                                  <h5 key={i} style={{ color: "red" }}>
                                    {error.msg}
                                  </h5>
                                )
                            )}
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
                          {errors &&
                            errors.map(
                              (error, i) =>
                                error.msg === "Enter a valid password !" && (
                                  <h5 key={i} style={{ color: "red" }}>
                                    {error.msg}
                                  </h5>
                                )
                            )}
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
                        <button
                          className="button"
                          type="submit"
                          defaultValue="Sign In"
                          onClick={() =>
                            blackList.find(
                              (banned) => banned.email === user.email
                            )
                              ? setShow(true)
                              : user.email !== "admin@mayway.tn" && dispatch(login(user, history))
                          }
                        >
                          LOGIN
                        </button>
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
                        <label htmlFor="user" className="label">
                          Username
                          {errors &&
                            errors.map(
                              (error, i) =>
                                error.msg === "Name is required !" && (
                                  <h5 key={i} style={{ color: "red" }}>
                                    {error.msg}
                                  </h5>
                                )
                            )}
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
                          {errors &&
                            errors.map(
                              (error, i) =>
                                error.msg ===
                                  "Password must contain at least 6 characters !" && (
                                  <h5 key={i} style={{ color: "red" }}>
                                    {error.msg}
                                  </h5>
                                )
                            )}
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
                          {pass && (
                            <h5 style={{ color: "red" }}>Repeat Password</h5>
                          )}
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
                          {errors &&
                            errors.map(
                              (error, i) =>
                                error.msg === "Enter a valid email !" && (
                                  <h5 key={i} style={{ color: "red" }}>
                                    {error.msg}
                                  </h5>
                                )
                            )}
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
                            confirm === user.password
                              ? dispatch(register(user, history))
                              : setPass(true);
                          }}
                        >
                          Signe up
                        </button>{" "}
                      </div>
                      <div className="hr" />
                      <div className="foot">
                        {" "}
                        <label htmlFor="tab-1">Already Member?</label>{" "}
                      </div>
=======
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
>>>>>>> 0e2a531d39ae815637780e2befef972ed99cfec9
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

import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { logout } from "../../JS/actions/action";

import "./NavBar.css";

const NavBar = () => {
  // const token = localStorage.getItem("token");
  const dispatch = useDispatch()
  const isAuth = useSelector(state => state.userReducer.isAuth)

  return (
    <nav class="navbar">
      <ul class="Nave">
        <li class="left">
          <a href="https://www.docplanner.com/">
            <img class="nav-img" src="../../assets/Img/Logo.png" alt="LOGO" />
          </a>
        </li>
        <div class="right">
          <li class="">
            <a href="/">Home</a>
          </li>
          <li>
            <a href="https://www.docplanner.com/career">Transports</a>
          </li>
          {isAuth ? (
            <li>
              <div class="dropdown">
                
                  <button class="dropbtn">My account</button>
                
                <div class="dropdown-content">
                  <ul>
                    <li>
                      <a href="/profile">Profile</a>
                    </li>
                    <li>
                      <button onClick={()=>dispatch(logout())}>Logout</button>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          ) : (
            <li>
              <a href="/login">Login</a>
            </li>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;

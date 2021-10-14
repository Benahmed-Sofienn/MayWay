import React from "react";
<<<<<<< HEAD

import { Redirect, Route } from "react-router";


const PrivateRoute = ({ component: Component, ...rest }) => {

  
const token = localStorage.getItem("token");
const email = localStorage.getItem("email")

if (!token) {  return <Redirect to="/login" />;   }

else if ({...rest}.path === "/profile") { return <Route component={Component} {...rest} />}

else if (email === "admin@mayway.tn" ) { return <Route component={Component} {...rest} /> }

else { return <Redirect to="/*" />; }







// if ({ ...rest }.path === "/profile") {
//     if (!token) {
//       return <Redirect to="/login" />;
//     }

//     return <Route component={Component} {...rest} />;
//   }
//    else if (false) {
//     return <Redirect to="/*" />;
//   }
// console.log({...rest}.email, email)
//   return <Route component={Component} {...rest} />;}
// ;

}
  
=======
import { Redirect, Route } from "react-router";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Redirect to="/login" />;
  }

  return <Route component={Component} {...rest} />;
};
>>>>>>> 0e2a531d39ae815637780e2befef972ed99cfec9

export default PrivateRoute;

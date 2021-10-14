import { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
<<<<<<< HEAD
import { useDispatch,useSelector } from "react-redux";

import Footer from "./Components/Footer/Footer";
import Errors from "./Pages/Errors/Errors";
import LandPage from "./Pages/LandPage/LandPage";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile/Profile";
import Admin from "./Pages/Admin/Admin";
import Main from "./Pages/Main/Main";
import PrivateRoute from "./router/PrivateRoute";
import TransportList from "./Pages/TransportsList/TransportList";
import AddEditeTransport from "./Pages/AddEditeTransport/AddEditeTransport";
import Clients from "./Pages/Clients/Clients";

import { currentUser } from "./JS/actions/action";



import "./App.css";
import { getTransports } from "./JS/actions/transport";



function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(currentUser());
    dispatch(getTransports())
  }, [dispatch]);
  
  const user = useSelector((state) => state.userReducer.user);
  let isAdmin= user.email === "admin@mayway.tn"
 

  console.log(isAdmin,"app.js")
  return (
    <div className="App">
     
     
=======
import { useDispatch } from "react-redux";

import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import Errors from "./Pages/Errors/Errors";
import LandPage from "./Pages/LandPage/LandPage";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile/Profile";
import Admin from "./Pages/Admin/Admin";
import Main from "./Pages/Main/Main";
import { currentUser } from "./JS/actions/action";
import PrivateRoute from "./router/PrivateRoute";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <div className="App">
      <NavBar />
>>>>>>> 0e2a531d39ae815637780e2befef972ed99cfec9
      <Switch>
        <Route exact path="/" component={LandPage} />
        <Route path="/login" component={Login} />
        <Route path="/admin" component={Admin} />
        <PrivateRoute path="/profile" component={Profile} />
        <Route path="/track" component={Main} />
<<<<<<< HEAD
        <Route path="/addTransport" component={AddEditeTransport} />
        <Route path="/editeTransport" component={AddEditeTransport} />

        <PrivateRoute path="/clients" component={Clients}  />
        
        <PrivateRoute path="/transports" component={TransportList} />
=======
>>>>>>> 0e2a531d39ae815637780e2befef972ed99cfec9

        <Route path="/*" component={Errors} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;

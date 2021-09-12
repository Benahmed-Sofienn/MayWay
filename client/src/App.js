import { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
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
      <Switch>
        <Route exact path="/" component={LandPage} />
        <Route path="/login" component={Login} />
        <Route path="/admin" component={Admin} />
        <PrivateRoute path="/profile" component={Profile} />
        <Route path="/track" component={Main} />

        <Route path="/*" component={Errors} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;

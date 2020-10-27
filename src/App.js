import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from './components/pages/Home'
import AboutUs from './components/pages/AboutUs'
import Highlights from "./components/pages/Highlights";
import Places from "./components/pages/Places";
import Tendencies from "./components/pages/Tendencies";
import Experiences from "./components/pages/Experiences";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about-us" exact component={AboutUs} />
          <Route path="/highlights" exact component={Highlights} />
          <Route path="/places" exact component={Places} />
          <Route path="/experiences" exact component={Experiences} />
          <Route path="/tendencies" exact component={Tendencies} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

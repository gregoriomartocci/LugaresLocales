import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Highlights from "./pages/Highlights";
import Places from "./pages/Places";
import Tendencies from "./pages/Tendencies";
import Experiences from "./pages/Experiences";
import SinglePost from "./pages/SinglePost";
import ContactArea from "./pages/ContactArea";
import NavItem from "./components/NavItem";
import SearchIcon from "@material-ui/icons/Search";
import DropdownMenu from "./components/DropdownMenu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import DropdownSearch from "./components/DropdownSearch";

function App() {
  return (
    <>
      <Router>
        <Navbar>
          <NavItem icon={<SearchIcon />}>
            <DropdownSearch />
          </NavItem>

          <NavItem icon={<AccountCircleIcon />}>
            <DropdownMenu />
          </NavItem>
        </Navbar>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/single-post" exact component={SinglePost} />
          <Route path="/about-us" exact component={AboutUs} />
          <Route path="/highlights" exact component={Highlights} />
          <Route path="/places" exact component={Places} />
          <Route path="/experiences" exact component={Experiences} />
          <Route path="/tendencies" exact component={Tendencies} />
          <Route path="/contact-area" exact component={ContactArea} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

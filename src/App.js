import React, { Component } from "react";
// import logo from "./logo.svg";
import Movies from "./components/movies";
import Customers from "./components/customers";
import NotFound from "./components/notFound";
import Rentals from "./components/rentals";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import LoginForm from "./components/loginForm";
class App extends Component {
  render() {
    return (
      <main className="container">
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Mezani Vid</Link>
                </li>
                <li>
                  <Link to="/movies">Movies</Link>
                </li>
                <li>
                  <Link to="/customers">Customers</Link>
                </li>
                <li>
                  <Link to="/rentals">Rentals</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </nav>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/login" component={LoginForm}></Route>
              <Route path="/movies" component={Movies}></Route>

              <Route path="/not-found">
                <NotFound />
              </Route>

              <Route path="/customers">
                <Customers />
              </Route>
              <Route path="/rentals">
                <Rentals />
              </Route>
              <Redirect from="/" exact to="/movies" />
              <Redirect to="/not-found" />
            </Switch>
          </div>
        </Router>
      </main>
    );
  }
}

// this ones below emulate compnents and can therefore be imported

export default App;

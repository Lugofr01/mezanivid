import React, { Component } from "react";
// import logo from "./logo.svg";
import Movies from "./components/movies";
import Customers from "./components/customers";
import NotFound from "./components/notFound";
import Rentals from "./components/rentals";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <main className="container">
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/users">Users</Link>
                </li>
              </ul>
            </nav>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
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
            </Switch>
          </div>
        </Router>
      </main>
    );
  }
}

// this ones below emulate compnents and can therefore be imported

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;

import React, { Component } from "react";
// import logo from "./logo.svg";
import Movies from "./components/movies";
import "./App.css";

class App extends Component {
  render() {
    return (
      <main className="container">
        <Movies />
      </main>
    );
  }
}

export default App;

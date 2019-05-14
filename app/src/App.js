import React, { Component } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard.js";
import Display from "./components/Display.js";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Web18 Web Testing II Challenge</h1>
        <Dashboard />
      </div>
    );
  }
}

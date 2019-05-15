import React, { Component } from "react";
import Display from "./Display.js";

export default class Dashboard extends Component {
  state = {
    plays: [
      { id: 1, name: "Strike", status: 0 },
      { id: 2, name: "Ball", status: 0 },
      { id: 3, name: "Foul", status: 0 },
      { id: 4, name: "Hit", status: 0 }
    ],
    status: 0,
    shouldReset: false
  };
  render() {
    return (
      <div>
        <div>
          <button id="Strike" onClick={this.clickSubmit}>
            Strike
          </button>
          <button id="Ball" onClick={this.clickSubmit}>
            Ball
          </button>
          <button id="Hit" onClick={this.clickSubmit}>
            Hit
          </button>
          <button id="Foul" onClick={this.clickSubmit}>
            Foul
          </button>
        </div>
        {/* {this.state.plays.map(play => {
          return <Display key={play.id} play={play} />;
        })} */}

        <Display plays={this.state.plays} />
      </div>
    );
  }

  clickSubmit = e => {
    let play = this.state.plays.find(p => p.name === e.target.id);

    if (
      (play.name === "Ball" && play.status === 3) ||
      (play.name === "Strike" && play.status === 2)
    ) {
      this.setState({
        plays: [
          ...this.state.plays,
          (this.state.plays.find(p => p.name === "Ball").status = 0),
          (this.state.plays.find(p => p.name === "Strike").status = 0),
          (this.state.plays.find(p => p.name === "Foul").status = 0)
        ]
      });
      return;
    }

    if (play.name === "Hit" && play.status >= 0) {
      this.setState({
        plays: [
          ...this.state.plays,
          (this.state.plays.find(p => p.name === "Ball").status = 0),
          (this.state.plays.find(p => p.name === "Strike").status = 0),
          (this.state.plays.find(p => p.name === "Foul").status = 0),
          this.state.plays.find(p => p.name === "Hit").status++
        ]
      });
      return;
    }

    if (play.name === "Foul") {
      const numStrikes = this.state.plays.find(p => p.name === "Strike").status;
      if (numStrikes < 2) {
        this.setState({
          plays: [
            ...this.state.plays,
            this.state.plays.find(p => p.name === "Strike").status++
          ]
        });
        return;
      }
    }

    this.setState({
      plays: [
        ...this.state.plays,
        this.state.plays.find(p => p.name === e.target.id).status++
      ]
    });
  };
}

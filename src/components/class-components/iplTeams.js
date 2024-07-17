import React, { Component } from "react";
import CustomProgressBar from "../boostrap/progress-bar";

export default class IplTeams extends Component {
  state = {
    iplTeams: [
      {
        id: 1,
        name: "SRH",
        totalWinCount: 2,
      },
      {
        id: 2,
        name: "CSK",
        totalWinCount: 5,
      },
      {
        id: 3,
        name: "RCB",
        totalWinCount: 0,
      },
    ],
  };

  calculatePercentage = (input) => {
    const base = 7;
    let percentage = (input / base) * 100;

    return percentage;
  };

  handleClick = (targetId) => {
    const newState = this.iplHandler(this.state.iplTeams, targetId);
    this.setState({
      iplTeams: newState,
    });
  };

  iplHandler = (iplTeams, targetTeamId) => {
    const updatedIplTeam = iplTeams.map((each) => {
      if (each.id === targetTeamId) {
        return { ...each, totalWinCount: each.totalWinCount + 1 };
      } else {
        return each;
      }
    });

    return updatedIplTeam;
  };
  render() {
    return (
      <div>
        {this.state.iplTeams.map((each) => {
          return (
            <>
              <h3>Team Name {each.name}</h3>
              <button onClick={() => this.handleClick(each.id)}>
                Click to increase win count
              </button>
              <CustomProgressBar
                scale={this.calculatePercentage(each.totalWinCount)}
              />
            </>
          );
        })}
      </div>
    );
  }
}

import React from "react";
import { render, fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import Dashboard from "./Dashboard.js";
import Display from "./Display.js";
import "jest-dom/extend-expect";

describe("<Dashboard />", () => {
  it("renders without crashing", () => {
    render(<Dashboard />);
  });

  it('should render "no players available" if not players provided', () => {
    const { getByText } = render(<Display />);

    getByText(/no plays available/i);
  });

  it("should render the provided list of players", () => {
    const plays = [
      { id: 1, name: "Strike", status: 0 },
      { id: 2, name: "Ball", status: 0 },
      { id: 3, name: "Foul", status: 0 },
      { id: 4, name: "Hit", status: 0 }
    ];

    // this is a good place to use the data-testid property
    const { getAllByTestId } = render(<Display plays={plays} />);

    const playerNames = getAllByTestId("play-name").map(n => n.textContent);
    const names = plays.map(play => play.name);

    expect(playerNames).toHaveLength(plays.length);
    expect(playerNames).toEqual(names);
  });

  it("should great the team", () => {
    const { getAllByText } = render(<Dashboard />);

    const { getByText } = render(<Display />);

    getByText(/no plays available/i);

    const plays = [
      { id: 1, name: "Strike", status: 0 },
      { id: 2, name: "Ball", status: 0 },
      { id: 3, name: "Foul", status: 0 },
      { id: 4, name: "Hit", status: 0 }
    ];

    const { getAllByTestId, getByTestId } = render(<Display plays={plays} />);

    const playerStatus = getAllByTestId("play-status").map(n => n.textContent);
    const strikeText = getByTestId("Strike");
    fireEvent.click(strikeText);
    expect(playerStatus[1]).toBe("0");
  });

  it("should show greeting", () => {
    const { getAllByText, getByTestId, getByText } = render(<Dashboard />);
    const testText = getAllByText(/test/i);
    console.log("Test Text", testText);
    // CANNOT FIRE EVENTS ON AN ARRAY
    testText.forEach(t => {
      fireEvent.click(t);
    });
    // fireEvent.change(getAllByText(/test/i));
    expect(getByTestId("greeting")).toHaveTextContent("Hello Web 18");
  });
});

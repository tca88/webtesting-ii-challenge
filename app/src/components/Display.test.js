import React from "react";
import { render, fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import Display from "./Display.js";

describe("<Display />", () => {
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
});

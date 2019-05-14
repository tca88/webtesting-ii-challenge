import React from "react";
import { render, fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";

import Display from "./Display.js";

describe("<Dashboard />", () => {
  it("should render the provided list of plays", () => {
    const plays = [
      { id: 1, name: "Strike", status: 0 },
      { id: 2, name: "Ball", status: 0 },
      { id: 3, name: "Foul", status: 0 },
      { id: 4, name: "Hit", status: 0 }
    ];

    // this is a good place to use the data-testid property
    const { getAllByTestId } = render(<Display plays={plays} />);

    const playNames = getAllByTestId("play-name").map(n => n.textContent);
    const names = plays.map(play => play.name);

    const playStatus = getAllByTestId("play-status").map(n => n.textContent);
    const status = plays.map(play => play.status);

    expect(playNames).toEqual(names);
    expect(playStatus).toEqual(status);
  });
});

import React from "react";

export default function Display({ play }) {
  return (
    <div>
      <div data-testid="play-name">
        <p>{play.name}</p>
      </div>
      <div data-testid="play-status">
        <p>{play.status}</p>
      </div>
    </div>
  );
}

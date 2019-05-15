import React from "react";

export default function Display(props) {
  const { plays = [] } = props;

  if (!plays || !plays.length > 0) {
    return <h3>No Plays Available</h3>;
  }
  return (
    <div>
      {plays.map(play => (
        <div key={play.id}>
          <div data-testid="play-name">
            <p>{play.name}</p>
          </div>
          <div data-testid="play-status">
            <p>{play.status}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

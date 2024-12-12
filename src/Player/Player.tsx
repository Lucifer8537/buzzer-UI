import "./Player.css";

export function Player() {
  return (
    <>
      <div className="player-container">
        <div className="player-details-container">
          <div className="player-title">PLAYER</div>
          <div className="player-form">
            <div className="title">OTP</div>
            <input type="text" />
            <div className="title">Name</div>
            <input type="text" />
          </div>
          <button className="join-btn">JOIN</button>
        </div>
      </div>
    </>
  );
}

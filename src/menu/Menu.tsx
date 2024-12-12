import "./Menu.css";
import { Link } from "react-router-dom";
import * as label from "../shared/label";

export function Menu() {
  const Label = label.LABEL;
  return (
    <>
      <div className="main-container">
        <div className="menu-container">
          <div className="menu-title">{Label.SELECT_A_ROLE}</div>
          <div className="btn-container">
            <Link to="/admin">
              <button className="admin-btn btn"> {Label.ADMIN} </button>
            </Link>
            <button className="player-btn btn"> {Label.PLAYER} </button>
          </div>
        </div>
      </div>
    </>
  );
}

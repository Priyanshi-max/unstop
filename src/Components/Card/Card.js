import React from "react";
import job from "../../Assets/job.png";
import calendar from "../../Assets/calendar.png";
import dot from "../../Assets/3 dot.png";
import share from "../../Assets/share.png"
import "./Card.css";
const Card = () => {
  return (
    <div className="card">
      <div className="logo">
        <div className="l_logo">
          <img src={job} alt="job" />
        </div>
        <div className="r_logo">
          <img src={dot} alt="3_dot" />
        </div>
      </div>
      <div className="job">
        <div className="top">
          <p
            style={{
              fontFamily: "Inter",
              fontSize: "18px",
              fontWeight: "500",
              color: "#1C4980",
            }}
          >
            Math Assesment
          </p>
        </div>
        <div className="bottom">
          <div className="bottom_l">
            <p
              style={{
                fontFamily: "Inter",
                fontSize: "14px",
                fontWeight: "600",
                color: "#1C4980",
              }}
            >
              Job
            </p>
          </div>
          <div className="border"></div>
          <div className="bottom_r">
            <img
              src={calendar}
              alt="calendar"
              style={{ marginRight: "4px", marginLeft: "5px" }}
            />
            <span
              style={{
                fontFamily: "Inter",
                fontSize: "12px",
                fontWeight: "600",
                color: "#8DA4BF",
              }}
            >
              20 Apr 2023
            </span>
          </div>
        </div>
        <div className="last">
          <div className="cardLeft">
            <div className="lastContent">
              <p style={{ margin: 0 ,fontFamily:"Inter", fontWeight:"500", fontSize:"12px",color:"#1C4980" }}>00</p>
              <span style={{ margin: 0 ,fontFamily:"Inter", fontWeight:"500", fontSize:"12px",color:"#1C4980" }}>Duration</span>
            </div>
            <div className="lastContent">
              <p style={{ margin: 0 ,fontFamily:"Inter", fontWeight:"500", fontSize:"12px",color:"#1C4980" }}>00</p>
              <span style={{ margin: 0 ,fontFamily:"Inter", fontWeight:"500", fontSize:"12px",color:"#1C4980" }}>Questions</span>
            </div>
          </div>
          <div className="cardRight">
              <button className="shareBtn">
                <img src={share} alt="share"/>
                Share
              </button>
              <div className="profileIcon">
                L
              </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Card;

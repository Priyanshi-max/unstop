import React from "react";
import "./Overview.css";
import Assesment from "../Assesment/Assesment";
import total from "../../Assets/total.png";
import candidate from "../../Assets/candidate.png";
import purpose from "../../Assets/purpose.png";
import source from "../../Assets/source.png";
const Overview = () => {
  return (

   
    <div className="overview">
      <p id="p">Assesment Overview</p>
      <div className="container">
        <div className="assesment">
          <div>
            <div className="total">
              <p>Total Assesment</p>
              <div>
                <img src={total} alt="total assesments" />
                <span>34</span>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="candidate">
            <p
              style={{
                fontFamily: "Inter",
                fontWeight: "600",
                color: "#1c4980",
              }}
            >
              Candidates
            </p>
            <div className="candidateContent">
              <img src={candidate} alt="Candidates" />
              <div className="content">
                <div
                  style={{
                    marginLeft: "-5px",
                    display: "flex",
                    alignItems: "flex-end",
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      color: "#1C4980",
                      fontSize: "20px",
                      fontFamily: "Inter",
                    }}
                  >
                    11,145
                  </p>
                  <span>+89</span>
                </div>
                <div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "12px",
                      fontWeight: "500",
                      fontFamily: "Inter",
                      color: "#1c4980",
                    }}
                  >
                    Total Candidates
                  </p>
                </div>
              </div>
              <div className="border"></div>
              <div className="candidateRight">
                <div style={{ display: "flex", alignItems: "flex-end" }}>
                  <p
                    style={{
                      margin: 0,
                      color: "#1C4980",
                      fontSize: "20px",
                      fontFamily: "Inter",
                    }}
                  >
                    11,145
                  </p>
                  <span>+89</span>
                </div>
                <div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "12px",
                      fontWeight: "500",
                      fontFamily: "Inter",
                      color: "#1c4980",
                    }}
                  >
                    Who attempted
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="candidate">
            <p
              style={{
                fontFamily: "Inter",
                fontWeight: "600",
                color: "#1c4980",
              }}
            >
              Candidates Source
            </p>
            <div className="candidateContent">
              <img src={source} alt="Candidates" />
              <div className="content">
                <div
                  style={{
                    marginLeft: "-5px",
                    display: "flex",
                    alignItems: "flex-end",
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      color: "#1C4980",
                      fontSize: "20px",
                      fontFamily: "Inter",
                    }}
                  >
                    11,000
                  </p>
                  <span>+89</span>
                </div>
                <div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "12px",
                      fontWeight: "500",
                      fontFamily: "Inter",
                      color: "#1c4980",
                    }}
                  >
                    E-mail
                  </p>
                </div>
              </div>
              <div className="border"></div>
              <div className="candidateRight">
                <div style={{ display: "flex", alignItems: "flex-end" }}>
                  <p
                    style={{
                      margin: 0,
                      color: "#1C4980",
                      fontSize: "20px",
                      fontFamily: "Inter",
                    }}
                  >
                    145
                  </p>
                  <span>+89</span>
                </div>
                <div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "12px",
                      fontWeight: "500",
                      fontFamily: "Inter",
                      color: "#1c4980",
                    }}
                  >
                    Social Share
                  </p>
                </div>
              </div>
              <div className="border"></div>
              <div className="candidateRight">
                <div style={{ display: "flex", alignItems: "flex-end" }}>
                  <p
                    style={{
                      margin: 0,
                      color: "#1C4980",
                      fontSize: "20px",
                      fontFamily: "Inter",
                    }}
                  >
                    145
                  </p>
                  <span>+89</span>
                </div>
                
                <div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "12px",
                      fontWeight: "500",
                      fontFamily: "Inter",
                      color: "#1c4980",
                    }}
                  >
                    Unique Link
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div>
            
            <div className="total">
              <p>Total Purpose</p>
              <div>
                <img src={purpose} alt="total assesments" />
                <span>11</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
     
    </div>

  );
};

export default Overview;

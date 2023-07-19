import React, { useState } from "react";
import "./Assesment.css";
import Form from "./Form.js";
import Card from "../Card/Card";

const Assesment = () => {
  const [visibility, setVisibility] = useState(false);
  const [assingmentData, setAssignmentData] = useState([]);
  // const addHandler=()=>{
  //   let newData=1;
  //   setAssignmentData([newData,...assingmentData]);
  // }
  // function for form appearance
  const addHandler = () => {
    setVisibility(true);
  };
  const closeHandler = () => {
    setVisibility(false);
  };
  console.log(assingmentData);
  return (
    <div>
      <p
        style={{
          fontFamily: "Inter",
          fontWeight: "500",
          fontSize: "18px",
          color: "#1C4980",
          marginLeft: "20px",
        }}
      >
        My Assesment
      </p>
      <div className="box">
        <div className="cards">
          <div className="btn">
            {/* Button to add assignment */}
            <button className="addBtn"
              onClick={addHandler}
            >
              +
            </button>
            
          </div>
          <p
              style={{
                fontFamily: "Inter",
                fontWeight: "500",
                fontSize: "18px",
                color: "#1C4980",
                marginLeft: "1px",
              }}
            >
              New Assesment
            </p>
          <div className="details">
            <p
              style={{
                fontFamily: "Inter",
                fontWeight: "500",
                fontSize: "12px",
                color: "#1C4980",
              }}
            >
              From here you can add questions of multiple types like MCQ's ,
              subjective (text or Paragraph)!
            </p>
          </div>
        </div>
        {assingmentData.length > 0 ? (
          assingmentData.map((data) => (
            <div className="cards">
              <div className="details">
                <p
                  style={{
                    fontFamily: "Inter",
                    fontWeight: "500",
                    fontSize: "12px",
                    color: "#1C4980",
                  }}
                >
                  {data}
                </p>
              </div>
            </div>
          ))
        ) : (
          <>
          <Card/>
          <Card/></>
          
        )}
      </div>
      {visibility && <Form closeHandler={closeHandler} />}
    </div>
  );
};

export default Assesment;

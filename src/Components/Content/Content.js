import React,{useState,useEffect} from "react";
import "./Content.css";
import Overview from "../Overview/Overview";
import mobile from "../../Assets/mobile_icon.png";
import Assesment from "../Assesment/Assesment";
const Content = () => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [isMobile,setIsMobile]=useState(false);
  const handleResize=()=>{
    setIsMobile(!isMobile);
    if(isMobile){
      setScreenSize(0.5)
    }
    else{
      setScreenSize(1)
    }
  }
  return (
    <div className="content" style={{ transform: `scale(${screenSize})` }}>
      <div className="headings">
        <div className="headerLeft">
          <p id="one">Assesment</p>
          <div className="line"></div>
          <div>
            <p id="two">My Assesments</p>
          </div>
        </div>
        <button className="mobileBtn" onClick={handleResize}>
          <img src={mobile} alt="" style={{ left: "200px" }} />
        </button>
      </div>
      <Overview />
      <Assesment />
  
    </div>
  );
};

export default Content;

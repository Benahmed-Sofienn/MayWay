import React, {useEffect} from "react";
import "./InfoBox.css";

const Infobox = ({ trans, Times }) => {
  let date =  new Date(Date.now());
  useEffect(() => {
    date = new Date(Date.now());
    
  })
  let HHMM = date.toString().slice(16, 21);
  let HH = +date.toString().slice(16, 18);
  let MM = +date.toString().slice(19, 21);
  let minutes = HH * 60 + MM;

  
  let next = Times.find((el) => el > HHMM);

  let nextHH = +next.slice(0, 2);
  let nextMM = +next.slice(3, 5);
  let nextMinutes = nextHH * 60 + nextMM;

  let d = nextMinutes - minutes


let diff= d
  

  const CountDown = (a) => {
    a = a - 1;
    return a
  };
  let x = 2
useEffect(() => {
  date = new Date(Date.now());
  
})


  setInterval(()=>{ 
    CountDown(diff);

   
    }, 1000);


  
  
return (
  <div    className="InfoBox">
 
      <h3>Transport : {trans.number}</h3>
      <h4>Next departure : {next}</h4>
      <div className="otherDepature">
      <h4> other departure for today:      </h4>
      <select>
        {Times.map((el) => el > next && <option>{el}</option>)}
        </select>
      </div>
      {/* <h4>{diff}</h4> */}
    </div>
  );
};

export default Infobox;

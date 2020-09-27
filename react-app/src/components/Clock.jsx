import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

function Clock(){
        const [time, setTime] = React.useState("");
      
      function getTime(){
        let Ctime = new Date().toLocaleTimeString();
          setTime(Ctime);  
      }
      setInterval(getTime, 1000);

    return (
      <div className="animated fila">
        <Jumbotron>
            <h1  style={{fontSize: 8+"rem"}} className="text-center mt-1">{time}</h1>
            <h4 className="text-center mt-5">“The most important property of a program is whether it accomplishes the intention of its user.” </h4>
            <p style={{marginLeft: 75+"%"}}>― C.A.R. Hoare </p>
        </Jumbotron>
        </div>
    );
    
}
export default Clock;
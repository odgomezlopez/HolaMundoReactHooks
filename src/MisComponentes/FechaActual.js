import React, { useState, useEffect} from 'react';

function FechaActual(props) {
    const [fecha,setFecha] = useState(new Date().toUTCString());
    
    const tick = () => {
      setFecha(new Date().toUTCString());
    } 

    useEffect(()=>
      {
        setInterval(tick,1000)
      }
    );

    const handleClick = (e) => {
      console.log(fecha);
    }

    return (
      <div onClick={handleClick}>
        <h1>{fecha}</h1>
      </div>
    );
  }

  export default FechaActual;
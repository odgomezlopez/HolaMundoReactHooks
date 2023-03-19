//import React from 'react';
import logo from './logo.svg';
import './App.css';

import React, { useState, useRef,useEffect} from 'react';


import FechaActual from './MisComponentes/FechaActual';
import Empleados from './MisComponentes/Empleados';

function App() {
  const [empleados,setEmpleados] = useState([]);
  const nombreInputRef = useRef(null);
  const cargoInputRef = useRef(null);

  const handleAddEmpleado = () => {
    setEmpleados([...empleados,{nombre: nombreInputRef.current.value, cargo: cargoInputRef.current.value}])
  }

  return (
    <div>
      {/*<FechaActual/>*/}
      <label htmlFor="nombre">Nombre: </label><input name="nombre" type="text" ref={nombreInputRef}></input>
      <label htmlFor="cargo">Cargo: </label><input name="cargo" type="text" ref={cargoInputRef}></input>

      <button onClick={handleAddEmpleado}>Add Empleado</button>

      <Empleados users={empleados} />

    </div>
  );
}

export default App;

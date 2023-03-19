//import React from 'react';
import Empleado from './Empleado';

function Empleados(props) {
    return (
        <div>
            {props.users.map(a => (<div key={a.id}><Empleado user={a}/> </div>))}
        </div>
      );
}

export default Empleados;
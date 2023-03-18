//import React from 'react';
import EmpleadoJSON from './EmpleadoJSON';

function EmpleadosJSON(props) {
    return (
        <div>
            {props.users.map(a => (<div key={a.id}><EmpleadoJSON user={a}/> </div>))}
        </div>
      );
}

export default EmpleadosJSON;
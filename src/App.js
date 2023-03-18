//import React from 'react';
import logo from './logo.svg';
import './App.css';

//import Empleado from './MisComponentes/Empleado';
//import EmpleadoJSON from './MisComponentes/EmpleadoJSON';

import EmpleadosJSON from './MisComponentes/EmpleadosJSON';

import { Component } from 'react';
import Alert from 'react-bootstrap/Alert';

var usersJSON=[{
  nombre: "Oscar",
  cargo: "Profe",
  foto: logo
}];

class App extends Component {
  constructor(props){
    super(props);
    this.state={
    }
  }

  render(){ 
    return (
      <div>
        {/*<Empleado nombre='Ana' cargo='cego' foto={logo}/>
        <EmpleadoJSON user={userJSON}/>*/}
        <EmpleadosJSON users={usersJSON}/>

        <Alert variant="success">
            <Alert.Heading>Hey, nice to see you</Alert.Heading>
            <p>
              Aww yeah, you successfully read this important alert message. This
              example text is going to run a bit longer so that you can see how
              spacing within an alert works with this kind of content.
            </p>
            <hr />
            <p className="mb-0">
              Whenever you need to, be sure to use margin utilities to keep things
              nice and tidy.
            </p>
        </Alert>
      </div>
    );
  }
}

export default App;

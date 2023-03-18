function Empleado(props) {
    return (
      <div>
        <h1>{props.nombre}</h1>
        <h2>{props.cargo}</h2>
        <img src={props.foto} width='200' alt="foto empleado" />
      </div>
    );
  }

  export default Empleado;
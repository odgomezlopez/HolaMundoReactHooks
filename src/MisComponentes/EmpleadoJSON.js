function EmpleadoJSON(props) {
  console.log(props);

  const {user} = props;
    return (
      <div>
        <h1>{user.nombre}</h1>
        <h2>{user.cargo}</h2>
        <img src={user.foto} width='200' alt="foto empleado" />
      </div>
    );
  }

  export default EmpleadoJSON;
function Empleado(props) {
  console.log(props);

  const {user} = props;
    return (
      <div>
        <p><b><span>{user.nombre}</span></b> - <i>{user.cargo}</i></p>
        {/*<img src={user.foto} width='200' alt="foto empleado" />*/}
      </div>
    );
  }

  export default Empleado;
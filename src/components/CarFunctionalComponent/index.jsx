
function CarFunctionalComponent (props) {
  const { carName, carModel } = props;

  return <div>
    <p>Це приклад функціонального комопненту машини</p>
    <p>{carName}</p>
  </div>
}

export default CarFunctionalComponent;

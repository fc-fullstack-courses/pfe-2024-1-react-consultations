import React from 'react';
import CarClassComponent from '../CarClassComponent';
import CarShopSoldCars from '../CarShopSoldCars';

class CarShop extends React.Component {
  state = {
    cars: ['Toyota Camry 2018', 'Lanos 2005', 'Mitsubishi 2010'],
    soldCars: [],
  };

  buyCar = (carName) => {
    const { soldCars } = this.state;

    const newSoldCars = [...soldCars];

    newSoldCars.push(carName);

    this.setState({
      soldCars: newSoldCars
    });
  };

  render() {
    const { cars, soldCars } = this.state;

    const carsComponents = cars.map((carName, index) => {
      return <CarClassComponent key={carName} carName={carName} buyCar={this.buyCar} />;
    });

    return (
      <div>
        <h1>Автосалон</h1>
        <h2>Список машин</h2>
        {carsComponents}
        <CarShopSoldCars soldCarsNumber={soldCars.length} />
      </div>
    );
  }
}

export default CarShop;

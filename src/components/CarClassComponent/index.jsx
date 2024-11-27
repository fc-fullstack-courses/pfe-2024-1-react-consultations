import React from 'react';

class CarClassComponent extends React.Component {

  render() {
    const { carName } = this.props;

    return <div>
      <p>Це класовий компонент машини</p>
      <p>{carName}</p>
    </div>
  }
}

export default CarClassComponent;

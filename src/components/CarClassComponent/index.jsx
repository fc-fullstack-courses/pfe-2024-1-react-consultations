import React from 'react';

class CarClassComponent extends React.Component {
  state = {
    currentSpeed: 0,
    currentFuelVolume: 0
  };

  handleAccelerate = () => {
    const { currentSpeed } = this.state;
    this.setState({
      currentSpeed : currentSpeed + 5
    });
  }

  handleDecelerate = () => {
    const { currentSpeed } = this.state;
    this.setState({
      currentSpeed: currentSpeed - 5
    });
  }

  render() {
    const { carName } = this.props;
    const { currentSpeed } = this.state;

    return <div>
      <p>Це класовий компонент машини</p>
      <p>{carName}</p>
      <p>Поточна швидкість : {currentSpeed}</p>
      <button onClick={this.handleAccelerate}>Прискоритись</button>
      <button onClick={this.handleDecelerate}>Затормозити</button>
    </div>
  }
}

export default CarClassComponent;

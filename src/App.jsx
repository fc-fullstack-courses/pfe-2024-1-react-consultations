import React from 'react';
import CarFunctionalComponent from './components/CarFunctionalComponent';
import CarClassComponent from './components/CarClassComponent';
// import './App.css';

function App() {
  return (
    <>
      <CarFunctionalComponent carName='Toyota' />
      <CarClassComponent carName='Mitsubishi' />
    </>
  );
}

export default App;

import React, { useState } from "react";

const Sumando = () => {
  const [valor, setValor] = useState(0);

  /*     const suma = () => {
        setValor(valor + 1);
    }
    const resta = () => {
        setValor(valor - 1);
    } */

  return (
    <>
      <div className="container">
        <h1>Sumando</h1>
        <h5>Número actual: {valor}</h5>
        <button
          className="btn btn-primary"
          onClick={() => {
            setValor(valor + 1);
          }}
        >
          Sumar
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => {
            setValor(valor - 1);
          }}
        >
          Restar
        </button>
        <hr />
      </div>
    </>
  );
};

export default Sumando;

import React, {useState} from 'react'

const Sumando = () => {

    const [valor, setValor] = useState(0);
    const suma = () => {
        setValor(valor + 1);
    }
    const resta = () => {
        setValor(valor - 1);
    }

  return (
    <>
        <h1>Sumando</h1>
            <h5>Número actual: {valor}</h5>
        <button onClick={suma}>Sumar</button>
        <button onClick={resta}>Restar</button>
        <hr />

    </>
  )
}

export default Sumando
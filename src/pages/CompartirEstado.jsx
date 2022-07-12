/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Opcion from "../components/Opcion";

const CompartirEstado = () => {
  const [nombre, setNombre] = useState(0);

  const [direccion, setDireccion] = useState({
    pais: "México",
    estado: "Guerrero",
    ciudad: "Acapulco",
  });

  const [opciones, setOpciones] = useState([
    { name: "Opcion 1", value: 1 },
    { name: "Opcion 2", value: 2 },
    { name: "Opcion 3", value: 3 },
  ]);

  const cambio = () => {
    /* setNombre(nombre + 1) */

    /* setDireccion({
      pais:"USA",
      estado:"California",
      ciudad:"San Francisco",
    }) */

    /* setDireccion({...direccion, estado: "Arizona"}) */

    /* setOpciones([...opciones, {
      name: `Opciones ${opciones.length + 1}`,
      value: opciones.length + 1
    }]) */

    const actualizado = opciones.filter(item => item.value !== 1)
    setOpciones(actualizado);

  }

  const listaDeOpciones = opciones.map(({ name, value }) => (
    <div key={name.replace(" ", "").toLowerCase()} className="col-md-4">
      <Opcion name={name} value={value} clickHandler={cambio}/>
    </div>
  ));

  return (
    <>
      <div className="container">
        <h1>Compartir Estado</h1>
        <Opcion name={opciones[0].name} />
      </div>
      <div className="container row">{listaDeOpciones}</div>
    </>
  );
};

export default CompartirEstado;

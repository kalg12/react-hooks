import React, { useState } from "react";

function Hooks(props) {
  const [seleccion, setSeleccion] = useState("");

  const miSeleccion = (evento) => {
    setSeleccion(evento.target.value);
  };

  const dandoClic = () => {
    setSeleccion("Hiciste clic")
  }

  return (
    <>
      <div onChange={miSeleccion}>
        <h1>Selecciona la opción</h1>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            defaultValue="1"
          />
          <label className="form-check-label" htmlFor="inlineRadio1">
            1
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            defaultValue="2"
          />
          <label className="form-check-label" htmlFor="inlineRadio2">
            2
          </label>
        </div>
      </div>

      <hr />

      <button className="btn btn-primary" onClick={dandoClic}> Botón</button>

      {seleccion &&
        (
          <h4>Seleccionaste: {seleccion}</h4>
        )
      }

    </>
  );
}

export default Hooks;

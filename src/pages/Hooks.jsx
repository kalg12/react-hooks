import React, { useState } from "react";

function Hooks(props) {
  const [seleccion, setSeleccion] = useState("");
  const [botonActivo, setBotonActivo] = useState("No se ha hecho clic");

  /* Una manera de trabajar con useState es haciendo lo de la siguiente manera, pero no se puede trabajar directo en el rénder de nuestro código */

  /* const miSeleccion = (evento) => {
    setSeleccion(evento.target.value);
  }; */

  /* const dandoClic = () => {
    setSeleccion("Hiciste clic")
  } */

  return (
    <>
      <div className="container">
        <div
          onChange={(evento) => {
            setSeleccion(evento.target.value);
          }}
        >
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
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio3"
              defaultValue="3"
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              3
            </label>
          </div>
        </div>

        <hr />

        <button
          className="btn btn-primary"
          onClick={() => {
            setBotonActivo("Si hiciste clic");
          }}
        >
          {" "}
          Botón
        </button>

        {seleccion && <h4>Seleccionaste: {seleccion}</h4>}

        {botonActivo && <h4>Seleccionaste: {botonActivo}</h4>}
      </div>
    </>
  );
}

export default Hooks;

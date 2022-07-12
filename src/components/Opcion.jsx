/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Opcion = (props) => {
  return (
    <div className="card">
            <div className="card-header">
                Opciones
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Esta es la {props.name} de nuestra app. Y su valor es: {props.value}</p>
                <a onClick={props.clickHandler} className="btn btn-primary">Activar</a>
            </div>
        </div>
  )
}

export default Opcion
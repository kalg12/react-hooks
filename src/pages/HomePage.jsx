import React from 'react'
import Carousel from '../components/Carousel'

const HomePage = () => {
  return (
    <>
    <Carousel />
<div>
  <h1 className="visually-hidden">Heroes examples</h1>
  <div className="px-4 py-5 my-5 text-center">
    <img className="d-block mx-auto mb-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" width={72} height={57} alt="imagen" />
    <h1 className="display-5 fw-bold">React Exercices</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">Ejercicios de Hooks con React.</p>
      <p className="lead mb-4">Por Kevin Luciano</p>
    </div>
  </div>
</div>

    </>
  )
}

export default HomePage
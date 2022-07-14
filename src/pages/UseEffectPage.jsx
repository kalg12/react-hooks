import React, {useEffect, useState} from 'react'

const UseEffectPage = () => {

  const [name, setName] = useState(1);

  useEffect(()=>{
    console.log(`effect ${name}`)
    document.title = `Cambio de estado: ${name + 1}`
  })

  const metodo = () => {
    setName(name + 1)
  }

  return (
    <>
        <div className="container">
          <h1 onClick={metodo}>Efecto</h1>
        </div>
    </>
  )
}

export default UseEffectPage
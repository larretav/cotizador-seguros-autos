import React from 'react'
import Formulario from './Formulario'

const AppSeguro = () => {
  return (
    <>
      <header className="my-10">
        <h1 className="text-white text-center text-4xl">Cotizador de seguros de autos</h1>
      </header>

      <main className="p-10 bg-white md:w-2/3 lg:w-2/4 mx-auto shadow-lg rounded-lg">
        <Formulario />
      </main>
    </>
  )
}

export default AppSeguro
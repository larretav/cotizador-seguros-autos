import React from 'react'
import Formulario from '@/components/Formulario'
import useCotizador from '../hooks/useCotizador'
import Spinner from './Spinner';
import Resultado from './Resultado';

const AppSeguro = () => {

  const {cargando} = useCotizador();
  return (
    <>
      <header className="my-10">
        <h1 className="text-white text-center text-4xl">Cotizador de seguros de autos</h1>
      </header>

      <main className="mx-auto p-10 bg-white w-11/12 md:w-2/3 lg:w-2/4 shadow-lg rounded-lg">
        <Formulario />
        { cargando ? <Spinner /> : <Resultado /> }
      </main>
    </>
  )
}

export default AppSeguro
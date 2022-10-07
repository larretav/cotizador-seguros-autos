import React from 'react'
import useCotizador from '../hooks/useCotizador'

const Error = () => {

  const {error} = useCotizador();

  return (
    <div className="py-2 my-2 rounded-lg text-center text-red-700 bg-red-100 border border-red-400">
      <p>{error}</p>
    </div>
  )
}

export default Error
import React, { useCallback, useMemo, useRef } from 'react'
import { MARCAS, PLANES } from '../constants';
import useCotizador from '../hooks/useCotizador'

const Resultado = () => {

  const {resultado, datos} = useCotizador();
  const {marca, plan, year} = datos;
  const yearRef = useRef(year)

  const [nombreMarca] = useMemo( () => MARCAS.filter( m => m.id === Number(marca)), [resultado])
  const [nombrePlan] = useCallback(PLANES.filter( p => p.id === Number(plan)), [resultado])
  
  if (resultado == 0) return;

  return (
    <div className="mt-5 p-5 bg-gray-50 text-center shadow">
      <h2 className="text-gray-500 font-semibold text-3xl">
        Resumen
      </h2>
      <p className="my-2 uppercase">
        <span className="font-semibold">Marca: </span> {nombreMarca.nombre}
      </p>
      
      <p className="my-2 uppercase">
        <span className="font-semibold">Plan: </span> {nombrePlan.nombre}
      </p>
      
      <p className="my-2 uppercase">
        <span className="font-semibold">Año del auto: </span> {yearRef.current}
      </p>

      <p className="my-2 uppercase text-2xl">
        <span className="font-semibold">Total cotización: </span> {resultado}
      </p>
    </div>
  )
}

export default Resultado
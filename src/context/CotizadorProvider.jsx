import { createContext, useState } from "react";
import { cacluarPlan, calcularMarca, formatearDinero, getYearDifference } from "../helpers";

const CotizadorContext = createContext(); 

const CotizadorProvider = ({children}) => {

  const [datos, setDatos] = useState({
    marca: '',
    year: '',
    plan: ''
  })

  const [error, setError] = useState('');
  const [resultado, setResultado] = useState(0);
  const [cargando, setCargando] = useState(false)

  const handleChangeDatos = (e) => { 
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    })  
  }

  const cotizadorSeguro = () => {
    //Una base
    let result = 2000;

    // Obtener diferencia de años
    const differenceYear =  getYearDifference(datos.year);

    // Hay que restar el 3% por cada año
    result -= ((differenceYear * 3) * result) / 100;

    // Europeo 30%
    // Americano 15%
    // Asiatico 5%
    result *= calcularMarca(datos.marca);
    console.log(result)

    // Básico 20%
    // Completo 50%
    result *=  cacluarPlan(datos.plan);

    // Formatear  resultado
    result = formatearDinero(result);

    setCargando(true);
    setTimeout(() => {
      setResultado(result);
      setCargando(false);
    }, 2000);
  }

  return(
    <CotizadorContext.Provider value={{
      datos, 
      handleChangeDatos, 
      error,
      setError, 
      cotizadorSeguro,
      resultado, 
      cargando
    }}>
      {children}
    </CotizadorContext.Provider>
  )
}

export {
  CotizadorProvider
}

export default CotizadorContext;
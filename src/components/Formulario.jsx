import { MARCAS, PLANES, YEARS } from "@/constants"
import useCotizador from "@/hooks/useCotizador";

const Formulario = () => {

  const {datos, handleChangeDatos} = useCotizador();

  return (
    <>
      <form >
        <div className="my-5">
          <label className="block mb-3 font-semibold text-gray-400 uppercase">Marca</label>
          <select
            name="marca"
            className="w-full p-3 bg-white border border-r-gray-200"
            value={datos.marca}
            onChange={handleChangeDatos}
          >
            <option value="">-- Selecciona una marca  --</option>
            {
              MARCAS.map( marca => (
                <option key={marca.id} value={marca.id}>{marca.nombre}</option>
              ))
            }
          </select>
        </div>

        <div className="my-5">
          <label className="block mb-3 font-semibold text-gray-400 uppercase">Año</label>
          <select
            name="year"
            className="w-full p-3 bg-white border border-r-gray-200"
            value={datos.year}
            onChange={handleChangeDatos}
          >
            <option value="">-- Selecciona un año  --</option>
            {
              YEARS.map( year => (
                <option key={year} value={year}>{year}</option>
              ))
            }
          </select>
        </div>


        <div className="my-5">
          <label className="block mb-3 font-semibold text-gray-400 uppercase">Elige un plan</label>
          <div className="flex gap-4 items-baseline">
          {
            PLANES.map( plan => (
              <div key={plan.id}>
                <label className="mr-2">{plan.nombre}</label>
                <input 
                  type="radio"
                  name="plan" 
                  value={plan.id} 
                  onChange={handleChangeDatos}
                />
              </div>
            ))
          }
          </div>
        </div>
        
        <input 
          type="submit" 
          value="Enviar"
          className="py-3 w-full font-semibold bg-indigo-500 hover:bg-indigo-600 rounded-lg transition-colors text-white cursor-pointer uppercase" 
        />
      </form>
    </>
  )
}

export default Formulario
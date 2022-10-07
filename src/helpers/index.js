export const getYearDifference = (year) => {
  return new Date().getFullYear() - year;
}

export const calcularMarca = (marca) => {
  let increment;

  if(marca == '1') increment = 1.3;
  if(marca == '2') increment = 1.15;
  if(marca == '3') increment = 1.05;


  return increment;
}

export const cacluarPlan = (plan ) => {
  return plan === '1' ? 1.2 : 1.5;
}

export const formatearDinero = (cantidad) => {
  return cantidad.toLocaleString('en-US', {
    style: "currency",
    currency: "USD"
  })
}
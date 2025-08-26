
export function addTwoNumbers(valor1, valor2){
  let result = suma(valor1,valor2);
  return console.log(result);
}

function suma(n1,n2){
  return n1+n2;
}

function resta(n1,n2){
  return n1-n2;
}

let resultadoResta = resta(1,2);
console.log(resultadoResta);

function division(n1,n2){
  return n1/n2;
}

let resultadoDivision = division(10,2);
console.log(resultadoDivision);

function suma3Numeros(n1,n2,n3){
  return n1+n2+n3;
}

let resultadoSum3Numeros = suma3Numeros(1,2,3);
console.log(resultadoSum3Numeros);

function operaciones(n1,n2,n3,operacion){
  
  let result=0;

  if(operacion[0] == '+'){
    result = n1 + n2;
  }else if(operacion[0] == '-'){
    result = n1 - n2;
  }
  
  if(operacion[1] == '+'){
    result += n3;  
  }else if(operacion[1] == '-'){
    result -= n3;
  }

  return result;
}


let resultadoOperaciones = operaciones(1,2,3,['+','-']);
console.log(resultadoOperaciones);

export function addTwoNumbers(valor1, valor2){
  let result = suma(valor1,valor2);
  return console.log(result);
}

const suma = (n1,n2)=>{return n1+n2;}

const resta = (n1,n2)=>{return n1-n2;}

const division = (n1,n2)=>{return n1/n2;}

const suma3Numeros = (n1,n2,n3)=>{return n1+n2+n3;}


const operaciones = (n1,n2,n3,operacion) =>{
  
  let result=0;
  
  if(operacion[0] == '+'){result = n1 + n2;}
  else if(operacion[0] == '-'){result = n1 - n2;}
  
  if(operacion[1] == '+'){result += n3;  }
  else if(operacion[1] == '-'){result -= n3;}
  
  return result;
}


const option = +prompt("Selecciona una opcion:\n 1. Sumar\n 2. Restar\n 3. Dividir\n 4. Sumar 3 Numeros\n 5. Operar");

// console.log(suma(1,2));
// console.log(resta(1,2));
// console.log(division(10,2));
// console.log(suma3Numeros(1,2,3));
// console.log(operaciones(1,2,3,['+','-']));

switch (option) {
    case 1:
        const num1 = +prompt("Ingresa un umero");
        const num2 = +prompt("Ingresa otro umero");
        alert(suma(num1,num2));
        break;
    case 2:
        const num3 = +prompt("Ingresa un numero:");
        const num4 = +prompt("Ingresa otro numero:");
        alert(resta(num3,num4));
        break;
    case 3: 
        const num5 = +prompt("Ingresa un numero:");
        const num6 = +prompt("Ingresa otro numero:");
        alert(division(num5,num6));
        break;
    case 4:
        const num7 = +prompt("Ingresa un numero:");
        const num8 = +prompt("Ingresa otro numero:");
        const num9 = +prompt("Ingresa otro numero:"); 
        alert(suma3Numeros(num7,num8,num9));
        break;
    case 5:
        const num10 = +prompt("Ingresa un numero:");
        const num11 = +prompt("Ingresa otro numero:");
        const num12 = +prompt("Ingresa otro numero:");
        const operador1 = prompt("Escribe uno de los signos: (+) o (-)");
        const operador2 = prompt("Escribe otro de los signos: (+) o (-)");

        alert(operaciones(num10,num11,num12,[operador1,operador2]));
        break;

    default:
        alert("Opcion no valida");
}


function esPalindromo(palabra) {
  const palabraMinuscula = palabra.toLowerCase();
  
  const palabraInvertida = palabraMinuscula.split("").reverse().join("");
  
  if (palabraMinuscula === palabraInvertida) {
    console.log(`"${palabra}" es un palíndromo.`);
  } else {
    console.log(`"${palabra}" no es un palíndromo.`);
  }
}

//const palabra = "Reconocer";
const palabra = "Hola";
esPalindromo(palabra);

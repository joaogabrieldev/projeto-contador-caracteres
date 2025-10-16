const input = document.getElementById("inputTexto");

const spanResultadoTotal = document.querySelector(".resultadoTotal");

const spanResultadoNumero = document.querySelector(".resultadoNumeros");

const spanResultadoLetras = document.querySelector(".resultadoLetras");

input.addEventListener("input", (event) => {
  const regex = /[^a-zA-Z0-9]/gi;

  let valorInput = input.value;

  let valorLimpo = valorInput.replace(regex, "");

  input.value = valorLimpo;

  const valor = input.value;

  spanResultadoTotal.textContent = valor.length;

  const contadorLetras = valor.match(/[a-z]/gi) || [];

  const contadorNumeros = valor.match(/[\d]/g) || [];

  spanResultadoLetras.textContent = contadorLetras.length;

  spanResultadoNumero.textContent = contadorNumeros.length;
});

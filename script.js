// -2)

function verificarFibonacci() {
  const numero = parseInt(document.getElementById("numero").value);
  let a = 0,
    b = 1,
    proximo = 1;

  while (proximo < numero) {
    proximo = a + b;
    a = b;
    b = proximo;
  }

  const resultado = document.getElementById("resultado");

  if (proximo === numero) {
    resultado.textContent = `${numero} pertence à sequência de Fibonacci`;
  } else {
    resultado.textContent = `${numero} não pertence à sequência de Fibonacci`;
  }
}

// -4)

const faturamento = [
  { estado: "SP", valor: 67836.43 },
  { estado: "RJ", valor: 36678.66 },
  { estado: "MG", valor: 29229.88 },
  { estado: "ES", valor: 27165.48 },
  { estado: "Outros", valor: 19849.53 },
];

const faturamentoTotal = faturamento.reduce(
  (total, estado) => total + estado.valor,
  0
);

for (let i = 0; i < faturamento.length; i++) {
  const estado = faturamento[i];
  const percentual = (estado.valor / faturamentoTotal) * 100;
  document.getElementById(
    estado.estado.toLowerCase()
  ).textContent = `R$ ${estado.valor.toFixed(2)}`;
  document.getElementById(
    estado.estado.toLowerCase() + "Percent"
  ).textContent = `${percentual.toFixed(2)}%`;
}

// -5)

let string = "Target Sistemas ";
let reversedString = "";

for (let i = string.length - 1; i >= 0; i--) {
  reversedString += string[i];
}

let frase = `A string invertida é: ${reversedString}.`;
let p = document.createElement("p");
p.textContent = frase;
p.style.textAlign = "center";
p.style.padding = "40px";
document.body.appendChild(p);

const faturamentoDiario = [
  {
    dia: 1,
    valor: 22174.1664,
  },
  {
    dia: 2,
    valor: 24537.6698,
  },
  {
    dia: 3,
    valor: 26139.6134,
  },
  {
    dia: 4,
    valor: 0.0,
  },
  {
    dia: 5,
    valor: 0.0,
  },
  {
    dia: 6,
    valor: 26742.6612,
  },
  {
    dia: 7,
    valor: 0.0,
  },
  {
    dia: 8,
    valor: 42889.2258,
  },
  {
    dia: 9,
    valor: 46251.174,
  },
  {
    dia: 10,
    valor: 11191.4722,
  },
  {
    dia: 11,
    valor: 0.0,
  },
  {
    dia: 12,
    valor: 0.0,
  },
  {
    dia: 13,
    valor: 3847.4823,
  },
  {
    dia: 14,
    valor: 373.7838,
  },
  {
    dia: 15,
    valor: 2659.7563,
  },
  {
    dia: 16,
    valor: 48924.2448,
  },
  {
    dia: 17,
    valor: 18419.2614,
  },
  {
    dia: 18,
    valor: 0.0,
  },
  {
    dia: 19,
    valor: 0.0,
  },
  {
    dia: 20,
    valor: 35240.1826,
  },
  {
    dia: 21,
    valor: 43829.1667,
  },
  {
    dia: 22,
    valor: 18235.6852,
  },
  {
    dia: 23,
    valor: 4355.0662,
  },
  {
    dia: 24,
    valor: 13327.1025,
  },
  {
    dia: 25,
    valor: 0.0,
  },
  {
    dia: 26,
    valor: 0.0,
  },
  {
    dia: 27,
    valor: 25681.8318,
  },
  {
    dia: 28,
    valor: 1718.1221,
  },
  {
    dia: 29,
    valor: 13220.495,
  },
  {
    dia: 30,
    valor: 8414.61,
  },
];

let resultadosDiv = document.getElementById("resultados");

let menorValor = Infinity;
let maiorValor = -Infinity;
let totalFaturamento = 0;
let numDiasComFaturamento = 0;
for (let i = 0; i < faturamentoDiario.length; i++) {
  if (faturamentoDiario[i].valor !== 0) {
    // Ignora dias com faturamento igual a 0
    totalFaturamento += faturamentoDiario[i].valor;
    numDiasComFaturamento++;

    if (faturamentoDiario[i].valor < menorValor) {
      menorValor = faturamentoDiario[i].valor;
    }

    if (faturamentoDiario[i].valor > maiorValor) {
      maiorValor = faturamentoDiario[i].valor;
    }
  }
}

const mediaMensal = totalFaturamento / numDiasComFaturamento;

let numDiasAcimaMedia = 0;
for (let i = 0; i < faturamentoDiario.length; i++) {
  if (faturamentoDiario[i].valor > mediaMensal) {
    numDiasAcimaMedia++;
  }
}

resultadosDiv.innerHTML = `
  <p>O menor valor de faturamento diário é: R$${menorValor.toFixed(2)}</p>
  <p>O maior valor de faturamento diário é: R$${maiorValor.toFixed(2)}</p>
  <p>O número de dias com faturamento acima da média mensal é: ${numDiasAcimaMedia}</p>
`;

let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}

console.log(SOMA);

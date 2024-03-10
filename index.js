const fs = require("fs");

const caminho = process.argv;
const link = caminho[2];

fs.readFile(link, "utf-8", (erro, result) => {
  try {
    if (erro) throw erro
    contaPalavras(result);
  } catch (erro) {
    if (erro.code === "ENOENT") console.log('erro que esperava');
    else console.log('outro erro?');
  }
});

function contaPalavras(texto) {
  const paragrafos = extraiParagrafos(texto);
  const contagem = paragrafos.flatMap((paragrafo) => {
    if (!paragrafo) return [];
    return verificaPalavrasDuplicadas(paragrafo);
  });
  console.log(contagem);
}

function extraiParagrafos(texto) {
  return texto.toLowerCase().split("\n");
}

function limpaPalavra(palavra) {
  return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
}

function verificaPalavrasDuplicadas(texto) {
  const listaPalavras = texto.split(" ");
  const resultado = {};
  listaPalavras.forEach((word) => {
    if (word.length >= 3) {
      const palavraLimpa = limpaPalavra(word);
      resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1;
    }
  });
  return resultado;
}

function imprimeResultado(resultado) {
  console.log(resultado);
}

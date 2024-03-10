const fs = require("fs");

const caminho = process.argv;
const link = caminho[2]; 

fs.readFile(link, 'utf-8', (erro, result) => {
  quebraEmParagrafos(result)
  // verificaPalavrasDuplicadas(result)
});

function quebraEmParagrafos(texto) {
  const paragrafos = texto.toLowerCase().split("\n")
  const contagem = paragrafos.map((paragrafo) => verificaPalavrasDuplicadas(paragrafo))
  console.log(contagem);


  // const wc = paragraphs.map( paragraph => duplicatedWord(paragraph))
  // x = []
  // wc.forEach((item, i) => {
  //   console.log(findSomething(item))
  //   const dupliWords = findSomething(item).join(', ')
  //     x.push({duplicated: dupliWords, paragraph:paragraphs[i]})
  // })
  // return x
}

function limpaPalavra(palavra) {
  return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
}

function verificaPalavrasDuplicadas(texto){
  const listaPalavras = texto.split(" ")
  const resultado = {}
  listaPalavras.forEach(word => {
    if (word.length >= 3) {
    const palavraLimpa = limpaPalavra(word)
      resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) +1
    }
  })
  return resultado;
}

function imprimeResultado(resultado) {
  console.log(resultado);
}
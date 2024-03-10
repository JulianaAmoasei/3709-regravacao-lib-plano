const fs = require("fs");

const caminho = process.argv;
const link = caminho[2]; 

fs.readFile(link, 'utf-8', (erro, result) => {
  verificaPalavrasDuplicadas(result)
});

function verificaPalavrasDuplicadas(texto){
  const listaPalavras = texto.split(" ")
  const resultado = {}
  listaPalavras.forEach( word => {
    // const cleanWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    // if (word.length >= 3){
      resultado[word] = (resultado[word] || 0) +1
    // }
  })
  console.log(resultado);
  // imprimeResultado(resultado);
}

// function imprimeResultado(resultado) {
//   console.log(resultado);
// }
import fs from "fs";
import trataErros from "./erros/funcoesErros.js";
import { contaPalavras } from "./index.js";
import { montaSaidaArquivo } from "./helpers.js";
import minimist from "minimist";

const argv = minimist(process.argv.slice(2));

// const caminho = process.argv;
const texto = argv.caminho;
const endereco = argv.destino;

fs.readFile(texto, "utf-8", (erro, result) => {
  try {
    if (erro) throw erro;
    const resultado = contaPalavras(result);
    criaESalvaArquivo(resultado, endereco); // adicionar param aqui
  } catch (erro) {
    // trataErros(erro)
    console.log(trataErros(erro));
  }
});

async function criaESalvaArquivo(listaPalavras, endereco) {
  const arquivoNovo = `${endereco}/resultado.txt`;
  const listaFinal = montaSaidaArquivo(listaPalavras);
  try {
    await fs.promises.writeFile(arquivoNovo, listaFinal);
    console.log("arquivo criado com sucesso");
  } catch (erro) {
    throw erro;
  }
}

// function criaESalvaArquivo(listaPalavras, endereco) {
//   const arquivoNovo = `${endereco}/resultado.txt`;
//   const textoPalavras = JSON.stringify(listaPalavras);
//   fs.promises
//     .writeFile(arquivoNovo, textoPalavras)
//     .then(() => {
//       console.log("arquivo criado com sucesso");
//     })
//     .catch((erro) => {
//       throw erro;
//     });
// }

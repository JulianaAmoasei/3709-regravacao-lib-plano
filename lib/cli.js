import fs from "fs";
import trataErros from "./erros/funcoesErros.js";
import { contaPalavras } from "./index.js";
import { montaSaidaArquivo } from "./helpers.js";

const caminho = process.argv;
const texto = caminho[2];
const endereco = caminho[3];


fs.readFile(texto, "utf-8", (erro, result) => {
  try {
    if (erro) throw erro
    const resultado = contaPalavras(result);
    criaESalvaArquivo(resultado, endereco)
  } catch (erro) {
    // trataErros(erro)
    console.log(trataErros(erro))
    throw erro
  }
});

function criaESalvaArquivo(listaPalavras, endereco) {
  const arquivoNovo = `${endereco}/resultado.txt`
  const listaFinal = montaSaidaArquivo(listaPalavras)
  console.log(listaFinal);
  fs.writeFile(arquivoNovo, listaFinal, (erro) => {
    if (erro) {
      throw erro
    }
    console.log("sucesso")
  })
}

import fs from "fs";
import trataErros from "./erros/funcoesErros.js";
import { contaPalavras } from "./index.js";

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
  }
});

function criaESalvaArquivo(listaPalavras, endereco) {
  const arquivoNovo = `${endereco}/resultado.txt`
  const textoPalavras = JSON.stringify(listaPalavras)
  fs.writeFile(arquivoNovo, textoPalavras, erro => {
    if (erro) {
      throw erro
    }
    console.log("sucesso")
  })
}

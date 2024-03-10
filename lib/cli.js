import fs from "fs";
import trataErros from "./erros/funcoesErros.js";
import { contaPalavras } from "./index.js";

const caminho = process.argv;
const link = caminho[2];

fs.readFile(link, "utf-8", (erro, result) => {
  try {
    if (erro) throw erro
    contaPalavras(result);
  } catch (erro) {
    // trataErros(erro)
    console.log(trataErros(erro))
  }
});
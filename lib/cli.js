import fs from "fs";
import trataErros from "./erros/funcoesErros.js";
import { contaPalavras } from "./index.js";
import { montaSaidaArquivo } from "./helpers.js";
import { Command } from 'commander';
import path from "path";

const program = new Command();

program
  .version('0.0.1')
  .option('-t, --texto <string>', 'Caminho do texto a ser processado')
  .option('-d, --destino <string>', 'Caminho da pasta onde salvar o arquivo de resultados')
  .action((options) => {
    const { texto, destino } = options;

    if (!texto || !destino) {
      console.error('Erro: Favor inserir caminho de origem e destino');
      program.help();
      return;
    }

    const caminhoTexto = path.resolve(texto);
    const caminhoDestino = path.resolve(destino);

    try {
      processaArquivo(caminhoTexto, caminhoDestino);
      console.log('texto processado e resultado salvo com sucesso');
    } catch (erro) {
      console.log('ocorreu um erro no processamento', erro.message);
    }
  });

program.parse();

function processaArquivo(texto, endereco) {
  fs.readFile(texto, "utf-8", (erro, result) => {
    try {
      if (erro) throw erro;
      const resultado = contaPalavras(result);
      criaESalvaArquivo(resultado, endereco);
    } catch (erro) {
      // trataErros(erro)
      console.log(trataErros(erro));
    }
  });
}

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

function filtraOcorrencias(objetoParagrafo) {
  return Object.keys(objetoParagrafo).filter(chave => objetoParagrafo[chave] > 1)
}

function montaSaidaArquivo(listaOcorrencias) {
  let textoFinal = '';
  listaOcorrencias.forEach((item, i) => {
    const duplicadas = filtraOcorrencias(item).join(', ')
      textoFinal += `palavras duplicadas do parágrafo ${i + 1}: ${duplicadas} \n`
  })
  return textoFinal
}

export { montaSaidaArquivo };
// export default montaSaidaArquivo;

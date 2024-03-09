const fs = require("fs");

const caminho = process.argv;
const link = caminho[2]; 

fs.readFile(link, 'utf-8', (erro, result) => {
  console.log(result)
});

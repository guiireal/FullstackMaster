const fs = require('fs')
const path = './'

const callback = (path, error, list) => {
    console.log(`The path is: ${path}`);
    if (error)
        console.log(error)
    else
        console.log(list)
}

console.log(fs.readdirSync(path), 'Síncrono');

/* 
 * O SEGUNDO PARÂMETRO DO BIND DENTRO DE UMA FUNCTION PERMITE ADICIONAR 
 * PARÂMETROS EXTRAS NA EXECUÇÃO DA MESMA 
 */
fs.readdir(path, callback.bind(null, path))

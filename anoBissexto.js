// Verificar se um ano é bissexto ou nao 
function anoBissexto() {
    let ano = parseInt(prompt("Digite um ano: "));
    
    // Forma simples 
    /*if (ano % 4 === 0) {
        if (ano % 100 === 0) {
            if (ano % 400 === 0) {
                console.log(`${ano} é um ano bissexto.`);
            } else {
                console.log(`${ano} nao é um ano bissexto.`);
            }
        } else {
            console.log(`${ano} é um ano bissexto.`);
        }
    } else {
        console.log(`${ano} nao é um ano bissexto.`);
    }*/
    
    // Com operador ternário
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
        console.log(`${ano} é um ano bissexto.`);
    } else {
        console.log(`${ano} nao é um ano bissexto.`);
    }
}
anoBissexto();

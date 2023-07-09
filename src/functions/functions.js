const gerarLetrasMaiusculas = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

const gerarLetrasMinusculas = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

const gerarNumeros = () => {
    return Math.floor(Math.random() * 9)
}

const gerarSimbolos =() => {
    const simbolos = "!@#$%&*()+*/.;:?][}{"
    return simbolos[Math.floor(Math.random() * simbolos.length)]
}

function gerarSenha(tamanho, ...teste){
    let password = ""

    const funcoes = [...teste]

     while(password.length < tamanho){
         funcoes.forEach((func) => {
            let caracter = func()
            password += caracter
         })
    }
    
    // Algoritmo de Fisher-Yates para embaralhar elementos de um array

    let randomPassword = password.split("")
    
    for (let i = randomPassword.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));
        
        [randomPassword[i], randomPassword[j]] = [randomPassword[j], randomPassword[i]];
    }
    
    return randomPassword.slice(0, tamanho).join("");
}


export { gerarLetrasMaiusculas, gerarLetrasMinusculas, gerarNumeros, gerarSimbolos, gerarSenha }
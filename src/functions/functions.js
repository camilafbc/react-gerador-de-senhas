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
    let senha = ""

    const funcoes = [...teste]

    for(let i = 1; i <= tamanho; i += funcoes.length){
        funcoes.forEach(() => {
            let caracter = funcoes[Math.floor(Math.random() * funcoes.length)]()
            senha += caracter
        })
    }
    console.log(tamanho)
    return senha
}

// function gerarSenha(tamanho, gerarLetrasMaiusculas, gerarLetrasMinusculas, gerarNumeros, gerarSimbolos){
//     let senha = ""

//     const funcoes = [gerarLetrasMaiusculas, gerarLetrasMinusculas, gerarNumeros, gerarSimbolos]

//     for(let i = 1; i <= tamanho; i += funcoes.length){
//         funcoes.forEach(() => {
//             let caracter = funcoes[Math.floor(Math.random() * funcoes.length)]()
//             senha += caracter
//         })
//     }
    
//     return senha
// }

export { gerarLetrasMaiusculas, gerarLetrasMinusculas, gerarNumeros, gerarSimbolos, gerarSenha }
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

function gerarSenha(gerarLetrasMaiusculas, gerarLetrasMinusculas, gerarNumeros, gerarSimbolos){
    let senha = ""

    const funcoes = [gerarLetrasMaiusculas, gerarLetrasMinusculas, gerarNumeros, gerarSimbolos]

    for(let i = 1; i <= 12; i += 4){
        funcoes.forEach(() => {
            let caracter = funcoes[Math.floor(Math.random() * funcoes.length)]()
            senha += caracter
        })
    }
    
    return senha
}

export { gerarLetrasMaiusculas, gerarLetrasMinusculas, gerarNumeros, gerarSimbolos, gerarSenha }
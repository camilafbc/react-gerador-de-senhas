const generateCapitalLetters = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

const generateLowercaseLetters = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

const generateNumbers = () => {
    return Math.floor(Math.random() * 9)
}

const generateSymbols =() => {
    const symbols = "!@#$%&*()+*/.;:?][}{"
    return symbols[Math.floor(Math.random() * symbols.length)]
}

function generatePassword(password_length, ...functions){
    let password = ""

    const generating_functions = [...functions]

     while(password.length < password_length){
         generating_functions.forEach((func) => {
            let character = func()
            password += character
         })
    }
    
    // Algoritmo de Fisher-Yates para embaralhar elementos de um array
    // Para garantir que os elementos não venham sempre numa mesma ordem

    let randomPassword = password.split("")
    
    for (let i = randomPassword.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));
        
        [randomPassword[i], randomPassword[j]] = [randomPassword[j], randomPassword[i]];
    }
    
    return randomPassword.slice(0, password_length).join("");
}


export { generateCapitalLetters, generateLowercaseLetters, generateNumbers, generateSymbols, generatePassword }
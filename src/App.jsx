import { useState } from 'react'
import './App.css'
import Button from './Components/Button'
import CheckboxInput from './components/CheckboxInput'
import NumberInput from './components/NumberInput'
import Saida from './Components/Saida'
import Title from './Components/Title'

import {gerarLetrasMaiusculas, gerarLetrasMinusculas, gerarNumeros, gerarSimbolos, gerarSenha} from './functions/functions.js'

function App() {

  const [senha, setSenha] = useState("")
  const [copiarText, setCopiarText] = useState("Copiar")
  const [passwordSize, setPasswordSize] = useState(10)
  const [capitalLetterIncludes, setCapitalLetterIncludes] = useState(false)
  const [lowerCaseIncludes, setLowerCaseIncludes] = useState(false)
  const [numbersIncludes, setNumbersIncludes] = useState(false)
  const [simbolosIncludes, setSimbolosIncludes] = useState(false)


  function mudarSenha() { 
    const novaSenha = gerarSenha(
      passwordSize, 
      capitalLetterIncludes ? gerarLetrasMaiusculas : () => "", 
      lowerCaseIncludes ? gerarLetrasMinusculas : () => "", 
      numbersIncludes ? gerarNumeros : () => "", 
      simbolosIncludes ? gerarSimbolos : () => ""
    );
    setSenha(novaSenha);
    setCopiarText("Copiar")
  }
  
  function copiarSenha() {
    navigator.clipboard.writeText(senha)
    setCopiarText("Copiado!")
  }

  
  return (
    <>
      <Title titleContent="Gerador de Senhas"/>
      <NumberInput
        id="tamanho"
        labelContent="Quantidade de Caracteres: "
        value={passwordSize}
        onChange={(ev) => setPasswordSize(Number(ev.target.value))}
      />
      <CheckboxInput 
        id="letraMaiuscula"
        labelContent="Letra Maiúscula:"
        value={capitalLetterIncludes}
        onChange={() => setCapitalLetterIncludes(currentState => !currentState)}
      />
      <CheckboxInput 
        id="letraMinuscula"
        labelContent="Letra Minúscula:"
        value={lowerCaseIncludes}
        onChange={() => setLowerCaseIncludes(currentState => !currentState)}
      />
      <CheckboxInput 
        id="incluirNumeros"
        labelContent="Números:"
        value={numbersIncludes}
        onChange={() => setNumbersIncludes(currentState => !currentState)}
      />
      <CheckboxInput 
        id="incluirSimbolos"
        labelContent="Símbolos:"
        value={simbolosIncludes}
        onChange={() => setSimbolosIncludes(currentState => !currentState)}
      />
      <div className="btn_container">
        <Button onClick={mudarSenha} buttonContent="Gerar Senha" />
        <Button onClick={copiarSenha} buttonContent={copiarText} />
      </div>
      <Saida saidaContent={senha}/>
    </>
  )
}

export default App

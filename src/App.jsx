import { useState } from 'react'
import './App.css'
import Button from './Components/Button'
import Input from './Components/Input'
import Saida from './Components/Saida'
import Title from './Components/Title'

import {gerarLetrasMaiusculas, gerarLetrasMinusculas, gerarNumeros, gerarSimbolos, gerarSenha} from './functions/functions.js'

function App() {

  const [senha, setSenha] = useState("")
  const [copiarText, setCopiarText] = useState("Copiar")
  const [passwordSize, setPasswordSize] = useState(12)
  const [numbersIncludes, setNumbersIncludes] = useState(false)
  const [caracteresIncludes, setCaracteresIncludes] = useState(false)


  function mudarSenha() {
    const novaSenha = gerarSenha(
      passwordSize, 
      gerarLetrasMaiusculas, 
      gerarLetrasMinusculas, 
      numbersIncludes ? gerarNumeros : () => "", 
      caracteresIncludes ? gerarSimbolos : () => ""
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
      <Title titleContent={"Gerador de Senhas"}/>
      <Input
        htmlFor={"tamanho"}
        labelContent={"Quantidade de Caracteres: "}
        type={"number"}
        id={"tamanho"}
        // min={1}
        value={passwordSize}
        onChange={(ev) => setPasswordSize(Number(ev.target.value))}
      />
      <Input
        htmlFor={"incluirNumeros"}
        labelContent={"Incluir Números:"}
        type={"checkbox"}
        id={"incluirNumeros"}
        value={numbersIncludes}
        onChange={() => setNumbersIncludes(currentState => !currentState)}
      />
      <Input
        htmlFor={"incluirCaracteres"}
        labelContent={"Incluir Caracteres:"}
        type={"checkbox"}
        id={"incluirCaracteres"}
        value={caracteresIncludes}
        onChange={() => setCaracteresIncludes(currentState => !currentState)}
      />
      <div className="btn_container">
        <Button evento={mudarSenha} buttonContent={"Gerar Senha"} />
        <Button evento={copiarSenha} buttonContent={copiarText} />
      </div>
      <Saida saidaContent={senha}/>
    </>
  )
}

export default App

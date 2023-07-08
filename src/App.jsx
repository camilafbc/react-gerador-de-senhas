import { useState } from 'react'
import './App.css'
import Button from './Components/Button'
import Saida from './Components/Saida'
import Title from './Components/Title'

import {gerarLetrasMaiusculas, gerarLetrasMinusculas, gerarNumeros, gerarSimbolos, gerarSenha} from './functions/functions.js'

function App() {

  function mudarSenha() {
    const novaSenha = gerarSenha(gerarLetrasMaiusculas, gerarLetrasMinusculas, gerarNumeros, gerarSimbolos);
    setSenha(novaSenha);
    setCopiarText("Copiar")
  }
  
  const [senha, setSenha] = useState("")

  function copiarSenha() {
    navigator.clipboard.writeText(senha)
    setCopiarText("Copiado!")
  }

  const [copiarText, setCopiarText] = useState("Copiar")

  return (
    <>
      <Title titleContent={"Gerador de Senhas"}/>
      <div className="btn_container">
        <Button evento={mudarSenha} buttonContent={"Gerar Senha"} />
        <Button evento={copiarSenha} buttonContent={copiarText} />
      </div>
      <Saida saidaContent={senha}/>
    </>
  )
}

export default App

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

  // trabalhar com todos num objeto me economiza linhas de código e facilita a compreensão
  const [check, setCheck] = useState({
    capitalCheck: true,
    lowerCheck: true,
    numbersCheck: true,
    simbolCheck: true
  });
 
  function mudarSenha() { 
    const novaSenha = gerarSenha(
      passwordSize, 
      check.capitalCheck ? gerarLetrasMaiusculas : () => "", 
      check.lowerCheck ? gerarLetrasMinusculas : () => "", 
      check.numbersCheck ? gerarNumeros : () => "", 
      check.simbolCheck ? gerarSimbolos : () => ""
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
      <Title/>
      <div className="content_container">
        <div className="saida">
          <Saida saidaContent={senha}/>
          <Button onClick={copiarSenha} buttonContent={copiarText} />
        </div>
        <NumberInput
          id="tamanho"
          labelContent="Quantidade de Caracteres: "
          value={passwordSize}
          onChange={(ev) => setPasswordSize(Number(ev.target.value))}
        />
        <div className="checks_container">
          <CheckboxInput 
            id="letraMaiuscula"
            labelContent="Letras Maiúsculas:"
            // não preciso trabalhar com o "value" pois ele está diretamente ligado com checked
            checked={check.capitalCheck}
            onChange={() => {
              // trabalho com a mudança de todo o objeto a partir do estado anterior; facilita o entendimento, a manutenção e economiza linhas de código
              // pego o estado anterior, copio todo o objeto e atualizo somente o estado desejado
              setCheck(prevCheck => ({ ...prevCheck, capitalCheck: !prevCheck.capitalCheck }))
            }}
          />
          <CheckboxInput 
            id="letraMinuscula"
            labelContent="Letras Minúsculas:"
            checked={check.lowerCheck}
            onChange={() => {
              setCheck(prevCheck => ({ ...prevCheck, lowerCheck: !prevCheck.lowerCheck }))
            }}
          />
          <CheckboxInput 
            id="incluirNumeros"
            labelContent="Números:"
            checked={check.numbersCheck}
            onChange={() => {
              setCheck(prevCheck => ({ ...prevCheck, numbersCheck: !prevCheck.numbersCheck }))
            }}
          />
          <CheckboxInput 
            id="incluirSimbolos"
            labelContent="Símbolos:"
            checked={check.simbolCheck}
            onChange={() => {
              setCheck(prevCheck => ({ ...prevCheck, simbolCheck: !prevCheck.simbolCheck }))
            }}
          />
        </div>
        <Button style={{margin: "0 auto"}} onClick={mudarSenha} buttonContent="Gerar Senha"  />
      </div>
    </>
  )
}

export default App
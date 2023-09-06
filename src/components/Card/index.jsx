import { useState } from 'react'
import CheckboxInput from '../CheckboxInput'
import NumberInput from '../NumberInput'
import styles from './styles.module.css'

import {gerarLetrasMaiusculas, gerarLetrasMinusculas, gerarNumeros, gerarSimbolos, gerarSenha} from '../../functions/functions.js'

function Card(){

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
        <div className={styles.card}>
            <div className={styles.display}>
                <div>{senha}</div>
                <button onClick={copiarSenha}>{copiarText}</button>
            </div>
            <NumberInput
                id="tamanho"
                labelContent="Quantidade de Caracteres: "
                value={passwordSize}
                onChange={(ev) => setPasswordSize(Number(ev.target.value))}
            />
            <div className={styles.checks_container}>
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
            <button className={styles.btn_center} onClick={mudarSenha}>Gerar Senha</button>
        </div>
    )
}

export default Card
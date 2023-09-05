/* eslint-disable react/prop-types */
import styles from './styles.module.css'

function Title(){
    return (
        <>
            <h1 className={styles.title}>Gerador de Senhas</h1>
            <h3 className={styles.subtitle}>Gere senhas fortes e aleatórias para manter suas contas online seguras!</h3>
        </>
    )
}

export default Title
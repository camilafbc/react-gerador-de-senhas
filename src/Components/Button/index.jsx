import styles from './styles.module.css'

function Button({buttonContent, evento}){
    return (
        <button 
            className={styles.btn}
            onClick={evento}
        >
            {buttonContent}
        </button>
    )
}

export default Button
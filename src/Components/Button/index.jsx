/* eslint-disable react/prop-types */
import styles from './styles.module.css'

function Button({buttonContent, onClick}){
    return (
        <button 
            className={styles.btn}
            onClick={onClick}
        >
            {buttonContent}
        </button>
    )
}

export default Button
import styles from './styles.module.css'

function Saida({saidaContent}){
    return (
        <div className={styles.container}>
            <p>{saidaContent}</p>
        </div>
    )
}

export default Saida
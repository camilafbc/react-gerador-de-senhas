import styles from './styles.module.css'

function Title({titleContent}){
    return (
        <h1 className={styles.title}>
            {titleContent}
        </h1>
    )
}

export default Title
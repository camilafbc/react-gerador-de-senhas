/* eslint-disable react/prop-types */
import styles from './styles.module.css'

function NumberInput({labelContent, id, value, onChange}){
    return (
        <div>
            <label 
                htmlFor={id}
            >
                {labelContent}
            </label>
            <input 
                type="number"
                id={id}
                className={styles.input_check}
                min="1"
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default NumberInput
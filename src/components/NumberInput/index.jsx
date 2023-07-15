import './style.css'

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
                min="1"
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default NumberInput
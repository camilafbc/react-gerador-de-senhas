import './style.css'

function Input({htmlFor, labelContent, type, id, min, value, onChange}){
    return (
        <div>
            <label 
                htmlFor={htmlFor}
            >
                {labelContent}
            </label>
            <input 
                type={type}
                id={id}
                min={min}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default Input
import './style.css'

function CheckboxInput({id, labelContent, value, onChange}){
    return (
        <div>
            <label 
                htmlFor={id}
            >
                {labelContent}
            </label>
            <input 
                type="checkbox"
                id={id}
                min="1"
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default CheckboxInput
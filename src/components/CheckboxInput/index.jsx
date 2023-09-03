/* eslint-disable react/prop-types */
import './style.css'

function CheckboxInput({id, labelContent, checked, onChange}){
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
                checked={checked}
                onChange={onChange}
            />
        </div>
    )
}

export default CheckboxInput
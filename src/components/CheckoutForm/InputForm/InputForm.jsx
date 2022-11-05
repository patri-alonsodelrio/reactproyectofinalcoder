import React from 'react'

function InputForm({containerClass, labelClass, inputClass, labelText, value, handlerOnChange, name, type, placeHolder }) {
    return (
        <div className={containerClass}>
            <label className={labelClass} htmlFor="telefono">{labelText}</label>
            <input
                className={inputClass}
                value={value}
                onChange={handlerOnChange}
                name={name}
                type={type}
                placeholder={placeHolder}
                required
            />
        </div>
    )
}

export default InputForm;
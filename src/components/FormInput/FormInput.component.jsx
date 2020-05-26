import React from 'react'
import './FormInput.styles.scss'

const FormInput = ({handleChange, label, ...otherProps}) => (
    <div className='form-input'>
        {
            label ?
            (<label htmlFor={otherProps.id} className={`${otherProps.value.length ? 'small' : ''}`}>
                {label}
            </label>)
            : null
        }

        <input onChange={handleChange} {...otherProps} />
    </div>
)

export default FormInput
import React from 'react'
import './Button.styles.scss'

const Button = ({...ButtonProps}) => (
    <button {...ButtonProps}>{ButtonProps.value}</button>
)

export default Button
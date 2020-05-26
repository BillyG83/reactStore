import React from 'react'
import Button from '../Button/Button.component'
import './cart-overlay.styles.scss'

const CartOverlay = () => (
    <div className='cart-overlay'>
        <div className='cart-items' />
        <Button 
            className='button'
            type='submit' 
            value='Checkout' 
        />
    </div>
)

export default CartOverlay
import React from 'react'
import Button from '../Button/Button.component'
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions'

const ProductCard = ({item, addItem}) => {
    const { name, imageUrl, price } = item
    return (
        <li>
            <picture class="img" style={{ backgroundImage: `url(${imageUrl})` }} />
            <h3>{name}</h3>
            <p>£{price}</p>
            <Button 
                className='button'
                type='submit'
                value='Add to cart'
                onClick={() => addItem(item)}
            />
        </li>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(ProductCard)
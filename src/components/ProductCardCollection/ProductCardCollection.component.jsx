import React from 'react'
import ProductCard from '../ProductCard/ProductCard.component'
import './ProductCardCollection.styles.scss'

const ProductCardCollection = ({title, items}) => {
    return (
        <div className='product-cards'>
            <h2>{title}</h2>
            <ul>
                {
                    items.map((item, i) => (
                        i < 4 ? <ProductCard key={item.id} item={item} /> : null
                    ))
                }
            </ul>
        </div>
    )
}

export default ProductCardCollection
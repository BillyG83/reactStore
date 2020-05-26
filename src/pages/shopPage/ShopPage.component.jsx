import React from 'react'
import ProductCardCollection from '../../components/ProductCardCollection/ProductCardCollection.component'
import shopData from '../../shopData.js'

class ShopPage extends React.Component {
    constructor() {
        super()

        this.state = {
            collections: shopData
        }        
    }

    render() {
        const collections = this.state.collections
        
        return (
            <div className='shop-collection'>
                { collections.map((collection) => (
                    <ProductCardCollection 
                        key={collection.id} 
                        title={collection.title} 
                        routeName={collection.routeName}
                        items={collection.items}
                    />
                ))}
            </div>
            
        )
    }
    
}

export default ShopPage
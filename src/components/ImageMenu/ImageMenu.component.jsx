import React from 'react'
import ImageMenuItem from '../ImageMenuItem/ImageMenuItem.component'
import './ImageMenu.styles.scss'

class ImageMenu extends React.Component {
    constructor() {
        super()

        this.state = {
            sections: [
                {
                    id: 0,
                    title: 'Hats',
                    img: 'hats.jpg',
                    linkUrl: 'hats'
                },
                {
                    id: 1,
                    title: 'Shoes',
                    img: 'shoes.jpg',
                    linkUrl: 'shoes'
                },
                {
                    id: 2,
                    title: 'Shirts',
                    img: 'shirts.jpg',
                    linkUrl: 'shirts'
                },
                {
                    id: 3,
                    title: 'Women',
                    img: 'womens.jpg',
                    linkUrl: 'womens'
                },
                {
                    id: 4,
                    title: 'Men',
                    img: 'mens.jpg',
                    linkUrl: 'mens'
                }
            ]
        }
    }

    render() {
        return (
            <ul className='image-menu'>
                {this.state.sections.map(({id, ...otherSectionProps}) => (
                    <ImageMenuItem key={id} {...otherSectionProps} />
                    )
                )}
            </ul>
        )
    }
}

export default ImageMenu
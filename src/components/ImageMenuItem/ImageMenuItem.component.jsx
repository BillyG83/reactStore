import React from 'react'
import { withRouter } from 'react-router-dom'
import './ImageMenuItem.styles.scss'

const ImageMenuItem = ({title, img, history, linkUrl, match }) => {

    return (
        <li 
            className='image-menu-item bg-cover' 
            style={{
                backgroundImage: `url(img/${img})`
            }}
            onClick={() => history.push(`${match.url}${linkUrl}`)}
        >
            <div className='menu-item__text'>
                <h2>{title}</h2>
                <p>Shop now</p>
            </div>
        </li>
    )
}

export default withRouter(ImageMenuItem)
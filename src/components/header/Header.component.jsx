import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component'
import CartOverlay from '../cart-overlay/cart-overlay.component'
import './Header.styles.scss'

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link className='logo' to='/'>
            <Logo className="logo__svg" />
        </Link>

        <nav className='nav'>
            <ul>
                <li>
                    <Link to='/shop'>Shop</Link>
                </li>
                <li>
                    {
                        currentUser ?
                        <div 
                            onClick={() => auth.signOut()} 
                            alt={`You are signed in as ${currentUser.displayName}`}>
                            Sign Out
                        </div>
                        :
                        <Link to='/sign'>Sign In</Link>
                    }   
                </li>
            </ul>
            <CartIcon />
        </nav>
        {
            hidden ? null :
            <CartOverlay />
        }
        
    </div>
)

const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header)
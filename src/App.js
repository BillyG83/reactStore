import React from 'react'
import Header from './components/header/Header.component'
import HomePage from './pages/homePage/HomePage.component'
import ShopPage from './pages/shopPage/ShopPage.component'
import SignInAndUp from './pages/signInAndUp/SignInAndUp.component'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.actions'
import './App.scss';

class App extends React.Component {

  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props

    // firebase auth when state changed set userAuth to this user
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        // createUserProfileDocument is a custom function that uses userAuth
        const userRef = await createUserProfileDocument(userAuth)

        // onSnapShot is a firestore function that can return user info and data
        userRef.onSnapshot(snapShot => {
          // set sate for current user from id then spread in the other data
          setCurrentUser({
            currentUser: snapShot.id,
            ...snapShot.data()
          })
        })
      } else {
        // if this user logs out reset the current user to null
        setCurrentUser(userAuth)
      }
    })
  } 

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div className="App wrap">
        <Header />
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/sign' render={() => this.props.currentUser ? <Redirect to='/' /> : <SignInAndUp />} />
      </div>
    )
  }
}

const mapStateToProper = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProper, mapDispatchToProps)(App)
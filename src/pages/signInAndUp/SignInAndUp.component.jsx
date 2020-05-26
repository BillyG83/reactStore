import React from 'react'
import SignIn from '../../components/SignIn/SignIn.component'
import SignUp from '../../components/SignUp/SignUp.component'
import './SignInAndUp.styles.scss'

const SignPage = () => (
    <div className='sign-in-and-up'>
        <h1>Sign in or Sign up</h1>
        <div className='sign-flex'>
            <SignIn />
            <SignUp />
        </div>
    </div>
)

export default SignPage
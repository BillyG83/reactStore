import React from 'react'
import FormInput from '../FormInput/FormInput.component'
import Button from '../Button/Button.component'
import { signInWithGoogle } from '../../firebase/firebase.utils'


class SignIn extends React.Component {

    constructor() {
        super()

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({ email: '', password: '' })
    }

    handleChange = (e) => {
        const { value, name } = e.target
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <p>Sign in with your username and password</p>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        handleChange={this.handleChange} 
                        id='sign-in__email' 
                        label='Email'
                        name='email' 
                        type='email' 
                        value={this.state.email} 
                        placeholder='me@email.com' 
                        required    
                    />

                    <FormInput 
                        handleChange={this.handleChange} 
                        id='sign-in__password' 
                        label='Password'
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        placeholder='********' 
                        required                             
                    />
                
                    <Button 
                        className='button'
                        type='submit' 
                        value='Submit' 
                    />

                    <Button 
                        className='button button--google-sign-in'
                        type='button' 
                        value='Sign in with Google'
                        onClick={signInWithGoogle}
                    />
                </form>
            </div>
        )
    }
}

export default SignIn
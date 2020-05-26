import React from 'react'
import FormInput from '../FormInput/FormInput.component'
import Button from '../Button/Button.component'

class SignUp extends React.Component {

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
            <div className='sign-up'>
                <h2>I'd like to open an account</h2>
                <p>Sign up here or with your Gmail</p>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        handleChange={this.handleChange}
                        id='sign-up__email' 
                        name='email' 
                        type='email' 
                        label='Email'
                        value={this.state.email} 
                        placeholder='me@email.com' 
                        required 
                    />

                    <FormInput 
                        handleChange={this.handleChange}
                        id='sign-up__password' 
                        name='password' 
                        type='password' 
                        label='Password'
                        value={this.state.password} 
                        placeholder='********' 
                        required 
                    />

                    <Button 
                        className='button'
                        type='submit' 
                        value='Submit' 
                    />
                </form>
            </div>
        )
    }
}

export default SignUp
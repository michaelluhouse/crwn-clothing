import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../custom-button/custom-button.component.jsx';
import { signInWithGoogle } from '../../firebase/firebase.utils.js'

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    hendleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' })
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    render () {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
            
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email'
                        handleChange={this.handleChange}
                        value={this.state.email} 
                        label="email"
                        required 
                    />
                    <FormInput 
                        name='password'
                        type='password'
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        label="password"
                        required 
                    />
                    <CustomButton type='submit'>  Sign in </CustomButton>
                    <CustomButton onClick={signInWithGoogle}> 
                        {' '}
                        Sign in with Google{' '}
                    </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;
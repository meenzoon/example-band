import React, { Component } from 'react'

import SignInEmail from '../../components/user/SignInEmail'
import SignInGoogle from '../../components/user/SignInGoogle'
import SignInFacebook from '../../components/user/SignInFacebook'

export class SignIn extends Component {

    constructor(props) {
        super(props)
        this.state = {
             
        }
    }

    render() {
        return (
            <div>
                <SignInEmail />
                <SignInGoogle />
                <SignInFacebook />
            </div>
        )
    }
}

export default SignIn

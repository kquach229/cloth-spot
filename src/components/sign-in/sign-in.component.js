import React from "react";
import "./sign-in.styles.scss"
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWIthGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email:"",
            password: ""
        }
    }


    handleSubmit = e => {
        e.preventDefault();

        this.setState({
            email:"",
            password:""
        })
    }

    handleChange=(e)=> {
        const { value, name } = e.target;   
        this.setState({
            [name]:value
        })
    }

    render() {
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Signin with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput label="email" handleChange={this.handleChange} name="email" type="email" value={this.state.email}/>
                    <FormInput label="password" handleChange={this.handleChange} name="password" type="password" value={this.state.password}/>
                    <div className="buttons">
                        <CustomButton type="submit">SIGN IN</CustomButton>
                        <CustomButton type="submit" onClick={signInWIthGoogle} isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn;
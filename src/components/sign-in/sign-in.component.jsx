import React from "react";

import "./sign-in.styles.scss";

import FormInput from "../form__input/form__input.component";
import CustomBtn from "../custom-button/custom-button.component";

import { auth,signWithGoogle } from "../../firebase/firebase.utils";


class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        try{
            await auth.signInWithEmailAndPassword(this.state.email,this.state.password);
            this.setState({email: "", password: ""});
        } catch(error){
            console.log(error);
        }


    };
    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value});
    };

    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <h4>Sign in with your email and password</h4>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" required  value={this.state.email} handleChange={this.handleChange} label="email" />
                    <FormInput type="password" name="password" required  value={this.state.password} handleChange={this.handleChange} label="password" />
                    <div className="buttons">
                        <CustomBtn type="submit">submit button</CustomBtn>
                        <CustomBtn onClick={signWithGoogle} isGoogleSignIn>sign with google</CustomBtn>
                    </div>
                </form>
            </div>
        )
    }

}

export default SignIn;
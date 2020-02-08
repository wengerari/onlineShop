import React from "react";

import FormInput from "../form__input/form__input.component";
import CustomBtn from "../custom-button/custom-button.component";

import {auth, createUserProfileDocument} from "../../firebase/firebase.utils";

import "./sign-up.styles.scss";

class SignUp extends React.Component{
    constructor(){
        super();

        this.state={
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }

    }

    handleSubmit = async event => {
        event.preventDefault();

        if(this.state.password !== this.state.confirmPassword){
            return;
        }

        try{
            console.log(this.state.email);
            const user = await auth.createUserWithEmailAndPassword(this.state.email,this.state.password)
        
            await createUserProfileDocument(user, this.state.displayName);
        
            this.setState({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: ""
            })

        }
        catch(error){
            console.error(error);
        }


    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };

    render(){
        return(
            <div className="sign-up">
                <h2>I do not have an account</h2>
                <h4>Sign up with your email and password</h4>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="text" name="displayName" required  value={this.state.displayName} handleChange={this.handleChange} label="display Name" />
                    <FormInput type="email" name="email" required  value={this.state.email} handleChange={this.handleChange} label="Email" />
                    <FormInput type="password" name="password" required  value={this.state.password} handleChange={this.handleChange} label="password" />
                    <FormInput type="password" name="confirmPassword" required  value={this.state.confirmPassword} handleChange={this.handleChange} label="confirm Password" />
                    <CustomBtn type="submit">Sign up</CustomBtn>
                </form>
            </div>
        )
    }
}


export default SignUp;
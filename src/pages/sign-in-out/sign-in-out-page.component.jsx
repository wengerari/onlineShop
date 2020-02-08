import React from "react";

import "./sign-in-out-page.style.scss";

import "../../components/sign-in/sign-in.component";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SignInOutPage = () => (
    <div className="sign-in-out">
        <SignIn />
        <SignUp />
    </div>
)

export default SignInOutPage;
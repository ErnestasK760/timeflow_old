import React, { useState } from 'react';
import ReactDOM from "react-dom/client";
import Todolistcard from "../../items/Todolistcard";
import Progress_bar from "../../items/Progressbar";
import styled from "styled-components";
import {FacebookLogo} from "./pictures/facebook_logo";

const SignupForm = styled.div`
    display: flex;
    width: 100%;
    margin-top: 30px;
    height: 100%;
`
const InnerBody = styled.div`
    display: flex;
    height: 100%;
`
const SignUpFormLeft = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 35px 0px 0px 35px;
    padding: 0px;
    margin: 0px;
    background-color: #2B2E4A;
    width: 50%;
`
const SignUpFormRight = styled.div`
    padding: 30px;
    margin: 0px;
    background-color: white;
    width:50%;
`
const LeftFormText = styled.div`
    justify-content: center;
    align-items: center;
    text-align: center;
    & > * {
        color: white;
        font-family: Outfit,sans-serif;
    }
`
const InnerSignUpForm = styled.div`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`
const TopText = styled.div`
    font-family: Outfit,sans-serif;
    margin-left: 10%;
    margin-right: 20%;
    margin-top: 1%;
`
const FormFields = styled.div`
    margin-top: 3%;
    margin-left: 10%;
    margin-right: 20%;
    & > .signup-form {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid;
    }
    & > .socials {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        padding-top: 20px;
    }
    & > .socials > p {
        font-family: Outfit,sans-serif;
        font-size: 20px;
        text-align: center;
        width: 100%;
        margin: 0px;
        padding: 0px;
    }
`
const UsernameInput = styled.input`
    width: 100%;
    margin-bottom: 5%;
    border-bottom: 1px solid;
    border-left: 0px solid;
    border-top: 0px solid;
    border-right: 0px solid;
`
const PasswordInput = styled.input`
    width: 100%;
    border-bottom: 1px solid;
    border-left: 0px solid;
    border-top: 0px solid;
    border-right: 0px solid;
`
const SubmitButton = styled.button`
    background-color: #E84545;
    font-family: Outfit,sans-serif;
    font-weight: 500;
    font-size: 22px;
    color: white;
    border-radius: 35px;
    padding: 15px;
    padding-left: 20px;
    padding-right: 20px;
    margin: 30px;
    border: none;
`

interface userData {

}
const Signup: React.FC<any> = () => {
    const [count, setCount] = useState<number | null >(0);
    return (
        <InnerBody className="inner-body">
            <SignupForm>
                <SignUpFormLeft>
                    <LeftFormText>
                        <h1>Sign Up</h1>
                        <span>Če bus logo</span>
                    </LeftFormText>
                </SignUpFormLeft>
                <SignUpFormRight>
                    <InnerSignUpForm>
                        <TopText>
                            <h1>Hello!</h1>
                            <span>Please sign up to continue</span>
                        </TopText>
                        <FormFields>
                            <form className="signup-form">
                                <UsernameInput type="text" id="username" name="username" placeholder="Username"/>
                                <PasswordInput type="text" id="password" name="password" placeholder="Password"/>
                                <SubmitButton type="submit">Create account</SubmitButton>
                            </form>
                            <div className="socials">
                                <p>Or create account using social media!</p>
                                <FacebookLogo/>
                            </div>
                        </FormFields>
                    </InnerSignUpForm>
                </SignUpFormRight>
            </SignupForm>
        </InnerBody>
    );
}

export default Signup;

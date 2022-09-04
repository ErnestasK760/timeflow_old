import React from 'react';
import styled from "styled-components";
import {FacebookLogo} from "../todolist/pictures/facebook_logo";

const LoginForm = styled.div`
    display: flex;
    width: 100%;
    margin-top: 30px;
    height: 100%;
`
const InnerBody = styled.div`
    display: flex;
    height: 100%;
`
const LoginFormLeft = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 35px 0px 0px 35px;
    padding: 0px;
    margin: 0px;
    background-color: #2B2E4A;
    width: 50%;
`
const LoginFormRight = styled.div`
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
const InnerLoginForm = styled.div`
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

interface Props {

}
const Login: React.FC<Props> = () => {
    return (
        <InnerBody className="inner-body">
            <LoginForm>
                <LoginFormLeft>
                    <LeftFormText>
                        <h1>Login</h1>
                        <span>Če bus logo</span>
                    </LeftFormText>
                </LoginFormLeft>
                <LoginFormRight>
                    <InnerLoginForm>
                        <TopText>
                            <h1>Login</h1>
                        </TopText>
                        <FormFields>
                            <form className="signup-form">
                                <UsernameInput type="text" id="username" name="username" placeholder="Username"/>
                                <PasswordInput type="text" id="password" name="password" placeholder="Password"/>
                                <SubmitButton type="submit">Sign in</SubmitButton>
                            </form>
                            <div className="socials">
                                <p>Or login using social media!</p>
                                <FacebookLogo/>
                            </div>
                        </FormFields>
                    </InnerLoginForm>
                </LoginFormRight>
            </LoginForm>
        </InnerBody>
    );
}
export default Login;

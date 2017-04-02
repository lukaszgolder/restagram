//@flow
import React, { Component } from 'react';
import styled from 'styled-components';

import { FormComponent, CardComponent, ButtonComponent, FormGroupComponent, InputComponent } from '../shared/index';

export class LoginForm extends Component {
  render() {
    const LoginForm = styled.aside`
      height: 100%;
      max-width: 350px;
      flex-grow: 1;
      text-align: center;
    `;

    const Title = styled.h1`
      margin: 0 0 8px;
    `;

    const Separator = styled.div`
     width: 100;
     color: #c7c7c7;
     position: relative;
     text-transform: uppercase;
     overflow: hidden;
     margin: 10px 0 18px;
     font-size: 13px;
     line-height: 15px;
     
     &:after{
       top: -7px;
       content: '';
       display: block;
       position: relative;
       width: 100%;
       height: 1px;
       background-color: #c7c7c7;
       z-index:0;
     }
     
     span{
       background-color: #fff;
       z-index: 1;
       padding: 0 20px
       position: relative;
     }
    `;

    const Subtitle = styled.h2`
      font-size: 17px;
      margin: 0 0 10px
      color: #999;
    `;

    const Input = styled(InputComponent)`
      color:#262626;
      margin: 6px 0;
      
      &::placeholder{
      color: #dbdbdb;
      }
    `;

    const FacebookButton = styled(ButtonComponent)`
      font-size: 16px;
    `;

    const SignUpButton = styled(ButtonComponent)`
      margin: 8px 0;
    `;

    const TermsWrapper = styled.p`
      margin: 10px 60px 20px;
      color: #999;
      font-size: 14px;
      line-height: 18px;
      
      a {
        color: #999;
        font-weight: 600;
      }
    `;

    const FormSwitch = styled.p`
      color: #262626;
      font-size: 14px;
      margin: 15px;
      text-align: center;
      
      a {
        color: #3897f0;
      }
    `;

    return (
      <LoginForm>
        <CardComponent>
          <FormComponent>
            <Title>Restagram</Title>
            <Subtitle>Sign up to see photos and videos from your friends.</Subtitle>
            <FacebookButton>Log in with facebook</FacebookButton>

            <Separator>
              <span>or</span>
            </Separator>

            <FormGroupComponent>
              <Input type="email" placeholder="Email" />
              <Input type="text" placeholder="Full Name" />
              <Input type="text" placeholder="Username" />
              <Input type="password" placeholder="Password" />
              <SignUpButton>Sign up</SignUpButton>
            </FormGroupComponent>

          </FormComponent>

          <TermsWrapper>
            By signing up, you agree to our {' '}
            <a href="">Terms</a>
            {' '}&{' '}
            <a href="">Privacy Policy</a>.
          </TermsWrapper>

        </CardComponent>

        <CardComponent>
          <FormSwitch>Have an account? <a href="">Log in</a></FormSwitch>
        </CardComponent>
      </LoginForm>
    );
  }
}

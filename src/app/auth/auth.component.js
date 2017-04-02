// @flow

import React, { Component } from 'react';
import styled from 'styled-components';

import { PhonesSlider } from './phones-slider.component';
import { LoginForm } from './login-form.component';

export class LoginComponent extends Component {
  render() {
    const Login = styled.section`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin: 30px auto;
    `;

    const Phones = styled.aside`
      height: 100%;
      position: relative;
      top: 30px
    `;

    return (
      <Login>
        <Phones>
          <PhonesSlider />
        </Phones>

        <LoginForm />
      </Login>
    );
  }
}

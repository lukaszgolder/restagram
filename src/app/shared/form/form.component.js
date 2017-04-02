// @flow

import React, { Component } from 'react';
import styled from 'styled-components';

type Props = {
  children: any,
};

export class FormComponent extends Component {
  props: Props;

  render() {
    const Form = styled.form`// styled
      display: flex;
      padding: 0 40px;
      flex-direction: column;
    `;

    return <Form>{this.props.children}</Form>;
  }
}

// @flow

import React, { Component } from 'react';
import styled from 'styled-components';

type Props = {
  placeholder: string,
  type: 'text' | 'password' | 'email',
};

export class InputComponent extends Component {
  props: Props;

  static defaultProps = {
    type: 'text',
  };

  render() {
    const Input = styled.input`// styled
      width: 100%;
      color: #262626;
      font-size: 14px;
      background: 0 0;
      font-weight: 300;
      border-radius: 3px;
      border: 1px solid #dbdbdb;
      box-sizing: border-box;
      padding: 9px 8px 7px;
      -webkit-appearance: none;
      
      &:focus {
        border: 1px solid #b2b2b2;
        outline: none;
      }
    `;

    return <Input {...this.props} />;
  }
}

import React, { Component } from 'react';
import styled from 'styled-components';

export class ButtonComponent extends Component {
  render() {
    const Button = styled.button`// styled
      color: #fff;
      cursor: pointer;
      background: #3897f0;
      border-color: #3897f0;
      border-radius: 3px;
      border-style: solid;
      border-width: 1px;
      font-size: 16px;
      line-height: 28px;
      font-weight: 600;
      outline: none;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
      -webkit-appearance: none;
    `;

    return <Button>{this.props.children}</Button>;
  }
}

// @flow

import React, { Component } from 'react';
import styled from 'styled-components';

type Props = {
  children: any,
};

export class FormGroupComponent extends Component {
  props: Props;

  render() {
    const FormGroup = styled.div`// styled
      margin: 0 0 6px;
      position: relative;
    `;

    return <FormGroup>{this.props.children}</FormGroup>;
  }
}

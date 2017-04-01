import React, { Component } from 'react';
import styled from 'styled-components';

type Props = {
  children: any,
};

export class CardComponent extends Component {
  props: Props;

  render() {
    const Card = styled.div`// styled
      background-color: #fff;
      border: 1px solid #e6e6e6;
      border-radius: 1px;
      margin: 0 0 10px;
      padding: 10px 0;
    `;

    return <Card>{this.props.children}</Card>;
  }
}

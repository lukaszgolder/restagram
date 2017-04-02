//@flow

import React, { Component } from 'react';
import styled from 'styled-components';

export class PhonesSlider extends Component {
  render() {
    const Phones = styled.div`
      background-image: url(${require('../../assets/images/phone.png')});
      background-repeat: no-repeat;
      background-size: cover;
      width: 410px;
      height: 600px;
      margin-right: 20px;
    `;
    return (
      <div>
        <Phones />
      </div>
    );
  }
}

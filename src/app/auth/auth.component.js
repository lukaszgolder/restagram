// @flow

import React, { Component } from 'react';

export class AuthComponent extends Component {
  render() {
    return (
      <section>
        {this.props.children}
      </section>
    );
  }
}

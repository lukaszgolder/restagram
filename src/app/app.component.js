import React, { Component } from 'react';

export class AppComponent extends Component {
  render() {
    return (
      <main>
        {this.props.children}
      </main>
    );
  }
}

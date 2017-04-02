import React, { Component } from 'react';

import 'normalize.css/normalize.css';

export class AppComponent extends Component {
  render() {
    return (
      <main>
        {this.props.children}
      </main>
    );
  }
}

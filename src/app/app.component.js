import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600');

/*reset*/
body {
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
  background-color: #fafafa;
}

* {
  font-family: 'Open Sans', sans-serif;
}

#root, body, html {
  height: 100%;
}

#root {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  flex-shrink: 0;
}

a {
text-decoration: none;
}
`;

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

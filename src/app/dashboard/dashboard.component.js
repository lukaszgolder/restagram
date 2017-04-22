//@flow
import React, { Component } from 'react';

export class DashboardComponent extends Component {
  render() {
    return (
      <section>
        <h1>Dashboard</h1>
        {this.props.children}
      </section>
    );
  }
}

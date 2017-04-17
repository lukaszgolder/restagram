// @flow

import React, { Component } from 'react';
import { Link } from 'react-router';
import test from '../../redux/auth/auth.actions';

export class LoginFormComponent extends Component {
  render() {
    return (
      <form>
        <h1>Restagram</h1>
        <h2>login</h2>

        <div>
          <input type="text" name="login" placeholder="Username" />
          <input type="password" name="password" placeholder="Password" />
          <Link to="/user/password">Forgot?</Link>
          <input type="submit" value="login" />
        </div>

        <div>
          Don't have an account?
          <Link to="/auth/register">Sign up</Link>
        </div>
      </form>
    );
  }
}

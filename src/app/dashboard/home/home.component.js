//@flow
import React, { Component } from 'react';
import { browserHistory } from 'react-router';

export class DashboardHomeComponent extends Component {
  componentWillMount() {
    if (!this.props.access_token) {
      browserHistory.push('/auth');
    }
  }

  render() {
    const { bio, full_name, profile_picture, username, website } = this.props.user;
    return (
      <div>
        <h2>home</h2>

        <div>
          <div>
            <img src={profile_picture} alt="profile" />
            <p>{username}</p>
            <p>{full_name}</p>
            <p>{bio}</p>
            <p>{website}</p>
          </div>
        </div>
      </div>
    );
  }
}

//@flow
import { connect } from 'react-redux';
import { DashboardHomeComponent } from './home.component';

const mapStateToProps = ({ auth: { access_token, user } }) => ({
  access_token,
  user,
});

export const DashboardHomeContainer = connect(mapStateToProps, undefined)(DashboardHomeComponent);

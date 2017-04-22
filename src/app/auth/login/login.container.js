//@flow
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';

import { LoginFormComponent } from './login.component';
import { login } from '../../redux/auth/auth.actions';

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: data => dispatch(login(data)),
});

export const LoginContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'login',
  }),
)(LoginFormComponent);

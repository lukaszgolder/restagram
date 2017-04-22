import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { auth } from './redux/auth/auth.reducer';
import { reducer as form } from 'redux-form';

export const appReducer = combineReducers({
  routing,
  auth,
  form,
});

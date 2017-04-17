import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { authReducer } from './redux/auth/auth.reducer';

export const appReducer = combineReducers({
  routing,
  authReducer,
});

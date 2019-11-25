import { combineReducers } from 'redux';
import HomeReducer from './HomeReducer';
import RouterComponent from './RoutesReducer';

export default combineReducers({
  home: HomeReducer,
  router: RouterComponent,
});
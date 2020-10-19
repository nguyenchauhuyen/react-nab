import { combineReducers } from 'redux';
import weather from './weatherReducer';

const appReducers = () =>
  combineReducers({
    weather
  });

export default appReducers;

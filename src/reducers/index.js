import { combineReducers } from 'redux';
import ItineraryReducer from './ItineraryReducer';

export default combineReducers({
  currentItinerary: ItineraryReducer
});

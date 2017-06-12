import { combineReducers } from 'redux';
import ItineraryReducer from './ItineraryReducer';
import CitiesReducer from './CitiesReducer';
import SpecificCityItinerariesReducer from './SpecificCityItinerariesReducer';

export default combineReducers({
  currentItinerary: ItineraryReducer,
  cities: CitiesReducer,
  itineraries: SpecificCityItinerariesReducer
});

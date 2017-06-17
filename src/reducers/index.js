import { combineReducers } from 'redux';
import ItineraryReducer from './ItineraryReducer';
import CitiesReducer from './CitiesReducer';
import SpecificCityItinerariesReducer from './SpecificCityItinerariesReducer';
import DowntownItineraryReducer from './DowntownItineraryReducer';

export default combineReducers({
  currentItinerary: ItineraryReducer,
  cities: CitiesReducer,
  itineraries: SpecificCityItinerariesReducer,
  downtownItinerary: DowntownItineraryReducer
});

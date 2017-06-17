import {
  SELECTED_CITY,
  SELECTED_ITINERARY,
  NEXT_STEP
} from '../actions/types';

const INITIAL_STATE = {
  selectedIdCity: '',
  selectedIdItinerary: '',
  selectedNameCity: '',
  selectedNameItinerary: '',
  playingItinerary: false,
  currentStep: 0
 };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECTED_CITY:
      return {
        ...state,
        selectedIdCity: action.payload.selectedIdCity,
        selectedNameCity: action.payload.selectedNameCity };
    case SELECTED_ITINERARY:
      return {
        ...state,
        selectedIdItinerary: action.payload.selectedIdItinerary,
        selectedNameItinerary: action.payload.selectedNameItinerary,
        playingItinerary: true,
        currentStep: 1
       };
    case NEXT_STEP:
      return { ...state, currentStep: state.currentStep + 1 };
    default:
      return state;
  }
};

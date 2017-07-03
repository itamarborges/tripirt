import {
  SELECTED_CITY,
  SELECTED_ITINERARY,
  NEXT_STEP
 } from './types';

export const selectedCity = ({ cityId, cityName }) => {
  return {
    type: SELECTED_CITY,
    payload: {
      selectedIdCity: cityId,
      selectedNameCity: cityName }
  };
};

export const selectedItinerary = ({ itineraryId, itineraryName, itinerarySteps }) => {
  return {
    type: SELECTED_ITINERARY,
    payload: {
      selectedItineraryId: itineraryId,
      selectedItineraryName: itineraryName,
      selectedItinerarySteps: itinerarySteps
    }
  };
};

export const nextStep = () => {
  return {
    type: NEXT_STEP
  };
};

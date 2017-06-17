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

export const selectedItinerary = ({ itineraryId, itineraryName }) => {
  return {
    type: SELECTED_ITINERARY,
    payload: {
      selectedIdItinerary: itineraryId,
      selectedNameItinerary: itineraryName }
  };
};

export const nextStep = () => {
  return {
    type: NEXT_STEP
  };
};

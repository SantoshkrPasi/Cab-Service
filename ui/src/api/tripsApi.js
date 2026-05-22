import API from "./axios.js";

// BOOK TRIP
export const bookTrip = (userId, tripData) => {
  return API.post(`/${userId}/book-trip`, tripData);
};

// GET ALL TRIPS
export const getTrips = (userId) => {
  return API.get(`/${userId}/trips`);
};
import { create } from 'zustand';
const API_KEY = import.meta.env.VITE_TICKETMASTER_API_KEY;

const useResults = create((set) => ({
  data: [],
  error: '',
  isLoading: true,
  fetchEvents: async (params) => {
    try {
      const response = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${API_KEY}&countryCode=MX${
          params ? params : ''
        }`
      );
      const data = await response.json();
      await set(() => ({ data }));
    } catch (error) {
      await set(() => ({ error }));
    } finally {
      await set(() => ({ isLoading: false }));
    }
  },
  detailEvent: {},
  isLoadingDetail: true,
  errorDetail: '',
  fetchEventDetail: async (id) => {
    try {
      await set(() => ({ isLoadingDetail: false }));
      const eventDetail = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events/${id}?apikey=${API_KEY}`
      );
      const response = await eventDetail.json();
      await set(() => ({ detailEvent: response }));
    } catch (error) {
      await set(() => ({ errorDetail: error }));
    }
  },
}));

export default useResults;

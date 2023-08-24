import { create } from "zustand";

import DBFetch from "../services/DBFetch";

const useMovieStore = create((set) => ({
  movieIds: [],
  setMovies: async () => {
    const response = await DBFetch.getAll();
    set((state) => ({ movieIds: [...response] }));
  },
  appendMovieId: async (id) => {
    await DBFetch.appendElement(id);
    set((state) => ({ movieIds: [...state.movieIds, id] }));
  },
  removeMovieId: async (id) => {
    await DBFetch.deleteElement(id);
    set((state) => ({
      movieIds: state.movieIds.filter((movieId) => movieId !== id),
    }));
  },

  isMoviePresent: (id) => {
    const state = useMovieStore.getState(); // Access the state using getState
    const present = state.movieIds.find((el) => el.id === id);

    return present;
  },
}));

export default useMovieStore;

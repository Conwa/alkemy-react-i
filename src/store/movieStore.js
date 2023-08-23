import { create } from "zustand";

const useMovieStore = create((set) => ({
  movieIds: [],
  addMovieId: (id) => set((state) => ({ movieIds: [...state.movieIds, id] })),
  removeMovieId: (id) =>
    set((state) => ({
      movieIds: state.movieIds.filter((movieId) => movieId !== id),
    })),
  isMoviePresent: (id) => {
    const state = useMovieStore.getState(); // Access the state using getState
    return state.movieIds.includes(id);
  },
}));

export default useMovieStore;

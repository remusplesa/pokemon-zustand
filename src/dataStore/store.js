import create from "zustand";

const useStore = create((set, get) => ({
  language: "english",
  setLanguage: (language) => set({ language }),
  filter: "",
  setFilter: (filter) => set({ filter }),
  pokemons: [],
  setPokemons: (pokemons) => set({ pokemons }),
  results: () =>
    get().pokemons.filter(({ name }) =>
      name[get().language].toLowerCase().startsWith(get().filter.toLowerCase())
    ),
  noOfPokemons: () => get().results().length,
  selected: [],
  setSelected: (selected) => set({ selected }),
}));

export default useStore;

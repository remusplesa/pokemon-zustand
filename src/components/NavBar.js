import React, { useState } from "react";
import useStore from "../dataStore/store";

const pokeballLogo =
  "https://seeklogo.com/images/P/pokeball-logo-DC23868CA1-seeklogo.com.png";

const LangToggle = () => {
  const setLanguage = useStore((state) => state.setLanguage);

  return (
    <div
      className="btn-group-vertical"
      style={{ position: "absolute", bottom: -85, right: 5 }}
    >
      <button
        onClick={() => {setLanguage("english")}}
        type="button"
        className="btn btn-secondary"
      >
        English
      </button>
      <button
        onClick={() => {setLanguage("japanese")}}
        type="button"
        className="btn btn-secondary"
      >
        Japanese
      </button>
      <button
        onClick={() => {setLanguage("chinese")}}
        type="button"
        className="btn btn-secondary"
      >
        Chinese
      </button>
      <button
        onClick={() => {setLanguage("french")}}
        type="button"
        className="btn btn-secondary"
      >
        French
      </button>
    </div>
  );
};

const NavBar = () => {
  const filter = useStore((state) => state.filter);
  const setFilter = useStore((state) => state.setFilter);
  const noOfPokemons = useStore((state) => state.noOfPokemons());

  const [langSettingOpen, setLangSettingOpen] = useState(false);

  return (
    <nav className="navbar navbar-dark navbar-expand-sm sticky-top bg-dark justify-content-between align-items-center">
      <a className="navbar-brand" href="/">
        <img src={pokeballLogo} style={{ width: 45, height: 45 }} alt="logo" />
      </a>
      <form className="form-inline" style={{ color: "white" }}>
        <label className="mr-sm-2">Filter Pokemons</label>
        <input
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          type="text"
          className="form-control mb-mt-2 mr-sm-2"
          placeholder="name of pokemon"
        />
        <h4 className="mr-4">
          <span className="badge badge-warning" style={{ width: 150 }}>
            {noOfPokemons} results
          </span>
        </h4>
        <div onMouseEnter={(e) => setLangSettingOpen(true)}
            style={{ width: 35, height: 35 }}>
            <h2>🌍</h2>
   
        </div>
        {langSettingOpen && (
          <div
            onMouseLeave={(e) => setLangSettingOpen(false)}
            style={{
              color: "green",
              position: "absolute",
              bottom: -50,
              right: 5,
            }}
          >
            <LangToggle />
          </div>
        )}
      </form>
    </nav>
  );
};

export default NavBar;

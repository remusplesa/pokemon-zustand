import React, { useState } from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import useStore from "../dataStore/store";

const CompareChart = () => {
  const selected = useStore((state) => state.selected);
  const language = useStore((state) => state.language);

  const data = selected.map((item) => ({
    name: item.name[language],
    hp: item.base["HP"],
    attack: item.base["Attack"],
    defense: item.base["Defense"],
    specialAttack: item.base["Sp. Attack"],
    specialDefense: item.base["Sp. Defense"],
    speed: item.base["Speed"],
  }));

  return (
    <ResponsiveContainer aspect={2} width={"100%"}>
      <BarChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }} >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip animationEasing='ease-in' animationDuration={500}/>
        <Legend />
        <Bar dataKey="hp" stackId="a" fill="#DB2B39" />
        <Bar dataKey="attack" stackId="a" fill="#29335C" />
        <Bar dataKey="defense" stackId="a" fill="#F3A712" />
        <Bar dataKey="specialAttack" stackId="a" fill="#F0CEA0" />
        <Bar dataKey="specialDefense" stackId="a" fill="#534D41" />
        <Bar dataKey="speed" stackId="a" fill="#43BCCD" />
      </BarChart>
    </ResponsiveContainer>
  );
};

const CompareModal = () => {
  const selected = useStore((state) => state.selected);

  const [isOpen, setIsOpen] = useState(false);

  if (isOpen) {
    return (
      <div
        style={{
          position: "fixed",
          top: 100,
          width: "100vw",
          zIndex: 9998,
        }}
      >
        <div className="card m-5" style={{ height: "80vh" }}>
          <div className="card-header">
            <h3>Compare pokemons</h3>
          </div>
          <div className="card-body" style={{ overflowY: "scroll" }}>
            <CompareChart />
          </div>
          <div className="card-footer">
            <button
              onClick={() => setIsOpen(false)}
              type="button"
              className="btn btn-primary float-right"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      selected.length > 1 && (
        <button
          onClick={() => setIsOpen(true)}
          type="button"
          className="btn btn-danger"
          style={{
            position: "fixed",
            bottom: 40,
            right: 40,
            zIndex: 999,
            boxShadow: "-3px 3px 20px #9a9a9a",
          }}
        >
          <h4 className="m-0">
            Compare <br />
            {selected.length} pokemons
          </h4>
        </button>
      )
    );
  }
};

export default CompareModal;

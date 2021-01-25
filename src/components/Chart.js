import React from "react";

const Chart = ({ hp, attack, defense, spAttack, spDefense, speed }) => {
  const width = 160;

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 3,
        }}
      >
        {" "}
        <span>hp </span>
        <div
          style={{
            width: (hp * width) / 100,
            backgroundColor: "orange",
            textAlign: "center",
          }}
        >
          {hp}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 3,
        }}
      >
        {" "}
        <span>attack </span>
        <div
          style={{
            width: (attack * width) / 100,
            backgroundColor: "orange",
            textAlign: "center",
          }}
        >
          {attack}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 3,
        }}
      >
        {" "}
        <span>defense </span>
        <div
          style={{
            width: (defense * width) / 100,
            backgroundColor: "orange",
            textAlign: "center",
          }}
        >
          {defense}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 3,
        }}
      >
        {" "}
        <span>spAttack </span>
        <div
          style={{
            width: (spAttack * width) / 100,
            backgroundColor: "orange",
            textAlign: "center",
          }}
        >
          {spAttack}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 3,
        }}
      >
        {" "}
        <span>spDefense </span>
        <div
          style={{
            width: (spDefense * width) / 100,
            backgroundColor: "orange",
            textAlign: "center",
          }}
        >
          {spDefense}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 3,
        }}
      >
        {" "}
        <span>speed </span>
        <div
          style={{
            width: (speed * width) / 100,
            backgroundColor: "orange",
            textAlign: "center",
          }}
        >
          {speed}
        </div>
      </div>
    </div>
  );
};

export default Chart;

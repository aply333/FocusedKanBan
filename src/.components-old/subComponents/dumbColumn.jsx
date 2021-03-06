import React from "react";
import DumbCard from "./dumbCard";
import Colors from "../../assets/colors";

const DumbColumn = ({ data }) => {
  return (
    <div style={{ maxWidth: "25em" }}>
      <div
        style={{
          marginRight: "1rem",
          minWidth: "17rem",
          transition: "all ease 0.75s",
        }}
      >
        <div
          className="innerColumn"
          style={{
            backgroundColor: Colors.white,
            border: `1px solid ${Colors.white}`,
          }}
        >
          <div
            className="columnHeader"
            style={{
              backgroundColor: Colors.white,
            }}
          >
            <h3 style={{ color: Colors.base }}>{data.title}</h3>
            <button
              className="addButton"
              style={{ transform: "scale(0.75)", marginTop: "0.025rem" }}
            >
              +
            </button>
          </div>
          {data.cards.map((card) => (
            <DumbCard key={Math.random()} cardId={card.id} data={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DumbColumn;

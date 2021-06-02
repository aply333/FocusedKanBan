import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { navstyles } from "../accountRoutes/dashboard/dashStyles";
import { styles } from "../accountRoutes/login/loginStyles";
import Colors from "../assets/colors";
import "./styles.css";

const NavBar = ({ newCol }) => {
  const [popMenu, setPopMenu] = useState(false);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    newCol(data.new_title);
    setPopMenu(false);
  };

  const ColMenu = () => {
    return (
      <div
        className="inputPop"
        style={{
          backgroundColor: Colors.white,
          zIndex: "99",
        }}
      >
        <h1 style={styles.header}>Create New Column</h1>
        <form
          style={{ ...styles.form, width: "100%" }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            style={styles.input}
            type="text"
            placeholder="Column Title"
            name="new_title"
            ref={register}
          />
          <input type="submit" style={styles.button} />
        </form>
        <div style={{ display: "flex", flexFlow: "column" }}>
          <button
            style={styles.button}
            onClick={() => {
              setPopMenu(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      {popMenu === true ? <ColMenu /> : null}
      <nav style={navstyles.container}>
        <h1 style={navstyles.header}>Trello Clone</h1>
        <div style={navstyles.navRight}>
          <button style={navstyles.menu}>dashboard</button>
          <button
            style={navstyles.menu}
            onClick={() => {
              setPopMenu(true);
            }}
          >
            + column
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

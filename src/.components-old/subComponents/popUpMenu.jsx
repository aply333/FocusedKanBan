import React from "react";
import { useForm } from "react-hook-form";
import { styles } from "../../accountRoutes/login/loginStyles";
import Colors from "../../assets/colors";


const PopUpMenu = ({ title, stateHandler, popStateHandler, columnId }) => {
  const { register, handleSubmit } = useForm();
  const submitHandler = (data) => {
    stateHandler(columnId, data);
    popStateHandler(false);
  };
  return (
    <div
      className="inputPop"
      style={{ backgroundColor: Colors.white, height: "30rem" }}
    >
      <h1 style={styles.header}>{title}</h1>
      <form
        onSubmit={handleSubmit(submitHandler)}
        style={styles.form}
      >
        <input
          style={styles.input}
          type="text"
          placeholder="Card Title"
          name="card_title"
          ref={register}
        />
        <textarea
          style={{ margin: "1rem auto 0 auto",width: "95%", resize: "none" }}
          rows= "15"
          placeholder="card details"
          name="description"
          ref={register}
        />
        <input type="submit"  style={styles.button}/>
      </form>
      <button
        style={styles.button}
        onClick={(e) => {
          e.preventDefault();
          popStateHandler(false);
        }}
      >
        Cancel
      </button>
    </div>
  );
};

export default PopUpMenu;

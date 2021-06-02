import { styles } from "../../login/loginStyles";
import { editStyles } from "../boardStyles";
import Card from "../innerBoardComponents/card";

function EditMenu() {

    const placeholderCard = {
        card_name: "card name",
        description: "card info and stuff"
    }
  return (
    <>
      <div style={editStyles.container}>
        <div style={editStyles.leftPad}/>
        <div>
          <h2 style={styles.header}>New Column</h2>
          <form style={styles.form}>
            <h3 style={styles.header}>column name</h3>
            <input style={styles.input} />
            <button type="submit" style={styles.button}>
              + column
            </button>
          </form>
        </div>
        <br />
        <div style={editStyles.newCardForm}>
          <div style={{marginRight: "2rem", width: "20rem"}}>
            <h2 style={styles.header}>New Card</h2>
            <form style={styles.form}>
              <h3 style={styles.header}>card name</h3>
              <input style={styles.input} />
              <h3>about the card</h3>
              <textarea />
            </form>
          </div>
          <div style={editStyles.newCard}>
              <Card card={placeholderCard}/>
              <p>Drag the card to the board to add it.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditMenu;

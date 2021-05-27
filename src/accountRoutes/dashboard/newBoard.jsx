import { styles } from "../login/loginStyles";
import { newBoardStyles } from "./dashStyles";

function NewBoard(){
    return(
        <div style={newBoardStyles.container}>
        <h2 style={styles.header}>Create New Board</h2>
        <form style={styles.form}>
            <h3>board name</h3>
            <input style={styles.input} type="text"/>
            <h3>about</h3>
            <textarea/>
            <button type="submit" style={styles.button}>confirm</button>
        </form>
        </div>
    )
}

export default NewBoard;
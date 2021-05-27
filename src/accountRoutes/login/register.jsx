import { styles } from "./loginStyles";

function Register({view}){
    return(
        <div style={view}>
            <h1 style={styles.header}>Account Creation</h1>
            <form style={styles.form}>
                <h3>name</h3>
                <input style={styles.input} type = "text"/>
                <h3>email</h3>
                <input style={styles.input} type = "email"/>
                <h3>passowrd</h3>
                <input style={styles.input} type = "password"/>
                <h3>confirm passowrd</h3>
                <input style={styles.input} type = "password"/>
                <button style={styles.button}>Confirm</button>
            </form>
        </div>
    )
}

export default Register;
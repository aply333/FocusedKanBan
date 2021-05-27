import { styles } from "../login/loginStyles"
import { settingStyles } from "./dashStyles"

function Settings(){
    return(
        <div style={settingStyles.container}>
        <div style={settingStyles.section}>
            <h1 style={styles.header}>Change Password</h1>
            <form style={styles.form}>
                <h3>old password</h3>
                <input type="password" style={styles.input}/>
                <h3>new password</h3>
                <input type="password" style={styles.input}/>
                <h3>confrim password</h3>
                <input type="password" style={styles.input}/>
                <button type="submit" style={styles.button}>confirm</button>
            </form>
        </div>
        <div style={settingStyles.section}>
            <h1 style={styles.header}>Change Email</h1>
            <form style={styles.form}>
            <h3>new email</h3>
            <input type="email" style={styles.input}/>
            <button style={styles.button}>confirm</button>
            </form>
        </div>
        <div style={settingStyles.section}>
            <h1 style={styles.header}>Other Options</h1>
        </div>
        </div>
    )
}

export default Settings
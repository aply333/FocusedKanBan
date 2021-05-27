import React, { useState, useEffect } from "react";
import intro from "../../assets/Animations/IntroAnimation.gif"
import { styles, initState } from "./loginStyles";
import Register from "./register";

function Login() {
  const [isSign, setSign] = useState(false);
  const toggleSign = () => {
    isSign === true ? setSign(false) : setSign(true);
  };
  const [signUpView, setSignUpView] = useState(initState)
  useEffect(()=> {
    if(isSign===true){
        setSignUpView({
            form:{
                ...initState.form,
                transition: "all ease 1s",
                opacity: "100%"
            },
            intro:{
                ...initState.itro,
                display:"none"
            }
        })
    }else{
        setSignUpView(initState)
    }
  }, [isSign])
  return (
    <div style={styles.bounds}>
      <div style={styles.sections}>
        <span style={styles.span}>
          <h1 style={styles.header}>Focused </h1>
          <h1 style={styles.header2}>KanBan</h1>
        </span>
        <form style={styles.form}>
          <h3>email </h3>
          <input type="text" style={styles.input} />
          <h3>password </h3>
          <input type="password" style={styles.input} />
          <button type="submit" style={styles.button}>
            Log-in
          </button>
        </form>
        <button
          style={styles.button}
          onClick={() => {
            toggleSign();
          }}
        >
          Sign-up
        </button>
      </div>
      <div style={styles.gap} />
      <div style={styles.sections}>
          <img style={signUpView.intro} src={intro} />
          <Register view={signUpView.form}/>
     </div>
    </div>
  );
}

export default Login;

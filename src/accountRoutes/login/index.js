import React, { useState, useEffect } from "react";
import intro from "../../assets/Animations/IntroAnimation.gif";
import { styles, initState } from "./loginStyles";
import Register from "./register";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { loginAction } from "../../redux/actions/accountActions";
import { useHistory } from "react-router";

function Login({loginAction, isFetch}) {
  const { register, handleSubmit } = useForm();
  function handleLogin(data) {
    loginAction(data)
  }

  const [isSign, setSign] = useState(false);
  const toggleSign = () => {
    isSign === true ? setSign(false) : setSign(true);
  };
  const [signUpView, setSignUpView] = useState(initState);
  useEffect(() => {
    if (isSign === true) {
      setSignUpView({
        form: {
          ...initState.form,
          transition: "all ease 1s",
          opacity: "100%",
        },
        intro: {
          ...initState.itro,
          display: "none",
        },
      });
    } else {
      setSignUpView(initState);
    }
  }, [isSign]);

  let history = useHistory()
  useEffect(()=> {
    if(sessionStorage.getItem("token")){
      history.push("/dashboard")
    }
  },[sessionStorage.getItem("token")])

  return (
    <div style={styles.bounds}>
      <div style={styles.sections}>
        <span style={styles.span}>
          <h1 style={styles.header}>Focused </h1>
          <h1 style={styles.header2}>KanBan</h1>
        </span>
        <form style={styles.form} onSubmit={handleSubmit(handleLogin)}>
          <h3>email </h3>
          <input type="email" style={styles.input} name="email" ref={register} />
          <h3>password </h3>
          <input type="password" style={styles.input} name="password" ref={register} />
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
        <Register view={signUpView.form} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isFetch: state.account.accountFetch
  };
};

export default connect(mapStateToProps, {loginAction})(Login);

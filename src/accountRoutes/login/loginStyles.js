import Colors from "../../assets/colors";

export const initState = {
  form: {
    transition: "all ease 0s",
    opacity: "0",
    PointerEvents: "none",
  },
  intro: {
      transform: "translateY(-10rem)"
  },
};

export const canvasStyles = {};

export const styles = {
  bounds: {
    display: "flex",
    height: "100vh",
    flexFlow: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  sections: {
    width: "40%",
    maxWidth: "35rem",
    height: "60%",
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
  },
  form: {
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  input: {
    textAlign: "center",
    height: "2rem",
    border: "none",
    borderBottom: "1px solid grey",
    fontSize: "1.3rem",
    color: Colors.dark_accent,
  },
  gap: {
    width: "2rem",
  },
  span: {
    display: "flex",
    flexFlow: "row",
  },
  header: {
    textAlign: "center",
    marginBottom: "0.5rem",
    fontWeight: "350",
    color: Colors.dark_accent,
  },
  header2: {
    backgroundColor: Colors.base,
    color: Colors.white,
    borderRadius: "6px",
    paddingLeft: ".5rem",
    paddingRight: "0.5rem",
  },
  button: {
    fontSize: "1.5rem",
    width: "9rem",
    height: "2.5rem",
    marginTop: "1rem",
    border: "none",
    borderRadius: "6px",
    backgroundColor: Colors.base,
    color: Colors.white,
  },
};

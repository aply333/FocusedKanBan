import Colors from "../../assets/colors";

export const bcStyles = {
  container: {
    margin: "1rem",
    width: "30rem",
    height: "20rem",
    borderRadius: "6px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.5s ease",
    background: `rgb(2,0,36)`,
    background: `linear-gradient(42deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 23%, rgba(0,212,255,1) 100%)`,
  },
  text: {
    width: "80%",
    height: "60%",
    textAlign: "center",
    color: Colors.white
  },
  headers: {
    textAlign: "center",
  },
};

export const cardContainer = {
  container: {
    margin: "auto auto",
    width: "90%",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
  },
};


export const newBoardStyles = {
  container: {
    margin: "3rem auto",
    width: "60%",
  },
};

export const settingStyles = {
  container: {
    margin: " 0 auto",
    width: "80%",
    display: "flex",
    flexFlow: "row",
  },
  section: {
    width: "33%",
  },
};

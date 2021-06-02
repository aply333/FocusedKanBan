import Colors from "../../assets/colors";

export const boardStyles = {
  container: {
    width: "98vw",
    margin: "2rem auto",
    display: "flex",
    flexFlow: "row no-wrap",
    overflowX: "auto",
  },
  column: {
    container: {
      minWidth: "20rem",
      width: "30rem",
      minHeight: "10rem",
      maxHeight: "80vh",
      borderRadius: "6px",
      borderRight: `1px solid ${Colors.offWhite}`,
      overflow: "auto",
      paddingTop: "0px",
      marginRight: "1.5rem",
      transition: "all ease 1s"
    },
    header: {
      color: Colors.base,
      fontWeight: "400",
      fontSize: "2rem",
      marginLeft: "0.5rem"
    },
    cardContainer: {
      width: "90%",
      margin: "0 auto",
      display: "flex",
      flexFlow: "column",
    },
  },
};

export const cardStyles = {
  container: {
    width: "95%",
    borderRadius: "8px",
    marginBottom: "0.5rem",
    padding: "0.75rem",
    backgroundColor:Colors.white,
    transition: "all ease 1s",
  },
};

export const editStyles = {
  container: {
    display: "flex",
    flexFlow: "column wrap",
    height: "20rem",
    marginTop: "5rem"
  },
  leftPad:{
      width: "2rem",
      height: "18rem",
  },
  newCardForm:{
    display: "flex",
  },
  newCard:{
    width: "25rem",
    borderLeft: `1px solid ${Colors.offWhite}`,
    padding: "2rem"
  }
};

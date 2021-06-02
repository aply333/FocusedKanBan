import Colors from "../../../assets/colors";

export const navstyles = {
    container: {
      marginBottom: "1rem",
      display: "flex",
      flexFlow: "row",
      justifyContent: "space-between",
      backgroundColor: Colors.base,
      filter: `drop-shadow(0px 0px 8px ${Colors.dark_accent})`,
    },
    menu: {
      height: "3rem",
      width: "8rem",
      margin: "auto 0",
      marginRight: "1rem",
      fontSize: "1.25rem",
      color: Colors.white,
      backgroundColor: Colors.base,
      border: "none",
      borderLeft: `1px solid ${Colors.white}`,
      textAlign: "center",
    },
    header: {
      marginLeft: "1rem",
      fontSize: "1.5rem",
      color: Colors.white,
    },
    navRight:{
      margin: "auto 0 auto",
      display: "flex",
      flow: "row"
    }
  };
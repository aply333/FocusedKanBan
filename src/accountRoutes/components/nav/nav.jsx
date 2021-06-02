import { useEffect, useState } from "react";
import { navstyles } from "./navStyles";

function Nav({ compA, compB, leftButton, rightButton, navHeader }) {
  const ChoiceA = () => {return compA};
  const ChoiceB = () => {return compB};

  const [pressed, setPressed] = useState("settings");
  const rollDownInit = {
    overflow: "hidden",
    height: "0",
    transition: "all ease 0.75s",
  };
  const [openMenu, setOpenMenu] = useState(false);
  const [menuStyle, setMenuStyles] = useState(rollDownInit);
  const handleClick = () => {
    openMenu === false ? setOpenMenu(true) : setOpenMenu(false);
  };
  useEffect(() => {
    if (openMenu === false) {
      setMenuStyles(rollDownInit);
    } else {
      setMenuStyles({
        ...rollDownInit,
        height: "28rem",
      });
    }
  }, [openMenu]);

  return (
    <>
      <div style={menuStyle}>
        {pressed === "buttonB" ? <ChoiceB /> : <ChoiceA />}
      </div>
      <nav style={navstyles.container}>
        <h1 style={navstyles.header}>{navHeader}</h1>
        <div style={navstyles.navRight}>
          <button
            style={navstyles.menu}
            onClick={() => {
              setPressed("buttonA");
              handleClick();
            }}
          >
            {leftButton}
          </button>
          <button
            style={navstyles.menu}
            onClick={() => {
              setPressed("buttonB");
              handleClick();
            }}
          >
            {rightButton}
          </button>
        </div>
      </nav>
    </>
  );
}

export default Nav;

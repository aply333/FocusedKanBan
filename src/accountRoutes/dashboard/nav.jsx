import { useEffect, useState } from "react";
import { navstyles } from "./dashStyles";
import NewBoard from "./newBoard";
import Settings from "./settings";

function Nav() {
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
        {pressed === "settings" ? <Settings /> : <NewBoard />}
      </div>
      <nav style={navstyles.container}>
        <h1 style={navstyles.header}>name's dashboard</h1>
        <div style={navstyles.navRight}>
          <button
            style={navstyles.menu}
            onClick={() => {
              setPressed("addBoard");
              handleClick();
            }}
          >
            + board
          </button>
          <button
            style={navstyles.menu}
            onClick={() => {
              setPressed("settings");
              handleClick();
            }}
          >
            settings
          </button>
        </div>
      </nav>
    </>
  );
}

export default Nav;

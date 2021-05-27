import { useEffect, useState } from "react";
import { bcStyles } from "./dashStyles";

function BoardCard() {
  const [onOver, setOnOver] = useState(false);
  const [hoverStyles, setHoverStyles] = useState({});
  const handleHover = () => {
    onOver === false ? setOnOver(true) : setOnOver(false);
  };
  useEffect(() => {
    if (onOver === false) {
      setHoverStyles({});
    } else {
      setHoverStyles({
          filter: "drop-shadow(4px 4px 4px grey)",
          transform: "translate(0.5rem, -0.5rem)"
      });
    }
  }, [onOver]);
  return (
    <div
      style={{ ...bcStyles.container, ...hoverStyles }}
      onMouseEnter={() => {
        handleHover();
      }}
      onMouseLeave={()=>{
        handleHover()
      }}
    >
      <div style={bcStyles.text}>
        <h1 style={bcStyles.header}>Card</h1>
        <p>Stuff and things about the board.</p>
      </div>
    </div>
  );
}

export default BoardCard;

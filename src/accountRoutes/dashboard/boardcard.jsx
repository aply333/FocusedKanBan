import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { selectBoard } from "../../redux/actions/dashActions";
import { bcStyles } from "./dashStyles";

function BoardCard({board, selectBoard}) {
  const [onOver, setOnOver] = useState(false);
  const [hoverStyles, setHoverStyles] = useState({});
  const handleHover = () => {
    onOver === false ? setOnOver(true) : setOnOver(false);
  };

  const history = useHistory()

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
      onClick = {e => {
        selectBoard(board.board_id)
        history.push("/board")
      }}
    >
      <div style={bcStyles.text} >
        <h1 style={bcStyles.header}>{board.board_name}</h1>
        <p>{board.description}</p>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return{}
}

export default connect(mapStateToProps,{selectBoard})(BoardCard);

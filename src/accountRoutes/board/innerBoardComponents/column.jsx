import { useEffect, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { connect } from "react-redux";
import Colors from "../../../assets/colors";
import { selectColumn } from "../../../redux/actions/boardAction";
import { boardStyles } from "../boardStyles";
import { ITEM_TYPES } from "../dnd/constants/itemTypes";
import Card from "./card";


function Column({ colId,title, cards, selectColumn }) {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ITEM_TYPES.COLUMN },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const [{ isOver }, drop] = useDrop({
    accept: ITEM_TYPES.CARD,
    drop: () => {
      console.log("was dropped");
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const [hoverState, setHoverState] = useState(false);
  const [containerStyle, setContainerStyle] = useState(
    boardStyles.column.container
  );
  useEffect(() => {
    if (hoverState) {
      setContainerStyle({
        ...boardStyles.column.container,
        boxShadow: `4px 4px 12px ${Colors.offWhite}`,
        backgroundColor: Colors.offWhite,
      });
    } else {
      setContainerStyle(boardStyles.column.container);
    }
  }, [hoverState]);
  return (
    <div
      style={{ ...containerStyle, filter: isDragging ? "blur(3px)" : null }}
      ref={drag}
    >
      <h1
        style={boardStyles.column.header}
        onMouseEnter={() => {
          selectColumn(colId)
          setHoverState(true);
        }}
        onMouseLeave={() => {
          setHoverState(false);
        }}
      >
        {title}
      </h1>
      <div
        ref={drop}
        style={{
          ...boardStyles.column.cardContainer,
          boxShadow: isOver ? `4px 4px 12px ${Colors.light_accent}` : null,
        }}
      >
        {cards.length > 0 ? cards.map((card) => <Card card={card} />) : null}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
    return{

    }
}

export default connect(mapStateToProps, {selectColumn})(Column);

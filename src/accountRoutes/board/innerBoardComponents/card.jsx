import { useEffect, useState } from "react";
import { useDrag } from "react-dnd";
import { connect } from "react-redux";
import Colors from "../../../assets/colors";
import { selectCard } from "../../../redux/actions/boardAction";
import { cardStyles } from "../boardStyles";
import { ITEM_TYPES } from "../dnd/constants/itemTypes";


function Card({ card, selectCard }) {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ITEM_TYPES.CARD },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });
  
  const [hoverState, setHoverState] = useState(false);
  const [containerStyles, setContainerStyles] = useState(cardStyles.container);
  useEffect(() => {
    if (hoverState) {
      setContainerStyles({
        ...cardStyles.container,
        boxShadow: `4px 4px 12px ${Colors.offWhite}`,
      });
    } else {
      setContainerStyles(cardStyles.container);
    }
  }, [hoverState]);

  return (
    <div
      style={{...containerStyles,
      filter:isDragging?"blur(3px)":null}}
      onMouseEnter={() => {
        selectCard(card.card_id)
        setHoverState(true);
      }}
      onMouseLeave={() => {
        setHoverState(false);
      }}
      ref={drag}
    >
      <span style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>{card.card_name}</h1>
        <p>{card.date}</p>
      </span>
      <hr style={{ width: "95%", margin: "0.3rem auto" }} />
      <p>{card.description}</p>
    </div>
  );
}

const mapStateToProps = state=> {
  return{

  }
}

export default connect(mapStateToProps,{selectCard}) (Card);

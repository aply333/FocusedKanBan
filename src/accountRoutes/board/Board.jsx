import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getCompleteBoard } from "../../redux/actions/boardAction";
import { boardStyles } from "./boardStyles";
import Column from "./innerBoardComponents/column";

function Board({ boardId, boardData, getCompleteBoard }) {
  useEffect(() => {
    getCompleteBoard(boardId);
  }, []);

  const [doneLoading, setDoneLoading] = useState(false);
  useEffect(() => {
    if (boardData.length > 0) {
      setDoneLoading(true);
    }
  }, [boardData]);

  return (
    <div style={boardStyles.container}>
      {doneLoading
        ? boardData.map((col) => (
            <Column colId={col.column_id} title={col.title} cards={col.cards} />
          ))
        : null}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    boardId: state.dash.selectedBoard,
    boardData: state.board.boardData,
  };
};

export default connect(mapStateToProps, { getCompleteBoard })(Board);

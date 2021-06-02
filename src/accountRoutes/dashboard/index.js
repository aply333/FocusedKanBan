import React, { useEffect } from "react";
import BoardCard from "./boardcard";
// import Nav from "./nav";
import { cardContainer } from "./dashStyles";
import { connect } from "react-redux";
import { getUserBoards } from "../../redux/actions/dashActions";
import NewBoard from "./newBoard";
import Settings from "./settings";
import Nav from "../components/nav/nav";

function Dashboard({ getUserBoards, userId, boards }) {
  useEffect(() => {
    getUserBoards(userId);
  }, []);
  return (
    <>
      <Nav
        compA={<NewBoard />}
        compB={<Settings />}
        leftButton={"+ board"}
        rightButton={"settings"}
        navHeader={"User's Board"}
      />
      <div style={cardContainer.container}>
        {boards.length > 0
          ? boards.map((board) => <BoardCard board={board} />)
          : null}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    boards: state.dash.availableBoards,
    userId: state.account.accountData.user_id,
    isFetch: state.dash.dashFetch,
  };
};

export default connect(mapStateToProps, { getUserBoards })(Dashboard);

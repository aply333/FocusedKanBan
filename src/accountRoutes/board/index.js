import React from "react";
import Nav from "../components/nav/nav";
import Board from "./Board";
import EditMenu from "./navMenus/editMenu";

function KanBan() {
  const TestA = () => {
    return (
      <div>
        <h1>A</h1>
      </div>
    );
  };

  const TestB = () => {
    return (
      <div>
        <h1>B</h1>
      </div>
    );
  };
  

  return (
    <>
      <Nav
        compA={< EditMenu/>}
        compB={<TestB />}
        leftButton={"+ edit"}
        rightButton={"settings"}
        navHeader={"board's name"}
      />
      <Board/>
    </>
  );
}

export default KanBan;

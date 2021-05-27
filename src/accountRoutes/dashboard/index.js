import React from "react";
import BoardCard from "./boardcard";
import Nav from "./nav";
import { cardContainer } from "./dashStyles";

function Dashboard(){
    return(
        <>
            <Nav/>
            <div style={cardContainer.container}>
            <BoardCard/>
            <BoardCard/>   
            <BoardCard/>   
            <BoardCard/>   
            <BoardCard/>                   
            </div>

        </>
    )
}

export default Dashboard
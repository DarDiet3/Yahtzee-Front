import React from "react";

import * as G from "../styles/GameBoardStyles";

const Game = () => {

    return(
        <G.Board>

        </G.Board>
    )
}

export default Game;



/**
 * =============== Game Ruules and Logic ================
 * 
 * 
 * - 6 dice, 1 resource on each side
 * -- Can use same roll and dice set up as before
 * -----have an index so that it will pick a random resource and assign that out
 * 
 * - Game sheet
 * -- Game board
 * -- Build Card
 * -- Score road
 * 
 * Game Play
 * - Round counter
 * - 1 roll, most gold goes first
 * 
 * - Roll counter (3 rolls max)
 * - Set some dice aside
 * - After three rolls or selecting "stand Pat"
 * 
 * Building
 * 
 * 
 */
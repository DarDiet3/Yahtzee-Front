import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import io from "socket.io-client";
import { socket } from "../../services/socketConnection";

import { currentUser } from "../../features/gameMetaDataSlice";
import { games } from "../../features/multiplayerSlice";

const MultiplayerGame = () => {
    const gameList = useSelector(games);

    
    
    return(
        <div>
            {gameList.map((game, index) => {
                return(
                <div key={index} id={game.id}>
                    <h2>{game.name}</h2>
                    <p>Participants: {game.participants}</p>
                </div>
                )
            })}
        </div>
    )
}

export default MultiplayerGame;
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import io from "socket.io-client";
import { socket } from "../../services/socketConnection";

import { currentUser } from "../../features/gameMetaDataSlice";
import { games } from "../../features/multiplayerSlice";

const gameId = 1; // <--- set this to localstorage later


const MultiplayerGame = () => {
    const gamesList = useSelector(games);
    const [currentGame, setCurrentGame] = useState(gamesList.gameId)

    console.log(currentGame)
    return(
        <div>

        </div>
    )
}

export default MultiplayerGame;
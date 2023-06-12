import { FirstScreen } from "./components/FirtstScreen";
import { SecondScreen } from "./components/SeconsScreen";
import "./styles.css";
import { createContext, useState } from "react";

export const GameContext = createContext({});

export function MortalKombat() {
  const [playerOneId, setPlayerOneId] = useState(null);
  const [playerTwoId, setPlayerTwoId] = useState(null);
  const [isShowSecondScreen, setIsShowSecondScreen] = useState(false);

  return (
    <GameContext.Provider
      value={{
        playerOneId,
        setPlayerOneId,
        playerTwoId,
        setPlayerTwoId,
        setIsShowSecondScreen,
      }}
    >
      <div className="app">
        MORTAL COMBAT
        <div className="main-block">
          {isShowSecondScreen ? <SecondScreen /> : <FirstScreen />}
        </div>
      </div>
    </GameContext.Provider>
  );
}

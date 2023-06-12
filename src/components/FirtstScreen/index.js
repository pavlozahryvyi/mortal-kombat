import "./styles.css";
import { makeNumberArray } from "./utils";
import { skins } from "./skins";
import { useContext, useEffect, useState } from "react";
import { GameContext } from "../../MortalKombat";

export function FirstScreen() {
  const {
    playerOneId,
    setPlayerOneId,
    playerTwoId,
    setPlayerTwoId,
    setIsShowSecondScreen,
  } = useContext(GameContext);

  const [selectedPlayerId, setSelectedPlayerId] = useState(0);

  const handleKeyDown = (event) => {
    const { key } = event;

    let diff = selectedPlayerId;

    console.log("---selectedPlayerId", selectedPlayerId);
    console.log("diff before", diff);

    if (key === "ArrowUp") {
      diff = diff - 5;
      if (selectedPlayerId === 0) diff = 10;
      if (selectedPlayerId === 1) diff = 11;
      if (selectedPlayerId === 2) diff = 12;
      if (selectedPlayerId === 3) diff = 13;
      if (selectedPlayerId === 3) diff = 14;
    } else if (key === "ArrowLeft") {
      diff = diff - 1;
      if (selectedPlayerId === 0) diff = 4;
      if (selectedPlayerId === 5) diff = 9;
      if (selectedPlayerId === 10) diff = 14;
    } else if (key === "ArrowDown") {
      diff = diff + 5;
      if (selectedPlayerId === 10) diff = 0;
      if (selectedPlayerId === 11) diff = 1;
      if (selectedPlayerId === 12) diff = 2;
      if (selectedPlayerId === 13) diff = 3;
      if (selectedPlayerId === 14) diff = 4;
    } else if (key === "ArrowRight") {
      diff = diff + 1;
      if (selectedPlayerId === 4) diff = 0;
      if (selectedPlayerId === 9) diff = 5;
      if (selectedPlayerId === 14) diff = 10;
    }

    console.log("diff after", diff);

    setSelectedPlayerId(diff);
  };

  console.log("---selectedPlayerId", selectedPlayerId);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    let timerId = null;
    if (playerTwoId !== null) {
      timerId = setTimeout(() => setIsShowSecondScreen(true), 2000);
    }
    return () => {
      if (timerId) clearTimeout(timerId);
    };
  });

  return (
    <>
      <div className="selected-character">
        {playerOneId !== null && (
          <img src={skins[playerOneId]} className="selected-character-img" />
        )}
      </div>
      <div className="first-wrap">
        {makeNumberArray(15).map((el, idx) => (
          <div
            key={el}
            value={el}
            className="character-btn"
            disabled={playerTwoId !== null}
          >
            <img src={skins[idx]} className="character-img" />
          </div>
        ))}
      </div>
      <div className="selected-character">
        {playerTwoId !== null && (
          <img src={skins[playerTwoId]} className="selected-character-img" />
        )}
      </div>
    </>
  );
}

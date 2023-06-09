import { FirstScreen } from "./components/FirtstScreen";
import "./styles.css";
import { createContext } from "react";

const dataContext = createContext({});

export function MortalKombat() {
  return (
    <div className="app">
      MORTAL COMBAT
      <div className="main-block">
        <FirstScreen />
      </div>
    </div>
  );
}

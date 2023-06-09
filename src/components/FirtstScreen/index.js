import "./styles.css";
import { makeNumberArray } from "./utils";
import { skins } from "./skins";

export function FirstScreen() {
  const handleClick = (id) => {
    // console.log(e.target);
    // console.log(e.currentTarget);
    // e.stopPropagation();
    console.log("---handle click", id);
  };

  return (
    <>
      <div className="first-character" />
      <div className="first-wrap">
        {makeNumberArray(15).map((el, idx) => (
          <button
            key={el}
            value={el}
            onClick={() => handleClick(el)}
            className="character-btn"
          >
            <img
              src={skins[idx]}
              className="character-img"
              onClick={(e) => handleClick(e)}
            />
          </button>
        ))}
      </div>
      <div className="second-character" />
    </>
  );
}

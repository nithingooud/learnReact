import { useState } from "react";
import Text from "./useEffect";
const LifeCycle = () => {
  const [showText, setShowText] = useState(false);
  return (
    <>
      <div className="App">
        <button
          onClick={() => {
            setShowText(!showText);
          }}
        >
          Show Text
        </button>
        {showText && <Text />}
      </div>
    </>
  );
};

export default LifeCycle;

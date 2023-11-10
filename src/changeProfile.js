import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "./reactDOM";
export const ChangeProfile = (props) => {
  const [newUserName, setNewUserName] = useState();
  const { setusername } = useContext(AppContext);
  return (
    <div>
      <input
        onChange={(event) => {
          setNewUserName(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setusername(newUserName);
        }}
      >
        Change Username
      </button>
    </div>
  );
};

import { ChangeProfile } from "../changeProfile";
import { useContext } from "react";
import { AppContext } from "../reactDOM";
const Profile = (props) => {
  const { username } = useContext(AppContext);
  return (
    <div>
      {" "}
      PROFILE, user is:{username}
      <ChangeProfile setusername={username} />
    </div>
  );
};

export default Profile;

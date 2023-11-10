import { useContext } from "react";
import { AppContext } from "../reactDOM";
const Home = (props) => {
  const { username } = useContext(AppContext);
  return (
    <div>
      <h1>This is home page</h1>
      <h1>{username}</h1>
    </div>
  );
};

export default Home;

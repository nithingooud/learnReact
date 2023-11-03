import { useEffect, useState } from "react";
import Axios from "axios";
const FetchingData = () => {
  useEffect(() => {
    fetchCatFact();
  }, []);
  const [catFact, setCatFact] = useState();
  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  };

  const [name, setName] = useState();
  const [age, setAge] = useState(0);

  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setAge(res.data.age);
    });
  };
  return (
    <div>
      <button onClick={fetchCatFact}>Generate Cat Fact</button>
      <h1>{catFact}</h1>
      <input
        placeholder="Ex. pedro.."
        onChange={(event) => {
          setName(event.target.value);
        }}
      />

      <button onClick={fetchData}>Predict Age</button>
      <h1>Predicted Age:{age}</h1>
    </div>
  );
};

export default FetchingData;

import "./App.css";
import State from "./states";

function App() {
  const name = "Nithin";
  const age = <h2> 21</h2>;
  const email = <h2>nithin@gmail.com</h2>;
  //declaration of object
  const user = (
    <div>
      {name}
      {age}
      {email}
    </div>
  );
  return (
    <div className="App">
      <h1>{name}</h1>
      {age}
      {email}
      {user}
      {user}
      usage of props
      <User name="Nithin" age={21} email="nithin@gmail.com" />
      <User name="sai" age={20} email="saik@gmail.com" />
      <Job salary="20000" position="software developer" company="Inncircles" />
    </div>
  );
}

//How props look like
const props = {
  name: "Nithin",
  age: 21,
  email: "nithin@gmail.com",
};

const GetName = () => {
  return "Nithin";
};

//Component
const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.email}</h1>
    </div>
  );
};

const Job = (props) => {
  return (
    <div>
      <h1>{props.salary}</h1>
      <h1>{props.position}</h1>
      <h1>{props.company}</h1>
    </div>
  );
};

export default App;

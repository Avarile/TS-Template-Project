import axios from "axios";
import { listenerCount } from "commander";
import React from "react";

const Index = () => {
  const [state, setState] = useState("");
  const getJoke = () => {
    axios.get("url").then((res) => console.log(res));
    setState(res.data.data);
  };

  return (
    <>
      <p>Hello API Call</p>
      <p>This is joke ID: {state.id}</p>

      <button onClick={() => getJoke()}>Get the Joke</button>
    </>
  );
};

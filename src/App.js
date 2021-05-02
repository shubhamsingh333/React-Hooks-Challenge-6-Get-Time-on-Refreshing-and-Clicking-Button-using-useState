import React, { useState } from "react";

const App = () => {
  const newTime = new Date().toLocaleTimeString();

  const [cTime, setCtime] = useState(newTime);

  const UpdateTime = () => {
    let newTime = new Date().toLocaleTimeString();
    setCtime(newTime);
  };

  return (
    <>
      <h1> {cTime} </h1>

      <button onClick={UpdateTime}> Get Time</button>
    </>
  );
};

export default App;

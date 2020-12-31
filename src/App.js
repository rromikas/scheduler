import React from "react";
import Scheduler from "./Schedular/index";

const App = () => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: "1200px" }}>
        <Scheduler></Scheduler>
      </div>
    </div>
  );
};

export default App;

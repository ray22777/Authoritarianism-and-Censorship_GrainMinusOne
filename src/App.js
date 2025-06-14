import React, { useState } from "react";
import StarTunnelCanvas from "./Stars";
import MainPage from "./MainPage";


const App = () => {
  const [showTunnel, setShowTunnel] = useState(false);
  return (
    <div>
      {showTunnel ? (
        <StarTunnelCanvas />
      ) : (
        <MainPage onExplore={() => setShowTunnel(true)} />
      )}
    </div>
  );
};

export default App;
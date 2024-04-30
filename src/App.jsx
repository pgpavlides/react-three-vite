import React, { useRef,useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, OrbitControls, ScrollControls } from "@react-three/drei";
import { Experience } from "./Experience";


const App = () => {

  const [canvasClassName, setCanvasClassName] = useState("canvasStyleDefault");
  const [controlSwitch, setControlSwitch] = useState(false);


  const handleTouchStart = (e) => {
    if (e.touches.length === 2) {
      setControlSwitch(true);
      setCanvasClassName("canvasStyleTwoTouches");
    } else {
      setControlSwitch(false);
      setCanvasClassName("canvasStyleDefault");
    }
  };

  return (  
    <>
    
    <Canvas onScroll={e => console.log('onScroll')}
    onTouchStart={handleTouchStart}
    onTouchEnd={handleTouchStart} 
    className={`canvasmain ${canvasClassName}`} 
    shadows camera={{ fov: 70, position: [0, 0, 3] }}>
      <Experience/>

    </Canvas>
   
    </>
  );
};

export default App;

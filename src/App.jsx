import React, { useRef,useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";
import { Experience } from "./Experience";


const App = () => {

  const [canvasClassName, setCanvasClassName] = useState("canvasStyleDefault");


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
    <Canvas onScroll={e => console.log('onScroll')}
    // onTouchStart={handleTouchStart}
    // onTouchEnd={handleTouchStart} // This handles touch end with the same logic, consider separating if needed
    className={`canvasmain ${canvasClassName}`} // Dynamically apply class
    shadows camera={{ fov: 70, position: [0, 0, 3] }}>
      <OrbitControls />
      <Experience/>
    </Canvas>
  );
};

export default App;

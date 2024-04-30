import React, { useEffect, useRef, useState, useCallback } from "react";
import { useThree } from "@react-three/fiber";
import { CameraControls } from "@react-three/drei";
import { Model } from "./Model";
import { log } from "three/examples/jsm/nodes/Nodes.js";




const getDeviceType = () => {
  if (window.innerWidth < 320) return "extra-small-phone"; // Very small phones
  else if (window.innerWidth >= 320 && window.innerWidth < 480)
    return "small-phone"; // Small phones
  else if (window.innerWidth >= 480 && window.innerWidth < 768)
    return "medium-phone"; // Medium-sized phones
  else if (window.innerWidth >= 768 && window.innerWidth < 1024)
    return "large-phone"; // Large phones or small tablets
  else if (window.innerWidth >= 1024 && window.innerWidth < 1366)
    return "tablet"; // Tablets
  else if (window.innerWidth >= 1366 && window.innerWidth < 1920)
    return "desktop"; // Small laptops or desktops
  else if (window.innerWidth >= 1920 && window.innerWidth < 2560)
    return "large-desktop"; // Medium-sized desktops
  else return "large-desktop-or-high-resolution-display"; // Large desktops or high-resolution displays
};

export function Experience({ camera }) {
  const cameraControlsRef = useRef();
  const [controlsReady, setControlsReady] = useState(false);
  const [animationState, setAnimationState] = useState("starting");
  const [deviceType, setDeviceType] = useState(getDeviceType());
  const events = useThree(state => state.events);
//   events.disconnect();

  useEffect(() => {


    const handleResize = () => {
      const newDeviceType = getDeviceType();
      setDeviceType(newDeviceType);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //================= APPLY SETTINGS =================

  const applySettings = () => {
    const camera = cameraControlsRef.current;
    log(camera);

    if (!camera) return;

    switch (deviceType) {
  
   
      
      case "small-phone":
        camera.mouseButtons.left = 0;
        camera.mouseButtons.right = 0;
        camera.mouseButtons.middle = 0;
        camera.mouseButtons.wheel = 0;

        camera.touches.one = 0;
        camera.touches.two = 0;
        camera.touches.three = 0;

        camera.setPosition(0, 0, 3.5, true);
        break;
      case "medium-phone":
        camera.mouseButtons.left = 0;
        camera.mouseButtons.right = 0;
        camera.mouseButtons.middle = 0;
        camera.mouseButtons.wheel = 0;

        camera.touches.one = 0;
        camera.touches.two = 0;
        camera.touches.three = 0;

        camera.setPosition(0, 0, 3, true);
        break;
      case "large-phone":
        camera.mouseButtons.left = 0;
        camera.mouseButtons.right = 0;
        camera.mouseButtons.middle = 0;
        camera.mouseButtons.wheel = 0;

        camera.touches.one = 0;
        camera.touches.two = 0;
        camera.touches.three = 0;

        camera.setPosition(0, 0, 5, true);
        break;
        case "tablet":
        camera.mouseButtons.left = 0;
        camera.mouseButtons.right = 0;
        camera.mouseButtons.middle = 0;
        camera.mouseButtons.wheel = 0;

        camera.touches.one = 0;
        camera.touches.two = 0;
        camera.touches.three = 0;
        camera.setPosition(0, 0, 2.8, true);
        break;
      case "desktop":
        camera.mouseButtons.left = 0;
        camera.mouseButtons.right = 0;
        camera.mouseButtons.middle = 0;
        camera.mouseButtons.wheel = 0;

        camera.touches.one = 0;
        camera.touches.two = 0;
        camera.touches.three = 0;
        camera.setPosition(0, 0, 2.8, true);
        break;
      case "large-desktop":
        camera.mouseButtons.left = 0;
        camera.mouseButtons.right = 0;
        camera.mouseButtons.middle = 0;
        camera.mouseButtons.wheel = 0;

        camera.touches.one = 0;
        camera.touches.two = 0;
        camera.touches.three = 0;

        camera.setPosition(0, 0, 2.8, true);
        break;
      default:
        camera.mouseButtons.left = 0;
        camera.mouseButtons.right = 0;
        camera.mouseButtons.middle = 0;
        camera.mouseButtons.wheel = 0;

        camera.touches.one = 0;
        camera.touches.two = 0;
        camera.touches.three = 0;

        break;
    }

    

    // setTimeout(() => {
    //   switch (deviceType) {
    //     case "desktop":
    //       camera.mouseButtons.left = 1;
    //       camera.mouseButtons.right = 0;
    //       camera.mouseButtons.middle = 0;
    //       camera.mouseButtons.wheel = 0;

    //       camera.touches.one = 1;
    //       camera.touches.two = 0;
    //       break;
    //     case "tablet":
    //       camera.mouseButtons.left = 0;
    //       camera.mouseButtons.right = 0;
    //       camera.mouseButtons.middle = 0;
    //       camera.mouseButtons.wheel = 0;

    //       camera.touches.one = 0;
    //       camera.touches.two = 1;
    //       camera.touches.three = 0;
    //       break;
    //     case "mobile":
    //       camera.mouseButtons.left = 0;
    //       camera.mouseButtons.right = 0;
    //       camera.mouseButtons.middle = 0;
    //       camera.mouseButtons.wheel = 0;

    //       camera.touches.one = 0;
    //       camera.touches.two = 1;
    //       camera.touches.three = 0;
    //       break;
    //     default:
    //       camera.mouseButtons.left = 0;
    //       camera.mouseButtons.right = 0;
    //       camera.mouseButtons.middle = 0;
    //       camera.mouseButtons.wheel = 0;

    //       camera.touches.one = 0;
    //       camera.touches.two = 0;
    //       camera.touches.three = 0;
    //       break;
    //   }
    // }, 5000);
  };
  //   const timer = setTimeout(applySettings, 300);

  //===================================================

  // Slight delay to ensure camera controls are fully initialized

  useEffect(() => {
    setTimeout(() => {
      setControlsReady(true);
    }, 1);
  }, []);

  useEffect(() => {
    if (controlsReady) {
      applySettings();
    }
  }, [controlsReady]);

 

//   const events = useThree((state) => state.events);

  return (
    <>
     
        <CameraControls
          enabled={true}
          smoothTime={1.5}
          ref={cameraControlsRef}
          makeDefault
        />
        <ambientLight intensity={5} />
        <Model />
      
    </>
  );
}

import React, { useRef, useState, useLayoutEffect } from "react";
import { useGLTF, Html } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { data } from "./data";

export function Model(props) {
  const { nodes, materials } = useGLTF("https://milos.hipos.gr/wp-content/uploads/2024/04/Milos_Island_v01.glb");

  const [hovered, setHovered] = useState(false);

  const [popupContent, setPopupContent] = useState(null);

  const handleMeshClick = meshData => {
    setPopupContent(
        
      <div className='popup'>
        
        <div>
          <img className='popup__image' src={meshData.image} alt='Mesh Image' />
        </div>
        <div className='popup__data'>
          <h2>{meshData.title}</h2>
          <p>{meshData.data}</p>
        </div>
        <button className='closeButton' onClick={() => setPopupContent(null)}>
              X
            </button>
      
      </div>
        
    );
  };

  //   const scale = 0.168;

  const handleHover = hover => {
    setHovered(hover);
  };

  return (
    <group {...props} dispose={null} scale={5} rotation={[1.6, 0, 0]} position={[0, 0, 1.3]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Milos.geometry}
        material={materials["SVGMat.005"]}
        position={[0, 0.009, 0]}
        scale={2.278}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve001.geometry}
          material={materials["SVGMat.006"]}
          position={[0.048, 0, -0.055]}
          scale={1.475}
        />
      </mesh>

      <motion.mesh
        castShadow
        receiveShadow
        geometry={nodes.Beach_1.geometry}
        material={materials["SVGMat.009"]}
        position={[-0.09, 0.011, 0.118]}
        scale={0.168}
        whileHover={{ scale: 0.3 }}
        whileTap={{ scale: 0.168 }}
        onClick={() => handleMeshClick({ image: data[0].image, title: data[0].title, data: data[0].text })}
      />
      <motion.mesh
        castShadow
        receiveShadow
        geometry={nodes.Beach_2.geometry}
        material={materials["SVGMat.009"]}
        position={[0.06, 0.011, 0.089]}
        scale={0.168}
        whileHover={{ scale: 0.3 }}
        whileTap={{ scale: 0.168 }}
        onClick={() => handleMeshClick({ image: data[0].image, title: data[0].title, data: data[0].text })}
      />
      <motion.mesh
        castShadow
        receiveShadow
        geometry={nodes.Beach_3.geometry}
        material={materials["SVGMat.009"]}
        position={[0.078, 0.011, 0.107]}
        scale={0.168}
        whileHover={{ scale: 0.3 }}
        whileTap={{ scale: 0.168 }}
        onClick={() => handleMeshClick({ image: data[0].image, title: data[0].title, data: data[0].text })}
      />
      <motion.mesh
        whileHover={{ scale: 0.3 }}
        whileTap={{ scale: 0.168 }}
        onClick={() => handleMeshClick({ image: data[0].image, title: data[0].title, data: data[0].text })}
        castShadow
        receiveShadow
        geometry={nodes.Beach_4.geometry}
        material={materials["SVGMat.009"]}
        position={[0.11, 0.011, 0.094]}
        scale={0.168}
      />
      <motion.mesh
        whileHover={{ scale: 0.3 }}
        whileTap={{ scale: 0.168 }}
        onClick={() => handleMeshClick({ image: data[0].image, title: data[0].title, data: data[0].text })}
        castShadow
        receiveShadow
        geometry={nodes.Beach_5.geometry}
        material={materials["SVGMat.009"]}
        position={[0.175, 0.011, 0.074]}
        scale={0.168}
      />
      <motion.mesh
        whileHover={{ scale: 0.3 }}
        whileTap={{ scale: 0.168 }}
        onClick={() => handleMeshClick({ image: data[0].image, title: data[0].title, data: data[0].text })}
        castShadow
        receiveShadow
        geometry={nodes.Beach_6.geometry}
        material={materials["SVGMat.009"]}
        position={[0, 0.011, -0.118]}
        scale={0.168}
      />
      <motion.mesh
        whileHover={{ scale: 0.3 }}
        whileTap={{ scale: 0.168 }}
        onClick={() => handleMeshClick({ image: data[0].image, title: data[0].title, data: data[0].text })}
        castShadow
        receiveShadow
        geometry={nodes.Beach_7.geometry}
        material={materials["SVGMat.009"]}
        position={[-0.16, 0.011, -0.055]}
        scale={0.168}
      />
      <motion.mesh
        whileHover={{ scale: 0.3 }}
        whileTap={{ scale: 0.168 }}
        onClick={() => handleMeshClick({ image: data[0].image, title: data[0].title, data: data[0].text })}
        castShadow
        receiveShadow
        geometry={nodes.Beach_8.geometry}
        material={materials["SVGMat.009"]}
        position={[-0.133, 0.011, -0.086]}
        scale={0.168}
      />
      <motion.mesh
        whileHover={{ scale: 0.3 }}
        whileTap={{ scale: 0.168 }}
        onClick={() => handleMeshClick({ image: data[0].image, title: data[0].title, data: data[0].text })}
        castShadow
        receiveShadow
        geometry={nodes.Airport.geometry}
        material={materials["SVGMat.009"]}
        position={[0.086, 0.011, 0.023]}
        scale={0.166}
      />
      <motion.mesh
        castShadow
        receiveShadow
        geometry={nodes.Port_ship.geometry}
        material={materials["SVGMat.009"]}
        position={[0.027, 0.011, -0.026]}
        scale={0.19}
        whileHover={{ scale: 0.3 }}
        whileTap={{ scale: 0.168 }}
        onClick={() => handleMeshClick({ image: data[0].image, title: data[0].title, data: data[0].text })}
      >
        <mesh castShadow receiveShadow geometry={nodes.Port_wave.geometry} material={materials["SVGMat.009"]} />
      </motion.mesh>
      <motion.mesh
        whileHover={{ scale: 0.3 }}
        whileTap={{ scale: 0.168 }}
        onClick={() => handleMeshClick({ image: data[0].image, title: data[0].title, data: data[0].text })}
        castShadow
        receiveShadow
        geometry={nodes.Meuseum_2.geometry}
        material={materials["SVGMat.009"]}
        position={[0.061, 0.011, -0.032]}
        scale={0.16}
      >
        <mesh castShadow receiveShadow geometry={nodes.Meuseum_2_1.geometry} material={materials["SVGMat.009"]} />
        <mesh castShadow receiveShadow geometry={nodes.Meuseum_2_2.geometry} material={materials["SVGMat.009"]} />
      </motion.mesh>
      <motion.mesh
        whileHover={{ scale: 0.3 }}
        whileTap={{ scale: 0.168 }}
        onClick={() => handleMeshClick({ image: data[0].image, title: data[0].title, data: data[0].text })}
        castShadow
        receiveShadow
        geometry={nodes.Meuseum_1.geometry}
        material={materials["SVGMat.009"]}
        position={[-0.003, 0.011, -0.065]}
        scale={0.148}
      >
        <mesh castShadow receiveShadow geometry={nodes.Meuseum_1_1.geometry} material={materials["SVGMat.009"]} />
        <mesh castShadow receiveShadow geometry={nodes.Meuseum_1_2.geometry} material={materials["SVGMat.009"]} />
      </motion.mesh>
      <motion.mesh
        whileHover={{ scale: 0.3 }}
        whileTap={{ scale: 0.168 }}
        onClick={() => handleMeshClick({ image: data[0].image, title: data[0].title, data: data[0].text })}
        castShadow
        receiveShadow
        geometry={nodes.Meuseum_3.geometry}
        material={materials["SVGMat.009"]}
        position={[-0.002, 0.011, -0.03]}
        scale={0.144}
      >
        <mesh castShadow receiveShadow geometry={nodes.Meuseum_3_1.geometry} material={materials["SVGMat.009"]} />
        <mesh castShadow receiveShadow geometry={nodes.Meuseum_3_2.geometry} material={materials["SVGMat.009"]} />
      </motion.mesh>
      <motion.mesh
        whileHover={{ scale: 0.3 }}
        whileTap={{ scale: 0.168 }}
        onClick={() => handleMeshClick({ image: data[0].image, title: data[0].title, data: data[0].text })}
        castShadow
        receiveShadow
        geometry={nodes.Meuseum_4.geometry}
        material={materials["SVGMat.009"]}
        position={[-0.021, 0.011, -0.103]}
        scale={0.144}
      >
        <mesh castShadow receiveShadow geometry={nodes.Meuseum_4_1.geometry} material={materials["SVGMat.009"]} />
        <mesh castShadow receiveShadow geometry={nodes.Meuseum_4_2.geometry} material={materials["SVGMat.009"]} />
      </motion.mesh>
      <motion.mesh
        whileHover={{ scale: 0.3 }}
        whileTap={{ scale: 0.168 }}
        onClick={() => handleMeshClick({ image: data[0].image, title: data[0].title, data: data[0].text })}
        castShadow
        receiveShadow
        geometry={nodes.Apartment_1.geometry}
        material={materials["SVGMat.009"]}
        position={[0.016, 0.011, -0.047]}
        scale={0.171}
      />
      <motion.mesh
        whileHover={{ scale: 0.3 }}
        whileTap={{ scale: 0.168 }}
        onClick={() => handleMeshClick({ image: data[0].image, title: data[0].title, data: data[0].text })}
        castShadow
        receiveShadow
        geometry={nodes.Apartment_2.geometry}
        material={materials["SVGMat.009"]}
        position={[0.18, 0.011, -0.139]}
        scale={0.201}
      />
      <motion.mesh
        whileHover={{ scale: 0.3 }}
        whileTap={{ scale: 0.168 }}
        onClick={() => handleMeshClick({ image: data[0].image, title: data[0].title, data: data[0].text })}
        castShadow
        receiveShadow
        geometry={nodes.Apartment_3.geometry}
        material={materials["SVGMat.009"]}
        position={[-0.012, 0.011, -0.085]}
        scale={0.185}
      />
      <motion.mesh
        whileHover={{ scale: 0.3 }}
        whileTap={{ scale: 0.168 }}
        onClick={() => handleMeshClick({ image: data[0].image, title: data[0].title, data: data[0].text })}
        castShadow
        receiveShadow
        geometry={nodes.Park.geometry}
        material={materials["SVGMat.009"]}
        position={[-0.048, 0.011, 0.015]}
        scale={0.215}
      />
      <motion.mesh
        whileHover={{ scale: 0.3 }}
        whileTap={{ scale: 0.168 }}
        onClick={() => handleMeshClick({ image: data[0].image, title: data[0].title, data: data[0].text })}
        castShadow
        receiveShadow
        geometry={nodes.Cave_2.geometry}
        material={materials["SVGMat.009"]}
        position={[-0.187, 0.011, 0.08]}
        scale={0.235}
      >
        <mesh castShadow receiveShadow geometry={nodes.Cave_2_Corner.geometry} material={materials["SVGMat.009"]} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cave_2_Wave.geometry}
          material={materials["SVGMat.020"]}
          position={[0, 0, 0.066]}
          scale={0.855}
        />
      </motion.mesh>
      <motion.mesh
        whileHover={{ scale: 0.3 }}
        whileTap={{ scale: 0.168 }}
        onClick={() => handleMeshClick({ image: data[0].image, title: data[0].title, data: data[0].text })}
        castShadow
        receiveShadow
        geometry={nodes.Cave_1.geometry}
        material={materials["SVGMat.009"]}
        position={[-0.157, 0.011, 0.12]}
        scale={0.235}
      >
        <mesh castShadow receiveShadow geometry={nodes.Cave_1_Corner.geometry} material={materials["SVGMat.009"]} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cave_1_Wave.geometry}
          material={materials["SVGMat.020"]}
          position={[-0.002, 0, 0.066]}
          scale={0.855}
        />
      </motion.mesh>
      <motion.mesh
        whileHover={{ scale: 0.3 }}
        whileTap={{ scale: 0.168 }}
        onClick={() => handleMeshClick({ image: data[0].image, title: data[0].title, data: data[0].text })}
        castShadow
        receiveShadow
        geometry={nodes.Cave_3.geometry}
        material={materials["SVGMat.009"]}
        position={[0.14, 0.011, -0.113]}
        scale={0.235}
      >
        <mesh castShadow receiveShadow geometry={nodes.Cave_3_Corner.geometry} material={materials["SVGMat.009"]} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cave_3_Wave.geometry}
          material={materials["SVGMat.020"]}
          position={[-0.003, 0, 0.068]}
          scale={0.855}
        />
      </motion.mesh>
      <motion.mesh
        whileHover={{ scale: 0.3 }}
        whileTap={{ scale: 0.168 }}
        onClick={() => handleMeshClick({ image: data[0].image, title: data[0].title, data: data[0].text })}
        castShadow
        receiveShadow
        geometry={nodes.Cave_4.geometry}
        material={materials["SVGMat.009"]}
        position={[0.068, 0.011, -0.088]}
        scale={0.235}
      >
        <mesh castShadow receiveShadow geometry={nodes.Cave_4_Corner.geometry} material={materials["SVGMat.009"]} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cave_4_Wave.geometry}
          material={materials["SVGMat.020"]}
          position={[-0.003, 0, 0.067]}
          scale={0.855}
        />
      </motion.mesh>
      <motion.mesh
        whileHover={{ scale: 0.3 }}
        whileTap={{ scale: 0.168 }}
        onClick={() => handleMeshClick({ image: data[0].image, title: data[0].title, data: data[0].text })}
        castShadow
        receiveShadow
        geometry={nodes.welcome_tranfer_location.geometry}
        material={materials["SVGMat.018"]}
        position={[0.037, 0.011, -0.048]}
        scale={0.244}
      />
      {popupContent && (
        <Html center>
          <motion.div className='popup_container' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
             
            {popupContent}
            
          </motion.div>
        </Html>
      )}
    </group>
  );
}

useGLTF.preload("https://milos.hipos.gr/wp-content/uploads/2024/04/Milos_Island_v01.glb");

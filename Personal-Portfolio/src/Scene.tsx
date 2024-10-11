import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';
import starTexture from './star.png'; // Make sure to import the star texture correctly

const Stars = () => {
  const starGeo = useRef<THREE.BufferGeometry>(null);
  const starMaterial = useLoader(TextureLoader, starTexture);

  const [positions, setPositions] = useState<Float32Array>(() => {
    const arr = new Float32Array(6000 * 3);
    for (let i = 0; i < 6000; i++) {
      arr[i * 3] = Math.random() * 600 - 300;
      arr[i * 3 + 1] = Math.random() * 600 - 300;
      arr[i * 3 + 2] = Math.random() * 600 - 300;
    }
    return arr;
  });

  const velocities = useRef<Float32Array>(new Float32Array(6000));

  useFrame(() => {
    if (starGeo.current) {
      const pos = starGeo.current.attributes.position.array as Float32Array;
      for (let i = 0; i < 6000; i++) {
        velocities.current[i] += 0.02;
        pos[i * 3 + 1] -= velocities.current[i];

        if (pos[i * 3 + 1] < -200) {
          pos[i * 3 + 1] = 200;
          velocities.current[i] = 0;
        }
      }
      starGeo.current.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points>
      <bufferGeometry ref={starGeo}>
        <bufferAttribute
          attachObject={['attributes', 'position']}
          count={6000}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        size={0.7}
        map={starMaterial}
        color={0xaaaaaa}
        transparent
      />
    </points>
  );
};

const Scene = () => {
  return (
    <Canvas camera={{ fov: 60, position: [0, 0, 1] }}>
      <Stars />
    </Canvas>
  );
};

export default Scene;

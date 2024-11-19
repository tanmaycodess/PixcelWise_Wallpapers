import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const Computers = ({ isMobile }) => {
    const { scene } = useGLTF('3D/scene2.glb');

    // Store the last frame time to calculate time difference
    const rotationSpeed = Math.PI * 2;  // Full revolution (360 degrees) in radians
    const rotationRef = useRef(0); // Reference to store accumulated rotation time

    // Use useFrame to update the rotation based on time
    useFrame((state, delta) => {
        // Accumulate the time since the last frame
        rotationRef.current += delta;

        // Calculate the rotation based on time. One full rotation per second.
        if (rotationRef.current >= 1) {
            rotationRef.current -= 1;  // Reset after one full rotation (1 second)
        }

        // Apply rotation to the model around the Y-axis
        scene.rotation.y = rotationRef.current * rotationSpeed;
    });

    return (
        <mesh>
            {/* Ambient Light for overall scene illumination */}
            <ambientLight intensity={1.5} />

            {/* Directional light to simulate sunlight or strong main light */}
            <directionalLight
                position={[3, 10, 3]}
                intensity={6.0}
                spotLight={5}
                pointLight={4}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
            />

            {/* Point Light for more focused lighting */}
            <pointLight intensity={1.8} position={[-5, 5, 5]} />

            {/* Spot Light for focused spotlight effect */}
            <spotLight
                position={[-10, 10, -5]}
                angle={0.2}
                penumbra={1}
                intensity={1.5}
                castShadow
                shadow-mapSize={1024}
            />

            <primitive
                object={scene}
                scale={isMobile ? 4 : 4.5}
                position={isMobile ? [0, -1.5, -0.5] : [1, -2.0, 1.0]}
                rotation={[-0.01, -0.1, -0.1]}  // Initial rotation if needed
            />
        </mesh>
    );
};

export default Computers;

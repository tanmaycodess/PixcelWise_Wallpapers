import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';

const Computers = ({ isMobile }) => {
    const { scene } = useGLTF('3D/scene2.glb');

    // Set a static rotation for the scene (if needed)
    scene.rotation.y = Math.PI / 4; // Example: Static 45-degree rotation

    return (
        <mesh>
            {/* Ambient Light for overall scene illumination */}
            <ambientLight intensity={1.5} />

            {/* Directional light to simulate sunlight or strong main light */}
            <directionalLight
                position={[3, 10, 3]}
                intensity={6.0}
                castShadow
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
                position={isMobile ? [0, -1.5, -0.5] : [1, -3.0, 1.0]}
                rotation={[-0.01, -0.1, -0.1]} // Initial rotation if needed
            />
        </mesh>
    );
};

export default Computers;

import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

const Computers = ({ isMobile }) => {
    const { scene } = useGLTF('3D/final.glb');

    return (
        <mesh>
            {/* Ambient Light for overall scene illumination */}
            <ambientLight intensity={0.5} />

            {/* Directional light to simulate sunlight or strong main light */}
            <directionalLight
                position={[3, 10, 3]}
                intensity={6.0}
                spotLight={4}
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
                scale={isMobile ? 6 : 2.5} 
                position={isMobile ? [0, 1.5, 6.5] : [1, 0, 1.2]} // Adjust position for responsiveness
                rotation={[-0.01, 0.6, -0.1]} 
            />
        </mesh>
    );
};

const ComputerCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Function to check screen width and update state
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 500);
        };

        // Initial check when the component mounts
        checkMobile();

        // Listen for window resize events to update isMobile state
        window.addEventListener('resize', checkMobile);

        // Cleanup listener on unmount
        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    return (
        <Canvas
            frameloop="demand"
            shadows
            camera={{ position: [20, 3, 5], fov: 25 }} // Camera positioning for clear view
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback="Loading...">
                <OrbitControls
                    enableZoom={false} // Disable zoom for better control
                    maxPolarAngle={Math.PI / 2} // Restrict vertical rotation for stability
                    minPolarAngle={Math.PI / 3} // Slightly raise the minimum angle
                />
                <Computers isMobile={isMobile} />
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

export default ComputerCanvas;

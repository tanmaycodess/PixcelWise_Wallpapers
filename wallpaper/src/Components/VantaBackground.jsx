import React, { useEffect, useRef } from 'react';

const VantaBackground = () => {
    const vantaRef = useRef(null); // Reference to the element where the effect will be applied

    useEffect(() => {
        // Apply the Vanta.NET effect when the component is mounted
        if (vantaRef.current) {
            const vantaEffect = window.VANTA.NET({
                el: vantaRef.current, // Target the reference
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0xff7e3f,
                backgroundColor: 0xfbf8ff,
                maxDistance: 10.00,
                spacing: 6.00,
                showDots: false
            });

            // Cleanup the effect when the component unmounts
            return () => {
                if (vantaEffect) {
                    vantaEffect.destroy(); // Clean up to prevent memory leaks
                }
            };
        }
    }, []); // Empty dependency array means this runs once after component mounts

    return (
        <div
            ref={vantaRef} // Set the reference to the div that will hold the effect
            style={{
                width: '100%', // Full width
                height: '100vh', // Full viewport height for the initial load
                position: 'fixed', // Keeps the background fixed during scrolling
                top: 0,
                left: 0,
                zIndex: -1, // Ensure the effect stays behind all other elements
                overflow: 'hidden', // Prevents background from overflowing
            }}
        />
    );
};

export default VantaBackground;

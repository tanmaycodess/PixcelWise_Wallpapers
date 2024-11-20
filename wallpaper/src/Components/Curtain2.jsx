import React, { useEffect } from "react";

const Curtain2 = () => {
    useEffect(() => {
        // Dynamically load the Spline viewer script
        const script = document.createElement("script");
        script.type = "module";
        script.src = "https://unpkg.com/@splinetool/viewer@1.9.44/build/spline-viewer.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Cleanup the script on component unmount
            document.body.removeChild(script);
        };
    }, []);

    return (
        <spline-viewer
            loading-anim-type="spinner-big-dark"
            url="https://prod.spline.design/FNfpkqH7I98PJryA/scene.splinecode"
            style={{ width: "100%", height: "100%" }}
        >
            <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAANCAYAAADISGwcAAAG1ElEQVR4AQCBAH7/ADczMQA3MzEANzMxADczMQA3MzEANzMxADczMQA3MzEANzMxADczMQA3MzEMNzMxHzczMTI3MzFDNzMxTzczMVc3MzFYNzMxUjczMUc3MzE4NzMxJzczMRY3MzEGNzMxADczMQA3MzEANzMxADczMQA3MzEANzMxBTczMQs3MzEPAIEAfv8ANzMxBzczMQQ3MzEANzMxADczMQA3MzEANzMxADczMQA3MzEANzMxCjczMRw3MzEvNzMxQjczMVM3MzFgNzMxZzczMWg3MzFjNzMxWDczMUg3MzE3NzMxJTczMRY3MzEJNzMxATczMQA3MzEANzMxBTczMQw3MzETNzMxGTczMRwAgQB+/wA3MzEYNzMxFjczMRE3MzELNzMxBjczMQM3MzEENzMxCTczMRM3MzEiNzMxNTczMUk3MzFdNzMxbjczMXs3MzGDNzMxhDczMX43MzFyNzMxYzczMVE3MzE+NzMxLjczMSE3MzEYNzMxFTczMRY3MzEaNzMxITczMSc3MzEtNzMxMACBAH7/ADczMSg3MzElNzMxITczMRw3MzEYNzMxFjczMRg3MzEfNzMxKjczMTo3MzFONzMxYzczMXc3MzGJNzMxlzczMZ43MzGfNzMxmTczMYw3MzF8NzMxaTczMVY3MzFENzMxNjczMS03MzEoNzMxKDczMSw3MzEyNzMxODczMT03MzFAAIEAfv8ANzMxLDczMSo3MzEmNzMxIjczMR83MzEfNzMxIjczMSo3MzE3NzMxSDczMV03MzFzNzMxiDczMZo3MzGoNzMxrzczMa83MzGoNzMxmzczMYk3MzF1NzMxYTczMU43MzE+NzMxNDczMS43MzEtNzMxMDczMTU3MzE7NzMxQDczMUIAgQB+/wA3MzEiNzMxIDczMR03MzEaNzMxGDczMRk3MzEdNzMxJjczMTU3MzFHNzMxXDczMXM3MzGMNzMxpDczMbc3MzHENzMxyjczMcg3MzG+NzMxrTczMZc3MzF+NzMxZDczMU03MzE5NzMxKjczMSA3MzEcNzMxHDczMR83MzEjNzMxJzczMSkAgQB+/wA3MzE6NzMxOTczMTk3MzE5NzMxOzczMUA3MzFKNzMxWDczMWs3MzGCNzMxmzczMbU3MzHNNzMx4TczMe43MzH0NzMx8jczMeg3MzHYNzMxwjczMak3MzGQNzMxeTczMWU3MzFWNzMxTTczMUk3MzFKNzMxTTczMVE3MzFVNzMxVwGBAH7/ADczMVI3MzFSNzMxUTczMVE3MzFUNzMxWTczMWM3MzFyNzMxhTczMZw3MzG2NzMx0DczMeg3MzH8NzMx/zczMf83MzH/NzMx/zczMfQ3MzHeNzMxxjczMa03MzGWNzMxgjczMXQ3MzFrNzMxZzczMWg3MzFrNzMxbzczMXM3MzF1rP5s7qhmNj0AAAAASUVORK5CYII="
                alt="Spline preview"
                style={{ width: "100%", height: "100%" }}
            />
        </spline-viewer>
    );
};

export default Curtain2;

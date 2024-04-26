import React, { useEffect, useRef, useState } from 'react';

const First = () => {
    const data = {
        "caption": {
            "text": "1 & 2 BHK Luxury Apartments at just Rs.34.97 Lakhs",
            "position": { "x": 50, "y": 50 },
            "max_characters_per_line": 31,
            "font_size": 44,
            "alignment": "left",
            "text_color": "#FFFFFF"
        },
        "cta": {
            "text": "Shop Now",
            "position": { "x": 190, "y": 320 },
            "text_color": "#FFFFFF",
            "background_color": "#000000"
        },
        "image_mask": {
            "x": 56,
            "y": 442,
            "width": 970,
            "height": 600
        },
        "urls": {
            "mask": "https://d273i1jagfl543.cloudfront.net/templates/global_temp_landscape_temp_10_mask.png",
            "stroke": "https://d273i1jagfl543.cloudfront.net/templates/global_temp_landscape_temp_10_Mask_stroke.png",
            "design_pattern": "https://d273i1jagfl543.cloudfront.net/templates/global_temp_landscape_temp_10_Design_Pattern.png"
        }
    };

    const canvasRef = useRef(null);
    const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "gold";
        ctx.fillRect(10, 10, 150, 100);

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            setCoordinates({ x, y });
        };

        canvas.addEventListener('mousemove', handleMouseMove);

        return () => {
            canvas.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="">
            <canvas ref={canvasRef} height={1080} width={1080} style={{ border: "1px solid", width: "400px", height: "400px" }}></canvas>
            <div>
                <p>Live Coordinates:</p>
                <p>X: {coordinates.x}</p>
                <p>Y: {coordinates.y}</p>
            </div>
        </div>
    );
};

export default First;

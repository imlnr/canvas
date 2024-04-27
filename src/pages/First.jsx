import React, { useEffect, useRef, useState } from 'react';

const First = () => {
    const data = {
        "caption": {
            "text": "1 & 2 BHK Luxury Apartments at just Rs.34.97 Lakhs",
            "position": { "x": 60, "y": 120 },
            "max_characters_per_line": 31,
            "font_size": 40,
            "alignment": "left",
            "text_color": "#FFFFFF"
        },
        "cta": {
            "text": "Shop Now",
            "position": { "x": 60, "y": 220 },
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
    const image = 'https://static.vecteezy.com/system/resources/thumbnails/025/282/026/small/stock-of-mix-a-cup-coffee-latte-more-motive-top-view-foodgraphy-generative-ai-photo.jpg';
    const kfcimg = 'https://1000logos.net/wp-content/uploads/2022/06/Logo-KFC.png'
    const img = new Image();
    img.src = image;
    const kfc = new Image();
    kfc.src = kfcimg;
    // kfc.style.borderRadius = '50%'
    // img.width = 360;
    function splitText(text, maxCharactersPerLine) {
        const words = text.split(' ');
        const lines = [];
        let currentLine = '';

        words.forEach(word => {
            if (currentLine.length + word.length <= maxCharactersPerLine) {
                currentLine += word + ' ';
            } else {
                lines.push(currentLine.trim());
                currentLine = word + ' ';
            }
        });

        if (currentLine.trim() !== '') {
            lines.push(currentLine.trim());
        }

        return lines;
    }
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        //Draw Background
        ctx.fillStyle = "darkred";
        ctx.fillRect(0, 0, 1080, 850);
        console.log(ctx.canvas.width);
        //Draw Border
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 5;
        ctx.rect(57, 557, 965, 523);
        ctx.stroke();

        img.onload = () => {
            ctx.drawImage(img, 60, 560, 960, 520);

            kfc.onload = () => {
                ctx.save(); // Save the current canvas state
                ctx.beginPath();
                ctx.rect(660, 10, 300, 180); // Define the clipping region
                ctx.clip(); // Apply the clipping region
                ctx.drawImage(kfc, 660, 10, 300, 180); // Draw the clipped image
                ctx.restore(); // Restore the canvas state to remove clipping
            };
        };

        ctx.font = `${data.caption.font_size}px Arial`;
        const maxCharactersPerLine = data.caption.max_characters_per_line;
        const text = data.caption.text;
        const lines = splitText(text, maxCharactersPerLine);
        ctx.fillStyle = data.caption.text_color;
        ctx.textAlign = data.caption.alignment;
        lines.forEach((line, index) => {
            ctx.fillText(line, data.caption.position.x, data.caption.position.y + index * (data.caption.font_size + 5));
        });
        //Button Shop now
        // ctx.fillRect()
        ctx.fillStyle = data.cta.text_color;
        ctx.fillRect(data.cta.position.x, data.cta.position.y, 200, 80);
        ctx.fillStyle = data.cta.background_color;
        ctx.font = '30px Arial';
        const textX = data.cta.position.x + 200 / 2 - ctx.measureText(data.cta.text).width / 2;
        const textY = data.cta.position.y + 80 / 2 + 6; // Adjust 6 to vertically center the text
        ctx.fillText(data.cta.text, textX, textY);




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
        <div className="flex justify-center items-center w-full h-screen">
            <canvas ref={canvasRef} height={1080} width={1080} style={{ width: "400px", height: "400px" }}></canvas>
            {/* <div>
                <p>Live Coordinates:</p>
                <p>X: {coordinates.x}</p>
                <p>Y: {coordinates.y}</p>
            </div> */}
        </div>
    );
};

export default First;

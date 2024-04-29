import React, { useEffect, useRef, useState } from 'react';
import { Box, Input, TextField, Typography } from '@mui/material';
import { MuiColorInput } from 'mui-color-input';

const Custom = () => {
    const [colorValue, setColorValue] = useState('#afe46c');
    

    const canvasRef = useRef(null);
    const [imageUrl, setImageUrl] = useState('https://sugargeekshow.com/wp-content/uploads/2022/08/vanilla_cupcake_featured_blog.jpg');
    const [text, setText] = useState('Treate yourself to a divine Blueberry Cake - INR 900.00!')
    const [cta, setcta] = useState('Contact Us')
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const imageDataUrl = reader.result;
                setImageUrl(imageDataUrl);
            };
            reader.readAsDataURL(file);
        }
    };
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
    const [colors, setcolors] = useState(['#afe46c', '#4b652a', '#2cbfdf', '#b417ce', '#de0c71'])
    const handleColorChange = (newValue) => {
        setColorValue(newValue);
        setcolors(prevColors => {
            const temp = [...prevColors];
            temp.unshift(newValue); 
            temp.pop(); 
            return temp;
        });
    };
    
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        //circle
        ctx.arc(540, 780, 100, 0, 2 * Math.PI);
        ctx.stroke();

        // Draw shape
        ctx.beginPath();
        ctx.moveTo(100, 0);
        ctx.lineTo(700, 1080);
        ctx.lineTo(1080, 1080);
        ctx.lineTo(1080, 700);
        ctx.lineTo(680, 0);
        ctx.lineWidth = 1;
        ctx.fillStyle = colorValue;
        ctx.fill();

        // Load and draw image
        const image = new Image();
        image.onload = () => {
            ctx.save();
            ctx.beginPath();
            ctx.rect(150, 60, 760, 760);
            ctx.clip();
            ctx.drawImage(image, 150, 60, 760, 760);
            ctx.restore();
        };
        image.src = imageUrl;
        ctx.font = '30px Arial';
        const maxCharperLine = 30;
        // const text = text;
        const lines = splitText(text, maxCharperLine)
        ctx.textAlign = 'left';
        ctx.fillStyle = 'black'
        lines.forEach((line, index) => {
            ctx.fillText(line, 150, 900 + index * (30 + 5));
        });
        ctx.fillStyle = 'white';
        ctx.fillRect(700, 850, 200, 80);
        ctx.fillStyle = 'black';
        ctx.font = '30px Arial';
        const textX = 700 + 200 / 2 - ctx.measureText(cta).width / 2;
        const textY = 850 + 80 / 2 + 6;
        ctx.fillText(cta, textX, textY);

    }, [colorValue, imageUrl, text, cta]);

    return (
        <Box sx={{ height: "100vh", display: "flex", width: "100%" }}>
            <Box sx={{ background: "#f0f0f0", width: "40%", display: "flex", alignItems: "center", justifyContent: "center" }} >
                <canvas ref={canvasRef} width={1080} height={1080} style={{ width: "500px", height: "500px", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}></canvas>
            </Box>
            <Box sx={{ width: "60%", display: "flex", alignItems: 'center', justifyContent: "center" }} >
                <Box sx={{ width: "80%", display: "flex", justifyContent: "center", flexDirection: "column" }}>
                    <Typography variant='h4' textAlign={'center'}>Ad customization</Typography>
                    <Typography variant='paragraph' textAlign={'center'}>Customise your ad and get the templates accordingly</Typography>
                    <Box sx={{ marginY: "20px" }}>
                        <Typography variant='paragraph'>Change the ad creative image. <Input type='file' onChange={handleImageChange}></Input></Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-around", marginY: "20px" }}><Box sx={{ borderTop: "1px solid", width: "100%" }}></Box><Typography textAlign={'center'} sx={{ width: "30%" }}>Edit Contents</Typography><Box sx={{ borderTop: "1px solid", width: "100%" }}></Box></Box>
                    <Box>
                        <TextField value={text} onChange={(e) => setText(e.target.value)} fullWidth margin='normal' label="Ad Content" />
                    </Box>
                    <Box>
                        <TextField value={cta} onChange={(e) => setcta(e.target.value)} fullWidth margin='normal' label="CTA" />
                    </Box>
                    {/* <small>Choose your color</small> */}
                    <MuiColorInput label='Choose your color' margin='normal' format='hex' value={colorValue} onChange={handleColorChange}></MuiColorInput>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        {colors.map((item) => (
                            <Box key={item} height={'20px'} width={'20px'} onClick={()=> setColorValue(item)} sx={{ backgroundColor: item,borderRadius:"50%" ,cursor:'pointer'}}></Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Custom;

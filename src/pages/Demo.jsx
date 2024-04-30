// import React, { useEffect, useRef, useState } from 'react';
// import { Box, Input, TextField, Typography } from '@mui/material';
// import { MuiColorInput } from 'mui-color-input';

// class Canvas {
//     constructor(canvasRef) {
//         this.canvasRef = canvasRef;
//         this.ctx = canvasRef.current.getContext('2d');
//     }

//     clearCanvas() {
//         const canvas = this.canvasRef.current;
//         this.ctx.clearRect(0, 0, canvas.width, canvas.height);
//     }

//     drawBackground(color) {
//         const canvas = this.canvasRef.current;
//         this.ctx.fillStyle = color;
//         this.ctx.fillRect(0, 0, canvas.width, canvas.height);
//     }

//     drawBorder(x, y, width, height, color, lineWidth) {
//         this.ctx.strokeStyle = color;
//         this.ctx.lineWidth = lineWidth;
//         this.ctx.rect(x, y, width, height);
//         this.ctx.stroke();
//     }

//     drawImage(imageUrl, x, y, width, height) {
//         const image = new Image();
//         image.src = imageUrl;
//         image.onload = () => {
//             this.ctx.drawImage(image, x, y, width, height);
//         };
//     }

//     drawText(text, x, y, fontSize, textColor, alignment) {
//         this.ctx.font = `${fontSize}px Arial`;
//         this.ctx.fillStyle = textColor;
//         this.ctx.textAlign = alignment;
//         this.ctx.fillText(text, x, y);
//     }

//     drawButton(text, x, y, width, height, textColor, bgColor) {
//         this.ctx.fillStyle = bgColor;
//         this.ctx.fillRect(x, y, width, height);

//         this.ctx.fillStyle = textColor;
//         this.ctx.font = '30px Arial';
//         const textX = x + width / 2 - this.ctx.measureText(text).width / 2;
//         const textY = y + height / 2 + 6; // Adjust 6 to vertically center the text
//         this.ctx.fillText(text, textX, textY);
//     }
// }

// const Custom = () => {

//     // const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
//     const image = 'https://static.vecteezy.com/system/resources/thumbnails/025/282/026/small/stock-of-mix-a-cup-coffee-latte-more-motive-top-view-foodgraphy-generative-ai-photo.jpg';
//     const kfcimg = 'https://1000logos.net/wp-content/uploads/2022/06/Logo-KFC.png'

//     const data = {
//         "caption": {
//             "text": "1 & 2 BHK Luxury Apartments at just Rs.34.97 Lakhs",
//             "position": { "x": 60, "y": 120 },
//             "max_characters_per_line": 31,
//             "font_size": 40,
//             "alignment": "left",
//             "text_color": "#FFFFFF"
//         },
//         "cta": {
//             "text": "Shop Now",
//             "position": { "x": 60, "y": 220 },
//             "text_color": "#FFFFFF",
//             "background_color": "#000000"
//         },
//         "image_mask": {
//             "x": 56,
//             "y": 442,
//             "width": 970,
//             "height": 600
//         },
//         "urls": {
//             "mask": "https://d273i1jagfl543.cloudfront.net/templates/global_temp_landscape_temp_10_mask.png",
//             "stroke": "https://d273i1jagfl543.cloudfront.net/templates/global_temp_landscape_temp_10_Mask_stroke.png",
//             "design_pattern": "https://d273i1jagfl543.cloudfront.net/templates/global_temp_landscape_temp_10_Design_Pattern.png"
//         }
//     };
//     const [colorValue, setColorValue] = useState('#a3080c');


//     const canvasRef = useRef(null);
//     const [imageUrl, setImageUrl] = useState('https://static.vecteezy.com/system/resources/thumbnails/025/282/026/small/stock-of-mix-a-cup-coffee-latte-more-motive-top-view-foodgraphy-generative-ai-photo.jpg');
//     const [textdata, setText] = useState('1 & 2 BHK Luxury Apartments at just Rs.34.97 Lakhs')
//     const [cta, setcta] = useState('Contact Us')
//     const handleImageChange = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onloadend = () => {
//                 const imageDataUrl = reader.result;
//                 setImageUrl(imageDataUrl);
//             };
//             reader.readAsDataURL(file);
//         }
//     };
//     function splitText(text, maxCharactersPerLine) {
//         const words = text.split(' ');
//         const lines = [];
//         let currentLine = '';

//         words.forEach(word => {
//             if (currentLine.length + word.length <= maxCharactersPerLine) {
//                 currentLine += word + ' ';
//             } else {
//                 lines.push(currentLine.trim());
//                 currentLine = word + ' ';
//             }
//         });

//         if (currentLine.trim() !== '') {
//             lines.push(currentLine.trim());
//         }

//         return lines;
//     }
//     const [colors, setcolors] = useState(['#afe46c', '#4b652a', '#2cbfdf', '#b417ce', '#de0c71'])
//     const handleColorChange = (newValue) => {
//         setColorValue(newValue);
//         setcolors(prevColors => {
//             const temp = [...prevColors];
//             // temp.unshift(newValue);
//             temp.pop();
//             return [newValue, ...temp];
//         });
//     };

//     // useEffect(() => {
//     //     const canvas = canvasRef.current;
//     //     const ctx = canvas.getContext("2d");

//     //     // Clear canvas
//     //     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     //     //circle
//     //     ctx.arc(540, 780, 100, 0, 2 * Math.PI);
//     //     ctx.stroke();

//     //     // Draw shape
//     //     ctx.beginPath();
//     //     ctx.moveTo(100, 0);
//     //     ctx.lineTo(700, 1080);
//     //     ctx.lineTo(1080, 1080);
//     //     ctx.lineTo(1080, 700);
//     //     ctx.lineTo(680, 0);
//     //     ctx.lineWidth = 1;
//     //     ctx.fillStyle = colorValue;
//     //     ctx.fill();

//     //     // Load and draw image
//     //     const image = new Image();
//     //     image.onload = () => {
//     //         ctx.save();
//     //         ctx.beginPath();
//     //         ctx.rect(150, 60, 760, 760);
//     //         ctx.clip();
//     //         ctx.drawImage(image, 150, 60, 760, 760);
//     //         ctx.restore();
//     //     };
//     //     image.src = imageUrl;
//     //     ctx.font = '30px Arial';
//     //     const maxCharperLine = 30;
//     //     // const text = text;
//     //     const lines = splitText(text, maxCharperLine)
//     //     ctx.textAlign = 'left';
//     //     ctx.fillStyle = 'black'
//     //     lines.forEach((line, index) => {
//     //         ctx.fillText(line, 150, 900 + index * (30 + 5));
//     //     });
//     //     ctx.fillStyle = 'white';
//     //     ctx.fillRect(700, 850, 200, 80);
//     //     ctx.fillStyle = 'black';
//     //     ctx.font = '30px Arial';
//     //     const textX = 700 + 200 / 2 - ctx.measureText(cta).width / 2;
//     //     const textY = 850 + 80 / 2 + 6;
//     //     ctx.fillText(cta, textX, textY);

//     // }, [colorValue, imageUrl, text, cta]);
//     console.log(colorValue, imageUrl, textdata, cta);
//     useEffect(() => {
//         // const canvas = canvasRef.current;
//         // const ctx = canvas.getContext("2d");
//         // //Draw Background
//         // ctx.fillStyle = colorValue;
//         // ctx.fillRect(0, 0, 1080, 850);
//         // console.log(ctx.canvas.width);
//         // //Draw Border
//         // ctx.strokeStyle = 'white';
//         // ctx.lineWidth = 5;
//         // ctx.rect(57, 557, 955, 523);
//         // ctx.stroke();

//         // const img = new Image();
//         // img.src = imageUrl;
//         // img.onload = () => {
//         //     ctx.drawImage(img, 60, 560, 950, 510);

//         // };
//         // ctx.fillStyle = 'white'
//         // ctx.fillRect(660, 10, 270, 180);
//         // // ctx.Stroke();
//         // const kfc = new Image();
//         // kfc.src = kfcimg;
//         // kfc.onload = () => {
//         //     ctx.beginPath();
//         //     ctx.drawImage(kfc, 640, 30, 300, 180);
//         //     // ctx.clip();
//         //     // ctx.fill();
//         // };

//         // ctx.font = `${data.caption.font_size}px Arial`;
//         // const maxCharactersPerLine = data.caption.max_characters_per_line;
//         // // const text = textdata;
//         // const lines = splitText(textdata, maxCharactersPerLine);
//         // ctx.fillStyle = data.caption.text_color;
//         // ctx.textAlign = data.caption.alignment;
//         // lines.forEach((line, index) => {
//         //     ctx.fillText(line, data.caption.position.x, data.caption.position.y + index * (data.caption.font_size + 5));
//         // });
//         // //Button Shop now
//         // // ctx.fillRect()
//         // ctx.fillStyle = data.cta.text_color;
//         // ctx.fillRect(data.cta.position.x, data.cta.position.y, 200, 80);
//         // ctx.fillStyle = data.cta.background_color;
//         // ctx.font = '30px Arial';
//         // const textX = data.cta.position.x + 200 / 2 - ctx.measureText(data.cta.text).width / 2;
//         // const textY = data.cta.position.y + 80 / 2 + 6; // Adjust 6 to vertically center the text
//         // ctx.fillText(cta, textX, textY);

//         const canvas = new Canvas(canvasRef);
//         canvas.clearCanvas();
//         canvas.drawBackground(colorValue);
//         canvas.drawBorder(57, 557, 955, 523, 'white', 5);
//         canvas.drawImage(imageUrl, 60, 560, 950, 510);
//         canvas.drawText(textdata, 60, 120, 40, '#FFFFFF', 'left');
//         canvas.drawButton(cta, 60, 220, 200, 80, '#FFFFFF', '#000000');
//     }, [imageUrl, colorValue, textdata, cta]);

//     return (
//         <Box sx={{ height: "100vh", display: "flex", width: "100%" }}>
//             <Box sx={{ background: "#f0f0f0", width: "40%", display: "flex", alignItems: "center", justifyContent: "center" }} >
//                 <canvas ref={canvasRef} width={1080} height={1080} style={{ width: "500px", height: "500px" }}></canvas>
//             </Box>
//             <Box sx={{ width: "60%", display: "flex", alignItems: 'center', justifyContent: "center" }} >
//                 <Box sx={{ width: "80%", display: "flex", justifyContent: "center", flexDirection: "column" }}>
//                     <Typography variant='h4' textAlign={'center'}>Ad customization</Typography>
//                     <Typography variant='paragraph' textAlign={'center'}>Customise your ad and get the templates accordingly</Typography>
//                     <Box sx={{ marginY: "20px" }}>
//                         <Typography variant='paragraph'>Change the ad creative image. <Input type='file' onChange={handleImageChange}></Input></Typography>
//                     </Box>
//                     <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-around", marginY: "20px" }}><Box sx={{ borderTop: "1px solid", width: "100%" }}></Box><Typography textAlign={'center'} sx={{ width: "30%", marginX: "2%" }}>Edit Contents</Typography><Box sx={{ borderTop: "1px solid", width: "100%" }}></Box></Box>
//                     <Box>
//                         <TextField value={textdata} onChange={(e) => setText(e.target.value)} fullWidth margin='normal' label="Ad Content" />
//                     </Box>
//                     <Box>
//                         <TextField value={cta} onChange={(e) => setcta(e.target.value)} fullWidth margin='normal' label="CTA" />
//                     </Box>
//                     {/* <small>Choose your color</small> */}
//                     <MuiColorInput label='Choose your color' margin='normal' format='hex' value={colorValue} onChange={handleColorChange}></MuiColorInput>
//                     <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
//                         {colors.map((item) => (
//                             <Box key={item} height={'20px'} width={'20px'} onClick={() => setColorValue(item)} sx={{ backgroundColor: item, borderRadius: "50%", cursor: 'pointer' }}></Box>
//                         ))}
//                     </Box>
//                 </Box>
//             </Box>
//         </Box>
//     );
// };

// export default Custom;




import React, { useEffect, useRef, useState } from 'react';
import { Box, Input, TextField, Typography } from '@mui/material';
import { MuiColorInput } from 'mui-color-input';

const Custom = () => {

    // const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
    const image = 'https://static.vecteezy.com/system/resources/thumbnails/025/282/026/small/stock-of-mix-a-cup-coffee-latte-more-motive-top-view-foodgraphy-generative-ai-photo.jpg';
    const kfcimg = 'https://1000logos.net/wp-content/uploads/2022/06/Logo-KFC.png'

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
    const [colorValue, setColorValue] = useState('#a3080c');


    const canvasRef = useRef(null);
    const [imageUrl, setImageUrl] = useState('https://static.vecteezy.com/system/resources/thumbnails/025/282/026/small/stock-of-mix-a-cup-coffee-latte-more-motive-top-view-foodgraphy-generative-ai-photo.jpg');
    const [textdata, setText] = useState('1 & 2 BHK Luxury Apartments at just Rs.34.97 Lakhs')
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
            // temp.unshift(newValue);
            temp.pop();
            return [newValue, ...temp];
        });
    };

    // useEffect(() => {
    //     const canvas = canvasRef.current;
    //     const ctx = canvas.getContext("2d");

    //     // Clear canvas
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);

    //     //circle
    //     ctx.arc(540, 780, 100, 0, 2 * Math.PI);
    //     ctx.stroke();

    //     // Draw shape
    //     ctx.beginPath();
    //     ctx.moveTo(100, 0);
    //     ctx.lineTo(700, 1080);
    //     ctx.lineTo(1080, 1080);
    //     ctx.lineTo(1080, 700);
    //     ctx.lineTo(680, 0);
    //     ctx.lineWidth = 1;
    //     ctx.fillStyle = colorValue;
    //     ctx.fill();

    //     // Load and draw image
    //     const image = new Image();
    //     image.onload = () => {
    //         ctx.save();
    //         ctx.beginPath();
    //         ctx.rect(150, 60, 760, 760);
    //         ctx.clip();
    //         ctx.drawImage(image, 150, 60, 760, 760);
    //         ctx.restore();
    //     };
    //     image.src = imageUrl;
    //     ctx.font = '30px Arial';
    //     const maxCharperLine = 30;
    //     // const text = text;
    //     const lines = splitText(text, maxCharperLine)
    //     ctx.textAlign = 'left';
    //     ctx.fillStyle = 'black'
    //     lines.forEach((line, index) => {
    //         ctx.fillText(line, 150, 900 + index * (30 + 5));
    //     });
    //     ctx.fillStyle = 'white';
    //     ctx.fillRect(700, 850, 200, 80);
    //     ctx.fillStyle = 'black';
    //     ctx.font = '30px Arial';
    //     const textX = 700 + 200 / 2 - ctx.measureText(cta).width / 2;
    //     const textY = 850 + 80 / 2 + 6;
    //     ctx.fillText(cta, textX, textY);

    // }, [colorValue, imageUrl, text, cta]);
    console.log(colorValue, imageUrl, textdata, cta);
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        //Draw Background
        ctx.fillStyle = colorValue;
        ctx.fillRect(0, 0, 1080, 850);
        console.log(ctx.canvas.width);
        //Draw Border
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 5;
        ctx.rect(57, 557, 955, 523);
        ctx.stroke();

        const img = new Image();
        img.src = imageUrl;
        img.onload = () => {
            ctx.drawImage(img, 60, 560, 950, 510);

        };
        ctx.fillStyle = 'white'
        ctx.fillRect(660, 10, 270, 180);
        // ctx.Stroke();
        const kfc = new Image();
        kfc.src = kfcimg;
        kfc.onload = () => {
            ctx.beginPath();
            ctx.drawImage(kfc, 640, 30, 300, 180);
            // ctx.clip();
            // ctx.fill();
        };

        ctx.font = `${data.caption.font_size}px Arial`;
        const maxCharactersPerLine = data.caption.max_characters_per_line;
        // const text = textdata;
        const lines = splitText(textdata, maxCharactersPerLine);
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
        ctx.fillText(cta, textX, textY);
    }, [imageUrl, colorValue, textdata, cta]);

    return (
        <Box sx={{ height: "100vh", display: "flex", width: "100%" }}>
            <Box sx={{ background: "#f0f0f0", width: "40%", display: "flex", alignItems: "center", justifyContent: "center" }} >
                <canvas ref={canvasRef} width={1080} height={1080} style={{ width: "500px", height: "500px" }}></canvas>
            </Box>
            <Box sx={{ width: "60%", display: "flex", alignItems: 'center', justifyContent: "center" }} >
                <Box sx={{ width: "80%", display: "flex", justifyContent: "center", flexDirection: "column" }}>
                    <Typography variant='h4' textAlign={'center'}>Ad customization</Typography>
                    <Typography variant='paragraph' textAlign={'center'}>Customise your ad and get the templates accordingly</Typography>
                    <Box sx={{ marginY: "20px" }}>
                        <Typography variant='paragraph'>Change the ad creative image. <Input type='file' onChange={handleImageChange}></Input></Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-around", marginY: "20px" }}><Box sx={{ borderTop: "1px solid", width: "100%" }}></Box><Typography textAlign={'center'} sx={{ width: "30%" ,marginX:"2%"}}>Edit Contents</Typography><Box sx={{ borderTop: "1px solid", width: "100%" }}></Box></Box>
                    <Box>
                        <TextField value={textdata} onChange={(e) => setText(e.target.value)} fullWidth margin='normal' label="Ad Content" />
                    </Box>
                    <Box>
                        <TextField value={cta} onChange={(e) => setcta(e.target.value)} fullWidth margin='normal' label="CTA" />
                    </Box>
                    {/* <small>Choose your color</small> */}
                    <MuiColorInput label='Choose your color' margin='normal' format='hex' value={colorValue} onChange={handleColorChange}></MuiColorInput>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        {colors.map((item) => (
                            <Box key={item} height={'20px'} width={'20px'} onClick={() => setColorValue(item)} sx={{ backgroundColor: item, borderRadius: "50%", cursor: 'pointer' }}></Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Custom;

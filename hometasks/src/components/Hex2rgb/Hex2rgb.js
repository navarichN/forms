import {useState} from 'react';


export default function Hex2rgb() {
    const onInputChange = (e) => {
        if (/^#[0-9A-F]{6}$/i.test(e.target.value)) {
            setBgColor(e.target.value);
            setOutputRgb(convertColor(e.target.value)) 
        } else {
            setBgColor('red');
            setOutputRgb('Ошибка!')
        }
    }
    const [ bgColor, setBgColor ] = useState('');
    const [ outputRgb, setOutputRgb ] = useState('');
    const styles = { backgroundColor: `${bgColor}`};

    function convertColor(color) {
        if(color.substring(0,1) === '#') {
           color = color.substring(1);
        }
      
        var rgbColor = {};

        rgbColor.r = parseInt(color.substring(0,2),16);
        rgbColor.g = parseInt(color.substring(2,4),16);
        rgbColor.b = parseInt(color.substring(4),16);
      
        return `rgb(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b})`;
    }
    return(
        <div className="hex2rgb" style={styles}>
            <input type="text" onChange={onInputChange}/>
            <span>{outputRgb}</span>
        </div>
    )
}
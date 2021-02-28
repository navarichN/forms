import {useState} from 'react';


export default function Hex2rgb() {
    const onInputChange = (e) => {
        console.log(e.target.value);
        console.log('convertColor:', convertColor(e.target.value))
        setBgColor(e.target.value);
        setOutputRgb(convertColor(e.target.value))
    }
    const [ bgColor, setBgColor ] = useState('red');
    const [ outputRgb, setOutputRgb ] = useState('');
    const styles = { backgroundColor: `${bgColor}`};
    function convertColor(color) {
        /* Check for # infront of the value, if it's there, strip it */
      
        if(color.substring(0,1) === '#') {
           color = color.substring(1);
         }
      
        var rgbColor = {};
      
        /* Grab each pair (channel) of hex values and parse them to ints using hexadecimal decoding */
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
import React, {useState} from 'react';

/**
 * 
 * @param {function} props.OnClick 
 * @returns 
 */
function Button(props) {
    const [color, setColor] = useState('blue');
    function change_color_red()
    {
        setColor('red');
    }
    function change_color_blue()
    {
        setColor('blue');
    }
    function change_color_green()
    {
        setColor('green');
    }
    return (
        <button 
            //onClick={props.onClick}
            onClick={() => props.onClick()}
            style={{color}}
            onMouseEnter={change_color_red} 
            onMouseLeave={change_color_blue}
            onMouseDown={change_color_green}
            onMouseUp={change_color_red}
        >
            {props.children}
        </button>
    )
}

export default Button;
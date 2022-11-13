

import './Button.css'

const Button = ({text, color, bgc, onClick}) => {
    return (
        <button style={{backgroundColor: bgc, color: color}} onClick={onClick}>{text}</button>
    )
}

export default Button
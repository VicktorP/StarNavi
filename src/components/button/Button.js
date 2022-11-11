

import './Button.css'

const Button = ({text, color, bgc, func}) => {

    return (
        <button style={{backgroundColor: bgc, color: color}} onClick={func}>{text}</button>
    )
}

export default Button
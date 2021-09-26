import React from 'react'

const Button = ({ text, classname, onClick }) => {
    return (
        <button className={classname} onClick={onClick}>
            {text}
        </button>
    )
}

Button.defaultProps = {
    text: 'Button',
    classname: 'btn',
}
export default Button

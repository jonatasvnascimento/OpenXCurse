import React from 'react'
import './Button.css'

export default function Button(props){
    let classes = 'button '
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''
    classes += props.quad ? 'quad' : ''
    classes += props.clear ? 'clear' : ''
    classes += props.equals ? 'equals' : ''
    
    return (
        <button
            onClick={e => props.click && props.click(props.label)}
            className={classes}>

            {props.label}    
        </button>
    )
}
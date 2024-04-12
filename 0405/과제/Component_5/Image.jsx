import React from 'react';
import './style.css';

export default function Image(props) {
  return (
    <div>
        <img src={props.src} alt={props.alt}/>
    </div>
  )
}

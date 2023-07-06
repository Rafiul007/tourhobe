import React from 'react'
import "./TripStyle.css";

export default function TripData(props) {
  return (
    <div className='t-card'>
        <div className='t-img'>
            <img alt='image' src={props.img} />
        </div>
        <h4>{props.heading}</h4>
        <p>{props.text}</p>
    </div>
  )
}

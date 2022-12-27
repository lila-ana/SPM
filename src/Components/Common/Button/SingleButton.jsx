import React from 'react'

export default function SingleButton() {
  return (
    <div>
        <button className={props.styles} onClick={props.action()}>{props.name}</button>;
    </div>
    
  )
}

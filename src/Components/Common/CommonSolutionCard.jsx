import React from 'react'

export default function CommonSolutionCard(props) {
  return (
    
    <div>
      <button
        // className={props.styles}
        onClick={props.action}
      > 
      {props?.card} 
      </button>

    </div>
  
  )
}

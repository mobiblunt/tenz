import React from 'react'



const Die = ({value, isHeld, holdDice}) => {
  return (
    <div onClick={holdDice} className="die-face" style={{ backgroundColor: isHeld && '#59E391'}}>
            <h2 className="die-num">{value}</h2>
        </div>
  )
}

export default Die
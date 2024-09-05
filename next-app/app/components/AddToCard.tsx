'use client' // le code est exécuté côté client   
import React from 'react'

const AddToCard = () => {
  return (
    <div>
      <button onClick={() => console.log('Click')}>Add to Card</button>
    </div>
  )
}

export default AddToCard

import React from 'react'
import './Btn.css'
export default function Btn({onClick,clas}) {
    



  return (
    <>
    
    <button className={clas}  onClick={onClick}>Complete Signup</button>
    </>
  )
}

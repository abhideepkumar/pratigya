import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <main className=' '>
    <div className="about-us-group-parent fixed bottom-0 left-1/4 right-3/4 z-10">/
    <div className="about-us-group1" />
    <div className="streamline-group justify-content-center">
      <img
        className="fluentlist-16-filled-icon"
        loading="eager"
        alt=""
        src="/group-7.svg"
        onClick={()=>{navigate("/")}}
      />
      <img
        className="bipeople-fill-icon"
        loading="eager"
        alt=""
        src="/bipeoplefill.svg"
        onClick={()=>{navigate("/community")}}
      />
      <img
        className="streamlinetravel-map-location-icon"
        loading="eager"
        alt=""
        src="/streamlinetravelmaplocationcompass1arrowcompasslocationgpsmapmapspoint.svg"
        onClick={()=>{navigate("/profile")}}
      />
    </div>
  </div>
  </main>
  )
}

export default Navbar

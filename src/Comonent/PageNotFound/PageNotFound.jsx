import React from 'react'
import './PageNotFound.css'
import { useNavigate } from 'react-router-dom';
export default function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className='pageNotFound' style={{background:`url('/bg.webp')`}}>
      <div>
      <button className='go-home-btn' onClick={()=>navigate('/')}>Go Home</button>
      <img src='/404.png' alt="" />
      </div>
    </div>
  )
}

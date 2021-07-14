import React from 'react'
import '../App.css'
import { Button } from './Button'
import './BannerSection.css'

function BannerSection() {
  return (
    <div className="banner-container">
      <h1>Welcome to Paw's Fitness</h1>
      <p>Let's get it started</p>
      <div className="banner-btn">
        <Button 
          className="b-btn"
          buttonStyle="btn-outline"
          buttonSize="btn-large"
        >
          START
        </Button>
      </div>
    </div>
  )
}

export default BannerSection


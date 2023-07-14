import React from 'react'
import './HeroSection.css'
import Button from '../buttons/Button'
import '../../App.css'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';

const HeroSection = () => {
  return (
      <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER < PlayCircleFilledIcon/>
        </Button>
      </div>
    </div>
  )
}

export default HeroSection

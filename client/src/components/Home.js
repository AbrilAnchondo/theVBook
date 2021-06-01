import React from 'react';
import '../index.css';
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
import homephoto from '../assets/images/dan-cristian-padure-mIyZDPhuyY0-unsplash.jpg'

export default function Home() {
  return (
    <div> 
      <div className='home-1'>
        <img className='home-img' src={homephoto} alt='vegetables'/>
      </div>

      <div className='home-2'>
        <Zoom duration={1000} delay={500}>
        <div>Browse</div>
        <div>Save Recipes</div>
        <div>Add notes</div>
        </Zoom>
      </div> 

      <div className='home-3'>
        <div className='bg-1'>
          <h2 className='home-text'>PROTEIN</h2>
        </div>

        <div className='bg-2'>
          <h2>FIBER</h2>
        </div>

        <div className='bg-3'>
          <h2>HEALTHY FAT</h2>
        </div>

        <div className='bg-4'>
          <h2>VITAMINS</h2>
        </div>
      </div>

      <div className='home-4'>
      <Flip top>
          <div>Find Vegan and Vegetarian recipes and bring to your life all the benefits of a healthy diet</div>
      </Flip>
      </div>
    </div>
  )
}

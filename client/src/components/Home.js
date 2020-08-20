import React from 'react';
import '../index.css';
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';

export default function Home() {
  return (
    <div className="home">

      <div className='home-1'>
        <img className='home-img' src='https://images.unsplash.com/photo-1474557242647-c4c248efbc5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' alt=''/>
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
          <h2>PROTEIN</h2>
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
          <div>Find Vegan and Vegetarian recipes to suit your specific needs and bring to your life all the benefits of a healthier diet</div>
      </Flip>
      </div>

    </div>
  )
}

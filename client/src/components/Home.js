import React from 'react';
import '../index.css';
import { Image } from 'semantic-ui-react';

export default function Home() {
  return (
    <div className="home">

      <div className='home-1'>
      </div>

      <div className='home-2'>
        <div>Browse</div>
        <div>Save Recipes</div>
        <div>Add notes</div>
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
      </div>

    </div>
  )
}

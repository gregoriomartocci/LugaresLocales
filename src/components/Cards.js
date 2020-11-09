import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Los Lugares Mas Chetos!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/PATAGONIA 521.jpg'
              text='El sur esta re cheto'
              label='Adventure'
              path='/'
            />
            <CardItem
              src='images/PATAGONIA 354.jpg'
              text='Con ese Glaciar las vas a re flashar'
              label='Luxury'
              path='/'
            />
            <CardItem
              src='images/PATAGONIA 354.jpg'
              text='Con ese Glaciar las vas a re flashar'
              label='Luxury'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/PATAGONIA 853.jpg'
              text='Casitas con techo rosa me vuelvo loco'
              label='Mystery'
              path='/'
            />
            <CardItem
              src='images/PATAGONIA 921.jpg'
              text='KETA PASANDO'
              label='Adventure'
              path='/'
            />
            <CardItem
              src='images/PATAGONIA 921.jpg'
              text='KETA PASANDO'
              label='Adventure'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
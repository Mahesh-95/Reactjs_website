import React from 'react';
import CardItem from '../components/CardItem';

export default function Products() {
  return (<React.Fragment>
          <h1>About</h1>
          <br />
          <ul className='cards__items'>
            <CardItem
              src='/images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='#'
            />
            </ul>
          </React.Fragment>
);
}
import React from 'react';
import './style.css';
import Header from './Header';
import Image from './Image';
import Information from './Information';
import DarkMode from './DarkMode';

export default function Introduce() {

  return (
    <div>
      <DarkMode />
      <Header />

      <Image
        image='images/Gnyo.jpg'
        image1='images/Gnyo(1).jpg'
        image2='images/Gnyo(2).jpg'
        image3='images/Gnyo(3).jpg' />

      <Information />

      <p style={{textAlign: 'center'}}>
        Email: rmsgy410@naver.com<br/>
        Phone number: 010-7121-1892
      </p>
    </div>
  );
}
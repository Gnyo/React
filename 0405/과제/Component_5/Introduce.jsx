import React from 'react';
import './style.css';
import Header from './Header';
import Image from './Image';
import Information from './Information';

export default function Introduce() {
  return (
    <div>
      <Header />

      <Image src="images/Geunyo.jpg" alt="안근효" />

      <Information />

      <p style={{ textAlign: 'center' }}>Email: rmsgy410@naver.com<br/>Phone number: 010-7121-1892</p>
    </div>
  );
}
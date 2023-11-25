import React from 'react';
import scss from './Header.module.scss';
import img1 from './images-removebg-preview 1.png';

export default function Header() {
  return (
    <div className={scss.Header}>
      <img className={scss.logo} src={img1} alt="" />

      <nav className={scss.nav}>
        <ul>
            <li>Home</li>
            <li>Product</li>
            <li>Pricing</li>
            <li>Testimonials</li>
            <li>Contact Us</li>
        </ul>
      </nav>

      <button className={scss.btn}>Buy Now</button>
    </div>
  )
}

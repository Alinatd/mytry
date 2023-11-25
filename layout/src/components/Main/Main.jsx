import React from 'react';
import Header from './Header/Header';
import scss from './Main.module.scss';
import img2 from './eep88j2SDJ-removebg-preview 1.png';
import img3 from './UaNIa1ewNn-removebg-preview 1.png';

export function Main() {

  return (
    <div className={scss.container}>
      <Header />

        <div>
            <div>
                <span className={scss.miniTitle}>Sweet fun, full of milk.</span>
                <h1 className={scss.title}>Feel inside cold with <br /> our delicious <span>ice-cream.</span></h1>
                <p className={scss.par}>
                Some food has looked so awful that it's looked like something that <br /> 
                the dog's brought home, yet after one mouthful I've been left <br /> 
                eating my thoughts, my words.
                </p>

                <button className={scss.btn}>Buy Now</button>
            </div>

            <img src={img2} alt="" className={scss.img2} />
            <img src={img3} alt="" className={scss.img3} />
        </div>
    </div>
  )
}

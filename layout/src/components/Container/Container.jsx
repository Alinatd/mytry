import React from 'react';
import scss from './Container.module.scss';
import img1 from './Images/img1.png';
import img2 from './Images/img2.png';
import img3 from './Images/img3.png';
import img4 from './Images/img4.png';
import imgS1 from './Images/imgS1.png';
import imgS2 from './Images/imgS2.png';
import imgS3 from './Images/imgS3.png';


export function Container() {
  return (
    <div className={scss.Container}>
      <div className={scss.cont}>
        <div className={scss.one}>
          <h1>Our Product</h1>
          <ul>
            <li >ICE CREAM</li>
            <li>CAYENNE CHOCOLATE</li>
            <li>CAKE BATTER</li>
            <li>CANDY CANE</li>
            <li>PLATTERS</li>
            <li>DESSERT</li>
          </ul>
        </div>
        <div className={scss.two}>
          <img className={img1} src={img1} alt=""></img>
          <div className={scss.tD}>
            <h3>Brown bread</h3>
            <p>Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au <br />Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a <br />pioneer in the healthy fast food scene.</p>
            <p className={scss.pD}>$19.55 <span>$22.55</span></p>
            <button>Buy Now</button>
          </div>
        </div>
        <div className={scss.three}>
          <div className={scss.tD1}>
            <h3>Cayenne chocolate</h3>
            <p>Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au <br />Pain is a pioneer in the healthy fast food scene.Bon Au Pain is <br />a pioneer in the healthy fast food scene.</p>
            <p className={scss.pD}>$19.55 <span>$22.55</span></p>
            <button>Buy Now</button>
          </div>
          <img className={img2} src={img2} alt=""></img>
        </div>
        <div className={scss.four}>
          <img className={scss.img3} src={img3} alt=""></img>
          <div className={scss.tD2}>
            <h3>Sweet corn</h3>
            <p>Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a <br /> pioneer in the healthy fast food scene.Bon Au Pain is <br />a pioneer in the healthy fast food scene.</p>
            <p className={scss.pD}>$19.55 <span>$22.55</span></p>
            <button>Buy Now</button>
          </div>
        </div>
      </div>
      <div className={scss.cont1}>
        <div className={scss.subD1}>
          <div className={scss.sbD1}>
            <img className={scss.imgS1} src={imgS1} alt=""></img>
            <div>
              <h3>Adele A. McNeill</h3>
              <p>AMIRICAN</p>
            </div>
          </div>
          <div className={scss.sbD2}>
            <p>"Thanks a lot for the prompt service. Really <br></br>appreciate. Excellence taste in Every Bite.Add <br></br>a joy of best Taste. Foodie Moments."</p>
          </div>
          <div className={scss.sbD3}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">              
                <path d="M3.11172 7.54628L9.3419 13.7763C9.48599 13.9206 9.67835 14 9.88345 14C10.0886 14 10.2809 13.9206 10.425 13.7763L10.8838 13.3176C11.1824 13.0188 11.1824 12.533 10.8838 12.2345L5.65219 7.0029L10.8896 1.76547C11.0337 1.62126 11.1133 1.42901 11.1133 1.22402C11.1133 1.0188 11.0337 0.826562 10.8896 0.682239L10.4308 0.223657C10.2866 0.0794468 10.0944 0 9.88926 0C9.68415 0 9.4918 0.0794468 9.3477 0.223657L3.11172 6.45941C2.96728 6.60408 2.88795 6.79723 2.8884 7.00256C2.88795 7.20869 2.96728 7.40173 3.11172 7.54628Z" fill="#D64374" />              
            </svg>
            <img className={scss.imgS2} src={imgS2} alt="" />
            <img className={scss.imgS1} src={imgS1} alt="" />
            <img className={scss.imgS3} src={imgS3} alt="" />
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M10.8883 7.54628L4.6581 13.7763C4.51401 13.9206 4.32165 14 4.11655 14C3.91144 14 3.71909 13.9206 3.57499 13.7763L3.11618 13.3176C2.81763 13.0188 2.81763 12.533 3.11618 12.2345L8.34781 7.0029L3.11038 1.76547C2.96628 1.62126 2.88672 1.42901 2.88672 1.22402C2.88672 1.0188 2.96628 0.826562 3.11038 0.682239L3.56918 0.223657C3.7134 0.0794468 3.90564 0 4.11074 0C4.31585 0 4.5082 0.0794468 4.6523 0.223657L10.8883 6.45941C11.0327 6.60408 11.1121 6.79723 11.1116 7.00256C11.1121 7.20869 11.0327 7.40173 10.8883 7.54628Z" fill="#D64374" />
            </svg>
          </div>
        </div>
        <div className={scss.subD2}>
          <img className={scss.img4} src={img4} alt=""></img>
        </div>
      </div>
    </div>
  )
}



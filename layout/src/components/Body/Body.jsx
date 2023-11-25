import React from "react";
import css from './Body.module.css'

export const Body =({imgSrc,title,des})=>{
    return(
        <div className={css.container}>
<div className={css.card}>
    <img className={css.pic} src={imgSrc} />
    <h1 className={css.title}>{title}</h1>
    <h3 className={css.des}>{des}</h3>
</div>
        </div>
    
    )
}

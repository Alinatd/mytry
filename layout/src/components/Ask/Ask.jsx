import React from "react";
import scss from "./Ask.module.scss";

export function Ask() {
  return (
    <div className={scss.container}>
      <h1 className={scss.title}>
        Have Question in Mind? <br />
        Let us help you
      </h1>

      <div className={scss.wrapper}>
        <input type="text" placeholder="Enter your question" className={scss.inp} />
        <button className={scss.btn}>Send</button>
      </div>
    </div>
  );
}

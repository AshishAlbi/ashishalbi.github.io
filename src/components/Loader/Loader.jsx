import React from "react";
import loaderCss from "./loader.module.css";

function Loader() {
  return (
    <div className={loaderCss.loader}>
      <div className={loaderCss.banter_loader}>
        <div className={loaderCss.banter_loader__box}></div>
        <div className={loaderCss.banter_loader__box}></div>
        <div className={loaderCss.banter_loader__box}></div>
        <div className={loaderCss.banter_loader__box}></div>
        <div className={loaderCss.banter_loader__box}></div>
        <div className={loaderCss.banter_loader__box}></div>
        <div className={loaderCss.banter_loader__box}></div>
        <div className={loaderCss.banter_loader__box}></div>
        <div className={loaderCss.banter_loader__box}></div>
      </div>
    </div>
  );
}

export default Loader;

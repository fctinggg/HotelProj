import { Fragment } from "react";
import Image from 'next/image';
import homepic from '../../img/ilya-ilford-IghyFQxJxzA-unsplash.jpg';
import classes from './MainPage.module.css'
import * as React from 'react';
import DropdownMenu from './Dropdown';

const MainPage = () => {
  return  <Fragment>
  <div className={classes.container}>
  <div className={classes.grid}>
  <div className={classes.text_container}>
  <div className={classes.cover_text}>Welcome to Hotel.com</div>
  </div>
    <div className={classes.text_div}>
      <div className={classes.text}>Ready for search!</div>
      <div className={classes.py}>
      <DropdownMenu></DropdownMenu>
      </div>
    </div>
    <div className={classes.img_div}>
    <Image 
    src={homepic}
    alt="HotelImage"
    width="750px"
    height="750px"
    layout="intrinsic" />
    </div>
  </div>
  </div>
</Fragment>
}

export default MainPage;
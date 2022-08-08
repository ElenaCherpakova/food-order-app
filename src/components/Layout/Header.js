import React, { Fragment } from 'react'
import classes from "./Header.module.css"
import imageMain from "../assets/main_photo.jpg"
import HeaderCartButton from './HeaderCartButton'

const Header = props => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>FoodyApp</h1>
        <HeaderCartButton/>
      </header>
      <div className={classes['main-image']}>
        <img src={imageMain} alt="delicious_food" />
      </div>
    </Fragment>
  )
}



export default Header;
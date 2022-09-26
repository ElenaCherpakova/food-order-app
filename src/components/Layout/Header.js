import React, { Fragment } from 'react'
import styles from "./Header.module.css"
import imageMain from "../assets/main_photo.jpg"
import HeaderCartButton from './HeaderCartButton'

const Header = props => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1><span className={styles.logoFoody}>Foody</span>App</h1>
        <HeaderCartButton/>
      </header>
      <div className={styles['main-image']}>
        <img src={imageMain} alt="delicious_food" />
      </div>
    </Fragment>
  )
}



export default Header;
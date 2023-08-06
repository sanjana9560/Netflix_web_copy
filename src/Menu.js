import React from 'react'
import styles from './Menu.module.css'
import { DefaultPlayer as Video } from "react-html5video";
import introVideo from "./video/video-2.mp4";
import "react-html5video/dist/styles.css";




const Menu = () => {
  return (


    <>
    <div className={styles.container}>
    <div className={styles.left}>
    <h1 className={styles.heading}>Watch everywhere</h1>
    <p className={styles.para}>Stream unlimited movies and TV shows on <br/> your phone, tablet, laptop, and TV.</p>
    </div>
    <div className={styles.right}>

    <Video autoPlay loop className={styles.video}>
    <source src={introVideo} type="video/webm"/>
  </Video>

    </div>
    
    </div>
    </>
  )
}

export default Menu
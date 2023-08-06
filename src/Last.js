import React from 'react'
import styles from './Last.module.css'

const Last = () => {
  return (


    <>

    <div className={styles.container}>
    <p className={styles.p1}>Questions? Call 000-800-919-1694</p>
    <div className={styles.list}>
    <ul className={styles.l1}>
    <a className={styles.link} href='#'>FAQ</a>
    <a className={styles.link} href='#'>MediaCentre</a>
    <a className={styles.link} href='#'>MediaCentre</a>
    <a className={styles.link} href='#'>CookiePreferences</a>
    <a className={styles.link} href='#'>Speed Test</a>
    </ul>
    <ul className={styles.l1}>
    <a className={styles.link} href='#'>FAQ</a>
    <a className={styles.link} href='#'>MediaCentre</a>
    <a className={styles.link} href='#'>MediaCentre</a>
    <a className={styles.link} href='#'>CookiePreferences</a>
    <a className={styles.link} href='#'>SpeedTest</a>
    </ul>
    <ul className={styles.l1}>
    <a className={styles.link} href='#'>FAQ</a>
    <a className={styles.link} href='#'>MediaCentre</a>
    <a className={styles.link} href='#'>MediaCentre</a>
    <a className={styles.link} href='#'>CookiePreferences</a>
    <a className={styles.link} href='#'>SpeedTest</a>
    </ul>
    
    </div>

     <select className={styles.color}>
            <option>English</option>
            <option>Hindi</option>
          </select>

    <div className={styles.para1}>Netflix India</div>
    
    </div>
    </>
  )
}

export default Last
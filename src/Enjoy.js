import React from 'react'
import styles from './Enjoy.module.css'
import photo from './image/mobile-1.jpg'
const Enjoy = () => {
  return (


    <>
    <div className={styles.container}>
    <div className={styles.left}>
    <img src={photo} alt='pic' className={styles.photo}/>
    </div>
    <div className={styles.right}>
    <h1 className={styles.heading}>Download your <br/> shows to watch <br/> offline</h1>
    <p className={styles.para}>Save your favourites easily and always have something to watch.</p>
    </div>
</div>
    
    </>
  )
}

export default Enjoy ;
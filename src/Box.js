import React from 'react'
import styles from './Box.module.css'

const Box = () => {
  return (

    
    <>
    
<div className={styles.container}>
<h1 className={styles.heading}>Frequently Asked Questions</h1>
<div className={styles.main}>
<div className={styles.list}>
<p className={styles.l1}>What is Netflix?</p>
<p className={styles.l2}>+</p>
</div>
<div className={styles.list}>
<p className={styles.l1}>How much does Netflix cost?</p>
<p className={styles.l2}>+</p>
</div>
<div className={styles.list}>
<p className={styles.l1}>Where can I watch?</p>
<p className={styles.l2}>+</p>
</div>
<div className={styles.list}>
<p className={styles.l1}>How do I cancel?</p>
<p className={styles.l2}>+</p>
</div>
<div className={styles.list}>
<p className={styles.l1}>What can I watch on Netflix?</p>
<p className={styles.l2}>+</p>
</div>
<div className={styles.list}>
<p className={styles.l1}>Is Netflix good for kids?</p>
<p className={styles.l2}>+</p>
</div>
</div>

<p className={styles.para}>Ready to watch? Enter your email to create or restart your membership.</p>
<input  className={styles.input} type='text' placeholder='Email address'></input>
<button className={styles.butn}>Get Started > </button>
</div>
    </>
  )
}

export default Box
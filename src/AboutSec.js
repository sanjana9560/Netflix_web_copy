import React from "react";
import styles from "./About.module.css";
import { DefaultPlayer as Video } from "react-html5video";
import introVideo from "./video/video-tv-1.mp4";
import "react-html5video/dist/styles.css";

const AboutSec = () => {
  return (
    <div className={styles.mainCantainer}>
      <div className={styles.childCantainer}>
        <div className={styles.left}>
          <h1 className={styles.heading}>Enjoy on your TV</h1>
          <p className={styles.para}>
            Watch on smart TVs, PlayStation, Xbox ,<br/>
          Chromecast,Apple TV, Blu-ray players and <br/>
          more.
          </p>
        </div>

        <div className={styles.right}>
        
        <Video autoPlay loop className={styles.video}>
          <source src={introVideo} type="video/webm"/>
        </Video>
    
       
        
        
        </div>
      </div>
    </div>
  );
};

export default AboutSec;

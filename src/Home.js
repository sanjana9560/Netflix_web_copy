import React from "react";
import styles from "./Home.module.css";
import pic from "./image/netflixlogo.png";

const Home = () => {
  return (
    <>
      <div className={styles.backimage}>
        <img src={pic} alt="pic" className={styles.photo} />

        <div className={styles.container}>
          <select className={styles.color}>
            <option>English</option>
            <option>Hindi</option>
          </select>
          <button>sign in</button>
        </div>

        <h1  style={{color: 'white',
          fontSize: '40px',
          marginLeft: '210px',
          marginTop: '140px'}}>

          Unlimited movies, TV shows and more</h1>
        <h3>Watch anywhere. Cancel anytime.</h3>
        <h4>
          Ready to watch? Enter your email to create or restart your membership.
        </h4>
        <div className={styles.box2}>
          <input
            className={styles.input}
            type="text"
            placeholder="Enter address"
          ></input>
          <button className={styles.but}>Get Started ></button>
        </div>
      </div>
    </>
  );
};

export default Home;

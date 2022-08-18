import React from 'react';
import { Link } from 'react-router-dom';
import styles from './home.module.css';
const home = () => {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.bannerText}>
          <span>Swats Splendid Hotel</span>
          <h2>Hotel Noor Palace</h2>
          <h6>Check Out Our Rooms</h6>
        </div>
      </section>
      <section className={styles.about}>
        <div className={styles.aboutHeading}>
          <h3>Finest Independent luxury hotel</h3>
          <Link to="/about" style={{ textDecoration: 'none', color: 'black' }}>
            <h4>Find Out More!</h4>
          </Link>
        </div>
        <div className={styles.aboutWrap}>
          <div className={styles.aboutItem}>
            <p>
              “Perched about 13,500 feet above the sea and nestled amid rocky
              glacial peaks accessed through a narrow vale of gigantic mountains
              started from Shahi Bagh in Gabral valley, the lake offers a
              spectacular view that is not easily forgotten”.
            </p>
          </div>
          <div className={styles.aboutItem}>
            <p>
              “To reach the lake is not an easy job as the trek is one of the
              toughest and hardest treks in the valley. I claim that it is one
              of the mesmerising glacial lakes I have ever seen,” said Tariq
              Aziz, a senior mountain trekker and climber in Swat.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.introWrap}>
          <div className={styles.introOne}>
            <span>Kalam</span>
            <p>
              Kalam is a valley located at distance of 99 kilometres from
              Mingora in the northern upper reaches of Swat valley along the
              bank of Swat River in Khyber Pakhtunkhwa province of Pakistan. The
              area has become a popular tourist attraction, known for its
              mountains, forests and lakes.
            </p>
            <Link
              to="/destinations"
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <h6>More About Kalam</h6>
            </Link>
          </div>
          <div className={styles.introTwo}></div>
        </div>
      </section>
      <section>
        <div className={styles.serviceWrap}>
          <div className={styles.serviceTwo}>
            <div className={styles.roomOne}>
              <div className={styles.overlay}>
                <div class={styles.overlayText}>Clean</div>
              </div>
            </div>
            <div className={styles.roomTwo}>
              {' '}
              <div className={styles.overlay}>
                <div class={styles.overlayText}>Cozy</div>
              </div>
            </div>
            <div className={styles.roomThree}>
              {' '}
              <div className={styles.overlay}>
                <div class={styles.overlayText}>Relaxing</div>
              </div>
            </div>
            <div className={styles.roomFour}>
              {' '}
              <div className={styles.overlay}>
                <div class={styles.overlayText}>Calm</div>
              </div>
            </div>
          </div>
          <div className={styles.serviceOne}>
            <span>Noor Palace Service</span>
            <p>
              Kalam is a valley located at distance of 99 kilometres from
              Mingora in the northern upper reaches of Swat valley along the
              bank of Swat River in Khyber Pakhtunkhwa province of Pakistan. The
              area has become a popular tourist attraction, known for its
              mountains, forests and lakes.
            </p>
            <Link
              to="/rooms"
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <h6>Our Services</h6>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default home;

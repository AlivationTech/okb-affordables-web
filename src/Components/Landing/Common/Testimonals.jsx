import React from 'react';

import styles from './css/testimony.module.css'
const Testimonials = (props) => {
    return (
      <div className={styles.container}>
        <div className={styles.testimony}>
          <p>{props.content}</p>

        </div>
        <p className={styles.sender}>{props.sender}</p>
        <p className={styles.location}>{props.location}</p>


      </div>
    );
};

export default Testimonials;
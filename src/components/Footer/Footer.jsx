import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';

function Footer() {
  return (
    <div className={styles.container}>
      <div>@2023 Lamamia. All rights reserved.</div>
      <div className={styles.social}>
        <Image
          src="/facebook.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="Facebook Account"
        />
        <Image
          src="/instagram.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="Instagram Account"
        />
        <Image
          src="/twitter.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="Twitter Account"
        />
        <Image
          src="/Youtube.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="YouTube Account"
        />
      </div>
    </div>
  );
}

export default Footer;

import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';

function BlogPost() {
  return (
    <div>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </h1>
          <p className={styles.description}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque odit
            aperiam sunt amet error autem repellat minima qui, impedit nihil
            deleniti dolorum similique, officia assumenda eaque illo, at
            voluptatem nobis.
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>John Doe</span>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill={true}
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          tempore obcaecati doloremque harum repellat illo, aut voluptas
          eligendi qui illum vitae sint possimus ad eaque odio accusamus
          provident ullam. Labore!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quasi
          blanditiis velit eum laborum aut quia consectetur rerum esse dolor
          maiores quod, reprehenderit odio deserunt officiis debitis inventore
          eligendi. Aperiam? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Similique quis porro, laborum velit corrupti maiores vero veniam
          illum harum blanditiis? Aperiam obcaecati totam quam, asperiores
          deleniti nam similique ratione a.
          <br />
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
          atque autem a quibusdam in nisi magnam, libero cumque et ullam sunt,
          commodi culpa dolore debitis perspiciatis nam exercitationem quas
          animi?
        </p>
      </div>
    </div>
  );
}

export default BlogPost;

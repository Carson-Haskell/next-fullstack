import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Button from '@/components/Button';

function Category({ params }) {
  return (
    <div>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Item 1</h1>
          <p className={styles.description}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            facere at voluptate. Necessitatibus fugit placeat quam nisi,
            explicabo dicta quos rerum rem neque ullam enim, maiores amet
            commodi asperiores velit.
          </p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            fill={true}
            alt=""
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Item 2</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            ratione minima tempore saepe corrupti perspiciatis nam nemo quia
            quaerat amet pariatur, doloribus rem veniam esse blanditiis cum.
            Nemo, nulla quae.
          </p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            fill={true}
            alt=""
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Item 3</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            ratione minima tempore saepe corrupti perspiciatis nam nemo quia
            quaerat amet pariatur, doloribus rem veniam esse blanditiis cum.
            Nemo, nulla quae.
          </p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            fill={true}
            alt=""
            className={styles.img}
          />
        </div>
      </div>
    </div>
  );
}

export default Category;

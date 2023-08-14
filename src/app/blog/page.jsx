import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';

async function getData() {
  const res = await fetch('http://localhost:3000/api/posts', {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

async function Blog() {
  const data = await getData();

  return (
    <div>
      {data.map((item) => (
        <Link
          key={item._id}
          href={`/blog/${item._id}`}
          className={styles.container}
        >
          <div className={styles.imgContainer}>
            <Image
              src={item.img}
              alt=""
              width={400}
              height={250}
              className={styles.img}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.description}>Description</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Blog;

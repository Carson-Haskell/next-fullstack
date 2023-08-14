import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';
import getPosts from '@/lib/getPosts';

async function Blog() {
  const posts = await getPosts();

  return (
    <div>
      {posts.map((item) => (
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

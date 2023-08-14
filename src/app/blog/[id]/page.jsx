import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import getPost from '@/lib/getPost';

export async function generateMetadata({ params }) {
  const post = await getPost(params.id);

  return {
    title: post.title,
    description: post.description,
  };
}

async function BlogPost({ params }) {
  const blog = await getPost(params.id);

  return (
    <div>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{blog.title}</h1>
          <p className={styles.description}>{blog.description}</p>
          <div className={styles.author}>
            <Image
              src={blog.img}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{blog.username}</span>
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
        <p className={styles.text}>{blog.content}</p>
      </div>
    </div>
  );
}

export default BlogPost;

import Image from 'next/image';
import styles from './page.module.css';
import Button from '@/components/Button';

function About() {
  return (
    <div>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          fill={true}
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDescription}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            facilis harum explicabo in deserunt optio recusandae voluptatum
            molestias, laboriosam excepturi aliquid voluptatem quasi sequi
            assumenda quod consequuntur nisi, blanditiis sapiente?
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
            delectus. Numquam voluptatibus ducimus impedit veniam, iure quas
            eius hic fuga, exercitationem vel voluptate ab quisquam ut
            consectetur excepturi unde neque.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            facilis harum explicabo in deserunt optio recusandae voluptatum
            molestias, laboriosam excepturi aliquid voluptatem quasi sequi
            assumenda quod consequuntur nisi, blanditiis sapiente?
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
}

export default About;

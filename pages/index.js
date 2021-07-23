import Head from "next/head";

import Link from "next/link";
import styles from "../styles/Home.module.css";

const index = () => {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninja" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus soluta
          delectus quod in autem eligendi tempore doloremque cupiditate
          architecto molestias. Vel quos cumque iste quisquam at illum nihil ea
          exercitationem.
        </p>

        <Link href="/ninjas">
          <a className={styles.btn}>see all ninjas list</a>
        </Link>
      </div>
    </>
  );
};

export default index;

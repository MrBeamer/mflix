import styles from "../styles/navbar.module.css";
import Image from "next/Image";

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Image src="/assets/logo.svg" alt="Logo" width={32} height={25} />

        <ul className={styles.list}>
          <li className={styles.item}>
            <Image
              src="/assets/icon-nav-home.svg"
              alt="Logo"
              width={20}
              height={20}
            />
          </li>
          <li className={styles.item}>
            <Image
              src="/assets/icon-nav-movies.svg"
              alt="Logo"
              width={20}
              height={20}
            />
          </li>
          <li className={styles.item}>
            <Image
              src="/assets/icon-nav-tv-series.svg"
              alt="Logo"
              width={20}
              height={20}
            />
          </li>
          <li className={styles.item}>
            <Image
              src="/assets/icon-nav-bookmark.svg"
              alt="Logo"
              width={20}
              height={20}
            />
          </li>
        </ul>
      </div>
      <div className={styles.container}>
        <input className={styles.search} type="text" />
        <div className={styles.imgContainer}>
          <Image
            className={styles.icon}
            src="/assets/icon-search.svg"
            alt="Logo"
            width={24}
            height={24}
          />
        </div>
        <Image
          src="/assets/image-avatar.png"
          alt="Logo"
          width={40}
          height={40}
        />
      </div>
    </nav>
  );
}

import styles from "../../styles/login.module.css";
import Button from "../../components/Button";
import Link from "next/link";
import Image from "next/Image";

export default function Login() {
  return (
    <div className={styles.container}>
      <Image src="/assets/logo.svg" alt="Logo" width={32} height={25} />
      <form className={styles.form}>
        <h1 className={styles.title}>Login</h1>
        <input
          className={styles.input}
          type="text"
          placeholder="Email address"
          name="email"
        ></input>
        <input
          className={styles.input}
          type="text"
          placeholder="Password"
          name="password"
        ></input>
        <Button>Login to your account</Button>
        <div className={styles.info}>
          <span>Dont have an account?</span>
          <Link href="/signup">Sign up</Link>
        </div>
      </form>
    </div>
  );
}

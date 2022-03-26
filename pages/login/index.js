import styles from "../../styles/login.module.css";
import Button from "../../components/Button";
import Link from "next/link";
import Image from "next/Image";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();

  const loginUser = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Get data from the form.
    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data.
    const endpoint = "/api/login";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();
    console.log(result);
    // alert(`Message: ${result.message}`);

    event.target.reset();
    router.push("/");
  };

  return (
    <div className={styles.container}>
      <Image src="/assets/logo.svg" alt="Logo" width={32} height={25} />
      <form className={styles.form} onSubmit={loginUser}>
        <h1 className={styles.title}>Login</h1>
        <input
          id="email"
          className={styles.input}
          type="email"
          placeholder="Email address"
          name="email"
        ></input>
        <input
          id="password"
          className={styles.input}
          type="text"
          placeholder="Password"
          name="password"
        ></input>
        <Button type="submit">Login to your account</Button>
        <div className={styles.info}>
          <span>Dont have an account?</span>
          <Link href="/signup">Sign up</Link>
        </div>
      </form>
    </div>
  );
}

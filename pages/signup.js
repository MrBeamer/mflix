import styles from "../styles/login.module.css";
import Button from "../components/Button";
import Link from "next/link";
import Image from "next/Image";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const router = useRouter();

  const registerUser = async (event) => {
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
    const endpoint = "/api/register";

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
    console.log(`Message: ${result.message}`);
    // alert(`Message: ${result.message}`);

    event.target.reset();
    router.push("/");
  };

  return (
    <div className={styles.container}>
      <Image src="/assets/logo.svg" alt="Logo" width={32} height={25} />
      <form className={styles.form} onSubmit={registerUser}>
        <h1 className={styles.title}>Signup</h1>
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
        <Button type="submit">Create an account</Button>
        <div className={styles.info}>
          <span>Already have an account?</span>
          <Link href="/signup">Login</Link>
        </div>
      </form>
    </div>
  );
}

/// You need a controlled form because, the action only can redirect to the api otherwise body will be not send to the api, if you use prevent default the body will not be sent in an html form without a fetch, so the only thing you can do is use a react form means to use state and  onChange to save the values and append the body to a manually post

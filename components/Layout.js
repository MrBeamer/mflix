import Navbar from "./Navbar";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  // const showLogin = router.pathname !== "/login";
  let showLogin = "";

  if (router.pathname === "/login") {
    showLogin = false;
  } else if (router.pathname === "/signup") {
    showLogin = false;
  } else {
    showLogin = true;
  }

  return (
    <>
      {showLogin && <Navbar />}
      <main>{children}</main>
    </>
  );
}

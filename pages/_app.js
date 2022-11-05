import Link from "next/link";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Link href={"/"}>
        <h3 id="home">Home</h3>
      </Link>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

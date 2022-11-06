import Link from "next/link";
import "../styles/globals.css";
import Image from "next/image";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Link href={"/"}>
        <div id="home">
          <Image
            width={200}
            height={80}
            src={"/millennium-falcon.png"}
            alt="falcon"
          />
          <h3>Home</h3>
        </div>
      </Link>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

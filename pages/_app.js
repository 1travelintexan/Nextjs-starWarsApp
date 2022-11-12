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
      <div id="tie-fighter">
        <Image
          width={80}
          height={80}
          src={"/tie-fighter.png"}
          alt="tie-fighter"
        />
      </div>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

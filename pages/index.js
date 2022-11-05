import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Star Wars</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main>
        <h1 className="heading">{"Who doesn't love Star Wars"}</h1>
        <div id="links-div">
          <Link href={"/charactersPage"}>
            <h2 className="links">Get Characters</h2>
          </Link>
          <Link href={"/films"}>
            <h2 className="links">List Films</h2>
          </Link>
          <Link href={"/planets"}>
            <h2 className="links">See all Planets</h2>
          </Link>
        </div>
      </main>
    </div>
  );
}

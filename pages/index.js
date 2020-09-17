import Head from "next/head";
import styles from "../styles/Home.module.css";
import Programs from "../component/Programs";
import fetch from "isomorphic-unfetch";

function Home({ launch }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>SpaceX</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
        <meta name="description" content="SpaceX" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.App}>
        <h2>SpaceX Launch Programs</h2>
        <Programs initLaunch={launch} />
        <h5 className={styles.footer}>
          <b>Developed by: Akshay Sharma</b>
        </h5>
      </main>
    </div>
  );
}

Home.getInitialProps = async () => {
  const res = await fetch("https://api.spacexdata.com/v3/launches?limit=100");
  const launch = await res.json();
  return { launch };
};

export default Home;

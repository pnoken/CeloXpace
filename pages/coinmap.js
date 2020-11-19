import Head from "next/head";
import Navbar from "../components/Headers/Navbar";
import Footer from "../components/Footers/Footer";
import styles from "../styles/Home.module.css";
import CoinList from "../components/Main/Coinlist";

export default function Home() {
  return (
    <>
      <Head>
        <title>Coin Map</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
          integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
          crossorigin="anonymous"
        ></link>
         <script type='text/javascript' src='script.js?id=55d9080f3642206fe197cb6dc2e582c6b1852089'></script>
      </Head>
      <div className="container">
      <Navbar />
      <div>
      <iframe scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=1144&amp;height=324&amp;hl=en&amp;q=California%20California+(Bitcoin%20Map)&amp;t=&amp;z=7&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="1110" height="1000" frameborder="0"></iframe> <a href='https://embedmaps.org/'></a>
      </div>

      <Footer />
      </div>
    </>
  );
}

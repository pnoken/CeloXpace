import Head from "next/head";
import Navbar from "../components/Headers/Navbar";
import Footer from "../components/Footers/Footer";
import styles from "../styles/Home.module.css";
import CoinList from "../components/Main/Coinlist";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>CeloXpace</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
          integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
          crossorigin="anonymous"
        ></link>
      </Head>
      <div className="container">
        <Navbar />
        <div>
          <CoinList />
        </div>
        <div>
          <h5 className="text-uppercase text-center">Partners</h5>
        </div>
        <div className="flex-row  d-flex">
            <div className="align-items-start mx-auto">
              <Image src="/static/celo.png" height={100} width={120} />

            </div>

            <div className="align-items-end mx-auto p-2">
              <Image src="/static/bsg.png" height={100} width={120} />
            
            </div>
          </div>

        <Footer />
      </div>
    </>
  );
}

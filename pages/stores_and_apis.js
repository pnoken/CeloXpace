import Head from "next/head";
import Navbar from "../components/Headers/Navbar";
import Footer from "../components/Footers/Footer";
import styles from "../styles/Home.module.css";
import StoresAndApisCard from "../components/Main/StoresAndApisCard";

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
      <button type="button" class="btn btn-lg" style={{backgroundColor: "#21F01D"}}>Sign Up for API key</button>
      <button type="button" class="btn btn-lg float-right" style={{backgroundColor: "#21F01D"}}>API Documentation</button>
      <div className="col">
      <div className="row">
      <StoresAndApisCard img="/static/cusd.png" title="Check out Celo Accepted Stores here"/>
      <StoresAndApisCard img="/static/celddd.jpg" title="Check out Celo Accepted Stores here"/>
        </div>
      <div className="row">
      <StoresAndApisCard img="/static/apps.jpg" title="Check out Celo Accepted Stores here"/>
      </div>
      </div>
      <Footer />
    </div>
    </>
  );
}

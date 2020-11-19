import Head from "next/head";
import Navbar from "../components/Headers/Navbar";
import Footer from "../components/Footers/Footer";
import styles from "../styles/Home.module.css";
import StoresAndApisCard from "../components/Main/StoresAndApisCard";
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
        <div className="mb-5">
        <button
          type="button"
          class="btn btn-lg"
          style={{ backgroundColor: "#21F01D" }}
        >
          Sign Up for API key
        </button>
        <button
          type="button"
          class="btn btn-lg float-right"
          style={{ backgroundColor: "#21F01D" }}
        >
          API Documentation
        </button>
        </div>
        <div className="col">
          <div className="col">
            <div className="row" style={{marginBottom: "200px"}}>
              <div className="box shadow">
                <Image src="/static/cusd.png" height={300} width={350} />
                <div className="card-body">
                  <h5 className="card-title">
                    Check out Celo Accepted Stores here
                  </h5>
                </div>
              </div>

              <div className="ml-30 box shadow" style={{marginLeft: "320px"}}>
                <Image src="/static/cusd.png" height={300} width={350} />
                <div className="card-body">
                  <h5 className="card-title">
                    Check out Celo Accepted Stores here
                  </h5>
                </div>
              </div>
            </div>
            <div className="box shadow">
              <Image src="/static/cusd.png" height={300} width={350} />
              <div className="card-body">
                <h5 className="card-title">
                  Check out Celo Accepted Stores here
                </h5>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

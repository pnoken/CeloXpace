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
        <div className="d-flex flex-column mb-5">
          <div className="flex-row  d-flex">
            <div className="align-items-start">
            <button
              type="button"
              className="btn btn-lg"
              style={{ backgroundColor: "#21F01D" }}
            >
              Sign Up for API key
            </button>
            </div>

            <div className="align-items-end float-right">
              <button
                className="btn btn-lg"
                type="button"
                style={{ backgroundColor: "#21F01D" }}
              >
                API Documentation
              </button>
            </div>
          </div>
        </div>

        <div className="d-flex flex-column" style={{ height: "820px" }}>
          <div className="flex-row  d-flex">
            <div className="box shadow align-items-start rounded mr-auto">
              <Image src="/static/cusd.png" height={300} width={450} />
              <div className="card-body">
                <h5 className="card-title">
                  Check out Celo Accepted Stores here
                </h5>
              </div>
            </div>

            <div className="box shadow align-items-end mb-auto p-2 rounded">
              <Image src="/static/celddd.jpg" height={300} width={350} />
              <div className="card-body">
                <h5 className="card-title">
                  Check out CUSD Accepted Stores here
                </h5>
              </div>
            </div>
          </div>

          <div className="flex-row d-flex justify-content-center mt-auto">
            <div className="box shadow">
              <Image src="/static/apps.jpg" height={300} width={350} />
              <div className="card-body">
                <h5 className="card-title">
                  Explore apps built on celo
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

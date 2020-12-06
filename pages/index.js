import Main from "../components/Layout/Main";
import Footer from "../components/Footers/Footer";
import CoinList from "../components/Main/Coinlist";
import Image from "next/image";


export default function Home() {
  return (
    <>
    <Main title={"Home"} />
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
    </>
  );
}

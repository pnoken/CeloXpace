import Main from "../components/Layout/Main";
import Footer from "../components/Footers/Footer";
import CoinList from "../components/Main/Coinlist";

import Partners from "../components/Section/partners";

export default function Home() {
  return (
    <>
      <Main title={"Home"} />

      <CoinList />

      <Partners />

      <Footer />
    </>
  );
}

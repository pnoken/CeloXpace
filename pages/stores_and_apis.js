import Main from "../components/Layout/Main";
import Footer from "../components/Footers/Footer";
import StoresAndApisCard from "../components/Main/StoresAndApisCard";

export default function Home() {
  return (
    <>
      <Main title={"Stores & APIs"} />
        <StoresAndApisCard />
        
        <Footer />
    </>
  );
}

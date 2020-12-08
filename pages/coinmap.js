
import Footer from "../components/Footers/Footer";
import Main from "../components/Layout/Main";

export default function Home() {
  return (
    <>
      <Main title={"Coin Map"}/>
      <div className="container vh-100">
      <iframe className="container" src="https://maps.google.com/maps?width=1144&amp;height=324&amp;hl=en&amp;q=California%20California+(Bitcoin%20Map)&amp;t=&amp;z=7&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" height="500px"></iframe>
      </div>
      <Footer />
    </>
  );
}

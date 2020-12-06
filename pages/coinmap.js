
import Footer from "../components/Footers/Footer";
import Main from "../components/Layout/Main";

export default function Home() {
  return (
    <>
      <Main title={"Coin Map"}/>
      <div>
      <iframe scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=1144&amp;height=324&amp;hl=en&amp;q=California%20California+(Bitcoin%20Map)&amp;t=&amp;z=7&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="2000" height="1000" frameborder="0"></iframe> <a href='https://embedmaps.org/'></a>
      </div>
      <Footer />
    </>
  );
}

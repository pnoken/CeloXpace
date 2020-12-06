import Main from "../components/Layout/Main";
import Footer from "../components/Footers/Footer";
import RichList from "../components/Main/RichList";

export default function Home() {
  return (
      <>
      <Main title={"Rich List"} />
      <RichList />
      <Footer />
    </>
  );
}

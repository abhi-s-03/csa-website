import "./styles/landing.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function Landing() {
  return (
    <>
      <Navbar textColor="white" />
      <div className="home">
        <div className="cse">
          <div className="clg ">CS ASSOCIATION</div>
          <div className="clg-desc">
            Association for department of Computer Science and Engineering
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

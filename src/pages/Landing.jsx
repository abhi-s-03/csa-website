import "./styles/landing.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function Landing() {
  return (
    <>
      <Navbar />
      <div className="home">
        <div className="cse">
          <div className="clg">Computer Science and Engineering</div>
          <div className="clg-desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
            voluptatem incidunt laborum velit, sit at non unde numquam
            accusantium provident praesentium voluptate expedita quis ex
            aspernatur consequuntur. Consectetur, dicta accusamus.
          </div>
        </div>
      </div>
    </>
  );
}

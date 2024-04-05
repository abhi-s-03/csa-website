import Navbar from "../components/Navbar";
import "./styles/newsletter.css";

export default function Newsletter() {
  return (
    <>
      <div className="newsletter">
        <Navbar />
        <div className="newsletter-box">
          <div className="newsletter-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            doloremque, quidem, quas, quia quae quos cumque voluptates
            exercitationem nesciunt quibusdam sed. Quisquam, quidem. Quas
            voluptates, nemo voluptas doloribus quibusdam quos.
          </div>
        </div>
      </div>
    </>
  );
}

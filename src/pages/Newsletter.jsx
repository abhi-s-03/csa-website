import "./styles/newsletter.css";

export default function Newsletter() {
    return (
        <>
        <div className="newsletter">
            <div className="newsletter-title">Newsletter</div>
            <div className="newsletter-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            doloremque, quidem, quas, quia quae quos cumque voluptates
            exercitationem nesciunt quibusdam sed. Quisquam, quidem. Quas
            voluptates, nemo voluptas doloribus quibusdam quos.
            </div>
            <div className="newsletter-form">
            <input type="text" placeholder="Enter your email" />
            <button>Subscribe</button>
            </div>
        </div>
        </>
    );
    }
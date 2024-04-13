import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import newsletter from "../assets/newsletter2.pdf";
import "./styles/newsletter.css";
import pdfWorkerSrc from "pdfjs-dist/build/pdf.worker.min";

import { Worker } from "@react-pdf-viewer/core";
Worker.workerSrc = pdfWorkerSrc;

export default function Newsletter() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    setInitialTab: (doc) => Promise.resolve(0),
  });

  return (
    <>
    <Navbar textColor="black" />
      <div className="newsletter">
        <div className="newsletter-box">
          <div className="newsletter-pdf">
            <Viewer
              fileUrl={newsletter}
              plugins={[defaultLayoutPluginInstance]}
              defaultScale="PageWidth"
            ></Viewer>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

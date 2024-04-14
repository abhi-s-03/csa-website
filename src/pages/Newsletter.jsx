import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { useState } from "react";
import newsletter from "../assets/newsletters/newsletter2.pdf";
export default function Newsletter() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    setInitialTab: (doc) => Promise.resolve(0),
  });

  const months = [
    { id: 1, name: "January" , file: newsletter},
    // Add more months as needed
  ];

  const [selectedMonth, setSelectedMonth] = useState(months[0]);
  


  return (
    <>
      <Navbar textColor="white" />
      <div className="bg-gray-500 min-h-screen flex flex-col md:flex-row py-16 p-10 md:p-20">

        
        <div className="hidden md:block w-1/4 bg-gray-200 p-4 my-10 rounded-lg">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">
            Newsletter Menu
          </h2>
          <div className="space-y-2">
            {months.map((month) => (
              <button
                key={month.id}
                className={`px-4 py-2 rounded-lg w-full ${
                  selectedMonth.id === month.id
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-700"
                }`}
                onClick={() => setSelectedMonth(month)}
              >
                {month.name}
              </button>
            ))}
          </div>
        </div>
        <div className="w-full md:w-3/4 bg-white p-4 my-10 rounded-lg md:ml-4">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">
            {selectedMonth.name} Newsletter
          </h2>
          <div className="newsletter-pdf">
            {/* <Viewer
              fileUrl={newsletter}
              plugins={[defaultLayoutPluginInstance]}
            /> */}
            <iframe
              src={selectedMonth.file}
              width="100%"
              height="600"
              title="newsletter"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

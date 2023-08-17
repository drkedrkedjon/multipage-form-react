import Footer from "./components/Footer";
import Header from "./components/Header";
import JobOffers from "./components/JobOffers";
import { useState } from "react";

export default function App() {
  const [pasos, setPasos] = useState("inicio");

  return (
    <div className="app-container">
      <Header setPasos={setPasos} />
      <JobOffers pasos={pasos} setPasos={setPasos} />
      <Footer />
    </div>
  );
}

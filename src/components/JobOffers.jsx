import { data } from "../assets/data";
import { useState } from "react";
// import useToggle from "../utilities/useToggle";
import JobCard from "./JobCard";
import PasoUno from "./job-apply-form/PasoUno";
import PasoDos from "./job-apply-form/PasoDos";

export default function JobOffers() {
  // inicio, paso-uno, paso-dos, paso-tres
  const [pasos, setPasos] = useState("inicio");
  const [form, setForm] = useState({
    appliedJobs: [],
    email: "",
    password: "",
  });

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleApplyOffer(offerID) {
    setPasos("paso-uno");
    setForm({ ...form, appliedJobs: [...form.appliedJobs, offerID] });
  }

  const jobCardMapeo = data.map((item) => {
    return (
      <JobCard applyToOffer={handleApplyOffer} item={item} key={item.id} />
    );
  });

  console.log(pasos);

  return (
    <main className="job-offers">
      {pasos === "inicio" ? <h1>Job Offers</h1> : <h1>Let’s Go!</h1>}
      <div className="job-offers-container">
        {pasos === "inicio" && jobCardMapeo}
        {pasos === "paso-uno" && (
          <PasoUno handleForm={handleForm} form={form} setPasos={setPasos} />
        )}
        {pasos === "paso-dos" && (
          <PasoDos handleForm={handleForm} form={form} setPasos={setPasos} />
        )}
      </div>
    </main>
  );
}

import { data } from "../assets/data";
import { useState } from "react";
// import useToggle from "../utilities/useToggle";
import JobCard from "./JobCard";
import PasoUno from "./job-apply-form/PasoUno";
import PasoDos from "./job-apply-form/PasoDos";
import PasoTres from "./job-apply-form/PasoTres";

export default function JobOffers() {
  const [userUID, setUserUID] = useState("");
  // inicio, paso-uno, paso-dos, paso-tres
  const [pasos, setPasos] = useState("paso-tres");
  const [form, setForm] = useState({
    appliedJobs: [],
    email: "",
    password: "",
    name: "",
    phone: "",
    waterResistant: false,
    experience: "",
    techStack: "",
    fileURL: "",
    fileName: "",
  });

  function handleForm(e) {
    const { name, value, checked, type } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
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

  console.log(form);

  return (
    <main className="job-offers">
      {pasos === "inicio" ? <h1>Job Offers</h1> : <h1>Let’s Go!</h1>}
      <div className="job-offers-container">
        {pasos === "inicio" && jobCardMapeo}
        {pasos === "paso-uno" && (
          <PasoUno
            handleForm={handleForm}
            form={form}
            setPasos={setPasos}
            setUserUID={setUserUID}
          />
        )}
        {pasos === "paso-dos" && (
          <PasoDos handleForm={handleForm} form={form} setPasos={setPasos} />
        )}
        {pasos === "paso-tres" && (
          <PasoTres
            handleForm={handleForm}
            form={form}
            userUID={userUID}
            setForm={setForm}
          />
        )}
      </div>
    </main>
  );
}

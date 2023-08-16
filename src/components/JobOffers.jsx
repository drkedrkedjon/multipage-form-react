import { data } from "../assets/data";
import { useEffect, useState } from "react";
import { auth } from "../utilities/firebase";
import { onAuthStateChanged } from "firebase/auth";
import JobCard from "./JobCard";
import PasoUno from "./job-apply-form/PasoUno";
import PasoDos from "./job-apply-form/PasoDos";
import PasoTres from "./job-apply-form/PasoTres";
import PasoCuatro from "./job-apply-form/PasoCuatro";
import Login from "./job-apply-form/Login";
import ConfirmJobOffer from "./job-apply-form/ConfirmJobOffer";

export default function JobOffers() {
  const [userUID, setUserUID] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  // inicio, login, paso-uno, paso-dos, paso-tres, paso-cuatro, confirm-offer
  const [pasos, setPasos] = useState("inicio");
  const [form, setForm] = useState({
    appliedJobs: [],
    email: "",
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

  const redirectIfLogged = isLogged ? "confirm-offer" : "paso-uno";

  function handleApplyOffer(offerID) {
    setForm({ ...form, appliedJobs: [...form.appliedJobs, offerID] });
    setPasos(redirectIfLogged);
  }

  const jobCardMapeo = data.map((item) => {
    return (
      <JobCard applyToOffer={handleApplyOffer} item={item} key={item.id} />
    );
  });

  function handleH1() {
    switch (pasos) {
      case "inicio":
        return "Job Offers";
      case "paso-uno":
        return "Let’s Go!";
      case "paso-dos":
        return "About You";
      case "paso-tres":
        return "Will You Fitt?";
      case "paso-cuatro":
        return "Your Account";
      case "login":
        return "Let’s Go!";
      case "confirm-offer":
        return "Confirmation";
      default:
        return "Job Offers";
    }
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pasos]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogged(true);
        setUserUID(user.uid);
      } else {
        setIsLogged(false);
      }
    });
  }, []);

  return (
    <main className="job-offers">
      {/* Falta eso de H1 */}
      {/* {pasos === "inicio" ? <h1>Job Offers</h1> : <h1>Let’s Go!</h1>} */}
      {<h1>{handleH1()}</h1>}
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
            setPasos={setPasos}
          />
        )}
        {pasos === "paso-cuatro" && (
          <PasoCuatro
            setPasos={setPasos}
            userUID={userUID}
            setUserUID={setUserUID}
            setForm={setForm}
          />
        )}
        {pasos === "login" && (
          <Login setPasos={setPasos} setUserUID={setUserUID} />
        )}
        {pasos === "confirm-offer" && (
          <ConfirmJobOffer setPasos={setPasos} userUID={userUID} form={form} />
        )}
      </div>
    </main>
  );
}

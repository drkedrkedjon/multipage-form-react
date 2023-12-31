/* eslint-disable react/prop-types */
import AccordionSIngle from "./AccordionSIngle";
import { useEffect, useState } from "react";
import { db, refStorage } from "../../utilities/firebase";
import { ref as refST, uploadBytes, getDownloadURL } from "firebase/storage";
import { push, ref as refDB } from "firebase/database";

const acordeonData = {
  header: "What should I put here?",
  content:
    "All we need is some data relevante to the job you are applying to, no need to write everything you know. Like code lover rock star and so on.\n\n The rest, we guess, is already writen in your CV and we will contact you if we need more information.\n\n Please, make sure you have your CV in .pdf format ready to upload.",
};

export default function PasoTres({
  handleForm,
  form,
  userUID,
  setForm,
  setPasos,
}) {
  const [cvSelected, setCvSelected] = useState(null);
  const [btnDisabled, setBtnDisabled] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    const userRef = refDB(db, `/${userUID}`);
    push(userRef, form).then(setPasos("paso-cuatro"));
  }

  function handleCvSelected(e) {
    setCvSelected(e.target.files[0]);
  }

  useEffect(() => {
    if (!cvSelected) return;

    const userFilesRef = refST(refStorage, `/${userUID}`);
    const fileRef = refST(userFilesRef, cvSelected?.name);

    uploadBytes(fileRef, cvSelected).then(() => {
      getDownloadURL(fileRef).then((url) => {
        setForm((oldData) => ({
          ...oldData,
          fileURL: url,
          fileName: cvSelected?.name,
        }));
        setBtnDisabled(false);
      });
    });
  }, [cvSelected, setForm, userUID]);

  return (
    <div className="pasos-container">
      <div className="pasos-left">
        <div>
          <h2>{"Last Step: (3/4)"}</h2>
          <h3>Your Work Experience Data</h3>
        </div>
        <AccordionSIngle
          header={acordeonData.header}
          content={acordeonData.content}
        />
      </div>
      <div className="pasos-right">
        <form onSubmit={handleSubmit}>
          <label htmlFor="techStack">Your Tech Stack:</label>
          <textarea
            onChange={handleForm}
            value={form.techStack}
            name="techStack"
            id="techStack"
          />
          <label htmlFor="experience">Years of experience:</label>
          <input
            required
            onChange={handleForm}
            value={form.experience}
            type="number"
            name="experience"
            id="experience"
          />

          <label htmlFor="cv">Upload your CV in .pdf format</label>
          <input
            required
            type="file"
            id="cv"
            name="cv"
            accept="application/pdf"
            onChange={handleCvSelected}
          />

          <button disabled={btnDisabled} className="btn-green">
            FInish Job Application
          </button>
        </form>
      </div>
    </div>
  );
}

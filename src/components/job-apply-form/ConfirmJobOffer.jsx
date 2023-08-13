/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { onValue, ref as refDB, set, update } from "firebase/database";
import { db } from "../../utilities/firebase";
import { data } from "../../assets/data.jsx";

export default function ConfirmJobOffer({ setPasos, form, userUID }) {
  const [userData, setUserData] = useState({});
  const [dataID, setDataID] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [offertaDuplicada, setOffertaDuplicada] = useState(false);

  function handleApply() {
    const newAppliedJobs = [...userData.appliedJobs, ...form.appliedJobs];
    const newData = { ...userData, appliedJobs: newAppliedJobs };
    update(refDB(db, `/${userUID}/${dataID}`), newData)
      .then(() => {
        setPasos("paso-cuatro");
      })
      .catch((error) => {
        setErrorMsg(error.message);
      });
  }

  const findJob = data.find((item) => {
    return item.id === form.appliedJobs[0];
  });

  useEffect(() => {
    const cancelOnValue = onValue(
      refDB(db, `/${userUID}`),
      function (snapshot) {
        if (snapshot.val()) {
          const allData = Object.entries(snapshot.val());
          const data = allData[0][1];
          const dataID = allData[0][0];
          const duplicado = data.appliedJobs.some((item) => {
            return item === form.appliedJobs[0];
          });
          setOffertaDuplicada(duplicado);
          setDataID(dataID);
          setUserData(data);
        } else {
          setUserData({});
        }
      }
    );
    return cancelOnValue;
  }, [userUID]);

  return (
    <div className="pasos-container">
      <div className="pasos-left">
        <h2>{"Step Three: (3/4)"}</h2>
        {/* Offerta duplicada */}
        {offertaDuplicada && (
          <>
            <h3>
              Well, well, well! Look who's been there, done that - yep, you've
              gone ahead and applied for the job already! Bravo, speedy.
            </h3>
            <p>
              But hang on a sec, we're not into making clones of folks just yet,
              so we can't double up on you. Nope, not happening.
            </p>
            <p>
              Now comes the fun part - take a gander at the options below and
              take your pick. It's decision time, my friend! 🚀
            </p>
            <div className="pasos-left-offertas-duplicado">
              <a className="link-orange" onClick={() => setPasos("inicio")}>
                Return to job offers
              </a>
              <a
                className="link-orange"
                onClick={() => setPasos("paso-cuatro")}
              >
                Continue to your account
              </a>
            </div>
          </>
        )}
        {/* Offerta NO duplicada */}
        {!offertaDuplicada && (
          <>
            <h3>
              You want to apply for this job? If so, good luck moving forward!
            </h3>
            <p>Our recruiter, Pendejo Gonzales, will be alerted.</p>
            <p>Hit the button below!</p>
            <button onClick={handleApply} className="btn-green">
              Apply to this job
            </button>
          </>
        )}
        {errorMsg && <p className="error-msg">{errorMsg}</p>}
      </div>
      <div className="pasos-right">
        <p className="user-data-title">Job ID:</p>
        <p className="user-data-value">{findJob?.id}</p>
        <p className="user-data-title">Title:</p>
        <p className="user-data-value">{findJob?.title}</p>
        <p className="user-data-title">Description:</p>
        <p className="user-data-value">{findJob?.description}</p>
        <p className="user-data-title">Salary:</p>
        <p className="user-data-value">{findJob?.salary}</p>
      </div>
    </div>
  );
}

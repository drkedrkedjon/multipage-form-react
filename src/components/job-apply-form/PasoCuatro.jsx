/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { onValue, ref as refDB, remove } from "firebase/database";
import { db } from "../../utilities/firebase";
import { auth } from "../../utilities/firebase";
import { signOut, deleteUser } from "firebase/auth";
import { ref as refST, deleteObject } from "firebase/storage";
import { storage } from "../../utilities/firebase";

export default function PasoCuatro({ setPasos, userUID, setUserUID, setForm }) {
  const [userData, setUserData] = useState({});
  const [errorMsg, setErrorMsg] = useState("");

  function handleLogout() {
    signOut(auth)
      .then(() => {
        setPasos("inicio");
        setUserUID("");
      })
      .catch((error) => {
        setErrorMsg(error.message);
      });
  }

  function handleDelete() {
    remove(refDB(db, `/${userUID}`))
      .then(() => {
        const userRef = refST(storage, `${userUID}`);
        const cvRef = refST(userRef, userData.fileName); // Aqui esta error
        deleteObject(cvRef).then(() => {
          deleteUser(auth.currentUser).then(() => {
            setPasos("inicio");
            setUserUID("");
          });
        });
      })
      .catch((error) => {
        setErrorMsg(error.message);
      });
  }

  useEffect(() => {
    const cancelOnValue = onValue(
      refDB(db, `/${userUID}`),
      function (snapshot) {
        if (snapshot.val()) {
          const allData = Object.entries(snapshot.val());
          const data = allData[0][1];
          setUserData(data);
          setForm({
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
        } else {
          setUserData({});
        }
      }
    );
    return cancelOnValue;
  }, [userUID]);

  // console.log(userData.appliedJobs);

  const appliedJobsMapeo = userData?.appliedJobs?.map((item) => {
    return (
      <button className="btn-applied-jobs" key={Math.random()}>
        {item}
      </button>
    );
  });

  return (
    <div className="pasos-container">
      <div className="pasos-left">
        <h2>{"Your Job Application: (4/4)"}</h2>
        <h3>
          Yo, you've applied for the job like a boss. Good luck moving forward!
        </h3>
        <p>
          Our recruiter, Pendejo Gonzales, has been alerted. As soon as he rolls
          out of bed, he'll hit you up!
        </p>
        <p>
          While you're waiting, you can peep your application status down below.
        </p>
        <a className="link-orange" onClick={() => setPasos("inicio")}>
          Return to all job offers
        </a>{" "}
        <br />
        <button onClick={handleLogout} className="btn-green btn-orange">
          Log Out
        </button>
        {errorMsg && <p className="error-msg">{errorMsg}</p>}
      </div>
      <div className="pasos-right">
        <p className="user-data-title">Applied jobs:</p>
        {appliedJobsMapeo}
        <p className="user-data-title">Name:</p>
        <p className="user-data-value">{userData?.name}</p>
        <p className="user-data-title">E-mail:</p>
        <p className="user-data-value">{userData?.email}</p>
        <p className="user-data-title">Phone:</p>
        <p className="user-data-value">{userData?.phone}</p>
        <p className="user-data-title">Years of experience:</p>
        <p className="user-data-value">{userData?.experience}</p>
        <p className="user-data-title">CV:</p>
        <p className="user-data-value">{userData?.fileName}</p>
        <p className="user-data-title">Tech stack:</p>
        <p className="user-data-value">{userData?.techStack}</p>
        <p className="user-data-title">Water resistance:</p>
        <p className="user-data-value">
          {userData?.waterResistant ? "Yes" : "No"}
        </p>
        <button onClick={handleDelete} className="btn-green btn-red">
          Delete ALL data and close account
        </button>
      </div>
    </div>
  );
}

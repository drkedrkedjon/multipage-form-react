import { data } from "../assets/data";
import { useState } from "react";
import useToggle from "../utilities/useToggle";
import JobCard from "./JobCard";
import OpenAccount from "./job-apply-form/OpenAccount";

export default function JobOffers() {
  const [isApplying, setIsApplying] = useToggle(false);
  const [form, setForm] = useState({
    appliedJobs: [],
    email: "",
    password: "",
  });

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleApplyOffer(offerID) {
    setIsApplying();
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
      {isApplying ? <h1>Let’s Go!</h1> : <h1>Job Offers</h1>}
      <div className="job-offers-container">
        {!isApplying ? jobCardMapeo : <OpenAccount />}
      </div>
    </main>
  );
}

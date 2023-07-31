import useToggle from "../utilities/useToggle";
import { data } from "../assets/data";
import JobCard from "./JobCard";
import { useState } from "react";

export default function JobOffers() {
  const [isApplying, setIsApplying] = useToggle(false);
  const [jobOfferID, setJobOfferID] = useState("");

  function handleApplyOffer(offerID) {
    setIsApplying();
    setJobOfferID(offerID);
  }

  console.log(jobOfferID);
  const jobCardMapeo = data.map((item) => {
    return (
      <JobCard applyToOffer={handleApplyOffer} item={item} key={item.id} />
    );
  });

  return (
    <main className="job-offers">
      {isApplying ? <h1>Let’s Go!</h1> : <h1>Job Offers</h1>}
      <div className="job-offers-container">{!isApplying && jobCardMapeo}</div>
    </main>
  );
}

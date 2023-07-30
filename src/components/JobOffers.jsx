import { useState } from "react";
import { data } from "../assets/data";
import JobCard from "./JobCard";

export default function JobOffers() {
  const [isApplying, setIsApplying] = useState(false);

  const jobCardMapeo = data.map((item) => {
    return <JobCard item={item} key={item.id} />;
  });

  return (
    <main className="job-offers">
      <h1>Job Offers</h1>
      <div className="job-offers-container">{!isApplying && jobCardMapeo}</div>
    </main>
  );
}

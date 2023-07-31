/* eslint-disable react/prop-types */
export default function JobCard({ applyToOffer, item }) {
  return (
    <div className="job-offers-container-query">
      <div className="job-offers-card">
        <h2>{item.title}</h2>
        <p>
          <span>Description: </span> {item.description}
        </p>
        <p>
          <span>Salary: </span>
          {item.salary}
        </p>
        <button
          onClick={() => applyToOffer(item.id)}
          aria-label="Apply to this job"
        >
          Apply to this job
        </button>
      </div>
    </div>
  );
}

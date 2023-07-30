import { data } from "../assets/data";

export default function JobOffers() {
  return (
    <main className="job-offers">
      <h1>Job Offers</h1>
      <div className="job-offers-container">
        {data.map((item) => {
          return (
            <div className="job-offers-card" key={item.id}>
              <h2>{item.title}</h2>
              <p>
                <span>Description: </span> {item.description}
              </p>
              <p>
                <span>Salary: </span>
                {item.salary}
              </p>
              <button>Apply to this job</button>
            </div>
          );
        })}
      </div>
    </main>
  );
}

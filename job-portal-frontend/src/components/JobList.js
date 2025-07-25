import React, { useEffect, useState } from "react";
import axios from "axios";

function JobList() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/jobs")
            .then(res => setJobs(res.data))
            .catch(err => console.error("Error fetching jobs:", err));
    }, []);

    return (
        <div>
            <h2>Available Jobs</h2>
            {jobs.map(job => (
                <div key={job.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
                    <h3>{job.title}</h3>
                    <p>{job.description}</p>
                    <p><strong>Location:</strong> {job.location}</p>
                    <p><strong>Salary:</strong> ₹{job.salary}</p>
                </div>
            ))}
        </div>
    );
}
export default JobList;
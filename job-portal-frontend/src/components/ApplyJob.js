import React, { useState } from "react";
import axios from "axios";

function ApplyJob() {
    const [app, setApp] = useState({
        name: "",
        email: "",
        resumeUrl: "",
        jobId: ""
    });

    const handleChange = (e) => {
        setApp({ ...app, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/api/applications", app)
            .then(() => {
                alert("Application submitted!");
                setApp({ name: "", email: "", resumeUrl: "", jobId: "" });
            })
            .catch(err => console.error("Error submitting application:", err));
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Apply for a Job</h2>
            <input name="name" placeholder="Your Name" value={app.name} onChange={handleChange} required /><br/>
            <input name="email" type="email" placeholder="Email" value={app.email} onChange={handleChange} required /><br/>
            <input name="resumeUrl" placeholder="Resume URL" value={app.resumeUrl} onChange={handleChange} required /><br/>
            <input name="jobId" placeholder="Job ID" value={app.jobId} onChange={handleChange} required /><br/>
            <button type="submit">Apply</button>
        </form>
    );
}
export default ApplyJob;
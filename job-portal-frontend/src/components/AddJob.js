import React, { useState } from "react";
import axios from "axios";

function AddJob() {
    const [job, setJob] = useState({
        title: "",
        description: "",
        location: "",
        salary: ""
    });

    const handleChange = (e) => {
        setJob({ ...job, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/api/jobs", job)
            .then(() => {
                alert("Job added successfully!");
                setJob({ title: "", description: "", location: "", salary: "" });
            })
            .catch(err => console.error("Error adding job:", err));
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add New Job</h2>
            <input name="title" placeholder="Job Title" value={job.title} onChange={handleChange} required /><br/>
            <textarea name="description" placeholder="Description" value={job.description} onChange={handleChange} required /><br/>
            <input name="location" placeholder="Location" value={job.location} onChange={handleChange} required /><br/>
            <input name="salary" type="number" placeholder="Salary" value={job.salary} onChange={handleChange} required /><br/>
            <button type="submit">Add Job</button>
        </form>
    );
}
export default AddJob;
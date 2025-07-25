import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import JobList from "./components/JobList";
import AddJob from "./components/AddJob";
import ApplyJob from "./components/ApplyJob";

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <Link to="/">Home</Link> | 
                    <Link to="/add"> Add Job</Link> | 
                    <Link to="/apply"> Apply Job</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<JobList />} />
                    <Route path="/add" element={<AddJob />} />
                    <Route path="/apply" element={<ApplyJob />} />
                </Routes>
            </div>
        </Router>
    );
}
export default App;
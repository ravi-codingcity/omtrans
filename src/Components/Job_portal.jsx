import React, { useState, useEffect } from "react";
import axios from "axios";

const JobPortal = () => {
  const [jobData, setJobData] = useState({
    title: "",
    description: "",
    location: "",
  });
  const [jobs, setJobs] = useState([]);
  const [editingJobId, setEditingJobId] = useState(null);
  const [wordCount, setWordCount] = useState(0);
  const WORD_LIMIT = 30;

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await axios.get(
        "https://new-backend-yulp.onrender.com/api/jobs"
      );
      setJobs(response.data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData({ ...jobData, [name]: value });

    // Update word count for the description field
    if (name === "description") {
      const words = value
        .trim()
        .split(/\s+/)
        .filter((word) => word.length > 0);
      setWordCount(words.length);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingJobId) {
        await axios.put(
          `https://new-backend-yulp.onrender.com/api/jobs/${editingJobId}`,
          jobData
        );
        alert("Job updated successfully!");
      } else {
        await axios.post(
          "https://new-backend-yulp.onrender.com/api/jobs",
          jobData
        );
        alert("Job posted successfully!");
      }
      setJobData({ title: "", description: "", location: "" });
      setEditingJobId(null);
      setWordCount(0); // Reset word count after submission
      fetchJobs();
    } catch (error) {
      console.error("Error posting/updating job:", error);
    }
  };

  const handleEdit = (job) => {
    setJobData(job);
    setEditingJobId(job._id);
    const words = job.description
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0);
    setWordCount(words.length); // Set initial word count for editing
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this job?")) {
      try {
        await axios.delete(
          `https://new-backend-yulp.onrender.com/api/jobs/${id}`
        );
        alert("Job deleted successfully!");
        fetchJobs();
      } catch (error) {
        console.error("Error deleting job:", error);
      }
    }
  };

  // Function to format the date
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center justify-center mb-5">
        <h1 className="text-3xl font-bold text-red-600">OmTrans Job Portal</h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mb-4 p-4 border rounded shadow-md bg-white"
      >
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          value={jobData.title}
          onChange={handleChange}
          required
          className="border rounded p-2 mb-2 w-full"
        />
        <div className="relative">
          <textarea
            name="description"
            placeholder="Job Description"
            value={jobData.description}
            onChange={handleChange}
            required
            className={`border rounded p-4 mb-2 w-full ${
              wordCount > WORD_LIMIT ? "border-red-500" : ""
            }`}
          />
          <span className="absolute right-2 top-2 text-sm">
            {wordCount}/{WORD_LIMIT}
          </span>
        </div>
        <input
          type="text"
          name="location"
          placeholder="Job Location"
          value={jobData.location}
          onChange={handleChange}
          required
          className="border rounded p-2 mb-2 w-full"
        />

        <button
          type="submit"
          className="bg-green-600 text-white rounded p-2 font-semibold w-full"
        >
          {editingJobId ? "Update Job" : "Post Job"}
        </button>
      </form>

      <div className="job-list">
        {jobs.map((job) => (
          <div
            key={job._id}
            className="border rounded shadow-md p-4 mb-4 bg-white"
          >
            <h2 className="text-xl font-bold">{job.title}</h2>
            <p>{job.description}</p>
            <p className="text-gray-500">{job.location}</p>
            {/* Display the date from the job's datePosted field */}
            <p className="text-gray-500">
              Posted on: {formatDate(job.datePosted)}
            </p>
            <div className="flex justify-between mt-2">
              <button
                onClick={() => handleEdit(job)}
                className="bg-blue-500 text-white rounded p-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(job._id)}
                className="bg-red-500 text-white rounded p-2"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobPortal;

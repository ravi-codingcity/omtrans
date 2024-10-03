import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaBriefcase, FaTrash, FaEdit } from "react-icons/fa";

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
      setWordCount(0);
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
    setWordCount(words.length);
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

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="w-full  p-6 ">
      <div className="flex flex-col items-center justify-center mb-5">
        <motion.h1
          className="text-4xl font-bold text-red-600"
          animate={{ scale: 1.1 }}
        >
          OmTrans Job Portal
        </motion.h1>
      </div>

      <div className="max-w-screen-lg m-auto">
        <motion.form
          onSubmit={handleSubmit}
          className="mb-6 p-6 border rounded-lg shadow-lg bg-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <input
            type="text"
            name="title"
            placeholder="Job Title"
            value={jobData.title}
            onChange={handleChange}
            required
            className="border rounded-lg p-3 mb-3 w-full focus:outline-none focus:ring focus:ring-blue-300"
          />
          <div className="relative mb-3">
            <textarea
              name="description"
              placeholder="Job Description"
              value={jobData.description}
              onChange={handleChange}
              required
              className={`border rounded-lg p-3 w-full focus:outline-none focus:ring ${
                wordCount > WORD_LIMIT
                  ? "border-red-500"
                  : "focus:ring-green-300"
              }`}
            />
            <span className="absolute right-3 top-3 text-sm text-gray-500">
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
            className="border rounded-lg p-3 mb-3 w-full focus:outline-none focus:ring focus:ring-blue-300"
          />

          <motion.button
            type="submit"
            className="bg-blue-600 text-white rounded-lg p-3 font-semibold w-full hover:bg-blue-700 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            {editingJobId ? "Update Job" : "Post Job"}
          </motion.button>
        </motion.form>
      </div>

      <div className="job-list grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <motion.div
            key={job._id}
            className="border rounded-lg shadow-md p-6 bg-white"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-bold mb-2 text-blue-800 flex items-center">
              <FaBriefcase className="mr-2" /> {job.title}
            </h2>
            <p className="mb-2">{job.description}</p>
            <p className="text-gray-600 flex items-center mb-2">
              <FaMapMarkerAlt className="mr-2" /> {job.location}
            </p>
            <p className="text-gray-500 mb-4">
              Posted on: {formatDate(job.datePosted)}
            </p>
            <div className="flex justify-between">
              <motion.button
                onClick={() => handleEdit(job)}
                className="bg-yellow-500 text-white rounded-lg p-2 flex items-center hover:bg-yellow-600"
                whileHover={{ scale: 1.05 }}
              >
                <FaEdit className="mr-1" /> Edit
              </motion.button>
              <motion.button
                onClick={() => handleDelete(job._id)}
                className="bg-red-500 text-white rounded-lg p-2 flex items-center hover:bg-red-600"
                whileHover={{ scale: 1.05 }}
              >
                <FaTrash className="mr-1" /> Delete
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default JobPortal;

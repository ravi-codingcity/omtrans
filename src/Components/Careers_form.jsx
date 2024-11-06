import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Careers_form = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false); // Loading state for form submission
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    email: "",
    currentStatus: "",
    positionApply: "",
    currentCTC: "",
    expectedCTC: "",
    experience: "",
    relocate: "",
    immediateStart: "",
    resume: null, // For file upload
  });

  // Handle text input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle file input changes
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0], // Update with selected file
    });
  };

  // Reset form to its initial state
  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      contact: "",
      email: "",
      currentStatus: "",
      positionApply: "",
      currentCTC: "",
      expectedCTC: "",
      experience: "",
      relocate: "",
      immediateStart: "",
      resume: null,
    });
    form.current.reset(); // Reset file input field
  };

  // Handle form submission
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true); // Start loading spinner

    // Use FormData to handle the file and form data
    const formDataToSend = new FormData(form.current);
    formDataToSend.append("resume", formData.resume); // Attach the file to FormData

    emailjs
      .sendForm(
        "service_04u0cox", // Your EmailJS service ID
        "template_i9lbp0y", // Your EmailJS template ID
        form.current, // Pass the form ref to emailjs
        "ZBesjVFYR6UiVfrP4" // Your EmailJS user ID
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Your message has been sent successfully!");
          setLoading(false); // Stop loading spinner after success
          resetForm(); // Reset the form after success
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("There was an error sending your message.");
          setLoading(false); // Stop loading spinner after failure
        }
      );
  };

  return (
    <div className="max-w-4xl mx-auto bg-white sm:p-8 p-4 rounded-lg shadow-lg border-blue-600 border ">
      <form ref={form} onSubmit={sendEmail} className="grid grid-cols-2 gap-5">
        <div>
          <label className="block mb-1 font-semibold">First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md border-blue-600"
            placeholder="Enter first name"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md border-blue-600"
            placeholder="Enter last name"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Contact No:</label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md border-blue-600"
            placeholder="Enter contact number"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md border-blue-600"
            placeholder="Enter email"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">
            Current Employee Status:
          </label>
          <select
            name="currentStatus"
            value={formData.currentStatus}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md border-blue-600"
            required
          >
            <option value="">Select Status</option>
            <option value="Employed">Employed</option>
            <option value="Unemployed">Unemployed</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-semibold">
            Position Apply For:
          </label>
          <select
            name="positionApply"
            value={formData.positionApply}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md border-blue-600"
            required
          >
            <option value="">Select</option>
            <option value="Sr. Executive-Export Documentation">
              Sr. Executive-Export Documentation
            </option>
            <option value="Sr. Executive-Import Documentation">
              Sr. Executive-Import Documentation
            </option>
            <option value="HR Manager">HR Manager</option>
            <option value="Sales and Marketing Manager">
              Sales and Marketing Manager
            </option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-semibold">Current CTC:</label>
          <input
            type="text"
            name="currentCTC"
            value={formData.currentCTC}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md border-blue-600"
            placeholder="Enter current CTC"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Expected CTC:</label>
          <input
            type="text"
            name="expectedCTC"
            value={formData.expectedCTC}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md border-blue-600 "
            placeholder="Enter expected CTC"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Total Experience:</label>
          <input
            type="text"
            name="experience"
            value={formData.experience}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md border-blue-600"
            placeholder="Enter total experience"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">
            Are You Comfortable in Relocating?
          </label>
          <div className="flex items-center">
            <label className="inline-flex items-center mr-2">
              <input
                type="radio"
                name="relocate"
                value="Yes"
                onChange={handleInputChange}
                className="form-radio"
                required
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="relocate"
                value="No"
                onChange={handleInputChange}
                className="form-radio"
                required
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>

        <div>
          <label className="block mb-1 font-semibold">
            Can you Start Immediately?
          </label>
          <div className="flex items-center">
            <label className="inline-flex items-center mr-2">
              <input
                type="radio"
                name="immediateStart"
                value="Yes"
                onChange={handleInputChange}
                className="form-radio"
                required
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="immediateStart"
                value="No"
                onChange={handleInputChange}
                className="form-radio"
                required
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>

        <div>
          <label className="block mb-1 font-semibold">
            Upload Resume (PDF or Word):
          </label>
          <input
            type="file"
            name="resume"
            onChange={handleFileChange}
            className="w-full px-4 py-2 border rounded-md border-blue-600"
            accept=".pdf,.doc,.docx"
          />
        </div>

        <div className="col-span-2 text-center">
          <button
            type="submit"
            disabled={loading} // Disable button while loading
            className="bg-red-600 text-white font-semibold relative px-10 py-3 hover:border-b-1 border-[#ff2b2b] transition-all duration-200 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:-mb-2 after:w-full after:bg-[#ff2b2b] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 text-white inline-block"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v2a6 6 0 00-6 6H4z"
                ></path>
              </svg>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Careers_form;

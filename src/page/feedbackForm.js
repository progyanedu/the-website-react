import React, { useState } from "react";

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [improvements, setImprovements] = useState("");

  const handleRatingChange = (e) => {
    setRating(parseInt(e.target.value, 10));
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleImprovementsChange = (e) => {
    setImprovements(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to send feedback to your backend or store it as needed
    console.log("Feedback submitted:", {
      rating,
      feedback,
      name,
      email,
      role,
      improvements,
    });
    // Optionally, you can reset the form state after submission
    setRating(0);
    setFeedback("");
    setName("");
    setEmail("");
    setRole("");
    setImprovements("");
  };

  return (
    <div className="max-w-max mx-auto mt-28 mb-4 p-6 bg-gray-800 rounded-md shadow-md">
      <h2 className="text-4xl font-bold text-white mb-4">FeedBack Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        <div>
          <label className="block text-xl font-medium text-white">
            1. How would you rate our education platform overall?
          </label>
          <select
            value={rating}
            onChange={handleRatingChange}
            className="mt-1 text-xl block w-full h-10 rounded-md border-gray-600 dark:border-gray-400 bg-gray-700 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-white"
          >
            <option value={1}>1 - Poor</option>
            <option value={2}>2 - Fair</option>
            <option value={3}>3 - Average</option>
            <option value={4}>4 - Good</option>
            <option value={5}>5 - Excellent</option>
          </select>
        </div>

        <div>
          <label className="block text-xl font-medium text-white">
            2. What specific features or content do you like about our platform?
          </label>
          <textarea
            value={feedback}
            onChange={handleFeedbackChange}
            rows={4}
            className="mt-1 resize-none block w-full text-xl rounded-md border-gray-600 dark:border-gray-400 bg-gray-700 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-white"
          />
        </div>

        <div>
          <label className="block text-xl font-medium text-white">
            3. Your Name (Optional):
          </label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            className="mt-1 block text-xl w-full rounded-md border-gray-600 dark:border-gray-400 bg-gray-700 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-white"
          />
        </div>

        <div>
          <label className="block text-xl font-medium text-white">
            4. Your Email (Optional):
          </label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="mt-1 block text-xl w-full rounded-md border-gray-600 dark:border-gray-400 bg-gray-700 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-white"
          />
        </div>

        <div>
          <label className="block text-xl font-medium text-white">
            5. Your Role (Student, Teacher, Professional, etc.):
          </label>
          <input
            type="text"
            value={role}
            onChange={handleRoleChange}
            className="mt-1 block w-full text-xl rounded-md border-gray-600 dark:border-gray-400 bg-gray-700 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-white"
          />
        </div>

        <div>
          <label className="block text-xl font-medium text-white">
            6. How can we improve your experience on our platform?
          </label>
          <textarea
            value={improvements}
            onChange={handleImprovementsChange}
            rows={4}
            className="mt-1 block w-full resize-none rounded-md text-xl border-gray-600 dark:border-gray-400 bg-gray-700 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-white"
          />
        </div>

        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-md transition duration-300"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;

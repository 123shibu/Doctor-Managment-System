import React from "react";

const Blogs = () => {
  const blogData = [
    {
      id: 1,
      title: "How to Choose the Right Doctor",
      desc: "Learn how to select the best doctor based on experience, specialization, and patient reviews.",
      date: "December 10, 2025",
    },
    {
      id: 2,
      title: "Top 5 Health Tips for Busy People",
      desc: "Even with a busy schedule, these simple health tips will help you stay active and healthy.",
      date: "December 08, 2025",
    },
    {
      id: 3,
      title: "Benefits of Regular Health Checkups",
      desc: "Regular checkups help catch health issues early. Here’s why you shouldn't skip them.",
      date: "December 05, 2025",
    },
    {
      id: 4,
      title: "How to Prepare for a Doctor Appointment",
      desc: "Proper preparation increases the effectiveness of your appointment and ensures better diagnosis.",
      date: "December 03, 2025",
    },
    {
      id: 5,
      title: "Understanding Common Medical Tests",
      desc: "A simple guide to help you understand common medical tests and why they are important.",
      date: "December 01, 2025",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Medical Blogs
      </h1>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {blogData.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition p-6 cursor-target"
          >
            <p className="text-sm text-gray-500 mb-2">{blog.date}</p>

            <h2 className="text-xl font-semibold mb-3">{blog.title}</h2>

            <p className="text-gray-600 mb-4 leading-relaxed">{blog.desc}</p>

            <button className="text-blue-600 font-semibold hover:underline cursor-target">
              Read More →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;

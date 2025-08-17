import React from "react";

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Information Technology",
      school: "MCKV Institute of Engineering",
      year: "2022 - 2026 | Persuing",
      details: "Focused on software development, data structures, MERN stack, operating system, cloud computing",
    },
    {
      degree: "Higher Secondary (12th)",
      school: "B.E.College Model School",
      year: "2020 - 2022 | Completed" ,
      details: "Science stream with Computer Science.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50" id="education">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold">Education</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-md rounded-lg border border-gray-200"
            >
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-gray-600">{edu.school}</p>
              <p className="text-sm text-gray-500">{edu.year}</p>
              <p className="mt-2 text-gray-700">{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
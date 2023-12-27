"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <React.Fragment>
        <p className="text-gray-500 font-semibold">Programming Languages</p>
        <ul className="list-disc pl-6">
          <li>Python • Mojo • R • Javascript • C • Java </li>
        </ul>
 
        <p className="text-gray-500 font-semibold">Frameworks and Libraries</p>
        <ul className="list-disc pl-6">
          <li>Langchain</li>
          <li>TensorFlow</li>
          <li>Streamlit</li>
          <li>PyTorch</li>
          <li>Flask</li>
          <li>React</li>
        </ul>
      </React.Fragment>
    ),
  },
  {
    title: "Pinnacles",
    id: "achievements",
    content: (
      <React.Fragment>
        <p className="text-gray-500 font-semibold">My Achievements</p>
        <div>
          <p className="font-semibold">WINNER | Esummit - Hackstart 2023</p>
          <p>Secured 1st place in Hackstart, an ML and Analytics-oriented hackathon</p>
          <p className="text-gray-500 font-semibold">April 2023 | IIT Madras - CHENNAI</p>
        </div>
        <div>
          <p className="font-semibold">FINALIST | Flipkart Grid Robotics 4.0 and 5.0</p>
          <p>Got finalist for Flipkart grid 4.0 and 5.0 - Drone automation & Robot Arm </p>
          <p className="text-gray-500 font-semibold">Expected 2023 - 2024 | CHENNAI</p>
        </div>
        <div>
          <p className="font-semibold">CLUB COORDINATOR | MAVERICAK AI CLUB - Overall Coordinator</p>
          <p>An ML based club by Dept. of Artificial Intelligence & Datascience</p>
          <p className="text-gray-500 font-semibold">2022 - 2023 | Prathyusha</p>
        </div>
        <div>
          <p className="font-semibold">SHORTLISTED | Hackoverflow3.0 | Flipkart Software challenge 5.0</p>
          <p>Shortlisted candidate for Hackoverflow 3.0 & Flipkart Software Challenge in GenAi</p>
          <p className="text-gray-500 font-semibold">2023 | REC & Bangalure</p>
        </div>
      </React.Fragment>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <React.Fragment>
        <div>
          <p className="font-semibold">PRATHYUSHA ENG COLLEGE</p>
          <p>B.Tech in Artificial Intelligence & Datascience</p>
          <p className="text-gray-500 font-semibold">Expected Jun 2024 | CGPA: 8.36%</p>
        </div>
        <br></br>
        <div>
          <p className="font-semibold">SIVANTHI MATRIC HR SEC SCL</p>
          <p>Computer Science</p>
          <p className="text-gray-500 font-semibold">May 2020 | Cum per: 70%</p>
        </div>
      </React.Fragment>

    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>SHIASH INTERN - Machine Learning Internship</li>
        <li>NPTEL COURSE - INTRODUCTION TO MACHINE LEARNING</li>
        <li>Coursera - Machine Learning Pipelines with Azure ML Studio</li>
        <li>Coursera - Semantic Segmentation with Amazon Sagemaker</li>
        <li>Coursera - Transfer Learning for NLP with TensorFlow Hub</li>
        <li>Workshop - Robotics Workshop at Panimalar</li>
        <li>PaperPresentation - ICCS-2022 Paper paper presentation on the field of NLP</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg" style={{ textAlign: 'justify' }}>
          I am Gowtham, a final year student deeply passionate about Artificial Intelligence and Data Science. Fueled by curiosity and a commitment to innovation. My hands-on experience encompasses a diverse range of skills, from advanced programming languages like Python and R to utilizing frameworks like TensorFlow and PyTorch, and a specialization in Generative AI, particularly LLM and its Agents. A quick learner and team player, I am excited to collaborate on projects that push the boundaries of technology. Lets explore the limitless possibilities of the tech world together!
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("achievements")}
              active={tab === "achievements"}
            >
              {" "}
              Pinnacles{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

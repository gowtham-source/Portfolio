"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Data2Insights",
    description: "Programming for Data Analytics? Nah, not anymore.. Just talk to your data the AI does the rest! | An Gen AI Application with LangChain Framework",
    image: "/images/projects/1.png",
    tag: ["All", "Web","Analysis"],
    gitUrl: "https://github.com/gowtham-source/data2insights",
    previewUrl: "https://www.youtube.com/watch?v=KQ5k62DlOHA",
  },
  {
    id: 2,
    title: "Multimodal Conversational AI",
    description: "An improvised version of GPT-4 vision, incoperated with Gemini-pro vision model",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Calendar Event Scheduler App",
    description: "It's a fullstack React app that allows users to create events. GraphQl | MongoDb | Tailwind Css",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/gowtham-source/calendar-schedule-app",
    previewUrl: "https://calendar-schedule-app.vercel.app",
  },
  {
    id: 4,
    title: "NCCR PROJECT",
    description: "Led a geospatial analysis project for NCCR org. Utilized YOLOv8, Inception, ResNet, and SAM Model to assess building proximity and region-wise altitude in Aerial images of Nagapattinam.",
    image: "/images/projects/4.png",
    tag: ["All", "Analysis"],
    gitUrl: "https://www.linkedin.com/posts/gowtham-m-956363205_linkedin-geospatialanalysis-nccrproject-activity-7094252297349722112-_xAv?utm_source=share&utm_medium=member_desktop",
    previewUrl: "https://www.linkedin.com/posts/gowtham-m-956363205_linkedin-geospatialanalysis-nccrproject-activity-7094252297349722112-_xAv?utm_source=share&utm_medium=member_desktop",
  },
  {
    id: 5,
    title: "Implemented Retrieval-augmented generation (RAG) model",
    description: "Implemented the Retrieval-augmented generation (RAG) architecture in Vector Space",
    image: "/images/projects/5.png",
    tag: ["All", "Gen Ai"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Deep learning Projects",
    description: "Implemented various Deep Learning techniques, pose estimation point 2D to 3D Voxel conversion, various image classification Neural Architectures such as RESNET50, YoloV8, Segment Anything Model, Keras-RetinaNet etc..",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <React.Fragment>
      <p className="text-center text-1xl text-gray-500 font-semibold">A sample of my work!</p>
      </React.Fragment>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Analysis"
          isSelected={tag === "Analysis"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;

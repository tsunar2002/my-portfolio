"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, MapPin } from "lucide-react";

type Experience = {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
};

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences: Experience[] = [
    {
      id: 1,
      role: "Full-Stack Software Engineering Intern",
      company: "OpenGym",
      location: "New York, NY",
      period: "05/2024 - 08/2024",
      description: [
        "Worked in a team to design and implement a content-based filtering algorithm on the Node.js server to create a gym recommendation feature based on user preferences, tags, previous purchases, and site interactions.",
        "Responsible for paginating algorithm search results server-side and implementing infinite scroll on the frontend using Next.js and the HTML IntersectionObserver API to enhance user experience.",
        "Conducted end-to-end integration testing using Cypress to mimic user behaviors and validate proper software component interactions, integrated into the Github Actions CI/CD pipeline for stability.",
        "Created an auth-protected onboarding page using Next.js and CSS to capture user preferences and save them to the user data model.",
      ],
    },
    {
      id: 2,
      role: "Research Intern",
      company: "6G Security",
      location: "New York, NY",
      period: "10/2024 - 12/2024",
      description: [
        "Explored security aspects of AI-native 6G systems, focusing on privacy preservation through synthetic data to mask user and network data for security applications.",
        "Worked on anomaly detection using machine learning techniques to identify outliers and abnormal patterns in data, contributing to enhanced security measures.",
      ],
    },
    {
      id: 3,
      role: "Software Developer Intern",
      company: "Unadat Inc.",
      location: "New York, NY",
      period: "07/2023 - 08/2023",
      description: [
        "Collaborated with a team to develop a Progressive Web Application (PWA) providing a mobile-app-like experience without the need for app store downloads.",
        "Led the migration of ticker selection functionality from desktop to mobile in the PWA, optimizing frontend features using HTML, CSS, and JavaScript to ensure seamless cross-platform navigation.",
      ],
    },
  ];

  return (
    <section id="experience" className="section-padding bg-muted/30">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work Experience
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative pl-8 border-l-2 border-muted space-y-12">
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={exp.id}
              experience={exp}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({
  experience,
  index,
  inView,
}: {
  experience: Experience;
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
      className="relative"
    >
      {/* Timeline dot */}
      <div className="absolute w-4 h-4 bg-primary rounded-full -left-[2.5rem] top-1.5 border-4 border-background"></div>

      <div className="bg-card p-6 rounded-lg shadow-sm border">
        <h3 className="text-xl font-bold">{experience.role}</h3>
        <h4 className="text-lg font-medium text-primary mb-2">
          {experience.company}
        </h4>

        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm text-muted-foreground mb-4">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            {experience.location}
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            {experience.period}
          </div>
        </div>

        <ul className="space-y-2 text-muted-foreground">
          {experience.description.map((item, i) => (
            <li key={i} className="flex items-start">
              <span className="mr-2">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

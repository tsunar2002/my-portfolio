"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import trailtales from "../public/trailtales.png";
import quickbid from "../public/quickbid.png";
import tradeinsights from "../public/tradeinsights.png";
import { StaticImageData } from "next/image";

type Project = {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  tags: string[];
  github: string;
  demo: string;
};

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects: Project[] = [
    {
      id: 1,
      title: "TrailTales: For Nature Lovers",
      description:
        "A social platform for outdoor enthusiasts to share hiking experiences, discover new trails, and connect with fellow nature lovers.",
      image: trailtales,
      tags: ["React", "Node.js", "Next.js", "Supabase"],
      github: "https://github.com/tsunar2002/TrailTales",
      demo: "https://project-trailtales.vercel.app/",
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description:
        "A full-featured e-commerce platform built with Next.js, featuring product listings, cart functionality, and Stripe payment integration.",
      image: quickbid,
      tags: ["Vite.js", "TypeScript", "Tailwind CSS", "Stripe"],
      github: "https://github.com/tsunar2002/quickbid",
      demo: "",
    },

    {
      id: 3,
      title: "TradeInsights",
      description:
        "A stock market analytics tool that provides insights into market trends, volatility, and options trading strategies using AI-driven analysis.",
      image: tradeinsights,
      tags: ["Python", "Machine Learning", "Scikit-learn"],
      github: "",
      demo: "",
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A selection of projects I've worked on, showcasing my skills and
            experience in building modern web applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  inView,
}: {
  project: Project;
  index: number;
  inView: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
      className="group bg-card rounded-lg overflow-hidden border shadow-sm hover:shadow-md transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={`object-cover transition-transform duration-500 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-4 w-4 mr-1" />
              Code
            </Link>
          )}
          {project.demo && (
            <Link
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <ExternalLink className="h-4 w-4 mr-1" />
              Live Demo
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}

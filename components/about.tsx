"use client";
import my_pic from "../public/my_pic/my_pic.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "REST APIs",
    "Python",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "Flask",
    "Supabase",
    "PostgreSQL",
    "MongoDB",
    "TailwindCSS",
    "Framer Motion",
    "Git",
    "CI/CD",
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-square max-w-sm mx-auto md:mx-0 overflow-hidden rounded-xl"
          >
            <Image
              src={my_pic}
              alt="My Picture"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Software Engineer & Problem Solver
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm a senior at Macaulay Honors College at CCNY, pursuing a B.S.
              in Computer Science. With a passion for software development and
              AI, I've gained hands-on experience through internships in
              full-stack engineering at OpenGym and AI security research for 6G
              networks. I’ve worked with technologies like React.js, Node.js,
              TypeScript, MongoDB, and PostgreSQL.
            </p>
            <p className="text-muted-foreground mb-6">
              When I'm not coding, you can find me hiking, or maybe even playing
              guitar and posting on my tiktok page.
            </p>

            <div>
              <h4 className="font-semibold mb-3">My Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 10 }}
                    animate={
                      inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                    }
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

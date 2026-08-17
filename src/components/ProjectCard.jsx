import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
    >

      <div className="project-top">

        <span className="project-category">
          {project.category}
        </span>

        <div className="project-icons">

          <a
  href={project.github}
  target="_blank"
  rel="noreferrer"
  aria-label="GitHub"
>
  GitHub
</a>

          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            aria-label="Demo"
          >
            <ArrowUpRight size={19} />
          </a>

        </div>

      </div>

      <h3>{project.title}</h3>

      <p>{project.description}</p>

      <div className="project-tags">

        {project.technologies.map((technology) => (
          <span key={technology}>
            {technology}
          </span>
        ))}

      </div>

    </motion.article>
  );
}
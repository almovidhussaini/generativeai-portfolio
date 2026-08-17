import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  return (
    <section id="projects" className="section section-alt">
      <div className="container">

        <div className="section-heading">
          <span>04 / PROJECTS</span>

          <h2>Selected Work</h2>

          <p>
            A selection of projects exploring Agentic AI,
            multi-agent systems, RAG, NLP, and LLMOps.
          </p>
        </div>

        <div className="projects-grid">
          {otherProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
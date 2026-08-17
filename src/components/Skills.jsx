import { motion } from "framer-motion";
import {
  Brain,
  Bot,
  Database,
  Server,
  Activity,
  Code2,
} from "lucide-react";

const skillGroups = [
  {
    icon: Brain,
    title: "Generative AI",
    skills: [
      "LLMs",
      "Prompt Engineering",
      "RAG",
      "Advanced RAG",
      "Embeddings",
    ],
  },
  {
    icon: Bot,
    title: "Agentic AI",
    skills: [
      "LangGraph",
      "LangChain",
      "Agent Workflows",
      "Multi-Agent Systems",
      "Tool Calling",
    ],
  },
  {
    icon: Database,
    title: "Retrieval",
    skills: [
      "FAISS",
      "BM25",
      "Hybrid Search",
      "Reranking",
      "Semantic Chunking",
    ],
  },
  {
    icon: Activity,
    title: "LLMOps",
    skills: [
      "RAGAS",
      "LangSmith",
      "Evaluation",
      "Tracing",
      "Monitoring",
    ],
  },
  {
    icon: Server,
    title: "Backend",
    skills: [
      "Python",
      "FastAPI",
      "nodejs",
      "REST APIs",
      "mongodb",
      "nosql/mysql",
      "Docker",
      "CI/CD",
    ],
  },
  {
    icon: Code2,
    title: "Development",
    skills: [
      "React",
      "Next.js",
      "JavaScript",
      "Git",
      "GitHub",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">

      <div className="container">

        <div className="section-heading">
          <span>02 / EXPERTISE</span>
          <h2>Technical Stack</h2>
        </div>

        <div className="skills-grid">

          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                className="skill-card"
                key={group.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <div className="skill-icon">
                  <Icon size={24} />
                </div>

                <h3>{group.title}</h3>

                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
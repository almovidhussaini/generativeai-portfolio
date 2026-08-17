import { motion } from "framer-motion";
import {
  ArrowDown,
  Download,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="hero section">

      <div className="hero-background">
        <div className="grid-overlay"></div>
        <div className="glow glow-one"></div>
        <div className="glow glow-two"></div>
      </div>

      <div className="container hero-content">

        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Sparkles size={16} />
          AI / Agentic AI Engineer
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Building
          <span className="gradient-text">
            {" "}Intelligent Systems
          </span>
          <br />
          with AI Agents & LLMs
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          I build intelligent applications using Large Language Models,
          Retrieval-Augmented Generation, Agentic AI, Multi-Agent Systems,
          and LLMOps.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <a href="#projects" className="btn btn-primary">
            Explore My Work
            <ArrowDown size={18} />
          </a>

          <a
            href="/resume.pdf"
            className="btn btn-secondary"
            target="_blank"
            rel="noreferrer"
          >
            Resume
            <Download size={18} />
          </a>
        </motion.div>

        <div className="social-links">
  <a
    href="https://github.com/almovidhussaini"
    target="_blank"
    rel="noreferrer"
  >
    GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/almovid-hussaini-9a6265260/"
    target="_blank"
    rel="noreferrer"
  >
    LinkedIn
  </a>
</div>

      </div>
    </section>
  );
}
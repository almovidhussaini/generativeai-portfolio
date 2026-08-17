import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section">

      <div className="container">

        <div className="section-heading">
          <span>01 / ABOUT</span>
          <h2>Building beyond basic LLM applications.</h2>
        </div>

        <div className="about-grid">

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p>
              I am an AI-focused developer interested in building
              intelligent systems that go beyond simple LLM prompting.
            </p>

            <p>
              My work focuses on Agentic AI, Retrieval-Augmented Generation,
              Multi-Agent Systems, LLM evaluation, and LLMOps.
            </p>

            <p>
              I enjoy designing systems where AI agents can reason,
              retrieve information, use specialized tools, collaborate,
              and operate as part of production-oriented workflows.
            </p>
          </motion.div>

          <motion.div
            className="about-terminal"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="terminal-header">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="terminal-body">
              <p>
                <span className="terminal-green">const</span>{" "}
                engineer = {"{"}
              </p>

              <p className="indent">
                focus: <span className="terminal-string">
                  "Agentic AI"
                </span>,
              </p>

              <p className="indent">
                systems: <span className="terminal-string">
                  "Multi-Agent"
                </span>,
              </p>

              <p className="indent">
                retrieval: <span className="terminal-string">
                  "Advanced RAG"
                </span>,
              </p>

              <p className="indent">
                evaluation: <span className="terminal-string">
                  "RAGAS"
                </span>,
              </p>

              <p className="indent">
                observability: <span className="terminal-string">
                  "LangSmith"
                </span>
              </p>

              <p>{"};"}</p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
import { motion } from "framer-motion";

const journey = [
  {
    number: "01",
    title: "NLP & Deep Learning",
    description:
      "Started with traditional NLP and deep learning approaches.",
  },
  {
    number: "02",
    title: "LLM Applications",
    description:
      "Moved into Large Language Models and generative AI applications.",
  },
  {
    number: "03",
    title: "RAG",
    description:
      "Built retrieval-based systems using embeddings and vector search.",
  },
  {
    number: "04",
    title: "Advanced RAG",
    description:
      "Added hybrid retrieval, reranking, semantic chunking, and better context handling.",
  },
  {
    number: "05",
    title: "Agentic AI",
    description:
      "Introduced reasoning workflows, routing, tools, and graph-based agents.",
  },
  {
    number: "06",
    title: "Multi-Agent Systems",
    description:
      "Explored systems where multiple specialized agents collaborate.",
  },
  {
    number: "07",
    title: "LLMOps",
    description:
      "Added evaluation, tracing, monitoring, datasets, Docker, and CI/CD.",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="section">

      <div className="container">

        <div className="section-heading">
          <span>05 / JOURNEY</span>
          <h2>My AI Engineering Journey</h2>
        </div>

        <div className="journey">

          {journey.map((item, index) => (
            <motion.div
              className="journey-item"
              key={item.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >

              <div className="journey-number">
                {item.number}
              </div>

              <div className="journey-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
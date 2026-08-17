import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Database,
  GitBranch,
  Activity,
  Container,
} from "lucide-react";

export default function FeaturedProject() {
  return (
    <section className="section">

      <div className="container">

        <div className="section-heading">
          <span>03 / FEATURED PROJECT</span>
          <h2>Enterprise Agentic RAG</h2>
        </div>

        <motion.div
          className="featured-project"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <div className="featured-info">

            <span className="project-label">
              FLAGSHIP PROJECT
            </span>

            <h3>
              From Retrieval-Augmented Generation
              to Agentic AI
            </h3>

            <p>
              An enterprise-oriented RAG system designed around
              intelligent routing, hybrid retrieval, reranking,
              agent orchestration, evaluation, observability,
              and production workflows.
            </p>

            <div className="architecture-mini">

              <div>Question</div>
              <span>→</span>
              <div>Router</div>
              <span>→</span>
              <div>Retriever</div>
              <span>→</span>
              <div>Reranker</div>
              <span>→</span>
              <div>LLM</div>

            </div>

            <div className="feature-list">

              <div>
                <Database size={18} />
                Hybrid Retrieval
              </div>

              <div>
                <GitBranch size={18} />
                LangGraph Agents
              </div>

              <div>
                <Activity size={18} />
                RAGAS + LangSmith
              </div>

              <div>
                <Container size={18} />
                Docker + CI/CD
              </div>

            </div>

            <div className="project-actions">

              <a
                href="https://github.com/almovidhussaini/enterprise-agentic-rag-llmops"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                
                View Code
              </a>

              <a
                href="#"
                className="btn btn-secondary"
              >
                Case Study
                <ArrowUpRight size={18} />
              </a>

            </div>

          </div>

          <div className="architecture-card">

            <div className="architecture-title">
              Agentic Architecture
            </div>

            <div className="architecture-flow">

              <div className="architecture-node">
                User Query
              </div>

              <div className="architecture-line">↓</div>

              <div className="architecture-node highlight">
                LangGraph
              </div>

              <div className="architecture-line">↓</div>

              <div className="architecture-row">

                <div className="architecture-node small">
                  FAISS
                </div>

                <div className="architecture-node small">
                  BM25
                </div>

                <div className="architecture-node small">
                  Reranker
                </div>

              </div>

              <div className="architecture-line">↓</div>

              <div className="architecture-node">
                LLM Response
              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
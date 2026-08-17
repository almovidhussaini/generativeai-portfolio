import { Mail, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">

      <div className="container contact-container">

        <span className="contact-label">
          07 / CONTACT
        </span>

        <h2>
          Let's build intelligent
          <span className="gradient-text"> systems.</span>
        </h2>

        <p>
          Interested in Agentic AI, LLM applications,
          RAG systems, or intelligent software?
          Let's connect.
        </p>

        <div className="contact-links">

          <a
            href="mailto:shahalmovid@gmail.com"
            className="contact-link"
          >
            <Mail size={20} />
            Email
            <ArrowUpRight size={17} />
          </a>

          <a
            href="https://github.com/almovidhussaini"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            
            GitHub
            <ArrowUpRight size={17} />
          </a>

          <a
            href="https://www.linkedin.com/in/almovid-hussaini-9a6265260/"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            
            LinkedIn
            <ArrowUpRight size={17} />
          </a>
          <a
            // href="https://www.linkedin.com/in/almovid-hussaini-9a6265260/"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            
            Whatsapp: 03436727448
            <ArrowUpRight size={17} />
          </a>

        </div>

      </div>
    </section>
  );
}
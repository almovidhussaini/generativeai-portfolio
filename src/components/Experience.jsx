import { GraduationCap, Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section className="section section-alt">

      <div className="container">

        <div className="section-heading">
          <span>06 / BACKGROUND</span>
          <h2>Education & Experience</h2>
        </div>

        <div className="experience-grid">

          <div className="experience-card">

            <div className="experience-icon">
              <GraduationCap size={25} />
            </div>

            <div>
              <span className="experience-label">
                EDUCATION
              </span>

              <h3>BS Computer Engineering (2019-2023)</h3>

              <p className="experience-place">
                Ghulum Ishaq Khan Institute of Engineering Sciences and Technology
              </p>

              <p>
                Focused on Embedded system, C++ prograing,
                Data Science and Ai
              </p>
            </div>

          </div>

          <div className="experience-card">

            <div className="experience-icon">
              <GraduationCap size={25} />
            </div>

            <div>
              <span className="experience-label">
                EDUCATION
              </span>

              <h3>MS in Artificial Intelligence (2026-2028)</h3>

              <p className="experience-place">
                Bahria University Islamabad Campus
              </p>

              <p>
                Focused on artificial intelligence, machine learning,
                deep learning, NLP, generative AI, and intelligent
                systems.
              </p>
            </div>

          </div>

          <div className="experience-card">

            <div className="experience-icon">
              <Briefcase size={25} />
            </div>

            <div>
              <span className="experience-label">
                EXPERIENCE
              </span>

              <h3>MERN Stack developement</h3>

              <p className="experience-place">
                Alburraq Tecnologies ( 6 months )
              </p>

              <p>
                Worked as full stack developer on various web applications
                Write react, nextjs, nodejs, expressjs, mongodb, and other technologies to build scalable and efficient web applications
              </p>
            </div>

          </div>

          <div className="experience-card">

            <div className="experience-icon">
              <Briefcase size={25} />
            </div>

            <div>
              <span className="experience-label">
                EXPERIENCE
              </span>

              <h3>Backend developement</h3>

              <p className="experience-place">
                EON waves lab (11 months)
              </p>

              <p>
                write nodejs backend code to implement various backend functionalites and database queries
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
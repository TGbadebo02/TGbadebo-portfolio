import { RevealOnScroll } from "../RevealOnScroll";

const projects = [
  {
    title: "TitanTrack",
    description:
      "A cross-platform fitness app for tracking workouts and building consistent training habits, with persistent user data and a mobile-first interface.",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Firebase",
      "NativeWind",
    ],
    href: "https://github.com/TGbadebo02/TitanTrack2.0",
  },
  {
    title: "AI Server Incident Assistant",
    description:
      "An evidence-focused assistant that helps IT support teams capture server incidents, preserve investigation details, and work toward identifying likely root causes.",
    technologies: ["Python", "SQLite", "unittest", "CLI"],
    href: "https://github.com/TGbadebo02/ai-server-incident-assistant",
  },
  {
    title: "Payment Processing API",
    description:
      "A secure Spring Boot REST API for simulated accounts, fund transfers, and transaction history, designed around transactional consistency and clear audit trails.",
    technologies: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Flyway",
      "Docker",
    ],
    href: "https://github.com/TGbadebo02/payment-processing-api",
  },
  {
    title: "Fraud Detection API",
    description:
      "A real-time payment fraud detection system with machine-learning transaction scoring, prediction logging, and a dashboard for monitoring risk.",
    technologies: [
      "Python",
      "FastAPI",
      "scikit-learn",
      "SQLite",
      "Streamlit",
      "Docker",
    ],
    href: "https://github.com/TGbadebo02/fraud-detection-api",
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <article
                key={project.title}
                className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all flex flex-col"
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors mt-auto pt-4"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  View on GitHub →
                </a>
              </article>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

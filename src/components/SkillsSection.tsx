'use client';

export function SkillsSection() {
  const skills = [
    { id: 1, name: "Java", type: "Programming", logoPath: "/logos/java.svg" },
    { id: 2, name: "Python", type: "Programming", logoPath: "/logos/python.svg" },
    { id: 3, name: "JavaScript", type: "Programming", logoPath: "/logos/javascript.svg" },
    { id: 4, name: "HTML", type: "Frontend", logoPath: "/logos/html5.svg" },
    { id: 5, name: "CSS", type: "Frontend", logoPath: "/logos/css3.svg" },
    { id: 6, name: "React", type: "Frontend", logoPath: "/logos/react.svg" },
    { id: 7, name: "Node.js", type: "Backend", logoPath: "/logos/nodejs.svg" },
    { id: 8, name: "Next.js", type: "Frontend", logoPath: "/logos/nextjs.svg" },
    { id: 9, name: "Django", type: "Backend", logoPath: "/logos/django.svg" },
    { id: 10, name: "Spring", type: "Backend", logoPath: "/logos/spring.svg" },
  ];

  return (
    <section id="skills" className="py-24 px-6 md:px-16 bg-neutral-900">
      <div className="max-w-6xl mx-auto">
        <h5 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">My Expertise</h5>
        <h2 className="section-title font-bold mb-12">SKILLS</h2>

        {/* Single row of skills */}
        <div className="mb-20">
          <div className="w-full bg-gradient-to-b from-neutral-800 to-neutral-900 rounded-lg py-4 overflow-hidden">
            <div className="skills-row flex">
              {/* First set */}
              {skills.map((skill) => (
                <div
                  key={`skill-${skill.id}`}
                  className="mx-1 bg-card hover:bg-neutral-800 rounded-lg px-3 py-4 min-w-[80px] max-w-[80px] flex flex-col items-center transition-all duration-300 hover:scale-105"
                >
                  <div className="h-10 w-10 relative mb-2 flex items-center justify-center">
                    <img
                      src={skill.logoPath}
                      alt={`${skill.name}`}
                      className="w-8 h-8"
                      crossOrigin="anonymous"
                    />
                  </div>
                  <h4 className="text-xs font-medium text-center truncate w-full">{skill.name}</h4>
                </div>
              ))}

              {/* Duplicate set for continuous scroll */}
              {skills.map((skill) => (
                <div
                  key={`skill-duplicate-${skill.id}`}
                  className="mx-1 bg-card hover:bg-neutral-800 rounded-lg px-3 py-4 min-w-[80px] max-w-[80px] flex flex-col items-center transition-all duration-300 hover:scale-105"
                >
                  <div className="h-10 w-10 relative mb-2 flex items-center justify-center">
                    <img
                      src={skill.logoPath}
                      alt={`${skill.name}`}
                      className="w-8 h-8"
                      crossOrigin="anonymous"
                    />
                  </div>
                  <h4 className="text-xs font-medium text-center truncate w-full">{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24">
          <h3 className="text-2xl font-bold mb-8">CERTIFICATIONS</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card rounded-lg p-6 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 hover:translate-y-[-5px]">
              <h4 className="text-xl font-medium mb-1">Foundations of Cyber Operations</h4>
              <p className="text-muted-foreground mb-4">MITRE</p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 hover:translate-y-[-5px]">
              <h4 className="text-xl font-medium mb-1">Technical Interview Prep</h4>
              <p className="text-muted-foreground mb-4">CodePath</p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 hover:translate-y-[-5px]">
              <h4 className="text-xl font-medium mb-1">AWS Cloud Foundation</h4>
              <p className="text-muted-foreground mb-4">Amazon Academy</p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 hover:translate-y-[-5px]">
              <h4 className="text-xl font-medium mb-1">Python Developer</h4>
              <p className="text-muted-foreground mb-4">Sololearn</p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 hover:translate-y-[-5px]">
              <h4 className="text-xl font-medium mb-1">Electrical Journeyman License</h4>
              <p className="text-muted-foreground mb-4">Broward County, Florida</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .skills-row {
          animation: scroll 30s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}

import { Code, Cloud, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming & Frameworks',
      icon: Code,
      color: 'from-portfolio-primary to-portfolio-secondary',
      skills: [
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 90 },
        { name: 'React', level: 85 },
        { name: 'Vue.js', level: 80 },
        { name: 'Java (Basics)', level: 65 },
        { name: 'C (Basics)', level: 60 },
      ],
    },
    {
      title: 'Cloud Services',
      icon: Cloud,
      color: 'from-portfolio-secondary to-portfolio-accent',
      skills: [
        { name: 'Supabase', level: 88 },
        { name: 'Firebase', level: 85 },
      ],
    },
    {
      title: 'DevOps & Tools',
      icon: Wrench,
      color: 'from-portfolio-accent to-portfolio-primary',
      skills: [
        { name: 'Docker', level: 75 },
        { name: 'Git', level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-portfolio mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-portfolio-secondary to-portfolio-accent mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across various domains
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="portfolio-card group">
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-mono text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-progress">
                      <div
                        className="skill-progress-fill"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${categoryIndex * 0.2 + skillIndex * 0.1}s`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Note */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-card border border-card-border rounded-full">
            <span className="text-sm text-muted-foreground">
              Continuously learning and expanding my skill set in emerging technologies
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
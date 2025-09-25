import { Code, Cloud, Wrench, Sparkles, Zap, Shield, Database } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      color: 'from-portfolio-primary to-portfolio-secondary',
      bgColor: 'from-portfolio-primary/10 to-portfolio-secondary/10',
      skills: [
        { name: 'HTML5', level: 95, color: 'from-orange-500 to-red-500' },
        { name: 'CSS3', level: 90, color: 'from-blue-500 to-blue-600' },
        { name: 'React', level: 85, color: 'from-cyan-400 to-blue-500' },
        { name: 'Vue.js', level: 80, color: 'from-green-400 to-green-600' },
        { name: 'TypeScript', level: 75, color: 'from-blue-600 to-blue-700' },
        { name: 'Tailwind CSS', level: 90, color: 'from-teal-400 to-cyan-500' },
      ],
    },
    {
      title: 'Backend & Database',
      icon: Database,
      color: 'from-portfolio-secondary to-portfolio-accent',
      bgColor: 'from-portfolio-secondary/10 to-portfolio-accent/10',
      skills: [
        { name: 'Node.js', level: 80, color: 'from-green-500 to-green-600' },
        { name: 'Java', level: 65, color: 'from-red-600 to-orange-600' },
        { name: 'C Programming', level: 60, color: 'from-gray-600 to-gray-800' },
        { name: 'PostgreSQL', level: 75, color: 'from-blue-700 to-indigo-700' },
        { name: 'MongoDB', level: 70, color: 'from-green-600 to-green-700' },
      ],
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-portfolio-accent to-purple-600',
      bgColor: 'from-portfolio-accent/10 to-purple-600/10',
      skills: [
        { name: 'Supabase', level: 88, color: 'from-emerald-500 to-green-600' },
        { name: 'Firebase', level: 85, color: 'from-yellow-500 to-orange-500' },
        { name: 'Docker', level: 75, color: 'from-blue-500 to-blue-700' },
        { name: 'Git', level: 90, color: 'from-orange-600 to-red-600' },
      ],
    },
    {
      title: 'Security & Tools',
      icon: Shield,
      color: 'from-purple-600 to-pink-600',
      bgColor: 'from-purple-600/10 to-pink-600/10',
      skills: [
        { name: 'Cybersecurity', level: 70, color: 'from-red-500 to-pink-500' },
        { name: 'Ethical Hacking', level: 65, color: 'from-purple-500 to-purple-700' },
        { name: 'Security Auditing', level: 60, color: 'from-indigo-500 to-purple-600' },
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-portfolio-secondary/20 to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-l from-portfolio-accent/20 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container-portfolio mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-portfolio-secondary/10 to-portfolio-accent/10 rounded-full border border-portfolio-secondary/20 mb-6">
            <Zap className="w-4 h-4 text-portfolio-secondary" />
            <span className="text-sm font-medium gradient-text-secondary">My Arsenal</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black mb-8">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          
          <div className="w-32 h-1.5 bg-gradient-to-r from-portfolio-secondary via-portfolio-accent to-portfolio-primary mx-auto rounded-full mb-6" />
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit of technologies and frameworks that I use to build 
            <span className="gradient-text-secondary font-semibold"> exceptional digital experiences</span>
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="portfolio-card-glow group hover-lift"
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center mb-8">
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold gradient-text mb-2">
                    {category.title}
                  </h3>
                  <div className={`h-1 w-16 bg-gradient-to-r ${category.color} rounded-full`} />
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item group/skill">
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${skill.color}`} />
                        <span className="font-mono text-lg font-semibold text-foreground group-hover/skill:gradient-text transition-all duration-300">
                          {skill.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-muted-foreground">
                          {skill.level}%
                        </span>
                        {skill.level >= 90 && <Sparkles className="w-4 h-4 text-portfolio-accent" />}
                        {skill.level >= 85 && skill.level < 90 && <Zap className="w-4 h-4 text-portfolio-secondary" />}
                      </div>
                    </div>
                    
                    <div className="skill-progress relative">
                      <div
                        className="skill-progress-fill"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${categoryIndex * 0.3 + skillIndex * 0.1}s`,
                          background: `linear-gradient(90deg, hsl(var(--portfolio-primary)), hsl(var(--portfolio-secondary)))`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Category Footer */}
              <div className={`mt-6 p-4 rounded-xl bg-gradient-to-r ${category.bgColor} border border-white/10`}>
                <p className="text-sm text-muted-foreground text-center">
                  {category.skills.length} Technologies Mastered
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Section */}
        <div className="text-center">
          <div className="portfolio-card-glow max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-portfolio-primary to-portfolio-accent rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white animate-pulse" />
              </div>
            </div>
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Always Learning
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Technology never stops evolving, and neither do I. Currently exploring{' '}
              <span className="gradient-text-secondary font-semibold">AI/ML integration</span>,{' '}
              <span className="gradient-text-accent font-semibold">Web3 technologies</span>, and{' '}
              <span className="gradient-text font-semibold">advanced cybersecurity</span> practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
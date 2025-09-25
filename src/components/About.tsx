import { Code, Shield, Cloud, Database, Sparkles, Heart, Coffee, Zap, ArrowDown } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Fullstack Mastery',
      description: 'End-to-end web development with cutting-edge frameworks and best practices',
      color: 'from-portfolio-primary to-portfolio-secondary',
      stat: '3+ Years'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Implementing bulletproof security measures and ethical coding standards',
      color: 'from-portfolio-secondary to-portfolio-accent',
      stat: 'Certified'
    },
    {
      icon: Cloud,
      title: 'Cloud Native',
      description: 'Scalable solutions using modern cloud platforms and DevOps practices',
      color: 'from-portfolio-accent to-portfolio-primary',
      stat: 'Expert'
    },
    {
      icon: Database,
      title: 'Data Architecture',
      description: 'Designing efficient databases and optimizing data flow systems',
      color: 'from-purple-500 to-pink-600',
      stat: 'Advanced'
    },
  ];

  const stats = [
    { label: 'Projects Completed', value: '15+', icon: Zap },
    { label: 'Technologies Mastered', value: '12+', icon: Code },
    { label: 'Coffee Consumed', value: '∞', icon: Coffee },
    { label: 'Lines of Code', value: '10K+', icon: Heart },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-portfolio-primary/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-portfolio-accent/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container-portfolio mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-portfolio-primary/10 to-portfolio-secondary/10 rounded-full border border-portfolio-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-portfolio-primary" />
            <span className="text-sm font-medium gradient-text">Get to know me</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black mb-8">
            About <span className="gradient-text">Me</span>
          </h2>
          
          <div className="w-32 h-1.5 bg-gradient-to-r from-portfolio-primary via-portfolio-secondary to-portfolio-accent mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
          {/* Left Column - Story */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="portfolio-card-glow">
                <h3 className="text-2xl font-bold gradient-text mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary rounded-lg flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  My Journey
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a passionate <span className="gradient-text-secondary font-bold">Fullstack Developer</span> with 
                  an insatiable curiosity for technology and a deep commitment to creating secure, 
                  efficient digital solutions. My journey began with a fascination for how 
                  things work behind the scenes.
                </p>
              </div>
              
              <div className="portfolio-card-glow">
                <h3 className="text-2xl font-bold gradient-text-secondary mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-portfolio-secondary to-portfolio-accent rounded-lg flex items-center justify-center">
                    <Code className="w-4 h-4 text-white" />
                  </div>
                  What Drives Me
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  From <span className="gradient-text font-bold">React wizardry</span> to 
                  <span className="gradient-text-accent font-bold"> backend architecture</span>, 
                  I thrive on building applications that not only look stunning but perform 
                  flawlessly. Security isn't an afterthought—it's woven into every line of code.
                </p>
              </div>
              
              <div className="portfolio-card-glow">
                <h3 className="text-2xl font-bold gradient-text-accent mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-portfolio-accent to-portfolio-primary rounded-lg flex items-center justify-center">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                  Beyond Code
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  When I'm not crafting code, you'll find me exploring emerging technologies, 
                  contributing to open-source projects, or mentoring fellow developers. 
                  I believe in continuous learning and sharing knowledge with the community.
                </p>
              </div>
            </div>

            <div className="pt-6">
              <button className="group btn-accent flex items-center gap-3 text-lg">
                <span>Download Resume</span>
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Right Column - Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="portfolio-card-glow group hover-lift hover-tilt"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="mb-6 relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 px-2 py-1 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary rounded-lg text-xs font-bold text-white">
                    {item.stat}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-4 gradient-text">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center portfolio-card-glow group hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-portfolio-primary to-portfolio-secondary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-black gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
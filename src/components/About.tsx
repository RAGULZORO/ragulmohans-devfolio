import { Code, Shield, Cloud, Database } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Fullstack Development',
      description: 'Building end-to-end web applications with modern frameworks and technologies',
    },
    {
      icon: Shield,
      title: 'Cybersecurity Focus',
      description: 'Implementing secure coding practices and protecting digital assets',
    },
    {
      icon: Cloud,
      title: 'Cloud Computing',
      description: 'Leveraging cloud platforms for scalable and reliable solutions',
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Designing efficient databases and managing data flow architectures',
    },
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-portfolio mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-portfolio-secondary to-portfolio-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Description */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate <span className="text-portfolio-secondary font-semibold">Fullstack Web Developer</span> with 
                a strong foundation in modern web technologies and a keen interest in cybersecurity. 
                My journey in technology is driven by the desire to create secure, efficient, and 
                user-friendly digital solutions.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                With expertise spanning from <span className="text-portfolio-accent font-semibold">frontend frameworks</span> like 
                React and Vue.js to <span className="text-portfolio-secondary font-semibold">backend technologies</span> and 
                cloud platforms, I bring a holistic approach to web development. I'm particularly 
                passionate about implementing secure coding practices and staying updated with 
                the latest cybersecurity trends.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community. I believe 
                in continuous learning and adapting to the ever-evolving tech landscape.
              </p>
            </div>

            <div className="pt-6">
              <button className="btn-accent">
                Download Resume
              </button>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="portfolio-card group hover:shadow-glow"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-portfolio-secondary to-portfolio-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
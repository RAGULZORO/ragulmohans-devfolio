import { ExternalLink, Github, BookOpen, ShoppingCart, Users, Sparkles, Star, Zap, ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Note Nest',
      description: 'A revolutionary collaborative platform transforming how students share knowledge. Features real-time collaboration, smart categorization, and intuitive search functionality.',
      icon: BookOpen,
      tags: ['React', 'Firebase', 'Material-UI', 'Authentication'],
      color: 'from-blue-500 to-purple-600',
      github: 'https://github.com/RAGULZORO/campus-knowledge-share',
      live: 'https://notenest-mu.vercel.app/',
      features: ['Real-time Collaboration', 'Smart Search', 'File Management', 'User Analytics'],
      status: 'Live',
      rating: 5,
    },
    {
      title: 'Anime E-Commerce',
      description: 'Premium anime merchandise store with cutting-edge e-commerce features. Complete shopping experience with advanced cart management and seamless payments.',
      icon: ShoppingCart,
      tags: ['Vue.js', 'Node.js', 'Stripe', 'MongoDB'],
      color: 'from-pink-500 to-red-600',
      github: 'https://github.com/RAGULZORO/anime-shadow-store',
      live: 'https://zorostore-seven.vercel.app/',
      features: ['Dynamic Cart', 'Payment Gateway', 'Admin Panel', 'Inventory Tracking'],
      status: 'Live',
      rating: 5,
    },
    {
      title: 'Employee Management System',
      description: 'Enterprise-grade EMS revolutionizing workforce management with advanced analytics, automated workflows, and comprehensive reporting systems.',
      icon: Users,
      tags: ['React', 'Java Spring', 'PostgreSQL', 'Docker'],
      color: 'from-green-500 to-teal-600',
      github: 'https://github.com/RAGULZORO/corehr-plus',
      live: '#',
      features: ['Employee Analytics', 'Automated Workflows', 'Performance Metrics', 'Report Dashboard'],
      status: 'Development',
      rating: 4,
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-portfolio-primary/20 to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-portfolio-accent/20 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container-portfolio mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-portfolio-accent/10 to-portfolio-primary/10 rounded-full border border-portfolio-accent/20 mb-6">
            <Sparkles className="w-4 h-4 text-portfolio-accent" />
            <span className="text-sm font-medium gradient-text-accent">My Work</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black mb-8">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          
          <div className="w-32 h-1.5 bg-gradient-to-r from-portfolio-accent via-portfolio-primary to-portfolio-secondary mx-auto rounded-full mb-6" />
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A curated showcase of projects that demonstrate my expertise in building 
            <span className="gradient-text font-semibold"> innovative digital solutions</span>
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-1 xl:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="portfolio-card-glow group hover-lift hover-tilt"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Project Header */}
              <div className="relative mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                      <project.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold gradient-text">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex items-center gap-1">
                          {renderStars(project.rating)}
                        </div>
                        <span className="text-sm text-muted-foreground">
                          ({project.rating}/5)
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                    project.status === 'Live' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                      : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                  }`}>
                    {project.status}
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                {project.description}
              </p>

              {/* Features Grid */}
              <div className="mb-6">
                <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-portfolio-accent" />
                  Key Features
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 p-2 rounded-lg bg-gradient-to-r from-muted/20 to-muted/10 hover:from-portfolio-primary/10 hover:to-portfolio-secondary/10 transition-colors duration-300">
                      <div className="w-2 h-2 bg-gradient-to-r from-portfolio-accent to-portfolio-secondary rounded-full" />
                      <span className="text-sm font-medium text-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-8">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-4 py-2 bg-gradient-to-r from-portfolio-primary/20 to-portfolio-secondary/20 text-portfolio-primary dark:text-portfolio-secondary text-sm font-bold rounded-xl border border-portfolio-primary/30 hover:scale-105 transition-transform duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="flex gap-4 pt-6 border-t border-border">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex items-center justify-center gap-2 flex-1 px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-800 text-white rounded-xl font-semibold hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-2xl"
                >
                  <Github className="h-5 w-5 group-hover/link:scale-110 transition-transform duration-300" />
                  <span>Code</span>
                </a>
                
                {project.live !== '#' ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center justify-center gap-2 flex-1 px-6 py-3 bg-gradient-to-r from-portfolio-accent to-portfolio-secondary text-white rounded-xl font-semibold hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-2xl"
                  >
                    <ExternalLink className="h-5 w-5 group-hover/link:scale-110 transition-transform duration-300" />
                    <span>Live Demo</span>
                  </a>
                ) : (
                  <div className="flex items-center justify-center gap-2 flex-1 px-6 py-3 bg-muted/50 text-muted-foreground rounded-xl font-semibold cursor-not-allowed">
                    <Zap className="h-5 w-5" />
                    <span>Coming Soon</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="portfolio-card-glow max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-portfolio-primary to-portfolio-accent rounded-2xl flex items-center justify-center">
                <Github className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h3 className="text-3xl font-bold gradient-text mb-4">
              Explore More Projects
            </h3>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Want to see more of my work? Check out my GitHub for additional projects, 
              open-source contributions, and experimental ideas.
            </p>
            
            <a
              href="https://github.com/RAGULZORO"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 btn-secondary text-lg"
            >
              <Github className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              <span>Visit GitHub Profile</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
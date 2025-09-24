import { ExternalLink, Github, BookOpen, ShoppingCart, Users } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Note Nest',
      description: 'A collaborative platform where students can share their notes, study materials, and academic resources. Features include file uploads, categorization, search functionality, and user authentication.',
      icon: BookOpen,
      tags: ['React', 'Firebase', 'Material-UI', 'Authentication'],
      color: 'from-blue-500 to-purple-600',
      github: 'https://github.com/RAGULZORO/campus-knowledge-share',
      live: 'https://notenest-mu.vercel.app/',
      features: ['File Upload & Management', 'User Authentication', 'Search & Filter', 'Responsive Design'],
    },
    {
      title: 'Anime E-Commerce',
      description: 'A modern e-commerce website specializing in anime merchandise and collectibles. Complete shopping experience with cart management, payment integration, and admin dashboard.',
      icon: ShoppingCart,
      tags: ['Vue.js', 'Node.js', 'Stripe', 'MongoDB'],
      color: 'from-pink-500 to-red-600',
      github: 'https://github.com/RAGULZORO/anime-shadow-store',
      live: 'https://zorostore-seven.vercel.app/',
      features: ['Shopping Cart', 'Payment Gateway', 'Admin Dashboard', 'Inventory Management'],
    },
    {
      title: 'Employee Management System',
      description: 'A comprehensive EMS for organizations to manage employee data, track performance, handle payroll, and generate reports. Features role-based access control and data visualization.',
      icon: Users,
      tags: ['React', 'Java Spring', 'PostgreSQL', 'Docker'],
      color: 'from-green-500 to-teal-600',
      github: 'https://github.com/RAGULZORO/corehr-plus',
      live: '#', // No live demo available
      features: ['Employee Records', 'Performance Tracking', 'Payroll System', 'Report Generation'],
    },
  ];

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container-portfolio mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-portfolio-secondary to-portfolio-accent mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work demonstrating various technical skills and problem-solving approaches
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="portfolio-card group hover:shadow-glow transform transition-all duration-500"
            >
              {/* Project Header */}
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${project.color} rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">
                  {project.title}
                </h3>
              </div>

              {/* Project Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                <ul className="grid grid-cols-2 gap-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 bg-portfolio-accent rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-portfolio-secondary/10 text-portfolio-secondary text-xs font-mono rounded-full border border-portfolio-secondary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="flex space-x-4 pt-4 border-t border-card-border">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-card border border-card-border rounded-lg hover:bg-portfolio-primary hover:text-white transition-all duration-300 flex-1 justify-center group/link"
                >
                  <Github className="h-4 w-4 mr-2 group-hover/link:scale-110 transition-transform duration-300" />
                  <span className="text-sm font-medium">Code</span>
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-portfolio-accent text-white rounded-lg hover:bg-portfolio-accent/90 transition-all duration-300 flex-1 justify-center group/link"
                >
                  <ExternalLink className="h-4 w-4 mr-2 group-hover/link:scale-110 transition-transform duration-300" />
                  <span className="text-sm font-medium">Live Demo</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Interested in seeing more of my work?
          </p>
          <a
            href="https://github.com/RAGULZORO"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
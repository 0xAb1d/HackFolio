import React from 'react';
import SideNav from '../components/SideNav';
import SectionHeader from '../components/SectionHeader';
import { NavBar } from '@/components/ui/tube-navbar';
import { BookOpen, GraduationCap, Home, MessageSquare, User, Code, MoonStar, Sun, Layers } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';

const ProjectCard = ({ title, description, tools, image, url }) => (
  <a 
    href={url} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="block bg-darkcard/90 backdrop-blur-md rounded-md overflow-hidden border border-neon/20 hover:border-neon/40 transition-all duration-300 light:bg-white/90 light:border-darkgreen/20 light:hover:border-darkgreen/40 hover:shadow-md hover:transform hover:scale-[1.01]"
  >
    <div className="h-40 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="p-4">
      <h3 className="text-sm font-bold mb-2 text-white light:text-gray-800">{title}</h3>
      <p className="text-xs mb-3 text-gray-400 light:text-gray-600">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tools.map((tool, index) => (
          <span key={index} className="text-[10px] bg-[#0a0a0a] px-2 py-1 rounded text-neon light:bg-gray-100 light:text-darkgreen">
            {tool}
          </span>
        ))}
      </div>
    </div>
  </a>
);

const Projects = () => {
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: "Home", url: "/", icon: Home },
    { name: "About", url: "/about", icon: User },
    { name: "Projects", url: "/projects", icon: Code },
    { name: "Blog", url: "/blog", icon: BookOpen },
    { name: "Contact", url: "/contact", icon: MessageSquare }
  ];

  const projects = [
    {
      title: "GPTsSystemPrompts",
      description: "A Database of ChatGPT's top trending + most used GPT's Custom Instructions Prompt LEAKED and ChatGPT's custom GPT plugins secret system prompts instructions REVEALED - Prompt Injections to Prompt Leaking",
      tools: ["AI Security", "AI Privacy", "Prompt Injections", "Prompt Leaking"],
      image: "/uploads/project1.png",
      url: "https://github.com/0xAb1d/GPTsSystemPrompts"
    },
    {
      title: "JSLeakRecon",
      description: "JSLeakRecon is an ultimate JavaScript Recon/Scanning tool for identifying Potential Credential Leaks, Hardcoded Sensitive information (API keys, tokens, secrets, etc.) in JavaScript files.",
      tools: ["JavaScript", "Security", "Static Analysis", "Credential Detection"],
      image: "/uploads/article3.webp",
      url: "https://github.com/0xAb1d/JSLeakRecon"
    },
    {
      title: "ShoSubFinder",
      description: "ShoSubFinder is a powerful and specialized reconnaissance tool to discover subdomains for a specified domain, organization, or ASN by leveraging the extensive database of Shodan.",
      tools: ["Python", "Shodan API", "Reconnaissance", "Subdomain Discovery"],
      image: "/uploads/project3.png",
      url: "https://github.com/0xAb1d/ShoSubFinder"
    },
    {
      title: "FetchAllSrc",
      description: "A streamlined command-line utility designed to bypass WAFs, fetch web resources or source code directly from provided URLs, and store them with web-structure-mirrored names.",
      tools: ["Python", "WAF Bypass", "Web Scraping", "Source Retrieval"],
      image: "/uploads/project4.png",
      url: "https://github.com/0xAb1d/FetchAllSrc"
    },
    {
      title: "Affixer",
      description: "The Affixer is designed to add specific text, strings, or characters both 'Before' and 'After' each line in a file. This is useful for modifying lists of domains, URLs, or any other list of data.",
      tools: ["Python", "Web Scraping", "Link Fixing", "Image Fixing"],
      image: "/uploads/project5.png",
      url: "https://github.com/0xAb1d/Affixer"
    },
    {
      title: "Decod3wizard",
      description: "Decod3wizard is a versatile Python tool that identifies and Decodes a wide range of hashes and encoding. Choose between Single mode for quick identification and Decoding or dive into Magic mode for Continuous, Recursive Decoding",
      tools: ["Python", "Encoding", "Decoding", "Data Manipulation"],
      image: "/uploads/project6.png",
      url: "https://github.com/0xAb1d/Decod3wizard"
    },
    // {
    //   title: "Symfony Framework Security Research",
    //   description: "Identification of multiple vulnerabilities in a Symfony web framework application, documented in InfoSec Write-ups for community knowledge sharing.",
    //   tools: ["Web Security", "Symfony", "Vulnerability Assessment", "Documentation"],
    //   image: "/uploads/article2.jpg",
    //   url: "https://github.com/abidahmad/symfony-security-research"
    // }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-300 font-spacemono light:bg-[#f1f5f1] light:text-gray-700">
      <SideNav />
      
      <NavBar 
        items={navItems} 
        activeTab="Projects"
        themeToggle={{
          icon: theme === 'dark' ? Sun : MoonStar,
          onClick: () => toggleTheme(),
          theme: theme as 'dark' | 'light'
        }}
      />
      
      <div className="max-w-6xl mx-auto px-4 py-8 pt-20 md:pt-28">
        <div className="rounded-xl overflow-hidden bg-[#1a1a1a]/90 backdrop-blur-md p-5 shadow-lg light:bg-white/90 light:text-gray-700">
          <h1 className="text-4xl font-bold text-neon mb-6 font-terminal light:text-darkgreen">Projects</h1>
          
          <div className="mb-8 animate-fade-in">
            <p className="mb-4 text-sm light:text-gray-700">
              Below are some of the key projects I've worked on throughout my career in cybersecurity. Each project represents a unique challenge in the security domain. While many of my professional engagements remain confidential due to their sensitive nature, these selected projects and research initiatives showcase my technical capabilities and contributions to the security community.
            </p>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <SectionHeader title="Featured Projects" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {projects.map((project, index) => (
                <ProjectCard 
                  key={index}
                  title={project.title}
                  description={project.description}
                  tools={project.tools}
                  image={project.image}
                  url={project.url}
                />
              ))}
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <SectionHeader title="Security Research & Recognition" />
            
            <div className="bg-darkcard/90 backdrop-blur-md p-4 rounded-md neon-border mb-6 light:bg-white/90 light:text-gray-700 light:border-darkgreen/30 light:hover:border-darkgreen/50">
              <h3 className="text-sm font-bold mb-2 text-white light:text-gray-800">Bug Bounty & Security Acknowledgments</h3>
              <p className="text-sm light:text-gray-700 mb-4">
                As an independent security researcher, I've identified and responsibly disclosed vulnerabilities to various organizations. My work has been recognized by:
              </p>
              <ul className="list-disc pl-5 text-xs space-y-1 mb-3">
                <li>Google Bug Bounty Awards</li>
                <li>NASA Acknowledgement</li>
                <li>United Nations Hall of Fame</li>
                <li>University of Cambridge Acknowledgement</li>
                <li>UK Government (NCSC) Security Acknowledgement</li>
                <li>United States Dept. of Defense Acknowledgement</li>
                <li>Australian Government Dept. of Social Services Hall of Fame</li>
                <li>BBC Hall of Fame</li>
              </ul>
              <a href="https://infosecwriteups.com/critical-security-findings-at-the-university-of-cambridge-a-methodology-for-detecting-exposed-02df63976710" className="text-neon text-xs hover:underline mt-2 inline-block light:text-darkgreen" target="_blank" rel="noopener noreferrer">View Cambridge security research →</a>
            </div>
          </div>
        </div>
        
        <footer className="text-center py-8 text-xs text-gray-500">
          Designed & Developed by Abid Ahmad | Ethical Hacker & Cyber Security Specialist
          <p className="mt-1">© 2025 Abid Ahmad - All Rights Reserved</p>
        </footer>
      </div>
    </div>
  );
};

export default Projects;

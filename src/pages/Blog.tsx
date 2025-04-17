import React from 'react';
import SideNav from '../components/SideNav';
import SectionHeader from '../components/SectionHeader';
import ArticleCard from '../components/ArticleCard';
import { NavBar } from '@/components/ui/tube-navbar';
import { Home, User, Layers, BookOpen, MessageSquare, Code, MoonStar, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';

const Blog = () => {
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: "Home", url: "/", icon: Home },
    { name: "About", url: "/about", icon: User },
    { name: "Projects", url: "/projects", icon: Code },
    { name: "Blog", url: "/blog", icon: BookOpen },
    { name: "Contact", url: "/contact", icon: MessageSquare }
  ];

  const featuredArticles = [
    {
      image: "/uploads/article1.webp",
      title: "Critical Security Findings at the University of Cambridge: A Methodology for Detecting Exposed Credentials",
      description: "How I discovered two critical vulnerabilities that exposed sensitive credentials and led to unauthorized access.",
      url: "https://infosecwriteups.com/critical-security-findings-at-the-university-of-cambridge-a-methodology-for-detecting-exposed-02df63976710"
    },
    {
      image: "/uploads/article2.webp",
      title: "Hacking Real-world AI Systems: The Art of Prompt Injection Attacks — Part 1",
      description: "Ready to Hack AI models? Learn How to Hack AI Systems and Access Sensitive Data. Discover How Prompt Injection Can Give You the Secret Keys of the AI System.",
      url: "https://systemweakness.com/hacking-real-world-ai-systems-the-art-of-prompt-injection-attacks-part-1-92f51ee9b0fe"
    },
    {
      image: "/uploads/article3.webp",
      title: "JSLeakRecon: The Ultimate Tool for Detecting Potential Leaks in JavaScript Files",
      description: "Quickly Identify Hardcoded Credentials, API keys, Access Tokens, Secret keys, and Critical security issues in JavaScript Files.",
      url: "https://systemweakness.com/jsleakrecon-the-ultimate-tool-for-detecting-potential-leaks-in-javascript-files-31b146bba2e2"
    },
    {
      image: "/uploads/article4.jpg",
      title: "How I was able to find multiple vulnerabilities of a Symfony Web Framework web application",
      description: "Found high severity vulnerability in 5 minutes just from reconnaissance. Found multiple vulnerabilities on a web application that used the Symfony web framework, enabled Symfony profiler/debug mode.",
      url: "https://infosecwriteups.com/how-i-was-able-to-find-multiple-vulnerabilities-of-a-symfony-web-framework-web-application-2b82cd5de144"
    }
  ];

  const recentArticles = [
    {
      date: "May 20, 2024",
      title: "The Future of Zero Trust: Moving Beyond Network Segmentation",
      category: "Security Architecture",
      excerpt: "Zero Trust has evolved far beyond its original concept. This article explores the next generation of Zero Trust implementations.",
      url: "https://medium.com/@abidahmad/future-of-zero-trust"
    },
    {
      date: "May 12, 2024",
      title: "Breaking the Chain: A Deep Dive into Supply Chain Attacks",
      category: "Threat Intelligence",
      excerpt: "Recent supply chain attacks have demonstrated how vulnerable our interconnected systems are. Learn the techniques attackers use.",
      url: "https://medium.com/@abidahmad/supply-chain-attacks-analysis"
    },
    {
      date: "May 5, 2024",
      title: "Securing Smart Cities: The Invisible Threats We're Ignoring",
      category: "IoT Security",
      excerpt: "As cities become smarter, they also become more vulnerable. This analysis reveals the security challenges facing smart city initiatives.",
      url: "https://medium.com/@abidahmad/securing-smart-cities"
    },
    {
      date: "April 28, 2024",
      title: "The Psychology of Social Engineering: Why We Fall for Scams",
      category: "Social Engineering",
      excerpt: "Understanding the psychological triggers that make even security-aware individuals vulnerable to social engineering attacks.",
      url: "https://medium.com/@abidahmad/psychology-of-social-engineering"
    },
    {
      date: "April 15, 2024",
      title: "Quantum Computing and the End of Modern Cryptography",
      category: "Cryptography",
      excerpt: "With quantum computers on the horizon, our current encryption methods are at risk. What does this mean for digital security?",
      url: "https://medium.com/@abidahmad/quantum-computing-cryptography"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-300 font-spacemono light:bg-[#f1f5f1] light:text-gray-700">
      <SideNav />
      
      <NavBar 
        items={navItems} 
        activeTab="Blog"
        themeToggle={{
          icon: theme === 'dark' ? Sun : MoonStar,
          onClick: () => toggleTheme(),
          theme: theme as 'dark' | 'light'
        }}
      />
      
      <div className="max-w-6xl mx-auto px-4 py-8 pt-20 md:pt-28">
        <div className="rounded-xl overflow-hidden bg-[#1a1a1a]/90 backdrop-blur-md p-5 shadow-lg light:bg-white/90 light:text-gray-700">
          <h1 className="text-4xl font-bold text-neon mb-6 font-terminal light:text-darkgreen">Blog</h1>
          
          <div className="mb-8 animate-fade-in">
            <p className="mb-4 text-sm light:text-gray-700">
              Welcome to my cybersecurity blog where I share insights, research findings, and practical advice based on my experience in the field. Here you'll find articles on emerging threats, security techniques, and thought leadership on the future of cybersecurity.
            </p>
          </div>
          
          <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <SectionHeader title="Featured Articles" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              {featuredArticles.map((article, index) => (
                <ArticleCard 
                  key={index}
                  image={article.image}
                  title={article.title}
                  description={article.description}
                  url={article.url}
                />
              ))}
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <SectionHeader title="Recent Articles" />
            
            <div className="divide-y divide-neon/10 light:divide-darkgreen/10">
              {recentArticles.map((article, index) => (
                <a 
                  key={index} 
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-4 hover:bg-darkcard/50 transition-colors px-3 rounded-md light:hover:bg-darkgreen/5"
                >
                  <div className="flex items-center gap-2 mb-1 text-xs text-gray-400 light:text-gray-600">
                    <span>{article.date}</span>
                    <span className="w-1 h-1 rounded-full bg-neon light:bg-darkgreen"></span>
                    <span className="text-neon light:text-darkgreen">{article.category}</span>
                  </div>
                  <h3 className="text-sm font-bold mb-1 text-white light:text-gray-800">{article.title}</h3>
                  <p className="text-xs text-gray-400 light:text-gray-600">{article.excerpt}</p>
                  <span className="text-neon text-xs mt-2 inline-block light:text-darkgreen">Read more →</span>
                </a>
              ))}
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

export default Blog;

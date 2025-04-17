import React from 'react';
import SideNav from '../components/SideNav';
import ProfileCard from '../components/ProfileCard';
import Header from '../components/Header';
import Achievement from '../components/Achievement';
import ArticleCard from '../components/ArticleCard';
import SectionHeader from '../components/SectionHeader';
import { useTheme } from '@/hooks/use-theme';
import { useIsMobile } from '@/hooks/use-mobile';
import { NavBar } from '@/components/ui/tube-navbar';
import { Home, User, Layers, BookOpen, MessageSquare, Code, MoonStar, Sun } from 'lucide-react';

const Index = () => {
  const { theme, toggleTheme } = useTheme();
  const isMobile = useIsMobile();

  const navItems = [
    { name: "Home", url: "/", icon: Home },
    { name: "About", url: "/about", icon: User },
    { name: "Projects", url: "/projects", icon: Code },
    { name: "Blog", url: "/blog", icon: BookOpen },
    { name: "Contact", url: "/contact", icon: MessageSquare }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-300 font-spacemono light:bg-[#f1f5f1] light:text-gray-700">
      <SideNav />
      
      <NavBar 
        items={navItems} 
        activeTab="Home"
        themeToggle={{
          icon: theme === 'dark' ? Sun : MoonStar,
          onClick: () => toggleTheme(),
          theme: theme as 'dark' | 'light'
        }}
      />
      
      <div className="max-w-6xl mx-auto px-4 py-8 pt-20 md:pt-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left Column - Profile Card and What Drives Me */}
          <div className="md:col-span-4 order-1 md:order-1">
            <div className="rounded-xl overflow-hidden bg-[#1a1a1a]/90 backdrop-blur-md shadow-lg mb-6">
              <Header />
              <ProfileCard />
            </div>
            
            {/* Mobile Bio Section (visible only on mobile) */}
            {isMobile && (
              <div className="rounded-xl overflow-hidden bg-[#1a1a1a]/90 backdrop-blur-md p-5 shadow-lg mb-6 light:bg-white/90">
                <div className="mb-8 animate-fade-in">
                  <h1 className="text-4xl font-bold text-neon mb-4 font-terminal light:text-darkgreen">Abid Ahmad</h1>
                  
                  <p className="mb-3 light:text-gray-700">
                    I am <strong>Abid Ahmad</strong>, an Ethical Hacker and Cyber Security Specialist with over six years of experience. I'm passionate about building robust information security architecture, developing leading-edge organizations, and fostering cross-functional collaboration between security teams, IT, Risk Management, AI Security and Privacy, and Non-Perceptible Networks (VPN).
                  </p>
                  
                  <p className="mb-3 light:text-gray-700">
                    With an MSc in Cyber Security (Distinction) and extensive expertise, I identify security challenges by building strategic thinking with practical solutions. My work bridges commerce and industry, reflecting my contributions to evolving critical systems and teaching new-generation cybersecurity students at the university level. This dual perspective prepares me to embrace the challenge of mentoring a new generation of cyber security professionals.
                  </p>
                  
                  <p className="mb-3 light:text-gray-700">
                    I am deeply passionate about pioneering the field of cyber security's future. It's exciting exploring emerging tech, leveraging next-generation technologies. With unwavering dedication and a commitment to excellence, I strive to make the digital and cyber-physical world safer and more secure for everyone.
                  </p>
                </div>
              </div>
            )}
            
            {/* What Drives Me Section */}
            <div className="rounded-xl overflow-hidden bg-[#1a1a1a]/90 backdrop-blur-md p-5 shadow-lg mb-6 light:bg-white/90">
              <SectionHeader title="What Drives Me" />
              
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-darkcard/90 backdrop-blur-md p-4 rounded-md neon-border">
                  <h3 className="text-base font-bold mb-2 text-white light:text-gray-800">Optimized Approach</h3>
                  <p className="light:text-gray-700">I thrive on a problem-solving mindset, uncovering hidden vulnerabilities, and facing innovative challenges through ethical hacking and critical analysis.</p>
                </div>
                
                <div className="bg-darkcard/90 backdrop-blur-md p-4 rounded-md neon-border">
                  <h3 className="text-base font-bold mb-2 text-white light:text-gray-800">Innovation Focus</h3>
                  <p className="light:text-gray-700">I enjoy developing tools and methodologies that empower others to navigate the ever-evolving landscape of cyber security with greater effectiveness.</p>
                </div>
                
                <div className="bg-darkcard/90 backdrop-blur-md p-4 rounded-md neon-border">
                  <h3 className="text-base font-bold mb-2 text-white light:text-gray-800">Continued Learning</h3>
                  <p className="light:text-gray-700">I actively expand my expertise through research and upskilling, staying informed on emerging threats like AI-driven threats, prompt injection attacks, and advanced cyber-physical systems.</p>
                </div>
                
                <div className="bg-darkcard/90 backdrop-blur-md p-4 rounded-md neon-border">
                  <h3 className="text-base font-bold mb-2 text-white light:text-gray-800">Impactful Research</h3>
                  <p className="light:text-gray-700">I am dedicated to advancing cyber security by uncovering emerging threats, implementing cutting-edge technologies, and contributing to a safer, more resilient digital future.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div className="md:col-span-8 order-2 md:order-2">
            <div className="rounded-xl overflow-hidden bg-[#1a1a1a]/90 backdrop-blur-md p-5 shadow-lg mb-6 light:bg-white/90">
              {/* Bio Section (hidden on mobile) */}
              <div className="hidden md:block mb-8 animate-fade-in">
                <h1 className="text-4xl font-bold text-neon mb-4 font-terminal light:text-darkgreen">Abid Ahmad</h1>
                
                <p className="mb-3 light:text-gray-700">
                  I am <strong>Abid Ahmad</strong>, an Ethical Hacker and Cyber Security Specialist with over six years of experience. I'm passionate about building robust information security architecture, developing leading-edge organizations, and fostering cross-functional collaboration between security teams, IT, Risk Management, AI Security and Privacy, and Non-Perceptible Networks (VPN).
                </p>
                
                <p className="mb-3 light:text-gray-700">
                  With an MSc in Cyber Security (Distinction) and extensive expertise, I identify security challenges by building strategic thinking with practical solutions. My work bridges commerce and industry, reflecting my contributions to evolving critical systems and teaching new-generation cybersecurity students at the university level. This dual perspective prepares me to embrace the challenge of mentoring a new generation of cyber security professionals.
                </p>
                
                <p className="mb-3 light:text-gray-700">
                  I am deeply passionate about pioneering the field of cyber security's future. It's exciting exploring emerging tech, leveraging next-generation technologies. With unwavering dedication and a commitment to excellence, I strive to make the digital and cyber-physical world safer and more secure for everyone.
                </p>
              </div>
            </div>
            
            {/* Achievements Section */}
            <div className="rounded-xl overflow-hidden bg-[#1a1a1a]/90 backdrop-blur-md p-5 shadow-lg mb-6 animate-fade-in light:bg-white/90" style={{ animationDelay: '0.4s' }}>
              <SectionHeader title="Recognitions & Achievements" />
              
              <Achievement text="Recognised by Google, NASA, UK National Cyber Security Centre (NCSC), the University of Cambridge, and others for identifying and reporting critical vulnerabilities." />
              
              <Achievement text="Achieved Hall of Fame for securing systems for the United Nations, Australian Government, U.S. Departments of Defense, BBC, and more." />
              
              <Achievement text="Achieved notable Hack The Box Hacker Rank for outstanding ethical hacking performance." />
              
              <Achievement text="Awarded the NASA International Space Apps Galactic Problem Solver title." />
              
              <Achievement text="Earned a Divisional Board Medal for excellence in the Physics Olympiad, Bangladesh." />
            </div>
            
            {/* Featured Articles Section */}
            <div className="rounded-xl overflow-hidden bg-[#1a1a1a]/90 backdrop-blur-md p-5 shadow-lg animate-fade-in light:bg-white/90" style={{ animationDelay: '0.6s' }}>
              <SectionHeader title="Featured Articles" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ArticleCard 
                  image="/uploads/article1.webp" 
                  title="Critical Security Findings at the University of Cambridge: A Methodology for Detecting Exposed Credentials"
                  description="How I discovered two critical vulnerabilities that exposed sensitive credentials and led to unauthorized access."
                  url="https://infosecwriteups.com/critical-security-findings-at-the-university-of-cambridge-a-methodology-for-detecting-exposed-02df63976710"
                />
                
                <ArticleCard 
                  image="/uploads/article2.webp" 
                  title="Hacking Real-world AI Systems: The Art of Prompt Injection Attacks — Part 1"
                  description="Ready to Hack AI models? Learn How to Hack AI Systems and Access Sensitive Data. Discover How Prompt Injection Can Give You the Secret Keys of the AI System."
                  url="https://systemweakness.com/hacking-real-world-ai-systems-the-art-of-prompt-injection-attacks-part-1-92f51ee9b0fe" 
                />
                
                <ArticleCard 
                  image="/uploads/article3.webp" 
                  title="JSLeakRecon: The Ultimate Tool for Detecting Potential Leaks in JavaScript Files"
                  description="Quickly Identify Hardcoded Credentials, API keys, Access Tokens, Secret keys, and Critical security issues in JavaScript Files."
                  url="https://systemweakness.com/jsleakrecon-the-ultimate-tool-for-detecting-potential-leaks-in-javascript-files-31b146bba2e2" 
                />
                
                <ArticleCard 
                  image="/uploads/article4.jpg" 
                  title="How I was able to find multiple vulnerabilities of a Symfony Web Framework web application"
                  description="Found high severity vulnerability in 5 minutes just from reconnaissance. Found multiple vulnerabilities on a web application that used the Symfony web framework, enabled Symfony profiler/debug mode."
                  url="https://infosecwriteups.com/how-i-was-able-to-find-multiple-vulnerabilities-of-a-symfony-web-framework-web-application-2b82cd5de144" 
                />
              </div>
            </div>
          </div>
        </div>
        
        <footer className="text-center py-8 mt-8">
          <p className="text-xs text-gray-500">
            Designed & Developed by Abid Ahmad | Ethical Hacker & Cyber Security Specialist
            <br />© 2025 Abid Ahmad - All Rights Reserved
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;

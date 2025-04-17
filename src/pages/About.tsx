import React from 'react';
import SideNav from '../components/SideNav';
import SectionHeader from '../components/SectionHeader';
import Achievement from '../components/Achievement';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { NavBar } from '@/components/ui/tube-navbar';
import { BookOpen, GraduationCap, Home, Layers, MessageSquare, User, Code, MoonStar, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';

const ExperienceCard = ({ title, period, location, responsibilities }) => (
  <div className="bg-darkcard/90 backdrop-blur-md p-4 rounded-md neon-border mb-4">
    <h3 className="text-sm font-bold mb-1 text-white">{title}</h3>
    <p className="text-xs text-neon light:text-darkgreen mb-2">{period}{location && ` • ${location}`}</p>
    <ul className="list-disc pl-4 text-xs space-y-1">
      {responsibilities.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

const CertificationItem = ({ name, year }) => (
  <div className="bg-darkcard/90 backdrop-blur-md p-3 rounded-md neon-border mb-2">
    <p className="text-xs font-semibold">{name} ({year})</p>
  </div>
);

// Skills Components
const SkillBar = ({ name, level }) => (
  <div className="mb-4">
    <div className="flex justify-between items-center mb-1">
      <span className="text-xs font-semibold">{name}</span>
      <span className="text-xs text-neon light:text-darkgreen">{level}%</span>
    </div>
    <div className="h-2 bg-darkbg rounded-full overflow-hidden">
      <div
        className="h-full bg-neon rounded-full"
        style={{ width: `${level}%` }}
      ></div>
    </div>
  </div>
);

const SkillCard = ({ title, skills }) => (
  <div className="bg-darkcard/90 backdrop-blur-md p-4 rounded-md neon-border">
    <h3 className="text-sm font-bold mb-4 text-white">{title}</h3>
    {skills.map((skill, index) => (
      <SkillBar key={index} name={skill.name} level={skill.level} />
    ))}
  </div>
);

const About = () => {
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: "Home", url: "/", icon: Home },
    { name: "About", url: "/about", icon: User },
    { name: "Projects", url: "/projects", icon: Code },
    { name: "Blog", url: "/blog", icon: BookOpen },
    { name: "Contact", url: "/contact", icon: MessageSquare }
  ];

  // Skills data
  const technicalSkills = [
    { name: "Ethical Hacking", level: 95 },
    { name: "Vulnerability Assessment", level: 92 },
    { name: "Penetration Testing", level: 90 },
    { name: "Web Application Security", level: 88 },
    { name: "API Security", level: 85 }
  ];

  const programmingSkills = [
    { name: "Python", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Shell Scripting", level: 88 },
    { name: "PowerShell", level: 75 }
  ];

  const toolsSkills = [
    { name: "Linux", level: 95 },
    { name: "Metasploit", level: 92 },
    { name: "Burp Suite", level: 90 },
    { name: "Wireshark", level: 88 },
    { name: "Splunk", level: 85 }
  ];

  const certifications = [
    { name: "Cisco CCNA Security Certification", year: "2021" },
    { name: "Tecforte Elite SOC Administrator Certification", year: "2022" },
    { name: "EC Council Ethical Hacking Essentials (EHE) Certification", year: "2022" },
    { name: "AttackIQ Foundations of Operationalizing MITRE ATT&CK Certification", year: "2023" },
    { name: "EC Council Digital Forensics Essentials (DFE) Certification", year: "2024" },
    { name: "APIsec University API Penetration Testing Certification", year: "2024" },
    { name: "The SecOps Group Certified AppSec Practitioner (CAP) Certification", year: "2024" }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-300 font-spacemono light:bg-[#f1f5f1] light:text-gray-700">
      <SideNav />
      
      <NavBar 
        items={navItems} 
        activeTab="About"
        themeToggle={{
          icon: theme === 'dark' ? Sun : MoonStar,
          onClick: () => toggleTheme(),
          theme: theme as 'dark' | 'light'
        }}
      />
      
      <div className="max-w-6xl mx-auto px-4 py-8 pt-20 md:pt-28">
        <div className="rounded-xl overflow-hidden bg-[#1a1a1a]/90 backdrop-blur-md p-5 shadow-lg mb-6 light:bg-white/90">
          <h1 className="text-4xl font-bold text-neon mb-6 font-terminal light:text-darkgreen">About Me</h1>
          
          <div className="mb-8 animate-fade-in">
            <p className="mb-4 text-sm">
              As a Cyber Security Specialist with a focus on ethical hacking, I've devoted my career to protecting organizations from evolving digital threats. My expertise spans vulnerability assessment, penetration testing, and attack surface management with a particular interest in AI security and privacy.
            </p>
            
            <p className="mb-4 text-sm">
              I recently completed my MSc in Cyber Security with Distinction from Birmingham City University, complementing my BSc Hons in Cyber Security from Staffordshire University. Throughout my career, I've worked across diverse security domains, from academia to private sector security firms.
            </p>
            
            <p className="mb-4 text-sm">
              My approach combines technical expertise with strategic thinking. I believe that effective security isn't just about implementing tools and technologies, but about understanding the broader context in which these systems operate, including human factors and organizational processes.
            </p>
          </div>
          
          <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <SectionHeader title="Professional Experience" />
            
            <ExperienceCard 
              title="Visiting Demonstrator at Birmingham City University"
              period="January 2024 - April 2024"
              location="Birmingham, United Kingdom"
              responsibilities={[
                "Delivered hands-on lab sessions in Ethical Hacking",
                "Taught Cyber Security Fundamentals",
                "Created interactive learning environment",
                "Assessed student performance and provided mentorship",
                "Used collaborative, active learning focused on critical thinking and problem-solving"
              ]}
            />
            
            <ExperienceCard 
              title="Independent Security Researcher (Freelance)"
              period="February 2021 - Present"
              location=""
              responsibilities={[
                "Conducted independent vulnerability assessments, uncovering and responsibly disclosing critical security issues",
                "Google Bug Bounty Awards",
                "NASA Acknowledgement",
                "United Nations Hall of Fame",
                "University of Cambridge Acknowledgement",
                "UK Government (NCSC) Security Acknowledgement",
                "United States Dept. of Defense Acknowledgement",
                "Australian Government Dept. of Social Services Hall of Fame",
                "BBC Hall of Fame"
              ]}
            />
            
            <ExperienceCard 
              title="Junior Cyber Security Specialist"
              period="April 2021 - September 2021"
              location="Dhaka, Bangladesh"
              responsibilities={[
                "Conducted vulnerability assessments, producing detailed reports to inform security improvements",
                "Performed penetration testing on web and mobile applications to identify and mitigate security flaws",
                "Audited source code to uncover potential vulnerabilities and improve application security",
                "Engaged in red team assessments, along with SIEM monitoring, threat hunting, and threat analysis"
              ]}
            />
            
            <ExperienceCard 
              title="Collaborative Team Member at Forensic and Cyber Security Research Center (FSeC)"
              period="June 2019 - December 2021"
              location="Kuala Lumpur, Malaysia"
              responsibilities={[
                "Participated in workshops and seminars to enhance group knowledge, promote teamwork, and encourage continuous learning",
                "Shared expertise in Cyber Security, Ethical Hacking, and Digital Forensics, facilitating peer learning",
                "Demonstrated technical and problem-solving skills in Capture The Flag (CTF) competitions"
              ]}
            />
            
            <ExperienceCard 
              title="Contributor at InfoSec Write-ups Publication"
              period="January 2022 - Present"
              location=""
              responsibilities={[
                "Documented and shared penetration testing findings and insights, contributing valuable knowledge to the InfoSec community",
                "Published 'Critical Security Findings at the University of Cambridge: A Methodology for Detecting Exposed Git Repositories'",
                "Published 'How I Was Able to Find Multiple Vulnerabilities of a Symfony Web Framework Web Application'"
              ]}
            />
          </div>
          
          <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <SectionHeader title="Education" />
            
            <div className="bg-darkcard/90 backdrop-blur-md p-4 rounded-md neon-border mb-4">
              <h3 className="text-sm font-bold mb-1 text-white">MSc Cyber Security</h3>
              <p className="text-xs text-neon light:text-darkgreen mb-2">Birmingham City University • September 2023 - September 2024 • Distinction</p>
              <p className="text-xs mb-2">Dissertation: "Balancing Security and Privacy in Attack Surface Management: A Framework Integrating Privacy-Enhancing Technologies"</p>
              <p className="text-xs font-semibold mb-1">Core Modules:</p>
              <ul className="list-disc pl-4 text-xs space-y-1">
                <li>Advanced Ethical Hacking</li>
                <li>Applied Machine Learning</li>
                <li>Cyber-Physical Systems Security</li>
                <li>Information Security Governance</li>
                <li>Digital Forensics</li>
              </ul>
            </div>
            
            <div className="bg-darkcard/90 backdrop-blur-md p-4 rounded-md neon-border">
              <h3 className="text-sm font-bold mb-1 text-white">BSc Hons in Cyber Security</h3>
              <p className="text-xs text-neon light:text-darkgreen mb-2">Staffordshire University • April 2019 - September 2022 • Grade: 68.44%</p>
              <p className="text-xs mb-2">Teaching institution: Asia Pacific University of Technology and Innovation (Malaysia)</p>
              <p className="text-xs mb-2">Undergraduate Project: "WideSpread - Advanced Reconnaissance and Vulnerability Assessment System"</p>
              <p className="text-xs font-semibold mb-1">Core Modules:</p>
              <ul className="list-disc pl-4 text-xs space-y-1">
                <li>Network Security</li>
                <li>Ethical Hacking</li>
                <li>Malicious Software and Security Programming</li>
                <li>Biometric Security</li>
                <li>Computer System Security</li>
                <li>Digital Forensics</li>
                <li>System Programming and Computer Control</li>
              </ul>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <SectionHeader title="Research & Expertise" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-sm font-bold mb-3 text-neon light:text-darkgreen">Research Interests</h3>
                <div className="space-y-2">
                  <div className="bg-darkcard/90 backdrop-blur-md p-3 rounded-md neon-border">
                    <p className="text-xs">AI Security and Privacy</p>
                  </div>
                  <div className="bg-darkcard/90 backdrop-blur-md p-3 rounded-md neon-border">
                    <p className="text-xs">Offensive Security</p>
                  </div>
                  <div className="bg-darkcard/90 backdrop-blur-md p-3 rounded-md neon-border">
                    <p className="text-xs">Network Security</p>
                  </div>
                  <div className="bg-darkcard/90 backdrop-blur-md p-3 rounded-md neon-border">
                    <p className="text-xs">Attack Surface Management</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-bold mb-3 text-neon light:text-darkgreen">Areas of Expertise</h3>
                <div className="space-y-2">
                  <div className="bg-darkcard/90 backdrop-blur-md p-3 rounded-md neon-border">
                    <p className="text-xs">Ethical Hacking</p>
                  </div>
                  <div className="bg-darkcard/90 backdrop-blur-md p-3 rounded-md neon-border">
                    <p className="text-xs">Vulnerability Assessment</p>
                  </div>
                  <div className="bg-darkcard/90 backdrop-blur-md p-3 rounded-md neon-border">
                    <p className="text-xs">Penetration Testing</p>
                  </div>
                  <div className="bg-darkcard/90 backdrop-blur-md p-3 rounded-md neon-border">
                    <p className="text-xs">Web Application Security</p>
                  </div>
                  <div className="bg-darkcard/90 backdrop-blur-md p-3 rounded-md neon-border">
                    <p className="text-xs">API Security</p>
                  </div>
                  <div className="bg-darkcard/90 backdrop-blur-md p-3 rounded-md neon-border">
                    <p className="text-xs">Mobile Application Security</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-sm font-bold mb-3 text-neon light:text-darkgreen">Honors and Awards</h3>
              <div className="space-y-2">
                <div className="bg-darkcard/90 backdrop-blur-md p-3 rounded-md neon-border">
                  <p className="text-xs">Hack The Box Hacker Rank</p>
                </div>
                <div className="bg-darkcard/90 backdrop-blur-md p-3 rounded-md neon-border">
                  <p className="text-xs">NASA International Space Apps Galactic Problem-Solver</p>
                </div>
                <div className="bg-darkcard/90 backdrop-blur-md p-3 rounded-md neon-border">
                  <p className="text-xs">Divisional Round Medalist, Physics Olympiad, Bangladesh</p>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-sm font-bold mb-3 text-neon light:text-darkgreen">Professional Membership</h3>
              <div className="space-y-2">
                <div className="bg-darkcard/90 backdrop-blur-md p-3 rounded-md neon-border">
                  <p className="text-xs">Institute of Electrical and Electronics Engineers (IEEE) • 2024 - Present</p>
                </div>
                <div className="bg-darkcard/90 backdrop-blur-md p-3 rounded-md neon-border">
                  <p className="text-xs">IEEE Computer Society • 2024 - Present</p>
                </div>
                <div className="bg-darkcard/90 backdrop-blur-md p-3 rounded-md neon-border">
                  <p className="text-xs">IEEE Young Professionals • 2024 - Present</p>
                </div>
                <div className="bg-darkcard/90 backdrop-blur-md p-3 rounded-md neon-border">
                  <p className="text-xs">BCUSU Cyber Security Society • 2024 - Present</p>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-sm font-bold mb-3 text-neon light:text-darkgreen">Book Chapters</h3>
              <div className="space-y-2">
                <div className="bg-darkcard/90 backdrop-blur-md p-3 rounded-md neon-border">
                  <p className="text-xs">Prompt Injection Risks in Custom GPTs of ChatGPT</p>
                </div>
                <div className="bg-darkcard/90 backdrop-blur-md p-3 rounded-md neon-border">
                  <p className="text-xs">Navigating the Risks and Rewards of ChatGPT: Governance, Innovation, and Ethical Challenges • 2026*</p>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-sm font-bold mb-3 text-neon light:text-darkgreen">Certifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {certifications.map((cert, index) => (
                  <CertificationItem key={index} name={cert.name} year={cert.year} />
                ))}
              </div>
            </div>
          </div>
          
          <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <SectionHeader title="Skills & Expertise" />
            
            <div className="mb-4 text-sm light:text-gray-700">
              With a focus on offensive security and vulnerability assessment, I've developed a diverse skill set that allows me to approach security challenges from multiple angles. My expertise spans technical security skills, programming languages, and specialized security tools that enable me to identify and mitigate vulnerabilities effectively.
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <SkillCard title="Technical Security Skills" skills={technicalSkills} />
              <SkillCard title="Programming Languages" skills={programmingSkills} />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <SkillCard title="Security Tools & Platforms" skills={toolsSkills} />
              <div className="bg-darkcard/90 backdrop-blur-md p-4 rounded-md neon-border">
                <h3 className="text-sm font-bold mb-4 text-white light:text-gray-800">Areas of Specialization</h3>
                <div className="space-y-2">
                  <div className="bg-darkbg/80 p-2 rounded-md light:bg-gray-100">
                    <p className="text-xs light:text-gray-700">Web Application Security</p>
                  </div>
                  <div className="bg-darkbg/80 p-2 rounded-md light:bg-gray-100">
                    <p className="text-xs light:text-gray-700">API Security</p>
                  </div>
                  <div className="bg-darkbg/80 p-2 rounded-md light:bg-gray-100">
                    <p className="text-xs light:text-gray-700">Network Security</p>
                  </div>
                  <div className="bg-darkbg/80 p-2 rounded-md light:bg-gray-100">
                    <p className="text-xs light:text-gray-700">Mobile Application Security</p>
                  </div>
                  <div className="bg-darkbg/80 p-2 rounded-md light:bg-gray-100">
                    <p className="text-xs light:text-gray-700">AI Security and Privacy</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-4">
              <h3 className="text-sm font-bold mb-3 text-neon light:text-darkgreen">Security Tools Expertise</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                <div className="bg-darkcard/90 backdrop-blur-md p-2 rounded-md neon-border text-center">
                  <p className="text-xs light:text-gray-700">Linux</p>
                </div>
                <div className="bg-darkcard/90 backdrop-blur-md p-2 rounded-md neon-border text-center">
                  <p className="text-xs light:text-gray-700">MetaSploit</p>
                </div>
                <div className="bg-darkcard/90 backdrop-blur-md p-2 rounded-md neon-border text-center">
                  <p className="text-xs light:text-gray-700">Burp Suite</p>
                </div>
                <div className="bg-darkcard/90 backdrop-blur-md p-2 rounded-md neon-border text-center">
                  <p className="text-xs light:text-gray-700">Wireshark</p>
                </div>
                <div className="bg-darkcard/90 backdrop-blur-md p-2 rounded-md neon-border text-center">
                  <p className="text-xs light:text-gray-700">BloodHound</p>
                </div>
                <div className="bg-darkcard/90 backdrop-blur-md p-2 rounded-md neon-border text-center">
                  <p className="text-xs light:text-gray-700">Splunk</p>
                </div>
                <div className="bg-darkcard/90 backdrop-blur-md p-2 rounded-md neon-border text-center">
                  <p className="text-xs light:text-gray-700">SQLmap</p>
                </div>
                <div className="bg-darkcard/90 backdrop-blur-md p-2 rounded-md neon-border text-center">
                  <p className="text-xs light:text-gray-700">NIST</p>
                </div>
                <div className="bg-darkcard/90 backdrop-blur-md p-2 rounded-md neon-border text-center">
                  <p className="text-xs light:text-gray-700">ISO 27001</p>
                </div>
                <div className="bg-darkcard/90 backdrop-blur-md p-2 rounded-md neon-border text-center">
                  <p className="text-xs light:text-gray-700">SIEM</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-bold mb-3 text-neon light:text-darkgreen">Soft Skills</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                <div className="bg-darkcard/90 backdrop-blur-md p-2 rounded-md neon-border text-center">
                  <p className="text-xs light:text-gray-700">Critical Thinking</p>
                </div>
                <div className="bg-darkcard/90 backdrop-blur-md p-2 rounded-md neon-border text-center">
                  <p className="text-xs light:text-gray-700">Problem Solving</p>
                </div>
                <div className="bg-darkcard/90 backdrop-blur-md p-2 rounded-md neon-border text-center">
                  <p className="text-xs light:text-gray-700">Leadership</p>
                </div>
                <div className="bg-darkcard/90 backdrop-blur-md p-2 rounded-md neon-border text-center">
                  <p className="text-xs light:text-gray-700">Adaptability</p>
                </div>
              </div>
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

export default About;

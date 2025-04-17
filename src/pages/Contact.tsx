import React, { useState } from 'react';
import SideNav from '../components/SideNav';
import SectionHeader from '../components/SectionHeader';
import { Mail, Phone, MapPin, Twitter, Github, Linkedin, Home, User, Layers, BookOpen, MessageSquare, Code, MoonStar, Sun } from 'lucide-react';
import { NavBar } from '@/components/ui/tube-navbar';
import { useTheme } from '@/hooks/use-theme';

const ContactItem = ({ icon, title, content }) => {
  const IconComponent = icon;
  return (
    <div className="flex items-start gap-3 bg-darkcard/90 backdrop-blur-md p-3 rounded-md border border-neon/20 mb-4 transition-all duration-300 hover:border-neon/40">
      <div className="text-neon light:text-darkgreen mt-1">
        <IconComponent size={16} />
      </div>
      <div>
        <h3 className="text-xs font-bold text-white mb-1 light:text-gray-800">{title}</h3>
        <p className="text-xs text-gray-400 light:text-gray-700">{content}</p>
      </div>
    </div>
  );
};

const SocialButton = ({ icon, href }) => {
  const IconComponent = icon;
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="p-3 bg-darkcard/90 backdrop-blur-md rounded-full border border-neon/20 text-neon hover:bg-neon/10 transition-colors"
    >
      <IconComponent size={18} />
    </a>
  );
};

const Contact = () => {
  const { theme, toggleTheme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const navItems = [
    { name: "Home", url: "/", icon: Home },
    { name: "About", url: "/about", icon: User },
    { name: "Projects", url: "/projects", icon: Code },
    { name: "Blog", url: "/blog", icon: BookOpen },
    { name: "Contact", url: "/contact", icon: MessageSquare }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after some time
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-300 font-spacemono light:bg-[#f1f5f1] light:text-gray-700">
      <SideNav />
      
      <NavBar 
        items={navItems} 
        activeTab="Contact"
        themeToggle={{
          icon: theme === 'dark' ? Sun : MoonStar,
          onClick: () => toggleTheme(),
          theme: theme as 'dark' | 'light'
        }}
      />
      
      <div className="max-w-6xl mx-auto px-4 py-8 pt-20 md:pt-28">
        <div className="rounded-xl overflow-hidden bg-[#1a1a1a]/90 backdrop-blur-md p-5 shadow-lg light:bg-white/90 light:text-gray-700">
          <h1 className="text-4xl font-bold text-neon mb-6 font-terminal light:text-darkgreen">Contact</h1>
          
          <div className="mb-8 animate-fade-in">
            <p className="mb-4 text-sm light:text-gray-700">
              I'm always interested in discussing new security challenges, speaking opportunities, or potential collaborations. If you'd like to get in touch, please use one of the contact methods below or fill out the contact form.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <SectionHeader title="Get In Touch" />
              
              <ContactItem 
                icon={Mail} 
                title="Email" 
                content="hello@abidahmad.com" 
              />
              
              <ContactItem 
                icon={Phone} 
                title="Phone" 
                content="+8801010101010" 
              />
              
              <ContactItem 
                icon={MapPin} 
                title="Location" 
                content="localhost" 
              />
              
              <div className="mt-8">
                <SectionHeader title="Follow Me" />
                
                <div className="flex gap-3 mt-4">
                  <SocialButton icon={Twitter} href="#" />
                  <SocialButton icon={Github} href="#" />
                  <SocialButton icon={Linkedin} href="#" />
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <SectionHeader title="Send Message" />
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    className="w-full bg-darkcard/90 backdrop-blur-md border border-neon/20 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-neon/50 transition-colors light:text-gray-800 light:placeholder-gray-500"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Your Email" 
                    className="w-full bg-darkcard/90 backdrop-blur-md border border-neon/20 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-neon/50 transition-colors light:text-gray-800 light:placeholder-gray-500"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <input 
                    type="text" 
                    name="subject" 
                    placeholder="Subject" 
                    className="w-full bg-darkcard/90 backdrop-blur-md border border-neon/20 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-neon/50 transition-colors light:text-gray-800 light:placeholder-gray-500"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <textarea 
                    name="message" 
                    placeholder="Your Message" 
                    rows={5}
                    className="w-full bg-darkcard/90 backdrop-blur-md border border-neon/20 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-neon/50 transition-colors light:text-gray-800 light:placeholder-gray-500"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className={`px-6 py-2 bg-neon/10 hover:bg-neon/20 text-neon border border-neon/40 rounded-md text-sm transition-colors light:text-darkgreen light:border-darkgreen/40 light:bg-darkgreen/10 light:hover:bg-darkgreen/20 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                
                {submitSuccess && (
                  <div className="text-xs text-neon mt-2 light:text-darkgreen">
                    Your message has been sent successfully. I'll get back to you soon!
                  </div>
                )}
              </form>
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

export default Contact;

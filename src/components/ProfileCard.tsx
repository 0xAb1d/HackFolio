import React, { useState, useEffect } from 'react';
import { Twitter, Linkedin, Github, Globe, Mail } from 'lucide-react';
// No need to import the CSS here since it's already imported in index.css

const titles = [
  "Cyber Security Researcher",
  "Ethical Hacker",
  "Security Specialist",
  "Penetration Tester"
];

// Array of photos to cycle through
const photos = [
  "/uploads/photo1.jpg", // Mask photo
  "/uploads/photo2.jpg"  // Formal photo
];

const ProfileCard = () => {
  const [displayText, setDisplayText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Typing effect for titles
  useEffect(() => {
    const timer = setTimeout(() => {
      const currentTitle = titles[titleIndex];
      
      if (!isDeleting) {
        // Typing forward
        if (charIndex < currentTitle.length) {
          setDisplayText(currentTitle.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
          setTypingSpeed(100); // Normal typing speed
        } else {
          // Pause at the end of typing before starting to delete
          setIsDeleting(true);
          setTypingSpeed(1500); // Pause before deleting
        }
      } else {
        // Deleting
        if (charIndex > 0) {
          setDisplayText(currentTitle.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
          setTypingSpeed(50); // Faster when deleting
        } else {
          // Move to the next title
          setIsDeleting(false);
          setTitleIndex((titleIndex + 1) % titles.length);
          setTypingSpeed(250); // Pause before typing the next title
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, titleIndex, typingSpeed]);

  // Photo switching effect with transition
  useEffect(() => {
    const photoTimer = setInterval(() => {
      // Set transitioning state first
      setIsTransitioning(true);
      
      // Change photo after transition effect starts
      setTimeout(() => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
        
        // Remove transition state after effect completes
        setTimeout(() => {
          setIsTransitioning(false);
        }, 800); // Duration of transition effect
      }, 200); // Short delay before actually changing the photo
      
    }, 5000); // Switch photo every 5 seconds

    return () => clearInterval(photoTimer);
  }, []);

  // Current photo URL
  const currentPhoto = photos[currentPhotoIndex];

  // Calculate glitch class based on transition state
  const glitchClass = isTransitioning 
    ? "glitch glitch-transition" 
    : "glitch";
    
  // Calculate photo-specific class for clip-path adjustments
  const photoClass = currentPhotoIndex === 0 
    ? "photo1-subject" 
    : "photo2-subject";

  return (
    <div className="rounded-xl overflow-hidden bg-[#1e1e1e] w-full relative light:bg-white light:text-gray-800">
      <div className="relative">
        <div className="w-full aspect-[4/5] relative overflow-hidden">
          <div 
            className={`${glitchClass} ${photoClass}`}
            style={{
              '--current-photo-url': `url('${currentPhoto}')`
            } as React.CSSProperties}
          >
            <img 
              src={currentPhoto}
              alt="Abid Ahmad"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(30,30,30,0.2)] to-[#1e1e1e] light:from-transparent light:via-[rgba(255,255,255,0.2)] light:to-white z-30"></div>
        </div>
        <div className="absolute bottom-0 w-full text-center pb-4 z-40">
          <h1 className="text-3xl font-bold text-white font-terminal light:text-gray-800 drop-shadow-lg">ABID AHMAD</h1>
          <div className="h-6">
            <p className="text-neon text-sm mt-1 font-mono inline-block light:text-darkgreen drop-shadow-md">
              {displayText}
              <span className="animate-text-blink">|</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-3 gap-4">
        <a href="#" className="w-7 h-7 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-neon hover:text-black transition-all duration-300 light:bg-gray-200 light:text-gray-600 light:hover:bg-darkgreen light:hover:text-white">
          <Twitter size={14} />
        </a>
        <a href="#" className="w-7 h-7 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-neon hover:text-black transition-all duration-300 light:bg-gray-200 light:text-gray-600 light:hover:bg-darkgreen light:hover:text-white">
          <Linkedin size={14} />
        </a>
        <a href="#" className="w-7 h-7 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-neon hover:text-black transition-all duration-300 light:bg-gray-200 light:text-gray-600 light:hover:bg-darkgreen light:hover:text-white">
          <Github size={14} />
        </a>
        <a href="#" className="w-7 h-7 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-neon hover:text-black transition-all duration-300 light:bg-gray-200 light:text-gray-600 light:hover:bg-darkgreen light:hover:text-white">
          <Globe size={14} />
        </a>
        <a href="#" className="w-7 h-7 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-neon hover:text-black transition-all duration-300 light:bg-gray-200 light:text-gray-600 light:hover:bg-darkgreen light:hover:text-white">
          <Mail size={14} />
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;

# HackFolio | Modern Hacker-themed Portfolio 

![HackFolio Banner](public/opengraph-image.png)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5-brightgreen.svg)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-06B6D4.svg)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-10-0055FF.svg)](https://www.framer.com/motion/)

A high-performance, SEO-optimized hacker-themed portfolio  website tailored for for ethical hackers, penetration testers, bug bounty hunters, red teamers, and cyber security professionals. Built with modern web technologies including React, Vite, TypeScript, and TailwindCSS with a distinctive green neon cybersecurity aesthetic.

## ✨ Live Demo

[View Live Demo](https://abidahmad.com) | [Video Walkthrough](https://youtu.be/demo-link)

## 🌟 Features

- **Hacker-Themed UI** - Sleek green neon aesthetic perfect for security professionals
- **Blazing Fast Performance** - Optimized for Core Web Vitals with 98+ Lighthouse scores
- **Dark Mode by Default** - With light mode toggle for user preference
- **Fully Responsive Layout** - Seamless experience across all devices
- **SEO Optimized** - Schema markup, meta tags, sitemap, and robots.txt
- **TypeScript Powered** - Type-safe and robust codebase
- **Advanced Animations** - Smooth transitions with Framer Motion
- **Progressive Web App** - Installable with offline support
- **Performance Monitoring** - Built-in Web Vitals tracking

## 🔧 Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite 5
- **Language**: TypeScript
- **Styling**: TailwindCSS 3
- **UI Components**: Custom design with cybersecurity aesthetic
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router
- **State Management**: React Context API
- **Deployment**: Vercel/Netlify
- **Version Control**: Git/GitHub
- **Package Manager**: npm/yarn



## 📊 Performance Optimization

This portfolio achieves exceptional performance through:

- **Code Splitting** - Intelligent chunk strategy with automatic optimization
- **Vite Build System** - Ultra-fast HMR and optimized production builds
- **Image Optimization** - Responsive images with proper loading attributes
- **CSS Optimization** - Atomic CSS with TailwindCSS
- **Font Optimization** - Preloading and proper font-display settings
- **Lazy Loading** - Components and routes load on demand
- **Bundle Analysis** - Rollup plugin visualizer for size optimization
- **Compression** - gzip compression via vite-plugin-compression2

## 📊 Performance Metrics

| Metric | Score | Status |
|--------|-------|--------|
| Lighthouse Performance | 98/100 | ✅ |
| Lighthouse Accessibility | 100/100 | ✅ |
| Lighthouse Best Practices | 100/100 | ✅ |
| Lighthouse SEO | 100/100 | ✅ |
| First Contentful Paint | 0.8s | ✅ |
| Largest Contentful Paint | 1.2s | ✅ |
| Cumulative Layout Shift | 0.00 | ✅ |
| Time to Interactive | 1.8s | ✅ |


## 🔍 SEO Enhancements

- **Schema.org Markup** - Person schema implementation for improved search visibility
- **Open Graph Tags** - Enhanced social media sharing with custom OG images
- **Twitter Card Support** - Optimized Twitter previews
- **Meta Description** - Keyword-optimized descriptions for better SERP visibility
- **Sitemap.xml** - Complete site mapping for search engines
- **robots.txt** - Proper crawler instructions
- **Canonical URLs** - Prevents duplicate content issues
- **Semantic HTML** - Proper heading hierarchy and structure
- **Keyword Optimization** - Strategic placement of cybersecurity terms

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/HackFolio.git

# Navigate to the directory
cd HackFolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Visit [http://localhost:8080](http://localhost:8080) to view the site.

### Building for Production

```bash
# Build the site
npm run build

# Preview the production build
npm run preview
```

## 🧰 Project Structure

```
HackFolio/
├── public/                # Static assets
│   ├── robots.txt         # Crawler instructions
│   ├── sitemap.xml        # XML sitemap
│   └── uploads/           # Project images
├── src/
│   ├── components/        # Reusable components
│   │   ├── ArticleCard.tsx
│   │   ├── ExperienceCard.tsx
│   │   ├── NavBar.tsx
│   │   └── ProjectCard.tsx
│   ├── hooks/             # Custom React hooks
│   │   ├── use-mobile.tsx
│   │   └── use-theme.tsx
│   ├── lib/               # Utility functions
│   │   ├── utils.ts
│   │   └── web-vitals.ts
│   ├── pages/             # Page components
│   │   ├── About.tsx      # About page
│   │   ├── Blog.tsx       # Blog articles
│   │   ├── Contact.tsx    # Contact form
│   │   ├── Index.tsx      # Homepage
│   │   └── Projects.tsx   # Project showcase
│   └── styles/            # CSS styles
│       ├── base.css       # Base styles
│       ├── components.css # Component styles 
│       └── themes.css     # Theme variables
├── vite.config.ts        # Vite configuration
├── tailwind.config.ts    # TailwindCSS config
└── README-two.md         # Project documentation
```

## ✨ Customization

### Theming

The portfolio uses a Hacker-inspired green neon theme which can be customized in:

```
src/styles/themes.css
```

Key color variables include:
- `--neon`: #00ff00 - Primary neon green accent
- `--darkgreen`: #005418 - Secondary dark green accent
- `--darkbg`: #121212 - Dark mode background
- `--darkcard`: #1a1a1a - Card background in dark mode

### Fonts

The portfolio uses several monospace fonts for the cybersecurity aesthetic:

- **VT323** - Terminal-style heading font
- **Share Tech Mono** - Secondary headings
- **Fira Code** - Code snippets
- **Space Mono** - Body text

## 📱 Progressive Web App

The portfolio functions as a Progressive Web App (PWA) with:

- Installable on home screen
- Offline functionality
- Fast loading on slow networks
- Push notification ready
- Service worker caching

## 🔒 Cybersecurity Focus

This portfolio is specifically designed to showcase cybersecurity expertise:

- Security project presentations
- Vulnerability research highlights
- InfoSec article showcase
- Recognition and acknowledgments from security programs

### Highlighted Security Achievements

- Google Bug Bounty Awards
- NASA Acknowledgement
- United Nations Hall of Fame
- University of Cambridge Acknowledgement
- UK Government (NCSC) Security Acknowledgement
- United States Dept. of Defense Acknowledgement
- Australian Government Dept. of Social Services Hall of Fame
- BBC Hall of Fame

## 🏆 Key Cybersecurity Areas

- Ethical Hacking & Penetration Testing
- Web Application Security
- API Security Assessment
- Network Security Analysis
- AI Security & Privacy Protection
- Mobile Application Security
- Social Engineering Prevention
- Vulnerability Research & Disclosure

## 💻 Cybersecurity Showcase

The portfolio highlights cybersecurity expertise and projects including:

### Featured Projects

- **GPTsSystemPrompts** - Database of leaked ChatGPT custom instructions
- **JSLeakRecon** - JavaScript security scanning tool for credential leaks
- **ShoSubFinder** - Subdomain discovery using Shodan
- **FetchAllSrc** - WAF bypass utility for web resources
- **Affixer** - Text manipulation tool
- **Decod3wizard** - Hash identification and decoding tool

### Blog Articles

- **Critical Security Findings at the University of Cambridge**
- **Hacking Real-world AI Systems: The Art of Prompt Injection Attacks**
- **JSLeakRecon: Detecting Potential Leaks in JavaScript Files**
- **Multiple Vulnerabilities in Symfony Framework Web Applications**

## 🔐 Security Tools Expertise

- Burp Suite Professional
- Metasploit Framework
- Wireshark Network Analyzer
- OWASP ZAP
- Nmap Security Scanner
- SQLmap
- BloodHound
- Hashcat & John the Ripper

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📬 Contact

Abid Ahmad - [hello@abidahmad.com](mailto:hello@abidahmad.com)

Project Link: [https://github.com/0xAb1d/abidfolio](https://github.com/0xAb1d/abidfolio)

---

<p align="center">Built with ❤️ by <a href="https://abidahmad.com">Abid Ahmad</a></p>

<p align="center">Ethical Hacker & Cyber Security Specialist</p>

<p align="center">
  <a href="https://twitter.com/0xAb1d"><img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter"></a>
  <a href="https://linkedin.com/in/abid10"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
  <a href="https://github.com/0xAb1d"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"></a>
</p>
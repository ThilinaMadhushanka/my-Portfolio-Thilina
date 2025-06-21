import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, ChevronDown, Code, Palette, Database, Globe, Award, BookOpen, Languages, GraduationCap, Terminal, Braces, Settings, GitBranch, Figma, Chrome, LayoutDashboard, List, BarChart3, Network } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const languages = [
    { name: 'English', level: 'Fluent', proficiency: 65 },
    { name: 'Sinhala', level: 'Native', proficiency: 100 }
  ];

  const achievements = [
    {
      title: 'Dean\'s List Recognition',
      description: 'Achieved academic excellence with GPA > 2.6 for consecutive semesters',
      year: '2025',
      icon: <Award size={24} />
    },
    {
      title: 'IEEE Xtreme 18.0',
      description: 'Won 1248 place in Global',
      year: '2024',
      icon: <Award size={24} />
    },
    {
      title: 'Mora Xtreme',
      description: '61 place in Mora Xtreme',
      year: '2024',
      icon: <Github size={24} />
    },
    {
      title: 'Yarl Xtreme',
      description: 'First place in Yarl Xtreme',
      year: '2024',
      icon: <Code size={24} />
    }
  ];

  const skillCategories = [
    {
      name: 'Programming Languages',
      icon: <Terminal size={24} />,
      skills: [
        { name: 'Java', icon: <Code size={20} /> },
        { name: 'Python', icon: <Code size={20} /> },
        { name: 'C++', icon: <Code size={20} /> },
        { name: 'SQL', icon: <Code size={20} /> },
        { name: 'JavaScript', icon: <Code size={20} /> },
        { name: 'Go', icon: <Code size={20} /> },
        { name: 'PHP', icon: <Code size={20} /> },
        { name: 'Matlab', icon: <Code size={20} /> },
        { name: 'HTML', icon: <Code size={20} /> },
      ]
    },
    {
      name: 'Frameworks & Libraries',
      icon: <Braces size={24} />, 
      skills: [
        { name: 'Spring Boot', icon: <Braces size={20} /> },
        { name: 'React.js', icon: <Globe size={20} /> },
        { name: 'Node.js', icon: <Braces size={20} /> },
        { name: 'FastAPI', icon: <Braces size={20} /> },
        { name: 'Express.js', icon: <Braces size={20} /> },
        { name: 'Bootstrap', icon: <Palette size={20} /> },
        { name: 'Tailwind CSS', icon: <Palette size={20} /> },
        { name: 'AngularJS', icon: <Braces size={20} /> },
      ]
    },
    {
      name: 'Developer Tools',
      icon: <Settings size={24} />, 
      skills: [
        { name: 'Git', icon: <GitBranch size={20} /> },
        { name: 'Matlab', icon: <Settings size={20} /> },
        { name: 'VS Code', icon: <Settings size={20} /> },
        { name: 'Cursor', icon: <Chrome size={20} /> },
        { name: 'Postman', icon: <Settings size={20} /> },
        { name: 'Intellij', icon: <Settings size={20} /> },
      ]
    },
    {
      name: 'Databases',
      icon: <Database size={24} />,
      skills: [
        { name: 'MySQL', icon: <Database size={20} /> },
        { name: 'MongoDB', icon: <Database size={20} /> },
        { name: 'PostgreSQL', icon: <Database size={20} /> },
      ]
    },
    {
      name: 'Other',
      icon: <List size={24} />, 
      skills: [
        { name: 'Figma', icon: <Figma size={20} /> },
        { name: 'Jira', icon: <List size={20} /> },
        { name: 'Data Structures and Algorithms', icon: <BarChart3 size={20} /> },
        { name: 'OOP', icon: <LayoutDashboard size={20} /> },
        { name: 'RESTful APIs', icon: <Network size={20} /> },
      ]
    }
  ];
  const certifications = [
    {
      title: 'Python Programming',
      issuer: 'UOM',
      year: '2024',
      credentialId: 'yQOCVDT0JS',
      icon: <Code size={24} />
    },
    {
      title: 'Python for Beginners',
      issuer: 'UOM',
      year: '2024',
      credentialId: '7hQTaPwJ1d',
      icon: <Database size={24} />
    },
    {
      title: 'Front-End Web Developer',
      issuer: 'UOM',
      year: '2024',
      credentialId: 'b8MvKD28pm',
      icon: <Globe size={24} />
    },
    {
      title: 'Wen Design for Beginners',
      issuer: 'UOM',
      year: '2024',
      credentialId: 'uYZDfYMBNw',
      icon: <Palette size={24} />
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Engineering',
      institution: 'Faculty Of Engineering, University of Jaffna',
      period: '2022 - Present',
      Results: '2.6/4.0',
      description: 'Specializing in Computer engineering, embedded systems and AI/ML applications. Active member of IEEE student branch.',
      coursework: ['Data Structures & Algorithms', 'Database Systems', 'Computer Networks', 'Embedded Systems', 'Machine Learning', 'Software Engineering'],
      image: 'https://th.bing.com/th/id/OIP.V2r4etsFSTphXamLkOVFlAHaHa?rs=1&pid=ImgDetMain'
    },
    {
      degree: 'Advanced Level (A/L) - Physical Science',
      institution: 'Gankandhura Central College, Pelmadulla',
      period: '2017 - 2020',
      Results: 'ABB',
      description: 'Focused on Mathematics, Physics and Chemistry with distinction in Mathematics.',
      coursework: ['Combined Mathematics', 'Physics', 'Chemistry'],
      image: 'https://gankandacc.schweb.lk/images/Untitled_design_1.jpg'
    },
    {
      degree: 'Ordinary Level (O/L)',
      institution: 'Rambuka National College, Rambuka',
      period: '2006 - 2016',
      Results: 'A-6,B-2,S-1',
      description: 'Focused on Mathematics, Science, Sinhala, Buddhism, History, Commerce, Sinhala Literature, Agriculture And English with distinction in Mathematics, Agriculture, Sinhala Literature, Buddhism, History and Commerce.',
      coursework: ['Mathematics', 'Agriculture', 'Sinhala Literature', 'Buddhism', 'History', 'Commerce', 'Sinhala', 'Science', 'English']
    }
  ];

  const projects = [
    {
      title: 'Bookify - Booking Management System',
      description: 'Full-stack booking platform for lectures, doctors and fitness coaches with React frontend and Spring Boot backend. Features responsive UI, JWT authentication and RESTful API integration.',
      tech: ['React', 'TypeScript', 'Spring Boot', 'MySQL', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      github: 'https://github.com/ThilinaMadhushanka/Bookify',
      live: '#'
    },
    {
      title: 'DriveSafeX - IoT Accident Detection',
      description: 'Smart safety system using ESP32 for real-time accident detection and prevention. Features ultrasonic collision alerts, gyroscope-based detection and Firebase live monitoring.',
      tech: ['ESP32', 'Firebase', 'JavaScript', 'IoT', 'GPS'],
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=300&fit=crop',
      github: 'https://github.com/ThilinaMadhushanka/Accident-Prevention-and-Detection-System',
      live: 'https://www.linkedin.com/feed/update/urn:li:activity:7316695149097467904/'
    },
    {
      title: 'AI-Powered Travel Assistant',
      description: 'Smart multi-agent system for personalized travel planning using CrewAI and LangGraph. Features speech recognition, vector search and natural language interactions.',
      tech: ['Python', 'CrewAI', 'LangChain', 'Streamlit', 'OpenAI'],
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=300&fit=crop',
      github: 'https://github.com/ThilinaMadhushanka/AI-Travel-Assistant',
      live: '#'
    },
    {
      title: 'Real-Time Video Chat App',
      description: 'Peer-to-peer video chat platform with screen sharing, text chat and room-based communication using WebRTC and Socket.IO for real-time interaction.',
      tech: ['Node.js', 'WebRTC', 'Socket.IO', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop',
      github: 'https://github.com/ThilinaMadhushanka/Real-Time-Video-Conferencing-Application-using-WebRTC',
      live: 'https://www.linkedin.com/feed/update/urn:li:activity:7323992113426137088/'
    },
    {
      title: 'FootballApp - Management System',
      description: 'Full-stack football service management platform with responsive React + TypeScript frontend and Go-powered backend delivering secure RESTful APIs.',
      tech: ['React', 'TypeScript', 'Go', 'PostgreSQL', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=500&h=300&fit=crop',
      github: 'https://github.com/ThilinaMadhushanka/FootBall-App',
      live: '#'
    },
    {
      title: 'Blockchain IoT Security System',
      description: 'Lightweight blockchain-integrated security system for IoT devices using ECDSA, AES-128 and simplified PoS consensus for secure, scalable communication.',
      tech: ['Python', 'Blockchain', 'ECDSA', 'AES-128', 'NS3'],
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=300&fit=crop',
      github: '#',
      live: '#'
    },
    {
      title: 'SummarizeMyText - AI Text Summarization',
      description: 'Offline text summarization web application using Flask and Hugging Face Transformers. Converts long text into concise summaries without requiring paid API keys or internet connection.',
      tech: ['Python', 'Flask', 'Hugging Face', 'BART', 'HTML/CSS'],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop',
      github: 'https://github.com/ThilinaMadhushanka/LLM_AI-Summary',
      live: '#'
    },
    {
      title: 'Deep Learning Image Classification',
      description: 'Custom neural network implementation for image classification built from scratch using NumPy. Features forward/backward propagation, SGD with momentum, dropout regularization and comprehensive performance visualization.',
      tech: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn'],
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop',
      github: 'https://github.com/ThilinaMadhushanka/Deep_learning_project',
      live: 'https://www.linkedin.com/feed/update/urn:li:activity:7322572128115904512/'
    }
  ];



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Portfolio
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 text-sm">
              {['home', 'about', 'education', 'skills', 'languages', 'achievements', 'certifications', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize hover:text-purple-400 transition-colors ${
                    activeSection === item ? 'text-purple-400' : 'text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/30 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'education', 'skills', 'languages', 'achievements', 'certifications', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block px-3 py-2 text-base font-medium hover:text-purple-400 capitalize w-full text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></div>
        <div className="text-center z-10 px-4">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-4xl font-bold mb-6 animate-bounce">
            <img src="https://avatars.githubusercontent.com/u/160057651?s=400&u=e1b4801ac5677f9cd2a9d8eb6a7b5a011e8f6adf&v=4" alt="Thilina Madhushanka" className="w-full h-full object-cover rounded-full" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-fade-in">
            Thilina Madhushanka
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Computer Engineering Student passionate about turning innovative ideas into practical solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 font-semibold"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-purple-400 text-purple-400 rounded-full hover:bg-purple-400 hover:text-white transition-all font-semibold"
            >
              Get In Touch
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-purple-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`transform transition-all duration-1000 ${isVisible.about ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10 flex items-center justify-center text-8xl">
                <img src="https://scontent.fcmb11-2.fna.fbcdn.net/v/t39.30808-6/376728350_1292994751351301_1136127884073783092_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEbz6rwW3uV58SdfJDX_S8FhmBYd-PPtf6GYFh348-1_nm6KIrJ24W8CCgqzto0R9DOa2AsIzyv1dMcqJQfL4lo&_nc_ohc=GD83KqrzYGMQ7kNvwHgolmX&_nc_oc=AdnQomvxl-49Wq2chOXeDcnqg7jH-p2wkcmO9txXP63RiPNA3T-gbjv5YOsT2JLt37djYghv7uRMuurnqIiyYddr&_nc_zt=23&_nc_ht=scontent.fcmb11-2.fna&_nc_gid=_2PNeS4xDf7IZT0WD2T68A&oh=00_AfPsBtEXJgxVPFwAlMj7efBfwTH4aSBZ3b5ziCWorW04iQ&oe=685CC5FA" alt="Thilina Madhushanka" className="w-full h-full object-cover rounded-2xl" />
              </div>
            </div>
            <div className={`transform transition-all duration-1000 delay-300 ${isVisible.about ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <h3 className="text-2xl font-bold mb-6 text-purple-400">Hi, I'm Thilina!</h3>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                I'm a passionate full-stack developer and Computer Engineering undergraduate with a strong foundation in both software and hardware systems. With hands-on experience in building scalable, real-time and intelligent applications, I thrive on solving real-world problems through strategic thinking and efficient coding.
              </p>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Whether it's crafting responsive UIs, engineering IoT systems or exploring AI-powered solutions, I love creating meaningful tech that drives positive change. Outside of coding, you'll often find me diving into emerging technologies, working on research-driven projects or contributing to the open-source community.
              </p>
              <div className="flex space-x-4">
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-4 rounded-lg border border-white/10">
                  <div className="text-2xl font-bold text-purple-400">20+</div>
                  <div className="text-sm text-gray-400">Projects Completed</div>
                </div>
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-4 rounded-lg border border-white/10">
                  <div className="text-2xl font-bold text-purple-400">2 years</div>
                  <div className="text-sm text-gray-400">Project Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={edu.degree}
                className={`transform transition-all duration-1000 delay-${index * 200} ${
                  isVisible.education ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                }`}
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className={index % 2 === 0 ? 'order-1' : 'order-2'}>
                    <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10 p-8 rounded-2xl">
                      <div className="flex items-center mb-4">
                        <GraduationCap className="text-purple-400 mr-3" size={28} />
                        <h3 className="text-xl font-bold text-purple-400">{edu.degree}</h3>
                      </div>
                      <p className="text-lg font-semibold mb-2">{edu.institution}</p>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-400">{edu.period}</span>
                        <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                          {edu.Results}
                        </span>
                      </div>
                      <p className="text-gray-300 mb-4 leading-relaxed">{edu.description}</p>
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-purple-400">Key Coursework:</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course) => (
                            <span
                              key={course}
                              className="px-2 py-1 bg-purple-500/10 text-purple-300 rounded text-xs border border-purple-500/20"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={index % 2 === 0 ? 'order-2' : 'order-1'}>
                    {edu.institution === 'Rambuka National College, Rambuka' ? (
                      <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                        <BookOpen size={80} className="text-purple-400/50" />
                      </div>
                    ) : (
                      <div className="w-full h-80 rounded-2xl overflow-hidden border border-white/10">
                        <img 
                          src={edu.image} 
                          alt={edu.institution}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, catIdx) => (
              <div key={category.name} className={`transform transition-all duration-700 delay-${catIdx * 100} ${isVisible.skills ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-xl border border-white/10 backdrop-blur-sm hover:from-purple-500/20 hover:to-pink-500/20 transition-all mb-6">
                  <div className="flex items-center mb-4">
                    <div className="text-purple-400 mr-3">{category.icon}</div>
                    <h3 className="text-xl font-bold">{category.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="flex items-center bg-black/20 px-3 py-2 rounded-lg border border-white/10 mb-2 mr-2">
                        <span className="text-purple-400 mr-2">{skill.icon}</span>
                        <span className="text-sm font-medium text-white">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section id="languages" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Languages
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`transform transition-all duration-1000 ${isVisible.languages ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                <Languages size={80} className="text-purple-400/70" />
              </div>
            </div>
            <div className={`transform transition-all duration-1000 delay-300 ${isVisible.languages ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <h3 className="text-2xl font-bold mb-6 text-purple-400">Language Proficiency</h3>
              <div className="space-y-6">
                {languages.map((language) => (
                  <div key={language.name} className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-4 rounded-xl border border-white/10">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-lg font-semibold">{language.name}</h4>
                      <span className="text-purple-400 font-medium">{language.level}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: isVisible.languages ? `${language.proficiency}%` : '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Achievements
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className={`transform transition-all duration-700 delay-${index * 200} ${
                  isVisible.achievements ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6 rounded-xl border border-white/10 backdrop-blur-sm hover:from-purple-500/20 hover:to-pink-500/20 transition-all group">
                  <div className="flex items-start space-x-4">
                    <div className="text-purple-400 group-hover:scale-110 transition-transform">
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-purple-400">{achievement.title}</h3>
                        <span className="text-sm text-gray-400 bg-purple-500/20 px-2 py-1 rounded">{achievement.year}</span>
                      </div>
                      <p className="text-gray-300 leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={cert.title}
                className={`transform transition-all duration-700 delay-${index * 200} ${
                  isVisible.certifications ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6 rounded-xl border border-white/10 backdrop-blur-sm hover:from-purple-500/20 hover:to-pink-500/20 transition-all group">
                  <div className="flex items-start space-x-4">
                    <div className="text-purple-400 group-hover:scale-110 transition-transform">
                      {cert.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-purple-400">{cert.title}</h3>
                        <span className="text-sm text-gray-400 bg-purple-500/20 px-2 py-1 rounded">{cert.year}</span>
                      </div>
                      <p className="text-gray-300 mb-2">{cert.issuer}</p>
                      <p className="text-sm text-gray-400">Credential ID: {cert.credentialId}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`transform transition-all duration-700 delay-${index * 200} ${
                  isVisible.projects ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl overflow-hidden border border-white/10 backdrop-blur-sm hover:from-purple-500/20 hover:to-pink-500/20 transition-all group">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-purple-400">{project.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs border border-purple-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors"
                      >
                        <Github size={16} />
                        <span className="text-sm">Code</span>
                      </a>
                      <a
                        href={project.live}
                        className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors"
                      >
                        <ExternalLink size={16} />
                        <span className="text-sm">Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Connect & Collaborate
          </h2>
          <p className="text-xl text-gray-300 mb-4 max-w-2xl mx-auto">
            Computer Engineering Student at University of Jaffna
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Interested in collaborating on innovative projects? Let's connect and create impactful solutions together!
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a
              href="mailto:thilinamadhushanka378@gmail.com"
              className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8 rounded-xl border border-white/10 hover:from-purple-500/20 hover:to-pink-500/20 transition-all group"
            >
              <Mail size={40} className="mx-auto mb-4 text-purple-400 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-400">thilinamadhushanka378@gmail.com</p>
            </a>
            
            <a
              href="https://www.linkedin.com/in/thilina-madhushanka-t0616"
              className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8 rounded-xl border border-white/10 hover:from-purple-500/20 hover:to-pink-500/20 transition-all group"
            >
              <Linkedin size={40} className="mx-auto mb-4 text-purple-400 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-400">Connect with me</p>
            </a>
            
            <a
              href="https://github.com/ThilinaMadhushanka"
              className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8 rounded-xl border border-white/10 hover:from-purple-500/20 hover:to-pink-500/20 transition-all group"
            >
              <Github size={40} className="mx-auto mb-4 text-purple-400 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold mb-2">GitHub</h3>
              <p className="text-gray-400">View my projects</p>
            </a>
          </div>

          <button className="px-12 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 font-semibold text-lg">
            Start a Conversation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Thilina Madhushanka. Built with React and ❤️
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
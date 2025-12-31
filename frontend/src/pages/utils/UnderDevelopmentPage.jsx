import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Code2, 
  Wrench, 
  Clock, 
  Rocket, 
  Zap, 
  Mail,
  Github,
  Twitter,
  Linkedin,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
  Users
} from "lucide-react";

export default function UnderDevelopmentPage() {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);
  
  const features = [
    {
      title: "Real-time Code Collaboration",
      description: "Work on code together with built-in editor and version control",
      icon: <Terminal className="w-6 h-6" />,
      progress: 85
    },
    {
      title: "Advanced Developer Profiles",
      description: "AI-powered skill analysis and portfolio optimization",
      icon: <Users className="w-6 h-6" />,
      progress: 70
    },
    {
      title: "Smart Job Matching",
      description: "Intelligent matching based on actual code contributions",
      icon: <Sparkles className="w-6 h-6" />,
      progress: 60
    },
    {
      title: "Enterprise Analytics",
      description: "Team performance insights and hiring analytics",
      icon: <Layers className="w-6 h-6" />,
      progress: 45
    },
    {
      title: "Mobile Applications",
      description: "Native iOS and Android apps for on-the-go access",
      icon: <Cpu className="w-6 h-6" />,
      progress: 30
    }
  ];

  const timeline = [
    {
      quarter: "Q1 2024",
      items: ["MVP Launch", "Core Features", "Beta Testing"]
    },
    {
      quarter: "Q2 2024",
      items: ["AI Integration", "Mobile Apps", "API v2"]
    },
    {
      quarter: "Q3 2024",
      items: ["Enterprise Features", "Advanced Analytics", "Marketplace"]
    },
    {
      quarter: "Q4 2024",
      items: ["Global Expansion", "Partner Integrations", "Scale Infrastructure"]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 100);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-3">
              <div className="h-9 w-9 bg-gray-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="text-xl font-bold text-gray-900">CODEN</span>
            </Link>
            
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="text-gray-600 hover:text-gray-900 text-sm font-medium"
              >
                Home
              </Link>
              <a
                href="#updates"
                className="text-gray-600 hover:text-gray-900 text-sm font-medium"
              >
                Updates
              </a>
              <a
                href="#contact"
                className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800"
              >
                Get Notified
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-8 animate-pulse">
            <Rocket className="w-4 h-4 mr-2" />
            Under Active Development
          </div>
          
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Building the Future of
            <span className="block text-blue-600">Developer Networks</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            We're hard at work creating something amazing for the developer community. 
            CODEN will revolutionize how developers connect, collaborate, and grow.
          </p>

          {/* Animated Progress Bar */}
          <div className="max-w-md mx-auto mb-10">
            <div className="flex justify-between text-sm text-gray-500 mb-2">
              <span>Building in progress</span>
              <span>{progress}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Live Features Preview */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-gray-200">
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Wrench className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Currently Building:
            </h3>
            
            <div className="h-40 relative">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentFeature ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      {feature.icon}
                    </div>
                    <div className="text-left">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 mb-4">
                        {feature.description}
                      </p>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${feature.progress}%` }}
                        />
                      </div>
                      <div className="text-right text-sm text-gray-500 mt-1">
                        {feature.progress}% complete
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-6 space-x-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentFeature(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentFeature ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">
              Be the First to Know
            </h2>
            <p className="mb-6 text-blue-100">
              Get early access, exclusive updates, and beta invitations
            </p>
            
            <form className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Notify Me
                </button>
              </div>
              <p className="text-sm text-blue-200 mt-3">
                We respect your privacy. No spam, ever.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Development Timeline */}
      <div id="updates" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Development Timeline
            </h2>
            <p className="text-gray-600">
              Our roadmap for building the ultimate developer platform
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />
            
            <div className="space-y-16">
              {timeline.map((item, index) => (
                <div
                  key={item.quarter}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-3">
                        <Clock className="w-4 h-4 mr-1" />
                        {item.quarter}
                      </div>
                      <ul className="space-y-2">
                        {item.items.map((listItem) => (
                          <li key={listItem} className="flex items-center">
                            <Zap className="w-4 h-4 text-green-500 mr-2" />
                            <span className="text-gray-700">{listItem}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <div className="h-8 w-8 bg-white border-4 border-blue-500 rounded-full flex items-center justify-center">
                      <div className="h-3 w-3 bg-blue-500 rounded-full animate-ping" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Current Status */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              What's Currently Available
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-green-600 flex items-center">
                  <div className="h-2 w-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                  Available Now
                </h3>
                <ul className="space-y-3">
                  {[
                    "Developer Registration & Profiles",
                    "Basic Project Showcase",
                    "Community Feed",
                    "Job Board (Beta)",
                    "Developer Search",
                    "Basic Messaging"
                  ].map((item) => (
                    <li key={item} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-blue-600 flex items-center">
                  <div className="h-2 w-2 bg-blue-500 rounded-full mr-2 animate-pulse" />
                  Coming Soon
                </h3>
                <ul className="space-y-3">
                  {[
                    "Real-time Code Collaboration",
                    "AI Skill Assessment",
                    "Advanced Analytics",
                    "Mobile Applications",
                    "Enterprise Features",
                    "API Marketplace"
                  ].map((item) => (
                    <li key={item} className="flex items-center">
                      <Clock className="w-5 h-5 text-blue-500 mr-3" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Want to Contribute?
          </h2>
          
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            We're looking for passionate developers, designers, and community builders 
            to help shape CODEN. Join our journey!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://github.com/yossefelnggar/CODEN-"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
            >
              <Github className="w-5 h-5 mr-2" />
              Star on GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/yossef-elnggar-8a1771366/"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Team
            </a>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://www.linkedin.com/in/yossef-elnggar-8a1771366/" className="text-gray-400 hover:text-white">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="https://github.com/yossefelnggar/CODEN-" className="text-gray-400 hover:text-white">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/yossef-elnggar-8a1771366/" className="text-gray-400 hover:text-white">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
          
          <div className="text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} CODEN. All rights reserved.</p>
            <p className="mt-2">Building the future of developer networks</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CheckCircle(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clipRule="evenodd"
      />
    </svg>
  );
}
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  Code2, 
  Users, 
  Rocket, 
  GitBranch, 
  Shield, 
  TrendingUp,
  ChevronRight,
  Star,
  Globe,
  Terminal,
  Cpu,
  Zap,
  CheckCircle,
  ArrowRight,
  Menu,
  X
} from "lucide-react";

export default function LandingPage() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = [
    { number: "10K+", label: "Active Developers" },
    { number: "50K+", label: "Projects Shared" },
    { number: "500+", label: "Companies Hiring" },
    { number: "95%", label: "Satisfaction Rate" }
  ];

  const features = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Code-First Profiles",
      description: "Showcase your real projects, contributions, and tech stack.",
      color: "text-blue-600 bg-blue-50"
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: "Collaborative Projects",
      description: "Find and work on open-source projects with other developers.",
      color: "text-green-600 bg-green-50"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Developer Network",
      description: "Connect with engineers by skills, not just job titles.",
      color: "text-purple-600 bg-purple-50"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Career Growth",
      description: "Discover opportunities matched to your skills and interests.",
      color: "text-orange-600 bg-orange-50"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Private",
      description: "Your code and data are protected with enterprise-grade security.",
      color: "text-red-600 bg-red-50"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Community",
      description: "Connect with developers worldwide in real-time.",
      color: "text-indigo-600 bg-indigo-50"
    }
  ];

  const testimonials = [
    {
      name: "Alex Chen",
      role: "Senior Engineer @ Google",
      content: "CODEN transformed how I find collaborators. The code-first approach ensures I'm working with competent developers.",
      avatar: "AC"
    },
    {
      name: "Sarah Johnson",
      role: "Open Source Maintainer",
      content: "Found three amazing contributors for my project in a week. The quality of developers here is unparalleled.",
      avatar: "SJ"
    },
    {
      name: "Michael Rodriguez",
      role: "CTO @ Startup",
      content: "Hired two senior engineers through CODEN. Their profiles showed real work, not just buzzwords.",
      avatar: "MR"
    }
  ];

  const techStack = [
    "React", "Next.js", "Node.js", "Python", "Go", "Rust", 
    "TypeScript", "Django", "PostgreSQL", "Docker", "AWS", "Kubernetes"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm" : "bg-white"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3">
                <div className="h-9 w-9 bg-gray-900 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">C</span>
                </div>
                <span className="text-xl font-bold text-gray-900">CODEN</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/features" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                Features
              </Link>
              <Link to="/developers" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                For Developers
              </Link>
              <Link to="/companies" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                For Companies
              </Link>
              <Link to="/pricing" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                Pricing
              </Link>
              <Link to="/blog" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                Blog
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/login"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                Sign in
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/features" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">
                Features
              </Link>
              <Link to="/developers" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">
                For Developers
              </Link>
              <Link to="/companies" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">
                For Companies
              </Link>
              <Link to="/pricing" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">
                Pricing
              </Link>
              <Link to="/blog" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">
                Blog
              </Link>
              <div className="px-3 py-2 space-y-2">
                <Link
                  to="/login"
                  className="block w-full text-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  Sign in
                </Link>
                <Link
                  to="/register"
                  className="block w-full text-center px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-8">
            <Rocket className="w-4 h-4 mr-2" />
            Now in Beta • Join 10,000+ developers
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight">
            Where <span className="text-blue-600">Developers</span>
            <br />
            Build <span className="relative">
              Together
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-blue-300" viewBox="0 0 200 10">
                <path d="M0,5 Q50,0 100,5 T200,5" stroke="currentColor" fill="none" strokeWidth="3" />
              </svg>
            </span>
          </h1>
          
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            CODEN is the professional network where code is your identity. 
            Showcase real projects, find collaborators, and grow your career 
            in a community built by developers, for developers.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 transition-colors"
            >
              Start Building Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-gray-900 bg-white border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              <Terminal className="mr-2 w-5 h-5" />
              View Demo
            </Link>
          </div>

          {/* Tech Stack */}
          <div className="mt-16">
            <p className="text-sm text-gray-500 mb-4">Trusted by developers using</p>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold">{stat.number}</div>
                <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Built for Developer Success
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Everything you need to grow your career and build amazing things
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div className={`inline-flex p-3 rounded-lg ${feature.color}`}>
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Loved by Developers Worldwide
            </h2>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white p-6 rounded-xl border border-gray-200"
              >
                <div className="flex items-center">
                  <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">{testimonial.avatar}</span>
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
                <p className="mt-4 text-gray-600 italic">"{testimonial.content}"</p>
                <div className="mt-4 flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-white">
            Ready to Level Up Your Developer Journey?
          </h2>
          <p className="mt-4 text-blue-100">
            Join thousands of developers building the future together
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors"
            >
              Create Free Account
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white border border-white hover:bg-white/10 transition-colors"
            >
              View Plans
            </Link>
          </div>
          
          <p className="mt-6 text-sm text-blue-200">
            No credit card required • Free forever plan available
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-gray-900 font-bold text-xl">C</span>
                </div>
                <span className="text-xl font-bold">CODEN</span>
              </div>
              <p className="mt-4 text-gray-400 text-sm">
                The developer network where code is identity.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/features" className="hover:text-white">Features</Link></li>
                <li><Link to="/pricing" className="hover:text-white">Pricing</Link></li>
                <li><Link to="/api" className="hover:text-white">API</Link></li>
                <li><Link to="/documentation" className="hover:text-white">Documentation</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-white">About</Link></li>
                <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
                <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
                <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/privacy" className="hover:text-white">Privacy</Link></li>
                <li><Link to="/terms" className="hover:text-white">Terms</Link></li>
                <li><Link to="/security" className="hover:text-white">Security</Link></li>
                <li><Link to="/cookies" className="hover:text-white">Cookies</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} CODEN. All rights reserved.</p>
            <p className="mt-2">Built for developers, by developers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
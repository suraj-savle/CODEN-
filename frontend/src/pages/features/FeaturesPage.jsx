// pages/FeaturesPage.jsx
import { 
  Code2, 
  GitBranch, 
  Users, 
  TrendingUp, 
  Shield, 
  Globe,
  Zap,
  Cpu,
  Terminal,
  GitPullRequest,
  Layers,
  Workflow,
  Target,
  Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";

export default function FeaturesPage() {
  const featureCategories = [
    {
      title: "Developer Profiles",
      description: "Showcase your skills through real work",
      icon: <Code2 className="w-6 h-6" />,
      features: [
        {
          title: "Code Portfolio",
          description: "Display your actual projects, contributions, and repositories.",
          icon: <Terminal className="w-5 h-5" />
        },
        {
          title: "Skill Verification",
          description: "Skills are validated through actual code contributions.",
          icon: <Target className="w-5 h-5" />
        },
        {
          title: "Tech Stack Analysis",
          description: "Automatic analysis of your preferred technologies.",
          icon: <Layers className="w-5 h-5" />
        }
      ]
    },
    {
      title: "Collaboration",
      description: "Build amazing things together",
      icon: <GitBranch className="w-6 h-6" />,
      features: [
        {
          title: "Project Discovery",
          description: "Find open-source projects matching your skills and interests.",
          icon: <Sparkles className="w-5 h-5" />
        },
        {
          title: "Real-time Collaboration",
          description: "Work together with built-in code review tools.",
          icon: <Workflow className="w-5 h-5" />
        },
        {
          title: "Team Formation",
          description: "Form teams for hackathons and side projects.",
          icon: <Users className="w-5 h-5" />
        }
      ]
    },
    {
      title: "Career Growth",
      description: "Advance your developer journey",
      icon: <TrendingUp className="w-6 h-6" />,
      features: [
        {
          title: "Smart Job Matching",
          description: "Get matched with opportunities based on your actual skills.",
          icon: <Target className="w-5 h-5" />
        },
        {
          title: "Skill Development",
          description: "Track your learning progress and skill growth.",
          icon: <Zap className="w-5 h-5" />
        },
        {
          title: "Mentorship Network",
          description: "Connect with experienced developers for guidance.",
          icon: <Users className="w-5 h-5" />
        }
      ]
    },
    {
      title: "Enterprise",
      description: "For companies and teams",
      icon: <Cpu className="w-6 h-6" />,
      features: [
        {
          title: "Talent Discovery",
          description: "Find developers based on actual code contributions.",
          icon: <Sparkles className="w-5 h-5" />
        },
        {
          title: "Team Analytics",
          description: "Understand your team's skills and growth areas.",
          icon: <Layers className="w-5 h-5" />
        },
        {
          title: "Enterprise Security",
          description: "SAML SSO, audit logs, and compliance features.",
          icon: <Shield className="w-5 h-5" />
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Everything developers need
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Powerful Features for Modern Developers
          </h1>
          
          <p className="mt-6 text-xl text-gray-600">
            CODEN provides everything you need to showcase your skills, 
            collaborate with peers, and advance your career—all in one platform.
          </p>
          
          <div className="mt-8 flex justify-center gap-4">
            <Link
              to="/register"
              className="px-6 py-3 bg-gray-900 text-white font-medium rounded-md hover:bg-gray-800 transition-colors"
            >
              Start Free
            </Link>
            <Link
              to="/demo"
              className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {featureCategories.map((category) => (
              <div key={category.title} className="space-y-8">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                    {category.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {category.features.map((feature) => (
                    <div
                      key={feature.title}
                      className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-gray-50 text-gray-600 rounded-lg">
                          {feature.icon}
                        </div>
                        <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                      </div>
                      <p className="mt-3 text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Why Choose CODEN?
            </h2>
            <p className="mt-4 text-gray-600">
              See how we compare to traditional platforms
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-4 px-6 text-left text-sm font-semibold text-gray-900">Feature</th>
                  <th className="py-4 px-6 text-center text-sm font-semibold text-gray-900">Traditional Networks</th>
                  <th className="py-4 px-6 text-center text-sm font-semibold text-gray-900 bg-blue-50 text-blue-700">CODEN</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Skill Verification", "Self-reported", "Code-verified"],
                  ["Project Showcase", "Links only", "Integrated code display"],
                  ["Job Matching", "Keyword-based", "Skill-based"],
                  ["Collaboration", "Limited", "Built-in tools"],
                  ["Privacy Control", "Basic", "Granular"],
                  ["API Access", "Limited", "Full REST API"],
                ].map(([feature, traditional, coden], index) => (
                  <tr key={feature} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="py-4 px-6 text-sm font-medium text-gray-900">{feature}</td>
                    <td className="py-4 px-6 text-center text-sm text-gray-600">{traditional}</td>
                    <td className="py-4 px-6 text-center text-sm font-medium text-blue-600 bg-blue-50">{coden}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Ready to experience the difference?
          </h2>
          <p className="mt-4 text-gray-600">
            Join thousands of developers who've transformed their careers with CODEN
          </p>
          
          <div className="mt-8">
            <Link
              to="/register"
              className="inline-flex items-center px-8 py-3 bg-gray-900 text-white font-medium rounded-md hover:bg-gray-800 transition-colors"
            >
              Get Started Free
              <Zap className="ml-2 w-5 h-5" />
            </Link>
          </div>
          
          <p className="mt-6 text-sm text-gray-500">
            No setup required • Start building in minutes
          </p>
        </div>
      </div>
    </div>
  );
}
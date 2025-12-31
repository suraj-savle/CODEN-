// pages/PricingPage.jsx
import { Link } from "react-router-dom";
import { Check, X, HelpCircle, Zap, Users, Building } from "lucide-react";

export default function PricingPage() {
  const plans = [
    {
      name: "Developer",
      description: "For individual developers",
      price: "Free",
      period: "forever",
      features: [
        "Code portfolio",
        "Basic profile",
        "Project sharing",
        "Community access",
        "Basic job matching",
        "Email support"
      ],
      notIncluded: [
        "Advanced analytics",
        "Team collaboration",
        "Priority support",
        "Custom domains"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Pro",
      description: "For serious developers & freelancers",
      price: "$29",
      period: "per month",
      features: [
        "Everything in Developer",
        "Advanced analytics",
        "Collaboration tools",
        "Priority job matching",
        "Resume builder",
        "Priority support",
        "API access",
        "Custom portfolio"
      ],
      notIncluded: [
        "Team management",
        "Enterprise SSO",
        "Advanced security"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Team",
      description: "For engineering teams",
      price: "$99",
      period: "per month",
      features: [
        "Everything in Pro",
        "Team workspaces",
        "Collaboration analytics",
        "Admin dashboard",
        "Team hiring tools",
        "SSO integration",
        "Advanced security",
        "Dedicated support"
      ],
      notIncluded: [
        "Custom contracts",
        "On-premise deployment"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const enterpriseFeatures = [
    "Custom pricing",
    "On-premise deployment",
    "Custom integrations",
    "Dedicated account manager",
    "SLA guarantee",
    "Advanced security compliance",
    "Custom training",
    "White-label options"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Simple, Transparent Pricing
          </h1>
          
          <p className="mt-6 text-xl text-gray-600">
            Choose the plan that fits your development journey. 
            All plans include our core features.
          </p>
          
          <div className="mt-6 inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm">
            <Zap className="w-4 h-4 mr-2" />
            All plans include free updates and community access
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-white rounded-2xl border-2 ${
                  plan.popular 
                    ? 'border-blue-500 shadow-xl transform scale-105' 
                    : 'border-gray-200'
                } p-8`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                  <p className="mt-2 text-gray-600">{plan.description}</p>
                  
                  <div className="mt-6">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    {plan.period && (
                      <span className="text-gray-600 ml-2">/{plan.period}</span>
                    )}
                  </div>
                </div>
                
                <div className="mt-8 space-y-4">
                  <h4 className="font-semibold text-gray-900">What's included:</h4>
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                  
                  {plan.notIncluded && (
                    <>
                      <h4 className="font-semibold text-gray-900 mt-6">Not included:</h4>
                      {plan.notIncluded.map((feature) => (
                        <div key={feature} className="flex items-center text-gray-400">
                          <X className="w-5 h-5 mr-3" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </>
                  )}
                </div>
                
                <div className="mt-8">
                  <Link
                    to={plan.name === "Team" ? "/contact" : "/register"}
                    className={`block w-full text-center py-3 px-4 rounded-md font-medium ${
                      plan.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    } transition-colors`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enterprise Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 md:p-12">
            <div className="flex items-center space-x-3">
              <Building className="w-8 h-8 text-gray-900" />
              <h2 className="text-2xl font-bold text-gray-900">Enterprise</h2>
            </div>
            
            <p className="mt-4 text-gray-600">
              For organizations needing custom solutions, security, and scale.
            </p>
            
            <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {enterpriseFeatures.map((feature) => (
                <div key={feature} className="flex items-center">
                  <Check className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 border-2 border-gray-900 text-gray-900 font-medium rounded-md hover:bg-gray-900 hover:text-white transition-colors"
              >
                Contact Enterprise Sales
                <Users className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            {[
              {
                q: "Can I switch plans later?",
                a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately."
              },
              {
                q: "Is there a free trial?",
                a: "Yes, all paid plans come with a 14-day free trial. No credit card required."
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards, PayPal, and bank transfers for annual plans."
              },
              {
                q: "Do you offer discounts for students or nonprofits?",
                a: "Yes, we offer 50% discounts for verified students and nonprofit organizations."
              },
              {
                q: "Can I cancel anytime?",
                a: "Absolutely. You can cancel your subscription at any time, and you'll retain access until the end of your billing period."
              }
            ].map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <div className="flex items-start">
                  <HelpCircle className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{faq.q}</h3>
                    <p className="mt-2 text-gray-600">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Start Building Today
          </h2>
          <p className="mt-4 text-gray-300">
            Join thousands of developers who trust CODEN with their professional journey
          </p>
          
          <div className="mt-8">
            <Link
              to="/register"
              className="inline-flex items-center px-8 py-3 bg-white text-gray-900 font-medium rounded-md hover:bg-gray-100 transition-colors"
            >
              Get Started Free
              <Zap className="ml-2 w-5 h-5" />
            </Link>
          </div>
          
          <p className="mt-6 text-sm text-gray-400">
            No credit card required • Cancel anytime • 14-day free trial on paid plans
          </p>
        </div>
      </div>
    </div>
  );
}
import React, { useEffect, useState } from 'react';
import { 
  TrendingUp, 
  Shield, 
  Zap, 
  Users, 
  Clock,
  Mail,
  ChevronDown,
  BarChart3,
  Lock,
  Rocket,
  Code,
  Monitor,
  Coins,
  Brain,
  ShieldCheck,
  Award,
  Gem,
  CheckCircle,
  SlidersHorizontal
} from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  
  useEffect(() => {
    const observers = new Map();
    
    const createObserver = (elementId: string) => {
      const element = document.getElementById(elementId);
      if (!element) return;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [elementId]: true }));
          }
        },
        { threshold: 0.1, rootMargin: '50px' }
      );
      
      observer.observe(element);
      observers.set(elementId, observer);
    };
    
    // Create observers for each section
    ['hero', 'demo', 'features', 'social-proof', 'success-stories', 'starter-pricing', 'pricing', 'contact'].forEach(createObserver);
    
    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your interest! We\'ll be in touch within 24 hours.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50 z-50">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
            Bet Futures
          </div>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 px-4 py-1.5 rounded-lg font-semibold hover:from-amber-400 hover:to-yellow-400 transform hover:scale-105 transition-all duration-200"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5">
            <svg viewBox="0 0 1000 1000" className="w-full h-full">
              <path d="M100,500 Q300,100 500,500 T900,500" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3"/>
              <path d="M100,600 Q400,200 700,600 T900,400" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.2"/>
            </svg>
          </div>
        </div>
        
        <div className={`relative max-w-6xl mx-auto px-6 text-center transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            The High-Leverage Trading Platform
            <span className="block bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent">
              Trusted by the Biggest
            </span>
            <span className="block text-emerald-400">Online Casinos</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
            Rollbit, Owl Games, Solcasino — they've done it. Now you can too.
          </p>
          
          <button
            onClick={() => scrollToSection('demo')}
            className="group bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 px-10 py-4 rounded-xl text-xl font-bold hover:from-amber-400 hover:to-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-amber-500/25"
          >
            Book a Demo
            <ChevronDown className="inline-block ml-2 w-6 h-6 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className={`max-w-6xl mx-auto px-6 transition-all duration-1000 ${isVisible.demo ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Platform <span className="text-amber-400">Demo</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Experience the power of professional-grade crypto trading designed specifically for high-volume casino operations.
            </p>
          </div>
          
          <div className="relative bg-gradient-to-br from-slate-800 to-slate-700 rounded-3xl p-8 border border-slate-600 shadow-2xl">
            <div className="aspect-video bg-slate-900 rounded-2xl flex items-center justify-center border border-slate-600">
              <div className="text-center">
                <BarChart3 className="w-20 h-20 text-amber-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-amber-400 mb-2">Platform Demo Coming Soon</h3>
                <p className="text-slate-400">Interactive trading interface preview</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mt-8">
              {[
                { icon: Users, title: "Built for Crypto Casinos", desc: "Tailored for high-frequency gambling operations" },
                { icon: TrendingUp, title: "Extreme Leverage", desc: "Maximize profits with advanced leverage options" },
                { icon: Shield, title: "Real-time Risk Management", desc: "AI-powered risk assessment and mitigation" },
                { icon: Zap, title: "Fast Execution Speeds", desc: "Millisecond trade execution for optimal performance" },
                { icon: Rocket, title: "Scalable Platform", desc: "Handle millions of transactions seamlessly" },
                { icon: SlidersHorizontal, title: "Adjustable RTP", desc: "Fine-tune game payouts for optimal player engagement and house edge" }
              ].map((feature, index) => (
                <div key={index} className="text-center">
                  <feature.icon className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                  <h4 className="font-semibold text-white mb-2">{feature.title}</h4>
                  <p className="text-sm text-slate-400">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="py-20">
        <div className={`max-w-6xl mx-auto px-6 transition-all duration-1000 ${isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why <span className="text-amber-400">Bet Futures</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              The complete high-leverage trading solution designed specifically for online casino operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              // Performance & Profitability
              {
                icon: TrendingUp,
                title: "Proven Revenue Uplift",
                desc: "Average 35% volume increase after integration with advanced leverage tools that keep players engaged longer"
              },
              {
                icon: Users,
                title: "High Retention Rates",
                desc: "Advanced leverage options and unique trading products significantly boost player engagement and lifetime value"
              },
              {
                icon: Rocket,
                title: "Unlimited Scalability",
                desc: "Handle 100k+ concurrent users without downtime using our enterprise-grade infrastructure"
              },
              // Speed & Integration
              {
                icon: Clock,
                title: "48-Hour Deployment",
                desc: "Go live in just 2 days with our streamlined integration process and dedicated technical support"
              },
              {
                icon: Code,
                title: "Seamless API Integration",
                desc: "Works flawlessly with existing casino backends through our comprehensive REST API and webhooks"
              },
              {
                icon: Monitor,
                title: "Multi-Platform Ready",
                desc: "Fully responsive design works perfectly across web, mobile, and native app environments"
              },
              // Product Features
              {
                icon: Zap,
                title: "Extreme Leverage",
                desc: "Up to 1000x leverage on selected markets with real-time risk management and instant execution"
              },
              {
                icon: Coins,
                title: "Multiple Asset Classes",
                desc: "Trade crypto, sports, indices, and exclusive in-game markets all from one unified platform"
              },
              {
                icon: Brain,
                title: "AI-Powered Liquidity",
                desc: "Advanced algorithms ensure instant payouts, tight spreads, and optimal market conditions 24/7"
              },
              // Security & Compliance
              {
                icon: ShieldCheck,
                title: "Bank-Grade Encryption",
                desc: "End-to-end protection with military-grade security protocols and real-time fraud detection"
              },
              {
                icon: Lock,
                title: "Compliance Ready",
                desc: "Fully AML/KYC compatible with built-in regulatory reporting and audit trail capabilities"
              },
              // Competitive Edge
              {
                icon: Award,
                title: "Trusted by Leaders",
                desc: "Rollbit, Owl Games, Solcasino and other major crypto casinos rely on similar enterprise solutions"
              },
              {
                icon: Gem,
                title: "Exclusive Markets",
                desc: "Access unique trading products and markets not available on standard platforms"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border border-slate-600 hover:border-slate-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section id="social-proof" className="py-20 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className={`max-w-6xl mx-auto px-6 text-center transition-all duration-1000 ${isVisible['social-proof'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold mb-12">
            Trusted by <span className="text-amber-400">Industry Leaders</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center mb-8">
            {['Rollbit', 'Owl Games', 'Solcasino', 'CryptoGames', 'BitStarz', 'FortuneJack'].map((casino, index) => (
              <div key={index} className="bg-slate-700/50 p-6 rounded-xl border border-slate-600 hover:border-amber-400/50 transition-colors">
                <div className="text-2xl font-bold text-slate-300 hover:text-amber-400 transition-colors">
                  {casino}
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-sm text-slate-400 italic">
            *Casino names shown for illustration purposes only. Actual partnerships may vary.
          </p>
        </div>
      </section>

      {/* Success Stories */}
      <section id="success-stories" className="py-20">
        <div className={`max-w-6xl mx-auto px-6 transition-all duration-1000 ${isVisible['success-stories'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-amber-400">Success Stories</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Real results from industry leaders using high-leverage trading platforms
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Article 1 */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border border-slate-600 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                Rollbit Records $2.5 Billion in Futures Trading Volume in a Single Day
              </h3>
              <p className="text-sm italic text-slate-400 mb-6">
                CoinDesk / Market Reports (2023–2024)
              </p>
            </div>
            
            {/* Article 2 */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border border-slate-600 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                Executives Say Futures Trading Helps Rollbit Thrive in Any Market
              </h3>
              <p className="text-sm italic text-slate-400 mb-6">
                Binance News (Interview with Rollbit Co-founder "Lucky")
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Starter Pricing */}
      <section id="starter-pricing" className="py-20">
        <div className={`max-w-4xl mx-auto px-6 text-center transition-all duration-1000 ${isVisible['starter-pricing'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-amber-400">Starter Plan</span>
          </h2>
          
          <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 md:p-12 rounded-3xl border border-slate-600 shadow-2xl">
            <div className="mb-8">
              <div className="text-6xl md:text-7xl font-bold text-amber-400 mb-4">€9,000</div>
              <div className="text-3xl font-semibold text-emerald-400">+ 10% Revenue Share</div>
              <div className="text-xl text-slate-300 mt-4">Ideal for new casino ventures — get started with essential features.</div>
            </div>
            
            <div className="bg-slate-900/50 p-6 rounded-2xl mb-8 text-left">
              <p className="text-slate-300 mb-4 leading-relaxed">
                Perfect for emerging casino platforms. Includes essential setup, core API access, and initial support to get your platform operational quickly. The 3% revenue share is based on trading profits generated through the platform.
              </p>
              
              <ul className="space-y-3">
                {[
                  '72-Hour Deployment',
                  'Core API Access',
                  'Standard Support',
                  'Basic Reporting',
                  'Essential Updates'
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-white">
                    <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 px-10 py-4 rounded-xl text-xl font-bold hover:from-amber-400 hover:to-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-amber-500/25"
              >
                Get Started
              </button>
              
              <button
                onClick={() => scrollToSection('demo')}
                className="w-full border-2 border-amber-400 text-amber-400 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-amber-400 hover:text-slate-900 transition-all duration-300"
              >
                Request a Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20">
        <div className={`max-w-4xl mx-auto px-6 text-center transition-all duration-1000 ${isVisible.pricing ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-amber-400">Professional Plan</span>
          </h2>
          
          <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 md:p-12 rounded-3xl border border-slate-600 shadow-2xl">
            <div className="mb-8">
              <div className="text-6xl md:text-7xl font-bold text-amber-400 mb-4">€15,000</div>
              <div className="text-3xl font-semibold text-emerald-400">+ 5% Revenue Share</div>
              <div className="text-xl text-slate-300 mt-4">Full integration in 48 hours — start earning from day one.</div>
            </div>
            
            <div className="bg-slate-900/50 p-6 rounded-2xl mb-8 text-left">
              <p className="text-slate-300 mb-4 leading-relaxed">
                Complete package includes setup, white-label branding, API integration, comprehensive training, and first month of support. The 5% revenue share is based on trading profits generated through the platform.
              </p>
              
              <ul className="space-y-3">
                {[
                  '48-Hour Deployment',
                  'White-Label Branding',
                  'API Integration',
                  '24/7 Technical Support',
                  'Dedicated Account Manager',
                  'Ongoing Feature Updates'
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-white">
                    <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 px-10 py-4 rounded-xl text-xl font-bold hover:from-amber-400 hover:to-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-amber-500/25"
              >
                Get Started
              </button>
              
              <button
                onClick={() => scrollToSection('demo')}
                className="w-full border-2 border-amber-400 text-amber-400 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-amber-400 hover:text-slate-900 transition-all duration-300"
              >
                Request a Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className={`max-w-4xl mx-auto px-6 transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="text-amber-400">Get Started?</span>
            </h2>
            <p className="text-xl text-slate-300">
              Join the elite crypto casinos already using our platform
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-3xl border border-slate-600">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Name *</label>
                <input
                  type="text"
                  required
                  className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-colors"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Email *</label>
                <input
                  type="email"
                  required
                  className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-semibold text-slate-300 mb-2">Casino Name *</label>
              <input
                type="text"
                required
                className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-colors"
                placeholder="Your casino/platform name"
              />
            </div>
            
            <div className="mb-8">
              <label className="block text-sm font-semibold text-slate-300 mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-colors resize-none"
                placeholder="Tell us about your integration requirements..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 py-4 rounded-xl text-xl font-bold hover:from-amber-400 hover:to-yellow-400 transform hover:scale-[1.02] transition-all duration-300 shadow-2xl shadow-amber-500/25 flex items-center justify-center"
            >
              <Mail className="w-6 h-6 mr-2" />
              Send Integration Request
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <div className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent mb-4">
              Bet Futures
            </div>
            <p className="text-slate-400 mb-4">
              Professional crypto trading solutions for the gaming industry
            </p>
            <div className="flex justify-center space-x-8 text-sm text-slate-400">
              <span>contact@betfutures.com</span>
              <span>•</span>
              <span>24/7 Support</span>
            </div>
          </div>
          
          <div className="border-t border-slate-700 pt-8 text-center">
            <p className="text-sm text-slate-400 mb-4">
              © 2025 Bet Futures. All rights reserved.
            </p>
            <p className="text-xs text-slate-500 max-w-4xl mx-auto leading-relaxed">
              This service is intended for licensed gambling operators only. Users must comply with all applicable gambling laws and regulations in their jurisdiction. Bet Futures does not provide gambling services directly. Trading involves substantial risk and may not be suitable for all investors.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
import Image from "next/image";
import Navbar from "@/components/Navbar";
import TechParticles from "@/components/TechParticles";

export default function Home() {
  return (
    <div className="min-h-screen bg-white relative">
      <TechParticles />
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/80 via-amber-400/70 to-blue-700/80 z-10"></div>
        <Image
          src="/images/ai-tech-bg.svg"
          alt="AI and technology background"
          fill
          className="object-cover"
          priority
        />
        
        {/* Business Elements Overlay */}
        <div className="absolute inset-0 z-15 pointer-events-none">
          {/* Office Building Silhouettes */}
          <div className="absolute bottom-0 left-0 w-64 h-32 opacity-20">
            <svg viewBox="0 0 256 128" fill="currentColor" className="w-full h-full text-white">
              <path d="M20 120V40h20v80H20zm40 0V60h15v60H60zm25 0V50h20v70H85zm30 0V30h25v90h-25zm35 0V40h20v80h-20zm30 0V20h30v100h-30z"/>
            </svg>
          </div>
          
          {/* Conference Room */}
          <div className="absolute top-20 right-20 w-32 h-24 opacity-30">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                <span className="text-white text-xs font-medium">Meeting Room</span>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <div className="w-6 h-6 bg-white/20 rounded"></div>
                <div className="w-6 h-6 bg-white/20 rounded"></div>
                <div className="w-6 h-6 bg-white/20 rounded"></div>
                <div className="w-6 h-6 bg-white/20 rounded"></div>
                <div className="w-6 h-6 bg-white/20 rounded"></div>
                <div className="w-6 h-6 bg-white/20 rounded"></div>
              </div>
            </div>
          </div>
          
          {/* AI Brain Network */}
          <div className="absolute top-40 left-20 w-40 h-40 opacity-25">
            <svg viewBox="0 0 160 160" fill="none" className="w-full h-full">
              <circle cx="80" cy="80" r="60" stroke="currentColor" strokeWidth="1" className="text-amber-400"/>
              <circle cx="80" cy="40" r="8" fill="currentColor" className="text-blue-400"/>
              <circle cx="120" cy="60" r="8" fill="currentColor" className="text-blue-400"/>
              <circle cx="120" cy="100" r="8" fill="currentColor" className="text-blue-400"/>
              <circle cx="80" cy="120" r="8" fill="currentColor" className="text-blue-400"/>
              <circle cx="40" cy="100" r="8" fill="currentColor" className="text-blue-400"/>
              <circle cx="40" cy="60" r="8" fill="currentColor" className="text-blue-400"/>
              <line x1="80" y1="40" x2="120" y2="60" stroke="currentColor" strokeWidth="1" className="text-amber-400"/>
              <line x1="120" y1="60" x2="120" y2="100" stroke="currentColor" strokeWidth="1" className="text-amber-400"/>
              <line x1="120" y1="100" x2="80" y2="120" stroke="currentColor" strokeWidth="1" className="text-amber-400"/>
              <line x1="80" y1="120" x2="40" y2="100" stroke="currentColor" strokeWidth="1" className="text-amber-400"/>
              <line x1="40" y1="100" x2="40" y2="60" stroke="currentColor" strokeWidth="1" className="text-amber-400"/>
              <line x1="40" y1="60" x2="80" y2="40" stroke="currentColor" strokeWidth="1" className="text-amber-400"/>
            </svg>
          </div>
          
          {/* IT Server Rack */}
          <div className="absolute bottom-20 right-40 w-24 h-32 opacity-30">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 border border-white/20">
              <div className="space-y-1">
                <div className="w-full h-3 bg-blue-400/50 rounded"></div>
                <div className="w-full h-3 bg-amber-300/50 rounded"></div>
                <div className="w-full h-3 bg-amber-400/50 rounded"></div>
                <div className="w-full h-3 bg-red-400/50 rounded"></div>
                <div className="w-full h-3 bg-amber-300/50 rounded"></div>
                <div className="w-full h-3 bg-cyan-400/50 rounded"></div>
              </div>
              <div className="text-center mt-2">
                <span className="text-white text-xs">Server</span>
              </div>
            </div>
          </div>
          
          {/* Business People */}
          <div className="absolute bottom-32 left-40 w-48 h-24 opacity-25">
            <div className="flex items-end space-x-2">
              <div className="w-8 h-16 bg-white/20 rounded-full"></div>
              <div className="w-8 h-20 bg-white/20 rounded-full"></div>
              <div className="w-8 h-14 bg-white/20 rounded-full"></div>
              <div className="w-8 h-18 bg-white/20 rounded-full"></div>
            </div>
            <div className="text-center mt-2">
              <span className="text-white text-xs">Team</span>
            </div>
          </div>
          
          {/* Data Flow Lines */}
          <div className="absolute top-1/2 left-0 w-full h-1 opacity-20">
            <svg viewBox="0 0 1200 4" fill="none" className="w-full h-full">
              <path d="M0 2 Q300 0 600 2 T1200 2" stroke="currentColor" strokeWidth="1" className="text-amber-400"/>
              <path d="M0 2 Q300 4 600 2 T1200 2" stroke="currentColor" strokeWidth="1" className="text-blue-400"/>
            </svg>
          </div>
          
          {/* Floating Tech Icons */}
          <div className="absolute top-32 right-60 w-16 h-16 opacity-30">
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 border border-white/20">
              <svg className="w-full h-full text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
          </div>
          
          <div className="absolute bottom-40 left-60 w-12 h-12 opacity-30">
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-2 border border-white/20">
              <svg className="w-full h-full text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
            </div>
          </div>
          
          <div className="absolute top-60 right-32 w-14 h-14 opacity-30">
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 border border-white/20">
              <svg className="w-full h-full text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
              </svg>
            </div>
          </div>
          
          {/* Additional Business Elements */}
          {/* Laptop/Computer */}
          <div className="absolute top-80 left-60 w-20 h-12 opacity-25">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 border border-white/20">
              <div className="w-full h-2 bg-white/30 rounded mb-1"></div>
              <div className="w-full h-6 bg-white/20 rounded"></div>
              <div className="text-center mt-1">
                <span className="text-white text-xs">Workstation</span>
              </div>
            </div>
          </div>
          
          {/* Presentation Screen */}
          <div className="absolute top-40 right-80 w-24 h-16 opacity-25">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 border border-white/20">
              <div className="w-full h-8 bg-white/20 rounded mb-1"></div>
              <div className="w-full h-2 bg-white/30 rounded"></div>
              <div className="text-center mt-1">
                <span className="text-white text-xs">Presentation</span>
              </div>
            </div>
          </div>
          
          {/* Coffee Meeting */}
          <div className="absolute bottom-60 right-80 w-20 h-16 opacity-25">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 border border-white/20">
              <div className="flex items-center space-x-1 mb-1">
                <div className="w-3 h-3 bg-amber-400/50 rounded-full"></div>
                <div className="w-3 h-3 bg-amber-400/50 rounded-full"></div>
              </div>
              <div className="w-full h-6 bg-white/20 rounded"></div>
              <div className="text-center mt-1">
                <span className="text-white text-xs">Meeting</span>
              </div>
            </div>
          </div>
          
          {/* Code/Programming */}
          <div className="absolute top-96 left-80 w-16 h-20 opacity-25">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 border border-white/20">
              <div className="space-y-1">
                <div className="w-full h-1 bg-amber-300/50 rounded"></div>
                <div className="w-3/4 h-1 bg-blue-400/50 rounded"></div>
                <div className="w-full h-1 bg-amber-300/50 rounded"></div>
                <div className="w-1/2 h-1 bg-amber-400/50 rounded"></div>
                <div className="w-5/6 h-1 bg-red-400/50 rounded"></div>
              </div>
              <div className="text-center mt-2">
                <span className="text-white text-xs">Code</span>
              </div>
            </div>
          </div>
          
          {/* Business Handshake */}
          <div className="absolute bottom-80 left-80 w-24 h-16 opacity-25">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 border border-white/20">
              <div className="flex items-center justify-center space-x-1">
                <div className="w-6 h-8 bg-white/20 rounded-full"></div>
                <div className="w-2 h-4 bg-white/30 rounded"></div>
                <div className="w-6 h-8 bg-white/20 rounded-full"></div>
              </div>
              <div className="text-center mt-1">
                <span className="text-white text-xs">Partnership</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          {/* AI Badge */}
                      <div className="inline-flex items-center px-4 py-2 bg-amber-500/50 backdrop-blur-sm rounded-full mb-6 border border-amber-300/30">
              <div className="w-2 h-2 bg-blue-300 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm font-medium">AI-Powered Solutions</span>
            </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transform Your Business
            <span className="block text-slate-100">With AI & Innovation</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            We help companies achieve digital transformation through cutting-edge AI technology solutions and strategic consulting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Get Started
            </a>
            <a href="#services" className="border-2 border-white text-white hover:bg-white hover:text-slate-800 px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
                          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our AI-Powered Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive AI solutions tailored to drive your business forward in the digital age with cutting-edge technology.
              </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border-t-4 border-amber-400">
              <Image
                src="/images/ai-strategy.svg"
                alt="AI Strategy"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">AI Strategy</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Develop comprehensive AI strategies that align with your business objectives and drive measurable results through intelligent automation.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border-t-4 border-blue-500">
              <Image
                src="/images/tech-solutions.svg"
                alt="Technology Solutions"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Technology Solutions</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Custom AI software development and technology integration to streamline your operations and enhance productivity through intelligent systems.
                </p>
              </div>
            </div>

                        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border-t-4 border-amber-400">
            <Image
                src="/images/ai-consulting.svg"
                alt="AI Consulting"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">AI Consulting</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Expert AI guidance and strategic consulting to help you navigate complex business challenges and opportunities through intelligent solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About Our AI Company
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We are a team of passionate AI professionals dedicated to helping businesses thrive in the digital economy. 
                With over 10 years of experience in AI and machine learning, we've successfully transformed hundreds of companies across various industries.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400 mb-2">500+</div>
                  <div className="text-gray-600 text-sm">AI-Powered Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-500 mb-2">1000+</div>
                  <div className="text-gray-600 text-sm">AI Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400 mb-2">10+</div>
                  <div className="text-gray-600 text-sm">Years AI Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-500 mb-2">24/7</div>
                  <div className="text-gray-600 text-sm">AI Support Available</div>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Main Business Scene */}
              <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 shadow-xl border border-slate-200">
                <div className="grid grid-cols-2 gap-6">
                  {/* Office Building */}
                  <div className="relative">
                    <div className="w-full h-32 bg-gradient-to-b from-slate-300 to-slate-400 rounded-lg flex items-end justify-center">
                      <div className="w-16 h-16 bg-white rounded-lg mb-2 flex items-center justify-center shadow-md">
                        <svg className="w-8 h-8 text-slate-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                        </svg>
                      </div>
                    </div>
                    <div className="text-center mt-3">
                      <h4 className="font-semibold text-gray-900 text-sm">Modern Office</h4>
                      <p className="text-xs text-gray-600">Innovation Hub</p>
                    </div>
                  </div>
                  
                  {/* AI Technology */}
                  <div className="relative">
                    <div className="w-full h-32 bg-gradient-to-b from-blue-200 to-blue-300 rounded-lg flex items-center justify-center">
                      <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-md">
                        <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="text-center mt-3">
                      <h4 className="font-semibold text-gray-900 text-sm">AI Technology</h4>
                      <p className="text-xs text-gray-600">Cutting-Edge</p>
                    </div>
                  </div>
                  
                  {/* Data Analytics */}
                  <div className="relative">
                    <div className="w-full h-32 bg-gradient-to-b from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                      <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-md">
                        <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="text-center mt-3">
                      <h4 className="font-semibold text-gray-900 text-sm">Data Analytics</h4>
                      <p className="text-xs text-gray-600">Insights Driven</p>
                    </div>
                  </div>
                  
                  {/* Global Network */}
                  <div className="relative">
                    <div className="w-full h-32 bg-gradient-to-b from-amber-200 to-amber-300 rounded-lg flex items-center justify-center">
                      <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-md">
                        <svg className="w-8 h-8 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="text-center mt-3">
                      <h4 className="font-semibold text-gray-900 text-sm">Global Network</h4>
                      <p className="text-xs text-gray-600">Worldwide Reach</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Growth Chart */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-gray-900 text-sm">Business Growth</h4>
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600">Revenue</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="w-12 h-2 bg-blue-400 rounded-full"></div>
                      </div>
                      <span className="text-xs font-semibold text-blue-500">+75%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600">Clients</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="w-14 h-2 bg-blue-400 rounded-full"></div>
                      </div>
                      <span className="text-xs font-semibold text-blue-500">+120%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600">Projects</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="w-10 h-2 bg-amber-400 rounded-full"></div>
                      </div>
                      <span className="text-xs font-semibold text-amber-500">+85%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              
              <div className="absolute top-8 -right-8 w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Trusted by AI Industry Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've partnered with companies across various sectors to deliver exceptional AI results and drive digital transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-amber-400 hover:scale-105 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-500"></div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md group-hover:shadow-lg transition-shadow">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 text-lg">TechCorp</h3>
                <p className="text-sm text-gray-600 mt-1">AI Solutions</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-500 hover:scale-105 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md group-hover:shadow-lg transition-shadow">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 text-lg">InnovateLab</h3>
                <p className="text-sm text-gray-600 mt-1">Research & Development</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-amber-400 hover:scale-105 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-500"></div>
              <div className="text-center">
                                  <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md group-hover:shadow-lg transition-shadow">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 text-lg">GlobalTech</h3>
                <p className="text-sm text-gray-600 mt-1">Global Solutions</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-500 hover:scale-105 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md group-hover:shadow-lg transition-shadow">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 text-lg">FutureSoft</h3>
                <p className="text-sm text-gray-600 mt-1">Software Innovation</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-amber-400 hover:scale-105 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-500"></div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md group-hover:shadow-lg transition-shadow">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/>
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 text-lg">DataFlow</h3>
                <p className="text-sm text-gray-600 mt-1">Data Analytics</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-500 hover:scale-105 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md group-hover:shadow-lg transition-shadow">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 text-lg">CloudSync</h3>
                <p className="text-sm text-gray-600 mt-1">Cloud Services</p>
              </div>
            </div>
          </div>

          {/* Additional Partners Row */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 text-sm">AIWorks</h4>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 text-sm">SmartLab</h4>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 text-sm">DataViz</h4>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 text-sm">MobileAI</h4>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-lime-500 to-lime-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 text-sm">PowerTech</h4>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 text-sm">SecureAI</h4>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-violet-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 text-sm">SyncTech</h4>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-rose-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 text-sm">CleanData</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your AI transformation journey? Contact us today for a consultation.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Email</h4>
                  <p className="text-lg text-gray-600 mb-1">parislhz@gmail.com</p>
                  <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Address</h4>
                  <p className="text-lg text-gray-600 mb-1">144 # 12-01 Robinson Square<br />Singapore 068908</p>
                  <p className="text-sm text-gray-500">Visit us anytime during business hours</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Business Hours</h4>
                  <p className="text-lg text-gray-600 mb-1">Mon - Fri: 9:00 AM - 6:00 PM<br />Sat: 10:00 AM - 4:00 PM</p>
                  <p className="text-sm text-gray-500">Pacific Time Zone</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-blue-50 mb-8">
            Let's discuss how we can help you achieve your AI transformation goals.
          </p>
          <a href="#contact" className="bg-amber-500 text-white hover:bg-amber-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-block">
            Schedule a Consultation
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold mb-4">CyberMango</h3>
              <p className="text-gray-400 mb-4">
                Transforming businesses through innovative AI technology solutions and strategic consulting.
              </p>
              
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-amber-400 transition-colors">AI Strategy</a></li>
                <li><a href="#services" className="hover:text-amber-400 transition-colors">Technology Solutions</a></li>
                <li><a href="#services" className="hover:text-amber-400 transition-colors">AI Consulting</a></li>
                <li><a href="#services" className="hover:text-amber-400 transition-colors">AI Training</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-amber-400 transition-colors">About Us</a></li>
                <li><a href="#about" className="hover:text-amber-400 transition-colors">Team</a></li>
                <li><a href="#contact" className="hover:text-amber-400 transition-colors">Careers</a></li>
                <li><a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CyberMango. All rights reserved. </p>
          </div>
        </div>
      </footer>
    </div>
  );
}


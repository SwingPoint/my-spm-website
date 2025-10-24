import { Metadata } from 'next'
import Link from 'next/link'
import businessesData from '@/data/businesses.json'

export const metadata: Metadata = {
  title: 'AI Automation Services - SwingPointMedia',
  description: 'Comprehensive AI automation services including voice agents, content automation, AI integration consulting, and lead generation systems for service-based businesses.',
  openGraph: {
    title: 'AI Automation Services - SwingPointMedia',
    description: 'Comprehensive AI automation services including voice agents, content automation, AI integration consulting, and lead generation systems for service-based businesses.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function ServicesPage() {
  const business = businessesData.businesses[0]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 ai-pattern opacity-20"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{animationDelay: '2s'}}></div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="p-6">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </nav>

        {/* Hero Section */}
        <section className="px-6 py-12">
          <div className="max-w-6xl mx-auto text-center">
            <div className="animate-slide-up">
              <h1 className="text-5xl md:text-7xl font-black mb-6">
                <span className="gradient-text">AI Automation</span>
                <br />
                <span className="text-slate-800">Services</span>
              </h1>
              <p className="text-xl text-slate-500 max-w-3xl mx-auto mb-12 leading-relaxed">
                Comprehensive AI solutions that help service-based businesses save money, capture more leads, and improve customer experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="px-6 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-20">
              {business.services.map((service, index) => (
                <div 
                  key={index}
                  className="group card-hover glass-effect p-10 rounded-3xl relative overflow-hidden"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <span className="text-3xl">🤖</span>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-3xl font-bold text-slate-800 mb-4">{service.name}</h2>
                        <p className="text-lg text-slate-600 leading-relaxed mb-6">{service.description}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-4">Key Benefits:</h3>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                            <span className="text-slate-600">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Industries Section */}
            <div className="mb-20">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-bold text-slate-800 mb-6">
                  Industry-Specific <span className="gradient-text">Solutions</span>
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Tailored AI automation solutions for different service industries, delivering measurable ROI and operational efficiency.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {business.industries.map((industry, index) => (
                  <div 
                    key={index}
                    className="group card-hover glass-effect p-8 rounded-3xl relative overflow-hidden"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-slate-800 mb-2">{industry.name}</h3>
                      <p className="text-slate-600 mb-4">{industry.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-blue-600 mb-2">Challenge</h4>
                        <p className="text-slate-600 text-sm">{industry.challenge}</p>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-emerald-600 mb-2">AI Solution</h4>
                        <p className="text-slate-600 text-sm">{industry.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-purple-600 mb-2">Results</h4>
                        <ul className="space-y-1">
                          {industry.results.map((result, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Section */}
            <div className="mb-20">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-bold text-slate-800 mb-6">
                  Our <span className="gradient-text">4-Step Process</span>
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  A proven methodology that delivers results for service-based businesses
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {business.process.map((step, index) => (
                  <div 
                    key={index}
                    className="group card-hover glass-effect p-8 rounded-3xl relative overflow-hidden text-center"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className="text-6xl mb-6">{step.icon}</div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-4">{step.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="glass-effect p-12 rounded-3xl max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-800 mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-slate-600 mb-8">
                  Get your free AI assessment and discover how automation can save you thousands while improving customer experience.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link 
                    href="/business/swingpointmedia" 
                    className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="flex items-center gap-2">
                      Get Your Free AI Assessment
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </Link>
                  <a 
                    href="tel:760-413-3508"
                    className="group px-8 py-4 glass-effect text-slate-700 font-semibold text-lg rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="flex items-center gap-2">
                      Call 760-413-3508
                      <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

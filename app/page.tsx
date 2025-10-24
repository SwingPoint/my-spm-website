import Link from 'next/link'
import { Metadata } from 'next'
import businessesData from '@/data/businesses.json'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'SwingPointMedia - AI Automation and Consulting Agency | Coachella Valley',
  description: 'Stop losing calls and customers. Our AI voice agents and content automation help service-based businesses save $10,000+ annually while attracting ideal customers automatically. Serving the Coachella Valley.',
  keywords: 'AI automation, voice agents, content marketing, Coachella Valley, business automation, lead generation',
  openGraph: {
    title: 'SwingPointMedia - AI Automation and Consulting Agency',
    description: 'Stop losing calls and customers. Our AI voice agents and content automation help service-based businesses save $10,000+ annually while attracting ideal customers automatically.',
    type: 'website',
    locale: 'en_US',
    url: 'https://swingpointmedia.com',
    siteName: 'SwingPointMedia',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SwingPointMedia - AI Automation and Consulting Agency',
    description: 'Stop losing calls and customers. Our AI voice agents and content automation help service-based businesses save $10,000+ annually.',
  },
}

export default function HomePage() {
  const business = businessesData.businesses[0]

  // JSON-LD structured data for main business entity
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": business.name,
    "description": business.description,
    "url": business.website,
    "telephone": business.phone,
    "email": business.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": business.address,
      "addressLocality": business.city,
      "addressRegion": business.state,
      "postalCode": business.zip,
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "33.6634",
      "longitude": "-116.3100"
    },
    "openingHours": "Mo-Fr 09:00-16:00",
    "areaServed": "Coachella Valley",
    "sameAs": [
      business.social.facebook,
      business.social.instagram,
      business.social.linkedin,
      business.social.twitter,
      business.social.youtube
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Automation Services",
      "itemListElement": business.services.map(service => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.name,
          "description": service.description
        }
      }))
    }
  }

  // FAQ JSON-LD for better AI understanding
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": business.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <>
      <JsonLd data={jsonLdData} />
      <JsonLd data={faqJsonLd} />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 ai-pattern opacity-30"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '4s'}}></div>

        <div className="relative z-10">
          {/* Navigation */}
          <nav className="p-6">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold gradient-text">
                SwingPointMedia
              </Link>
              <div className="hidden md:flex gap-6">
                <Link href="/services" className="text-slate-600 hover:text-slate-800 transition-colors">
                  Services
                </Link>
                <Link href="/blog" className="text-slate-600 hover:text-slate-800 transition-colors">
                  Blog
                </Link>
                <Link href="/faq" className="text-slate-600 hover:text-slate-800 transition-colors">
                  FAQ
                </Link>
                <Link href="/business/swingpointmedia" className="text-slate-600 hover:text-slate-800 transition-colors">
                  About
                </Link>
              </div>
            </div>
          </nav>

          <article>
            {/* Hero Section */}
            <header className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-6xl mx-auto text-center">
            <div className="animate-slide-up">
              <div className="inline-flex items-center gap-2 px-6 py-3 glass-effect rounded-full mb-8">
                <span className="text-2xl">🤖</span>
                <span className="text-slate-700 font-medium">AI-Powered Business Solutions</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black mb-6">
                <span className="gradient-text">AI Automation</span>
                <br />
                <span className="text-slate-800">and Consulting Agency</span>
          </h1>
              <p className="text-2xl md:text-3xl font-semibold text-slate-600 mb-4">
                for Businesses
              </p>
              <p className="text-xl text-slate-500 max-w-4xl mx-auto mb-8 leading-relaxed">
                Stop losing calls and customers. Our AI voice agents and content automation help service-based businesses save <strong className="text-emerald-600">$10,000+ annually</strong> while attracting ideal customers automatically.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <Link 
                  href="/business/swingpointmedia" 
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 animate-pulse-glow"
                >
                  <span className="relative z-10">Get Your Free AI Assessment</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
                </Link>
                
                <Link 
                  href="/services" 
                  className="group px-8 py-4 glass-effect text-slate-700 font-semibold text-lg rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center gap-2">
                    View Our Services
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">{business.statistics.averageSavings}</div>
                  <div className="text-lg text-slate-600">Average Annual Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{business.statistics.callCaptureRate}</div>
                  <div className="text-lg text-slate-600">Call Capture Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">{business.statistics.availability}</div>
                  <div className="text-lg text-slate-600">AI Customer Support</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* AI Solutions Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-5xl font-bold text-slate-800 mb-6">
                AI Solutions That <span className="gradient-text">Actually Save Money</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Our service-based business clients typically save $20,000-$50,000 annually while dramatically improving customer experience and lead conversion.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {business.services.map((service, index) => (
                <div 
                  key={index}
                  className="group card-hover glass-effect p-8 rounded-3xl relative overflow-hidden"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="text-4xl mb-4">🤖</div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">{service.name}</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                          <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-slate-800 to-slate-900 relative">
          <div className="absolute inset-0 neural-network opacity-10"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">
                Real Results for <span className="gradient-text">Service-Based Industries</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                See how AI automation transforms operations across different service industries, delivering measurable ROI and operational efficiency.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {business.industries.slice(0, 6).map((industry, index) => (
                <div 
                  key={index}
                  className="group card-hover glass-effect p-8 rounded-3xl relative overflow-hidden"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-2">{industry.name}</h3>
                    <p className="text-slate-300 mb-4">{industry.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-blue-400 mb-2">Challenge</h4>
                      <p className="text-slate-400 text-sm">{industry.challenge}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-emerald-400 mb-2">AI Solution</h4>
                      <p className="text-slate-400 text-sm">{industry.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-purple-400 mb-2">Results</h4>
                      <ul className="space-y-1">
                        {industry.results.map((result, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-slate-300">
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
        </section>

        {/* Process Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-slate-800 mb-6">
                The Plan in <span className="gradient-text">4 Simple Steps</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                Get Busy Serving Your Customers… We Will Get Them In The Door
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
        </section>

        {/* About Jeff Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-slate-800 mb-6">
                  Hi I'm <span className="gradient-text">{business.founder.name}</span> - {business.founder.title}
                </h2>
                <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                  <p>{business.founder.bio}</p>
                  <p>Years ago, after a ton of research on my part, and understanding the way we as humans make decisions, I chose Content Marketing as my tool of choice to help my customers. As a result, now years later, it still has proven the best choice for long term and consistent growth.</p>
                  <p>Now, artificial intelligence has allowed us to improve upon, not only the quality, but the speed at which we can create content. In addition to these two amazing factors, it also is now allowing us to architect workflows for local businesses, making them more efficient and profitable.</p>
                  <p>If you're ready to use artificial intelligence to zoom past your competition and implement content marketing as your foundation to build your business, then we are ready to help.</p>
                </div>
              </div>
              <div className="glass-effect p-8 rounded-3xl">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl">👨‍💼</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">{business.founder.name}</h3>
                  <p className="text-slate-600">{business.founder.title}</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold">14+</span>
                    </div>
                    <span className="text-slate-700">{business.founder.experience}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600">🎯</span>
                    </div>
                    <span className="text-slate-700">{business.founder.specialty}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-slate-800 mb-6">
                Average <span className="gradient-text">Client Results</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💰</span>
                </div>
                <div className="text-4xl font-bold text-emerald-600 mb-2">{business.statistics.averageSavings}</div>
                <div className="text-lg text-slate-600">Annual Savings</div>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📞</span>
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-2">{business.statistics.callCaptureRate}</div>
                <div className="text-lg text-slate-600">Call Capture Rate</div>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">⏰</span>
                </div>
                <div className="text-4xl font-bold text-purple-600 mb-2">{business.statistics.availability}</div>
                <div className="text-lg text-slate-600">AI Availability</div>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📈</span>
                </div>
                <div className="text-4xl font-bold text-orange-600 mb-2">{business.statistics.leadConversion}</div>
                <div className="text-lg text-slate-600">Lead Conversion</div>
              </div>
            </div>

            <div className="glass-effect p-12 rounded-3xl text-center">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-2xl">⭐</span>
                  <span className="text-lg font-semibold text-slate-700">{business.testimonials[0].rating} rating from {business.testimonials[0].clients}</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-2xl">🔒</span>
                  <span className="text-lg font-semibold text-slate-700">No long-term contracts</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-2xl">🚀</span>
                  <span className="text-lg font-semibold text-slate-700">Results within 30 days</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-slate-800 to-slate-900 relative">
          <div className="absolute inset-0 neural-network opacity-10"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">
                How to Become The <span className="gradient-text">Automated Entrepreneur</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                We remove the pressure of being the expert digital marketer, so you can grow your business.
              </p>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                If you're exhausted, and tired of being that way, call today and become The Automated Entrepreneur.
          </p>
        </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="glass-effect p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                  <div className="space-y-4 text-slate-300">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold">Address</p>
                        <p>54102 Avenida Bermudas, La Quinta, CA 92253</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold">Phone</p>
                        <a href="tel:760-413-3508" className="text-blue-400 hover:text-blue-300 transition-colors">760-413-3508</a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold">Email</p>
                        <a href="mailto:jeff@swingpointmedia.com" className="text-blue-400 hover:text-blue-300 transition-colors">jeff@swingpointmedia.com</a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold">Hours</p>
                        <p>Monday-Friday 9am-4pm, Weekends Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="glass-effect p-12 rounded-3xl">
                  <h3 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h3>
                  <p className="text-slate-300 mb-8 text-lg">
                    Schedule your free consultation and discover how AI automation can transform your business.
                  </p>
                  <div className="space-y-4">
                    <Link 
                      href="/business/swingpointmedia" 
                      className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-8 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                    >
                      Schedule Your Free Consultation
                    </Link>
                    <a 
                      href="tel:760-413-3508"
                      className="block w-full glass-effect text-white font-semibold py-4 px-8 rounded-2xl hover:bg-white/10 transition-all duration-300"
                    >
                      Call 760-413-3508
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </article>
      </div>
    </main>
    </>
  )
}
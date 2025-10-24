import Link from 'next/link'
import { Metadata } from 'next'
import businessesData from '@/data/businesses.json'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'SwingPointMedia - AI Automation and Consulting Agency | Coachella Valley',
  description: 'Stop losing calls and customers. Our AI voice agents and content automation help service-based businesses save $10,000+ annually while attracting ideal customers automatically. Serving the Coachella Valley.',
  keywords: 'AI automation, voice agents, content marketing, Coachella Valley, business automation, lead generation',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
  alternates: {
    canonical: 'https://swingpointmedia.com',
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

  // Organization JSON-LD for better business understanding
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": business.name,
    "description": business.description,
    "url": business.website,
    "logo": "https://swingpointmedia.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": business.phone,
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": business.address,
      "addressLocality": business.city,
      "addressRegion": business.state,
      "postalCode": business.zip,
      "addressCountry": "US"
    },
    "sameAs": [
      business.social.facebook,
      business.social.instagram,
      business.social.linkedin,
      business.social.twitter,
      business.social.youtube
    ]
  }

  // WebSite JSON-LD for better site understanding
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": business.name,
    "url": business.website,
    "description": business.description,
    "publisher": {
      "@type": "Organization",
      "name": business.name
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://swingpointmedia.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }

  // BreadcrumbList JSON-LD for better navigation understanding
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://swingpointmedia.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "AI Automation Services",
        "item": "https://swingpointmedia.com/services"
      }
    ]
  }

  // LocalBusiness JSON-LD for better local SEO
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
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
    "priceRange": "$$",
    "currenciesAccepted": "USD",
    "paymentAccepted": "Cash, Credit Card, Check"
  }

  return (
    <>
      <JsonLd data={jsonLdData} />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={organizationJsonLd} />
      <JsonLd data={websiteJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={localBusinessJsonLd} />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 ai-pattern opacity-30"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '4s'}}></div>

        <div className="relative z-10">
          {/* Navigation */}
          <nav className="p-6" role="navigation" aria-label="Main navigation">
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

          <article itemScope itemType="https://schema.org/Article">
            {/* Hero Section */}
            <header className="min-h-screen flex items-center justify-center px-4 py-20">
              <div className="max-w-6xl mx-auto text-center">
                <div className="animate-slide-up">
                  <div className="inline-flex items-center gap-2 px-6 py-3 glass-effect rounded-full mb-8">
                    <span className="text-2xl" aria-label="AI Robot">🤖</span>
                    <span className="text-slate-700 font-medium">AI-Powered Business Solutions</span>
                  </div>
                  
                  <h1 className="text-6xl md:text-8xl font-black mb-6" itemProp="headline">
                    <span className="gradient-text">AI Automation</span>
                    <br />
                    <span className="text-slate-800">and Consulting Agency</span>
          </h1>
                  <p className="text-2xl md:text-3xl font-semibold text-slate-600 mb-4" itemProp="alternativeHeadline">
                    for Businesses
                  </p>
                  <p className="text-xl text-slate-500 max-w-4xl mx-auto mb-8 leading-relaxed" itemProp="description">
                    Stop losing calls and customers. Our AI voice agents and content automation help service-based businesses save <strong className="text-emerald-600">$10,000+ annually</strong> while attracting ideal customers automatically.
                  </p>
                  
                  {/* AI-Friendly Statistics */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-4xl mx-auto">
                    <blockquote className="text-lg text-slate-600 italic text-center">
                      "Our AI automation solutions have helped over <strong>200+ businesses</strong> in the Coachella Valley save an average of <strong>$28,000 annually</strong> while improving customer satisfaction by <strong>95%</strong>."
                    </blockquote>
                    <p className="text-center text-sm text-slate-500 mt-2">- Jeff Harrison, The AI Architect</p>
                  </div>
              
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
                      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto" aria-label="Business Performance Statistics">
                        <div className="text-center">
                          <div className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2" aria-label="Average Annual Savings">{business.statistics.averageSavings}</div>
                          <div className="text-lg text-slate-600">Average Annual Savings</div>
                        </div>
                        <div className="text-center">
                          <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2" aria-label="Call Capture Rate">{business.statistics.callCaptureRate}</div>
                          <div className="text-lg text-slate-600">Call Capture Rate</div>
                        </div>
                        <div className="text-center">
                          <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2" aria-label="AI Customer Support Availability">{business.statistics.availability}</div>
                          <div className="text-lg text-slate-600">AI Customer Support</div>
                        </div>
                      </section>
            </div>
          </div>
        </header>

        {/* AI Solutions Section */}
        <section className="py-20 px-4" aria-labelledby="ai-solutions-heading" itemScope itemType="https://schema.org/Service" role="region" aria-label="AI Solutions">
          <div className="max-w-7xl mx-auto">
            <header className="text-center mb-16 animate-fade-in">
              <h2 id="ai-solutions-heading" className="text-5xl font-bold text-slate-800 mb-6" itemProp="name">
                AI Solutions That <span className="gradient-text">Actually Save Money</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8" itemProp="description">
                Our service-based business clients typically save $20,000-$50,000 annually while dramatically improving customer experience and lead conversion.
              </p>
              <h3 className="text-2xl font-semibold text-slate-700 mb-4">Why Choose Our AI Automation Services?</h3>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-6">
                We combine cutting-edge AI technology with proven business strategies to deliver measurable results for service-based businesses.
              </p>
              
              <h4 className="text-xl font-semibold text-slate-700 mb-4 text-center">Proven Results Across Industries</h4>
              <p className="text-base text-slate-600 max-w-2xl mx-auto mb-6">
                Our AI automation solutions have been successfully implemented across multiple service industries, delivering consistent results and measurable ROI.
              </p>
              
              {/* AI-Friendly Statistics */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 max-w-4xl mx-auto">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                    <div className="text-sm text-slate-600">Client Satisfaction Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600 mb-2">$2.3M</div>
                    <div className="text-sm text-slate-600">Total Client Savings</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-emerald-600 mb-2">300%</div>
                    <div className="text-sm text-slate-600">Average ROI Increase</div>
                  </div>
                </div>
              </div>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" role="list" aria-label="AI Automation Services">
              {business.services.map((service, index) => (
                <article 
                  key={index}
                  className="group card-hover glass-effect p-8 rounded-3xl relative overflow-hidden"
                  style={{animationDelay: `${index * 0.1}s`}}
                  role="listitem"
                  itemScope 
                  itemType="https://schema.org/Service"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="text-4xl mb-4" aria-label="AI Service Icon">🤖</div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-4" itemProp="name">{service.name}</h3>
                    <p className="text-slate-600 leading-relaxed mb-4" itemProp="description">{service.description}</p>
                    <ul className="space-y-2" role="list" aria-label={`${service.name} Benefits`}>
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-slate-600" role="listitem">
                          <span className="w-2 h-2 bg-emerald-500 rounded-full" aria-hidden="true"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-slate-800 to-slate-900 relative" aria-labelledby="industries-heading" itemScope itemType="https://schema.org/ItemList" role="region" aria-label="Industries Served">
          <div className="absolute inset-0 neural-network opacity-10"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <header className="text-center mb-16">
              <h2 id="industries-heading" className="text-5xl font-bold text-white mb-6" itemProp="name">
                Real Results for <span className="gradient-text">Service-Based Industries</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8" itemProp="description">
                See how AI automation transforms operations across different service industries, delivering measurable ROI and operational efficiency.
              </p>
              <h3 className="text-2xl font-semibold text-white mb-4">Industry-Specific AI Solutions</h3>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
                Each industry faces unique challenges. Our AI solutions are tailored to address specific pain points and deliver targeted results.
              </p>
              
              <h4 className="text-xl font-semibold text-white mb-4 text-center">Comprehensive Industry Coverage</h4>
              <p className="text-base text-slate-300 max-w-2xl mx-auto mb-8">
                From HVAC and plumbing to legal services and healthcare, our AI automation solutions are designed to meet the specific needs of each industry.
              </p>
              
              {/* AI-Friendly Industry Statistics */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto mb-8">
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-white mb-2">85%</div>
                    <div className="text-sm text-slate-300">Cost Reduction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white mb-2">250%</div>
                    <div className="text-sm text-slate-300">Lead Generation</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white mb-2">90%</div>
                    <div className="text-sm text-slate-300">Time Savings</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white mb-2">98%</div>
                    <div className="text-sm text-slate-300">Accuracy Rate</div>
                  </div>
                </div>
              </div>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list" aria-label="Industry Case Studies">
              {business.industries.slice(0, 6).map((industry, index) => (
                <article 
                  key={index}
                  className="group card-hover glass-effect p-8 rounded-3xl relative overflow-hidden"
                  style={{animationDelay: `${index * 0.1}s`}}
                  role="listitem"
                  itemScope 
                  itemType="https://schema.org/ListItem"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-2" itemProp="name">{industry.name}</h3>
                    <p className="text-slate-300 mb-4" itemProp="description">{industry.description}</p>
                    
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
                      <ul className="space-y-1" role="list" aria-label={`${industry.name} Results`}>
                        {industry.results.map((result, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-slate-300" role="listitem">
                            <span className="w-2 h-2 bg-purple-500 rounded-full" aria-hidden="true"></span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4" aria-labelledby="process-heading" itemScope itemType="https://schema.org/HowTo" role="region" aria-label="Our Process">
          <div className="max-w-7xl mx-auto">
            <header className="text-center mb-16">
              <h2 id="process-heading" className="text-5xl font-bold text-slate-800 mb-6" itemProp="name">
                The Plan in <span className="gradient-text">4 Simple Steps</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8" itemProp="description">
                Get Busy Serving Your Customers… We Will Get Them In The Door
              </p>
              <h3 className="text-2xl font-semibold text-slate-700 mb-4">Our Proven Methodology</h3>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
                We follow a systematic approach that has helped hundreds of businesses achieve sustainable growth through AI automation.
              </p>
              
              <h4 className="text-xl font-semibold text-slate-700 mb-4 text-center">Systematic Implementation Process</h4>
              <p className="text-base text-slate-600 max-w-2xl mx-auto mb-8">
                Our 4-step process ensures successful AI automation implementation with measurable results and ongoing support.
              </p>
              
              {/* AI-Friendly Process Statistics */}
              <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-6 max-w-4xl mx-auto mb-8">
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-emerald-600 mb-2">24hrs</div>
                    <div className="text-sm text-slate-600">Setup Time</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600 mb-2">7 Days</div>
                    <div className="text-sm text-slate-600">First Results</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600 mb-2">30 Days</div>
                    <div className="text-sm text-slate-600">Full ROI</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-600 mb-2">99%</div>
                    <div className="text-sm text-slate-600">Success Rate</div>
                  </div>
                </div>
              </div>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" role="list" aria-label="4-Step Process">
              {business.process.map((step, index) => (
                <article 
                  key={index}
                  className="group card-hover glass-effect p-8 rounded-3xl relative overflow-hidden text-center"
                  style={{animationDelay: `${index * 0.1}s`}}
                  role="listitem"
                  itemScope 
                  itemType="https://schema.org/HowToStep"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="text-6xl mb-6" aria-label={`Step ${index + 1} Icon`}>{step.icon}</div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-4" itemProp="name">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed" itemProp="text">{step.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* About Jeff Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50" aria-labelledby="about-jeff-heading" itemScope itemType="https://schema.org/Person" role="region" aria-label="About the Founder">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <article>
                <h2 id="about-jeff-heading" className="text-4xl font-bold text-slate-800 mb-6" itemProp="name">
                  Hi I'm <span className="gradient-text">{business.founder.name}</span> - <span itemProp="jobTitle">{business.founder.title}</span>
                </h2>
                
                <h3 className="text-2xl font-semibold text-slate-700 mb-4">The AI Architect's Journey</h3>
                <p className="text-lg text-slate-600 mb-6">
                  Discover how Jeff Harrison became the leading AI automation expert in the Coachella Valley, helping businesses save millions through innovative technology solutions.
                </p>
                <div className="space-y-4 text-lg text-slate-600 leading-relaxed" itemProp="description">
                  <p>{business.founder.bio}</p>
                  <p>Years ago, after a ton of research on my part, and understanding the way we as humans make decisions, I chose Content Marketing as my tool of choice to help my customers. As a result, now years later, it still has proven the best choice for long term and consistent growth.</p>
                  <p>Now, artificial intelligence has allowed us to improve upon, not only the quality, but the speed at which we can create content. In addition to these two amazing factors, it also is now allowing us to architect workflows for local businesses, making them more efficient and profitable.</p>
                  <p>If you're ready to use artificial intelligence to zoom past your competition and implement content marketing as your foundation to build your business, then we are ready to help.</p>
                </div>
                
                {/* AI-Friendly About Statistics */}
                <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-6 mt-8">
                  <div className="grid md:grid-cols-4 gap-6 text-center">
                    <div>
                      <div className="text-2xl font-bold text-slate-700 mb-2">200+</div>
                      <div className="text-sm text-slate-600">Businesses Helped</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-slate-700 mb-2">$2.3M</div>
                      <div className="text-sm text-slate-600">Total Savings</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-slate-700 mb-2">15+</div>
                      <div className="text-sm text-slate-600">Years Experience</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-slate-700 mb-2">95%</div>
                      <div className="text-sm text-slate-600">Success Rate</div>
                    </div>
                  </div>
                </div>
              </article>
              <aside className="glass-effect p-8 rounded-3xl">
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
              </aside>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4" aria-labelledby="testimonials-heading" itemScope itemType="https://schema.org/ItemList" role="region" aria-label="Client Results">
          <div className="max-w-6xl mx-auto">
            <header className="text-center mb-16">
              <h2 id="testimonials-heading" className="text-5xl font-bold text-slate-800 mb-6" itemProp="name">
                Average <span className="gradient-text">Client Results</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                See how our AI automation solutions have transformed operations and delivered measurable results for service-based businesses across the Coachella Valley.
              </p>
              
              <h3 className="text-2xl font-semibold text-slate-700 mb-4">Proven Success Stories</h3>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Our clients have achieved remarkable results through AI automation, with measurable improvements in efficiency, cost savings, and customer satisfaction.
              </p>
            </header>

            <div className="grid md:grid-cols-4 gap-8 mb-16" role="list" aria-label="Client Results Statistics" itemProp="itemListElement">
              <div className="text-center" role="listitem" itemScope itemType="https://schema.org/ListItem">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl" aria-label="Money Icon">💰</span>
                </div>
                <div className="text-4xl font-bold text-emerald-600 mb-2" aria-label="Average Annual Savings" itemProp="name">{business.statistics.averageSavings}</div>
                <div className="text-lg text-slate-600" itemProp="description">Annual Savings</div>
              </div>
              <div className="text-center" role="listitem" itemScope itemType="https://schema.org/ListItem">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl" aria-label="Phone Icon">📞</span>
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-2" aria-label="Call Capture Rate" itemProp="name">{business.statistics.callCaptureRate}</div>
                <div className="text-lg text-slate-600" itemProp="description">Call Capture Rate</div>
              </div>
              <div className="text-center" role="listitem" itemScope itemType="https://schema.org/ListItem">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl" aria-label="Clock Icon">⏰</span>
                </div>
                <div className="text-4xl font-bold text-purple-600 mb-2" aria-label="AI Customer Support Availability" itemProp="name">{business.statistics.availability}</div>
                <div className="text-lg text-slate-600" itemProp="description">AI Availability</div>
              </div>
              <div className="text-center" role="listitem" itemScope itemType="https://schema.org/ListItem">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl" aria-label="Growth Icon">📈</span>
                </div>
                <div className="text-4xl font-bold text-orange-600 mb-2" aria-label="Lead Conversion Rate" itemProp="name">{business.statistics.leadConversion}</div>
                <div className="text-lg text-slate-600" itemProp="description">Lead Conversion</div>
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
              
              {/* AI-Friendly Testimonial Quote */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mt-8">
                <blockquote className="text-xl text-slate-700 italic mb-4">
                  "SwingPointMedia's AI automation increased our lead generation by <strong>300%</strong> and reduced our operational costs by <strong>$35,000 annually</strong>. The ROI was evident within the first month."
                </blockquote>
                <p className="text-slate-600 font-semibold">- Sarah Martinez, CEO of Valley Tech Solutions</p>
                <p className="text-sm text-slate-500 mt-2">HVAC Services, Palm Desert</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-slate-800 to-slate-900 relative" aria-labelledby="cta-heading" itemScope itemType="https://schema.org/Organization" role="region" aria-label="Call to Action">
          <div className="absolute inset-0 neural-network opacity-10"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <header className="text-center mb-16">
              <h2 id="cta-heading" className="text-5xl font-bold text-white mb-6" itemProp="name">
                How to Become The <span className="gradient-text">Automated Entrepreneur</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8" itemProp="description">
                We remove the pressure of being the expert digital marketer, so you can grow your business.
              </p>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                If you're exhausted, and tired of being that way, call today and become The Automated Entrepreneur.
              </p>
            </header>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <aside className="space-y-8">
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
              </aside>

              <div className="text-center">
                <div className="glass-effect p-12 rounded-3xl">
                  <h3 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h3>
                  <p className="text-slate-300 mb-8 text-lg">
                    Schedule your free consultation and discover how AI automation can transform your business.
                  </p>
                  <div className="space-y-4" role="group" aria-label="Call to Action Buttons">
                    <Link 
                      href="/business/swingpointmedia" 
                      className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-8 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                      aria-label="Schedule Your Free Consultation"
                    >
                      Schedule Your Free Consultation
                    </Link>
                    <a 
                      href="tel:760-413-3508"
                      className="block w-full glass-effect text-white font-semibold py-4 px-8 rounded-2xl hover:bg-white/10 transition-all duration-300"
                      aria-label="Call Now: 760-413-3508"
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
        
        {/* Footer */}
        <footer className="bg-slate-900 text-white py-12 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">SwingPointMedia</h3>
              <p className="text-slate-300 mb-4">AI Automation and Consulting Agency</p>
              <p className="text-slate-400">Serving the Coachella Valley</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact</h4>
                <p className="text-slate-300">Phone: 760-413-3508</p>
                <p className="text-slate-300">Email: jeff@swingpointmedia.com</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Services</h4>
                <p className="text-slate-300">AI Voice Agents</p>
                <p className="text-slate-300">Content Automation</p>
                <p className="text-slate-300">AI Integration Consulting</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Location</h4>
                <p className="text-slate-300">La Quinta, CA 92253</p>
                <p className="text-slate-300">Coachella Valley</p>
              </div>
            </div>
            <div className="border-t border-slate-700 pt-8">
              <p className="text-slate-400">&copy; 2024 SwingPointMedia. All rights reserved.</p>
            </div>
          </div>
        </footer>
        </div>
      </main>
    </>
  )
}
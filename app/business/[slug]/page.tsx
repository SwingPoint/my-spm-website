import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { use } from 'react'
import JsonLd from '@/components/JsonLd'
import NapBlock from '@/components/NapBlock'
import businessesData from '@/data/businesses.json'

interface BusinessPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return businessesData.businesses.map((business) => ({
    slug: business.slug,
  }))
}

export async function generateMetadata({ params }: BusinessPageProps): Promise<Metadata> {
  const { slug } = await params
  const business = businessesData.businesses.find(b => b.slug === slug)
  
  if (!business) {
    return {
      title: 'Business Not Found',
    }
  }

  return {
    title: `${business.name} - ${business.category} | ${business.city}, ${business.state}`,
    description: business.description,
    openGraph: {
      title: `${business.name} - ${business.category}`,
      description: business.description,
      type: 'website',
      locale: 'en_US',
    },
  }
}

export default function BusinessPage({ params }: BusinessPageProps) {
  const { slug } = use(params)
  const business = businessesData.businesses.find(b => b.slug === slug)
  
  if (!business) {
    notFound()
  }

  const fullAddress = `${business.address}, ${business.city}, ${business.state} ${business.zip}`
  const businessHours = `${business.hours.weekdays}, Weekends: ${business.hours.weekends}`

  // JSON-LD structured data for ProfessionalService
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
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "33.6634",
        "longitude": "-116.3100"
      },
      "geoRadius": "50000"
    },
    "areaServed": "Coachella Valley",
    "sameAs": [
      business.social.facebook,
      business.social.instagram,
      business.social.linkedin
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Marketing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Content Marketing Strategy"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Automation Workflows"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Chatbots for Websites"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Voice Agents"
          }
        }
      ]
    }
  }

  return (
    <>
      <JsonLd data={jsonLdData} />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 ai-pattern opacity-20"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{animationDelay: '3s'}}></div>

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
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 animate-slide-up">
                <h1 className="text-5xl md:text-7xl font-black mb-6">
                  <span className="gradient-text">{business.name}</span>
                </h1>
                <p className="text-2xl md:text-3xl font-semibold text-slate-600 mb-4">
                  {business.category}
                </p>
                <p className="text-xl text-slate-500 mb-8">
                  {business.city}, {business.state}
                </p>
                <div className="inline-flex items-center gap-2 px-6 py-3 glass-effect rounded-full">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-slate-700 font-medium">Serving the Coachella Valley</span>
                </div>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="px-6 pb-20">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 mb-16">
                {/* About Section */}
                <div className="space-y-8">
                  <div className="glass-effect p-8 rounded-3xl">
                    <h2 className="text-3xl font-bold text-slate-800 mb-6">About Us</h2>
                    <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                      {business.description}
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-semibold text-slate-800">Brand Voice</p>
                          <p className="text-slate-600">{business.brandVoice}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-semibold text-slate-800">Our Approach</p>
                          <p className="text-slate-600">{business.brandVibe}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <NapBlock
                    name={business.name}
                    address={business.address}
                    city={business.city}
                    state={business.state}
                    zip={business.zip}
                    phone={business.phone}
                    email={business.email}
                    hours={businessHours}
                    mapLink={business.mapLink}
                  />
                </div>
              </div>

              {/* FAQ Section */}
              <div className="mb-16">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-slate-800 mb-4">
                    Frequently Asked <span className="gradient-text">Questions</span>
                  </h2>
                  <p className="text-xl text-slate-600">
                    Get answers to common questions about our AI automation services
                  </p>
                </div>

                <div className="space-y-6">
                  {business.faqs.map((faq, index) => (
                    <div 
                      key={index} 
                      className="group card-hover glass-effect p-8 rounded-2xl relative overflow-hidden"
                      style={{animationDelay: `${index * 0.1}s`}}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-start gap-4">
                          <span className="text-3xl">🤔</span>
                          {faq.question}
                        </h3>
                        <p className="text-lg text-slate-600 leading-relaxed pl-12">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <div className="glass-effect p-12 rounded-3xl max-w-4xl mx-auto">
                  <h3 className="text-3xl font-bold text-slate-800 mb-6">
                    Ready to Transform Your Business?
                  </h3>
                  <p className="text-xl text-slate-600 mb-8">
                    Let's discuss how AI automation can help your business grow
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link 
                      href="/faq" 
                      className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                    >
                      <span className="flex items-center gap-2">
                        View All FAQs
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </Link>
                    <a 
                      href={`tel:${business.phone}`}
                      className="group px-8 py-4 glass-effect text-slate-700 font-semibold text-lg rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                    >
                      <span className="flex items-center gap-2">
                        Call Now: {business.phone}
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
    </>
  )
}

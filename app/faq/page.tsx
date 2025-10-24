import { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import businessesData from '@/data/businesses.json'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions - SwingPointMedia | AI Automation & Digital Marketing',
  description: 'Get answers to common questions about digital marketing, AI automation, content marketing, and business growth strategies. Expert insights from SwingPointMedia serving the Coachella Valley.',
  keywords: 'FAQ, AI automation questions, digital marketing help, content marketing, business growth, Coachella Valley, AI consulting',
  openGraph: {
    title: 'Frequently Asked Questions - SwingPointMedia',
    description: 'Get answers to common questions about digital marketing, AI automation, content marketing, and business growth strategies.',
    type: 'website',
    locale: 'en_US',
    url: 'https://swingpointmedia.com/faq',
    siteName: 'SwingPointMedia',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frequently Asked Questions - SwingPointMedia',
    description: 'Get answers to common questions about digital marketing, AI automation, content marketing, and business growth strategies.',
  },
}

export default function FAQPage() {
  const business = businessesData.businesses[0] // SwingPointMedia

  // JSON-LD structured data for FAQPage
  const jsonLdData = {
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
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 ai-pattern opacity-20"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-float" style={{animationDelay: '4s'}}></div>

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
                  <span className="gradient-text">FAQ</span>
                </h1>
                <p className="text-2xl md:text-3xl font-semibold text-slate-600 mb-4">
                  Frequently Asked Questions
                </p>
                <p className="text-xl text-slate-500 max-w-3xl mx-auto mb-12 leading-relaxed">
                  Get answers to common questions about digital marketing, AI automation, and business growth strategies
                </p>
                <div className="inline-flex items-center gap-2 px-6 py-3 glass-effect rounded-full">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-slate-700 font-medium">AI-Powered Solutions</span>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="px-6 pb-20">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8 mb-16">
                {business.faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className="group card-hover glass-effect p-8 rounded-3xl relative overflow-hidden"
                    style={{animationDelay: `${index * 0.2}s`}}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-2xl">
                            🤔
                          </div>
                        </div>
                        <div className="flex-1">
                          <h2 className="text-3xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors">
                            {faq.question}
                          </h2>
                          <p className="text-lg text-slate-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact CTA */}
              <div className="text-center">
                <div className="glass-effect p-12 rounded-3xl max-w-4xl mx-auto relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
                  <div className="relative z-10">
                    <div className="mb-8">
                      <h2 className="text-4xl font-bold text-slate-800 mb-4">
                        Still Have <span className="gradient-text">Questions?</span>
                      </h2>
                      <p className="text-xl text-slate-600 mb-8">
                        Contact us directly for personalized answers about your business needs
                      </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-2">Call Us</h3>
                        <a href="tel:760-413-3508" className="text-blue-600 hover:text-blue-500 transition-colors text-lg font-semibold">
                          760-413-3508
                        </a>
                      </div>

                      <div className="text-center">
                        <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-2">Email Us</h3>
                        <a href="mailto:jeff@swingpointmedia.com" className="text-emerald-600 hover:text-emerald-500 transition-colors text-lg font-semibold">
                          jeff@swingpointmedia.com
                        </a>
                      </div>

                      <div className="text-center">
                        <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-2">Hours</h3>
                        <p className="text-slate-600 text-lg">
                          Mon-Fri 9am-4pm<br />
                          <span className="text-sm">Weekends Closed</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                      <Link 
                        href="/business/swingpointmedia" 
                        className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                      >
                        <span className="flex items-center gap-2">
                          View Business Profile
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
                          Call Now
                          <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </span>
                      </a>
                    </div>
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

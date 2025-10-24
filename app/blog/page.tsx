import { Metadata } from 'next'
import Link from 'next/link'
import businessesData from '@/data/businesses.json'

export const metadata: Metadata = {
  title: 'AI Automation Blog - SwingPointMedia | Coachella Valley Digital Marketing Insights',
  description: 'Latest insights on AI automation, content marketing, and digital transformation for service-based businesses. Expert tips and strategies from The AI Architect serving the Coachella Valley.',
  keywords: 'AI automation blog, content marketing insights, digital transformation, business automation, AI consulting, Coachella Valley, digital marketing tips',
  openGraph: {
    title: 'AI Automation Blog - SwingPointMedia',
    description: 'Latest insights on AI automation, content marketing, and digital transformation for service-based businesses.',
    type: 'website',
    locale: 'en_US',
    url: 'https://swingpointmedia.com/blog',
    siteName: 'SwingPointMedia',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Automation Blog - SwingPointMedia',
    description: 'Latest insights on AI automation, content marketing, and digital transformation for service-based businesses.',
  },
}

export default function BlogPage() {
  const business = businessesData.businesses[0]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 ai-pattern opacity-20"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{animationDelay: '2s'}}></div>

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
                <span className="text-slate-800">Blog</span>
              </h1>
              <p className="text-xl text-slate-500 max-w-3xl mx-auto mb-12 leading-relaxed">
                Latest insights on AI automation, content marketing, and digital transformation for service-based businesses.
              </p>
              <div className="inline-flex items-center gap-2 px-6 py-3 glass-effect rounded-full">
                <span className="text-2xl">📝</span>
                <span className="text-slate-700 font-medium">Expert Insights from The AI Architect</span>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="px-6 pb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {business.blogPosts.map((post, index) => (
                <article 
                  key={index}
                  className="group card-hover glass-effect p-8 rounded-3xl relative overflow-hidden"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4">
                        <span className="text-2xl">📄</span>
                      </div>
                      <h2 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-slate-600 leading-relaxed mb-6">
                        {post.excerpt}
                      </p>
                    </div>
                    
                    <a 
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-2 text-blue-600 hover:text-blue-500 font-semibold transition-colors"
                    >
                      Read Full Article
                      <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-20 text-center">
              <div className="glass-effect p-12 rounded-3xl max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-800 mb-6">
                  Ready to Implement <span className="gradient-text">AI Automation</span>?
                </h2>
                <p className="text-xl text-slate-600 mb-8">
                  Don't just read about AI automation - experience it. Get your free assessment and discover how AI can transform your business.
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
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

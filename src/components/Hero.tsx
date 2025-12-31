import Link from 'next/link'
import ShieldLogo from './ShieldLogo'

const stats = [
  { value: '99%', label: 'Faster than manual audits' },
  { value: '90%', label: 'Cost reduction' },
  { value: '4+', label: 'Chains supported' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      
      {/* Glow Effect */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-royal-blue/5 rounded-full blur-3xl" />
      </div>

      {/* Background Theta */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
        <ShieldLogo size={600} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-light-blue text-accent-blue px-4 py-2 rounded-full text-sm font-semibold mb-8">
          <span className="w-2 h-2 bg-accent-green rounded-full animate-pulse" />
          Now in Early Access
        </div>

        {/* Headline */}
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-deep-blue mb-6 leading-tight">
          <span className="text-accent-blue">AI-Powered Security</span>
          <br />
          for Smart Contracts
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-royal-blue max-w-2xl mx-auto mb-10">
          Scan your code in minutes, not weeks. ThetaCore, our multi-agent AI engine, 
          detects vulnerabilities that traditional tools miss — at a fraction of the cost.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link href="#early-access" className="btn-primary text-lg px-8 py-4">
            Start Free Scan
          </Link>
          <Link href="#how-it-works" className="btn-secondary text-lg px-8 py-4">
            See How It Works
          </Link>
        </div>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 justify-center">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-4xl md:text-5xl font-bold text-deep-blue mb-2">
                {stat.value}
              </div>
              <div className="text-silver text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

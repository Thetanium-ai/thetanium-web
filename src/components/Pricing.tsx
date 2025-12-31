import Link from 'next/link'

interface PricingFeature {
  text: string
  included: boolean
}

interface PricingTier {
  name: string
  price: string
  period: string
  description: string
  features: PricingFeature[]
  cta: string
  featured: boolean
}

const tiers: PricingTier[] = [
  {
    name: 'Free',
    price: '$0',
    period: '',
    description: 'Forever free',
    features: [
      { text: '5 scans per month', included: true },
      { text: 'Basic vulnerability detection', included: true },
      { text: 'Chat with Theta', included: true },
      { text: 'API access', included: false },
      { text: 'Real-time monitoring', included: false },
    ],
    cta: 'Get Started',
    featured: false,
  },
  {
    name: 'Pro',
    price: '$49',
    period: '/mo',
    description: 'For individual developers',
    features: [
      { text: 'Unlimited scans', included: true },
      { text: 'Advanced detection', included: true },
      { text: 'Chat with Theta', included: true },
      { text: 'API access', included: true },
      { text: 'Real-time monitoring', included: false },
    ],
    cta: 'Start Free Trial',
    featured: true,
  },
  {
    name: 'Team',
    price: '$199',
    period: '/mo',
    description: 'Up to 5 seats',
    features: [
      { text: 'Everything in Pro', included: true },
      { text: '5 team members', included: true },
      { text: 'Real-time monitoring', included: true },
      { text: 'CI/CD integration', included: true },
      { text: 'Priority support', included: true },
    ],
    cta: 'Contact Sales',
    featured: false,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For organizations',
    features: [
      { text: 'Everything in Team', included: true },
      { text: 'Unlimited seats', included: true },
      { text: 'Hybrid audit (AI + human)', included: true },
      { text: 'White-label options', included: true },
      { text: 'Dedicated support & SLA', included: true },
    ],
    cta: 'Contact Sales',
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label">Pricing</div>
          <h2 className="section-title">Simple, Transparent Pricing</h2>
          <p className="section-desc">Start free. Scale as you grow.</p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-xl p-6 ${
                tier.featured
                  ? 'bg-gradient-to-br from-royal-blue to-deep-blue text-white shadow-xl scale-105'
                  : 'bg-white border border-silver/30'
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-blue text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <h3 className={`font-display text-xl font-bold mb-2 ${tier.featured ? 'text-white' : 'text-deep-blue'}`}>
                {tier.name}
              </h3>
              
              <div className="flex items-baseline gap-1 mb-2">
                <span className={`font-display text-4xl font-bold ${tier.featured ? 'text-white' : 'text-deep-blue'}`}>
                  {tier.price}
                </span>
                {tier.period && (
                  <span className={tier.featured ? 'text-white/70' : 'text-silver'}>
                    {tier.period}
                  </span>
                )}
              </div>
              
              <p className={`text-sm mb-6 ${tier.featured ? 'text-white/80' : 'text-royal-blue'}`}>
                {tier.description}
              </p>

              <ul className="space-y-3 mb-6">
                {tier.features.map((feature) => (
                  <li key={feature.text} className="flex items-center gap-2 text-sm">
                    {feature.included ? (
                      <svg className={`w-5 h-5 ${tier.featured ? 'text-accent-green' : 'text-accent-green'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className={`w-5 h-5 ${tier.featured ? 'text-white/30' : 'text-silver'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    )}
                    <span className={feature.included ? '' : tier.featured ? 'text-white/40' : 'text-silver'}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="#early-access"
                className={`block text-center py-3 rounded-lg font-semibold transition-all ${
                  tier.featured
                    ? 'bg-white text-deep-blue hover:bg-gray-100'
                    : 'bg-deep-blue text-white hover:bg-royal-blue'
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

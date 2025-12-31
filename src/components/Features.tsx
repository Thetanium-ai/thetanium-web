interface Feature {
  icon: string
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: '⚡',
    title: 'Instant Analysis',
    description: 'Get comprehensive security reports in minutes, not weeks. ThetaCore processes your entire codebase in real-time.',
  },
  {
    icon: '💬',
    title: 'Chat with Theta',
    description: 'Ask questions about your code in natural language. Get explanations, suggestions, and security insights conversationally.',
  },
  {
    icon: '🧠',
    title: 'Multi-Agent AI',
    description: 'Specialized agents work together — analyzing business logic, detecting vulnerabilities, and verifying implementation.',
  },
  {
    icon: '📡',
    title: 'Real-Time Monitoring',
    description: 'Monitor deployed contracts 24/7. Get instant alerts for suspicious activity and potential exploits.',
  },
  {
    icon: '🔗',
    title: 'Multi-Chain Support',
    description: 'Full support for Solidity, Rust, and Move across Ethereum, Solana, Aptos, and Sui.',
  },
  {
    icon: '🔌',
    title: 'Developer Integrations',
    description: 'Seamlessly integrates with VSCode, GitHub, and your CI/CD pipeline for continuous security.',
  },
  {
    icon: '👥',
    title: 'Hybrid Audit',
    description: 'Need extra assurance? Add human expert review on top of AI analysis for institutional-grade security.',
  },
  {
    icon: '📊',
    title: 'Detailed Reports',
    description: 'Interactive reports with severity ratings, code snippets, and actionable remediation steps.',
  },
  {
    icon: '🔄',
    title: 'Continuous Learning',
    description: 'ThetaCore improves with every scan, learning from new patterns and emerging attack vectors.',
  },
  {
    icon: '🏆',
    title: 'Theta Arena',
    description: 'Our community platform — elite researchers compete in time-boxed audit events for protocols and ecosystems.',
  },
  {
    icon: '📚',
    title: 'Theta-Bench',
    description: 'Proprietary security benchmark dataset powering ThetaCore\'s industry-leading detection.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label">Features</div>
          <h2 className="section-title">Security at the Speed of Development</h2>
          <p className="section-desc">
            Powered by ThetaCore — our multi-agent AI engine trained on thousands of vulnerabilities.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white border border-silver/30 rounded-xl p-6 hover:shadow-lg hover:border-accent-blue/30 transition-all duration-300 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="font-display text-xl font-bold text-deep-blue mb-2">
                {feature.title}
              </h3>
              <p className="text-royal-blue text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

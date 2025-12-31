const steps = [
  {
    number: '1',
    title: 'Upload Code',
    description: 'Paste your contract, connect GitHub, or use our IDE plugin.',
  },
  {
    number: '2',
    title: 'ThetaCore Analyzes',
    description: 'Multi-agent AI scans for vulnerabilities and logic flaws.',
  },
  {
    number: '3',
    title: 'Review & Chat',
    description: 'Get detailed findings. Ask Theta questions about your code.',
  },
  {
    number: '4',
    title: 'Deploy Safely',
    description: 'Fix issues, rescan, and deploy with confidence.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-light-blue/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label">How It Works</div>
          <h2 className="section-title">From Code to Secure in Minutes</h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-silver/50" />
              )}
              
              <div className="relative bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                {/* Number */}
                <div className="w-16 h-16 bg-gradient-to-br from-royal-blue to-deep-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-display text-2xl font-bold text-white">
                    {step.number}
                  </span>
                </div>
                
                <h3 className="font-display text-lg font-bold text-deep-blue mb-2">
                  {step.title}
                </h3>
                <p className="text-royal-blue text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

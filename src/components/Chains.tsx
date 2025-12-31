const chains = [
  { name: 'Ethereum', color: '#627EEA' },
  { name: 'Solana', color: '#00FFA3' },
  { name: 'Aptos', color: '#2DD8A7' },
  { name: 'Sui', color: '#6FBCF0' },
]

const upcomingChains = ['Lisk', 'Base', 'Arbitrum', 'Polygon']

export default function Chains() {
  return (
    <section id="chains" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="section-label">Multi-Chain</div>
        <h2 className="section-title">Supported Blockchains</h2>
        
        {/* Active Chains */}
        <div className="flex flex-wrap justify-center gap-4 mt-12 mb-8">
          {chains.map((chain) => (
            <div
              key={chain.name}
              className="px-8 py-4 bg-gradient-to-br from-deep-blue to-royal-blue text-white rounded-xl font-display font-semibold text-lg shadow-md hover:shadow-lg transition-shadow"
            >
              {chain.name}
            </div>
          ))}
        </div>
        
        {/* Coming Soon */}
        <p className="text-royal-blue">
          More chains coming soon including{' '}
          <span className="font-semibold">
            {upcomingChains.join(', ')}
          </span>
        </p>
      </div>
    </section>
  )
}

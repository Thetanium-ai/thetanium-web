import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-br from-deep-blue to-royal-blue rounded-3xl p-12 text-center relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-blue rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Secure Your Code?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Join developers and researchers who are shipping safer smart contracts, faster.
            </p>
            <Link
              href="#early-access"
              className="inline-block bg-white text-deep-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Start Free Scan
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

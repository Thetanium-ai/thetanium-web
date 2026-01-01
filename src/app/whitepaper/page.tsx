import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Whitepaper — Thetanium',
  description: 'Thetanium Whitepaper: AI-powered smart contract security platform.',
}

export default function Whitepaper() {
  return (
    <main>
      <Navbar />

      <article className="pt-32 pb-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="section-label">Whitepaper</div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-deep-blue mb-6">
              Thetanium Whitepaper
            </h1>
          </div>

          {/* Table of Contents */}
          <section className="mb-16 p-8 bg-light-blue/30 rounded-2xl">
            <h2 className="font-display text-2xl font-bold text-deep-blue mb-6">Table of Contents</h2>
            <nav className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {[
                { num: '1', title: 'Executive Summary' },
                { num: '2', title: 'Mission' },
                { num: '3', title: 'Market Opportunity' },
                { num: '4', title: 'The Problem' },
                { num: '5', title: 'Our Solution' },
                { num: '6', title: 'Products' },
                { num: '7', title: 'Technology' },
                { num: '8', title: 'Roadmap' },
                { num: '9', title: 'Token Economics' },
                { num: '10', title: 'Conclusion' },
                { num: '11', title: 'Disclaimer' },
              ].map((item) => (
                <a
                  key={item.num}
                  href={`#section-${item.num}`}
                  className="text-royal-blue hover:text-accent-blue transition-colors"
                >
                  {item.num}. {item.title}
                </a>
              ))}
            </nav>
          </section>

          {/* Section 1: Executive Summary */}
          <section id="section-1" className="mb-16">
            <h2 className="font-display text-3xl font-bold text-deep-blue mb-6">1. Executive Summary</h2>
            <div className="prose prose-lg text-royal-blue space-y-4">
              <p>
                Thetanium is an AI-powered smart contract security platform designed to make institutional-grade security
                accessible to everyone. As the web evolves from human-operated protocols to AI-driven applications,
                security infrastructure must evolve from reactive audits to continuous, programmable protection.
              </p>
              <p>
                Our flagship product, ThetaCore, is a multi-agent AI engine that analyzes smart contracts in minutes — not
                weeks — at a fraction of traditional audit costs. By combining advanced machine learning with deep
                security expertise, Thetanium delivers audit-grade analysis that detects business logic vulnerabilities
                traditional tools miss.
              </p>
              <blockquote className="border-l-4 border-accent-blue pl-6 italic text-deep-blue my-8">
                &ldquo;Making precision-engineered security accessible and affordable for the modern web.&rdquo;
              </blockquote>

              <h3 className="font-display text-xl font-bold text-deep-blue mt-8 mb-4">Key Highlights</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>99% faster than traditional manual audits</li>
                <li>90% cost reduction compared to legacy security firms</li>
                <li>Multi-chain support: Ethereum, Solana, Aptos, Sui</li>
                <li>ThetaCore: Proprietary multi-agent AI engine</li>
                <li>Chat with Theta: Natural language security analysis</li>
                <li>Real-time monitoring for deployed contracts</li>
                <li>Hybrid Audit: AI + human expert review</li>
                <li>Theta Arena: Competitive audits and researcher community</li>
                <li>Developer integrations: VSCode, GitHub, GitLab, CI/CD</li>
              </ul>
            </div>
          </section>

          {/* Section 2: Mission */}
          <section id="section-2" className="mb-16">
            <h2 className="font-display text-3xl font-bold text-deep-blue mb-6">2. Mission</h2>
            <div className="prose prose-lg text-royal-blue space-y-4">
              <p className="text-xl font-semibold text-deep-blue">
                Making precision-engineered security accessible and affordable for the modern web.
              </p>
              <p>
                The smart contract security market is projected to exceed $15 billion by 2028, yet the vast majority of
                deployed contracts remain unaudited. Traditional security audits are expensive, slow, and inaccessible to
                most developers. This creates a critical gap in the ecosystem — one that malicious actors exploit daily.
              </p>
              <p>
                Thetanium exists to close this gap. We believe everyone, regardless of budget or technical expertise,
                deserves access to world-class security tooling. Our mission is to democratize security without
                compromising quality.
              </p>

              <h3 className="font-display text-xl font-bold text-deep-blue mt-8 mb-4">Core Principles</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Accessible</strong> — Free tier for all developers, no gatekeeping</li>
                <li><strong>Affordable</strong> — 90% cheaper than traditional audits</li>
                <li><strong>Continuous</strong> — AI-powered, real-time, always-on protection</li>
                <li><strong>Precise</strong> — Institutional-grade detection accuracy</li>
              </ul>
            </div>
          </section>

          {/* Section 3: Market Opportunity */}
          <section id="section-3" className="mb-16">
            <h2 className="font-display text-3xl font-bold text-deep-blue mb-6">3. Market Opportunity</h2>
            <div className="prose prose-lg text-royal-blue space-y-4">
              <p>
                The blockchain security market represents one of the largest opportunities in Web3 infrastructure. As
                decentralized applications proliferate and manage increasingly significant value, the demand for robust
                security solutions continues to accelerate.
              </p>

              <h3 className="font-display text-xl font-bold text-deep-blue mt-8 mb-4">The Security Gap</h3>
              <p>
                According to DeFiLlama and Rekt.news, over $6 billion has been lost to smart contract exploits since 2020,
                with 2023-2024 alone accounting for approximately $4 billion in losses. Despite these figures, the vast
                majority of deployed contracts remain unaudited due to cost and time constraints.
              </p>

              <h3 className="font-display text-xl font-bold text-deep-blue mt-8 mb-4">Market Dynamics</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-silver/30 rounded-lg overflow-hidden">
                  <thead className="bg-light-blue/50">
                    <tr>
                      <th className="border border-silver/30 px-4 py-3 text-left text-deep-blue">Challenge</th>
                      <th className="border border-silver/30 px-4 py-3 text-left text-deep-blue">Current State</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border border-silver/30 px-4 py-3">Traditional audit cost</td><td className="border border-silver/30 px-4 py-3 font-semibold">$30K - $500K per engagement</td></tr>
                    <tr><td className="border border-silver/30 px-4 py-3">Audit timeline</td><td className="border border-silver/30 px-4 py-3 font-semibold">2-8 weeks depending on complexity</td></tr>
                    <tr><td className="border border-silver/30 px-4 py-3">Qualified auditors globally</td><td className="border border-silver/30 px-4 py-3 font-semibold">Limited supply, high demand</td></tr>
                    <tr><td className="border border-silver/30 px-4 py-3">New contracts deployed</td><td className="border border-silver/30 px-4 py-3 font-semibold">Thousands daily across chains</td></tr>
                    <tr><td className="border border-silver/30 px-4 py-3">Audit coverage</td><td className="border border-silver/30 px-4 py-3 font-semibold">Minority of deployed contracts</td></tr>
                  </tbody>
                </table>
              </div>

              <h3 className="font-display text-xl font-bold text-deep-blue mt-8 mb-4">The Opportunity</h3>
              <p>
                The structural imbalance between security demand and auditor supply creates a significant market opportunity.
                AI-native security solutions can scale horizontally in ways human-only teams cannot, addressing the long tail
                of projects that currently go unaudited. As the blockchain ecosystem matures and institutional capital flows
                increase, the demand for accessible, continuous security infrastructure will only grow.
              </p>
            </div>
          </section>

          {/* Section 4: The Problem */}
          <section id="section-4" className="mb-16">
            <h2 className="font-display text-3xl font-bold text-deep-blue mb-6">4. The Problem</h2>
            <div className="prose prose-lg text-royal-blue space-y-4">
              <p>
                The current smart contract security landscape is fundamentally broken. Despite billions of dollars flowing
                through decentralized protocols, the security infrastructure protecting these systems has not kept pace.
              </p>

              <h3 className="font-display text-xl font-bold text-deep-blue mt-8 mb-4">Key Challenges</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-deep-blue">Prohibitive Costs</h4>
                  <p>Traditional audits cost $50,000 to $500,000, putting professional security out of reach for most projects.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-deep-blue">Slow Turnaround</h4>
                  <p>Manual audits take 4-8 weeks, creating dangerous gaps in the development cycle.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-deep-blue">Limited Coverage</h4>
                  <p>Static analysis tools only catch known vulnerability patterns, missing the business logic flaws that cause the largest exploits.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-deep-blue">Talent Shortage</h4>
                  <p>There simply aren&apos;t enough qualified security researchers to audit the volume of contracts being deployed.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-deep-blue">One-Time Snapshots</h4>
                  <p>Traditional audits provide point-in-time assessments, offering no protection against vulnerabilities introduced in subsequent updates.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Our Solution */}
          <section id="section-5" className="mb-16">
            <h2 className="font-display text-3xl font-bold text-deep-blue mb-6">5. Our Solution</h2>
            <div className="prose prose-lg text-royal-blue space-y-4">
              <p>
                Thetanium addresses these challenges with AI-native infrastructure that delivers audit-grade analysis in
                minutes at less than 1% of traditional cost.
              </p>

              <h3 className="font-display text-xl font-bold text-deep-blue mt-8 mb-4">How We&apos;re Different</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-deep-blue">AI-First Architecture</h4>
                  <p>ThetaCore uses a multi-agent system that mirrors how elite security research teams operate.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-deep-blue">Minutes, Not Weeks</h4>
                  <p>Full logic-level analysis completes in minutes, enabling security checks at every stage of development.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-deep-blue">Accessible Pricing</h4>
                  <p>Free tier for individual developers. Pro tier at $49/month. No project should go unaudited due to cost.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-deep-blue">Continuous Learning</h4>
                  <p>Unlike static rule sets, ThetaCore improves with every scan, learning from new patterns and emerging attack vectors.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-deep-blue">Human + AI Hybrid</h4>
                  <p>For institutional clients requiring the highest assurance, our hybrid audit combines AI speed with expert human review.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-deep-blue">Theta Arena</h4>
                  <p>Our community platform — elite researchers compete in time-boxed audit events for protocols and ecosystems.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: Products */}
          <section id="section-6" className="mb-16">
            <h2 className="font-display text-3xl font-bold text-deep-blue mb-6">6. Products</h2>
            <div className="prose prose-lg text-royal-blue space-y-8">

              <div>
                <h3 className="font-display text-xl font-bold text-deep-blue mb-4">ThetaCore Scanner</h3>
                <p>
                  Our flagship AI-powered smart contract security scanner. ThetaCore uses a multi-agent architecture to
                  analyze contracts across multiple dimensions — checking for known vulnerabilities, business logic flaws,
                  and implementation errors.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Full contract analysis in minutes</li>
                  <li>Severity-rated findings with remediation guidance</li>
                  <li>Support for Solidity and Rust</li>
                  <li>Interactive reports with code snippets</li>
                  <li>API access for CI/CD integration</li>
                </ul>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold text-deep-blue mb-4">Chat with Theta</h3>
                <p>
                  Natural language interface for security analysis. Ask questions about your code, get explanations of
                  vulnerabilities, and receive real-time guidance on security best practices.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Conversational code analysis</li>
                  <li>Plain-English vulnerability explanations</li>
                  <li>Security recommendations in context</li>
                  <li>Available on all tiers including Free</li>
                </ul>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold text-deep-blue mb-4">Real-Time Monitoring</h3>
                <p>
                  Continuous on-chain monitoring for deployed contracts. Get instant alerts for suspicious activity,
                  unusual transaction patterns, and potential exploit attempts.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>24/7 contract surveillance</li>
                  <li>Anomaly detection</li>
                  <li>Instant alert notifications</li>
                  <li>Available on Team and Enterprise tiers</li>
                </ul>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold text-deep-blue mb-4">Hybrid Audit</h3>
                <p>
                  For institutional clients requiring the highest level of assurance, Hybrid Audit combines ThetaCore&apos;s
                  AI analysis with review by human security experts.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>AI-powered initial scan</li>
                  <li>Expert human review and verification</li>
                  <li>Formal audit report</li>
                  <li>Available on Enterprise tier</li>
                </ul>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold text-deep-blue mb-4">Theta Arena</h3>
                <p>
                  Thetanium&apos;s community platform for protocol-level security events. We bring together elite security
                  researchers for time-boxed competitive audits where multiple experts compete to find vulnerabilities.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Curated pool of elite security researchers</li>
                  <li>Time-boxed audit competitions for protocols and ecosystems</li>
                  <li>Multiple experts analyzing the same codebase</li>
                  <li>Findings ranked by quality and severity</li>
                  <li>Prize pool rewards top performers in $THETANIUM</li>
                  <li>Researcher reputation and leaderboard system</li>
                  <li>Partnership programs with chains and ecosystems</li>
                </ul>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold text-deep-blue mb-4">Theta-Bench: The Data Moat</h3>
                <p>
                  Theta-Bench is Thetanium&apos;s proprietary security benchmark dataset — the foundation of ThetaCore&apos;s
                  detection capabilities and our key competitive advantage. This curated dataset represents years of
                  vulnerability research and real-world exploit analysis.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Curated vulnerability samples across Solidity, Rust, and Move</li>
                  <li>Real-world exploit patterns from historical incidents</li>
                  <li>Labeled and verified by security experts</li>
                  <li>Continuously updated through CARL feedback loop</li>
                  <li>Powers ThetaCore&apos;s industry-leading detection accuracy</li>
                  <li>Open benchmark release planned for research community</li>
                </ul>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold text-deep-blue mb-4">Pricing</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-silver/30 rounded-lg overflow-hidden">
                    <thead className="bg-light-blue/50">
                      <tr>
                        <th className="border border-silver/30 px-4 py-3 text-left text-deep-blue">Tier</th>
                        <th className="border border-silver/30 px-4 py-3 text-left text-deep-blue">Price</th>
                        <th className="border border-silver/30 px-4 py-3 text-left text-deep-blue">Key Features</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="border border-silver/30 px-4 py-3 font-semibold">Free</td><td className="border border-silver/30 px-4 py-3">$0/mo</td><td className="border border-silver/30 px-4 py-3">5 scans/month, Basic detection, Chat with Theta</td></tr>
                      <tr><td className="border border-silver/30 px-4 py-3 font-semibold">Pro</td><td className="border border-silver/30 px-4 py-3">$49/mo</td><td className="border border-silver/30 px-4 py-3">Unlimited scans, Advanced detection, API access</td></tr>
                      <tr><td className="border border-silver/30 px-4 py-3 font-semibold">Team</td><td className="border border-silver/30 px-4 py-3">$199/mo</td><td className="border border-silver/30 px-4 py-3">5 seats, Real-time monitoring, CI/CD, Priority support</td></tr>
                      <tr><td className="border border-silver/30 px-4 py-3 font-semibold">Enterprise</td><td className="border border-silver/30 px-4 py-3">Custom</td><td className="border border-silver/30 px-4 py-3">Unlimited seats, Hybrid audit, White-label, SLA</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold text-deep-blue mb-4">How It Works</h3>
                <ol className="list-decimal pl-6 space-y-2">
                  <li><strong>Upload Code</strong> — Paste your contract, connect GitHub, or use our IDE plugin.</li>
                  <li><strong>ThetaCore Analyzes</strong> — Multi-agent AI scans for vulnerabilities and logic flaws.</li>
                  <li><strong>Review & Chat</strong> — Get detailed findings. Ask Theta questions about your code.</li>
                  <li><strong>Deploy Safely</strong> — Fix issues, rescan, and deploy with confidence.</li>
                </ol>
              </div>
            </div>
          </section>

          {/* Section 7: Technology */}
          <section id="section-7" className="mb-16">
            <h2 className="font-display text-3xl font-bold text-deep-blue mb-6">7. Technology</h2>
            <div className="prose prose-lg text-royal-blue space-y-8">

              <div>
                <h3 className="font-display text-xl font-bold text-deep-blue mb-4">ThetaCore Architecture</h3>
                <p>
                  ThetaCore is Thetanium&apos;s proprietary security analysis engine. Rather than relying on pattern matching
                  or single-pass static analysis, ThetaCore employs a multi-agent architecture where specialized analysis
                  modules operate in parallel and cross-validate findings.
                </p>
                <p className="mt-4">
                  The system combines three complementary approaches:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li><strong>Static Analysis</strong> — AST parsing, control flow graph construction, and data flow analysis to identify known vulnerability patterns</li>
                  <li><strong>Symbolic Execution</strong> — Path-sensitive analysis that explores execution branches to find edge cases and constraint violations</li>
                  <li><strong>LLM-Powered Reasoning</strong> — Large language models trained on security datasets that understand business logic, identify specification mismatches, and explain findings in natural language</li>
                </ul>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold text-deep-blue mb-4">Multi-Agent Analysis Pipeline</h3>
                <p>
                  Each scan activates multiple specialized agents that analyze the contract from different perspectives:
                </p>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full border-collapse border border-silver/30 rounded-lg overflow-hidden">
                    <thead className="bg-light-blue/50">
                      <tr>
                        <th className="border border-silver/30 px-4 py-3 text-left text-deep-blue">Agent</th>
                        <th className="border border-silver/30 px-4 py-3 text-left text-deep-blue">Focus Area</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="border border-silver/30 px-4 py-3 font-semibold">Reentrancy Analyzer</td><td className="border border-silver/30 px-4 py-3">Cross-function and cross-contract reentrancy, state inconsistencies</td></tr>
                      <tr><td className="border border-silver/30 px-4 py-3 font-semibold">Access Control Auditor</td><td className="border border-silver/30 px-4 py-3">Permission hierarchies, ownership patterns, authorization logic</td></tr>
                      <tr><td className="border border-silver/30 px-4 py-3 font-semibold">Economic Logic Validator</td><td className="border border-silver/30 px-4 py-3">Oracle manipulation, flash loan vectors, MEV exposure</td></tr>
                      <tr><td className="border border-silver/30 px-4 py-3 font-semibold">Invariant Checker</td><td className="border border-silver/30 px-4 py-3">Protocol invariants, accounting consistency, edge cases</td></tr>
                      <tr><td className="border border-silver/30 px-4 py-3 font-semibold">Specification Verifier</td><td className="border border-silver/30 px-4 py-3">Implementation vs. intended behavior, documentation mismatches</td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-4">
                  Findings from each agent are aggregated, deduplicated, and ranked by severity. Cross-validation between
                  agents reduces false positives while ensuring comprehensive coverage.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold text-deep-blue mb-4">Detection Categories</h3>
                <p>ThetaCore detects vulnerabilities across the following categories:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li><strong>Reentrancy</strong> — Single-function, cross-function, cross-contract, and read-only reentrancy</li>
                  <li><strong>Access Control</strong> — Missing modifiers, privilege escalation, improper authorization</li>
                  <li><strong>Integer Handling</strong> — Overflow/underflow, precision loss, rounding errors</li>
                  <li><strong>External Calls</strong> — Unchecked returns, arbitrary calls, callback vulnerabilities</li>
                  <li><strong>Oracle & Price Feeds</strong> — Manipulation vectors, stale data, single-source dependencies</li>
                  <li><strong>Logic Errors</strong> — Incorrect state transitions, flawed calculations, edge cases</li>
                  <li><strong>Gas & DoS</strong> — Unbounded loops, block gas limits, griefing vectors</li>
                </ul>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold text-deep-blue mb-4">Continuous Learning (CARL)</h3>
                <p>
                  ThetaCore implements a Continuous Auditing and Retraining Loop (CARL) that enables the system to improve
                  over time. New vulnerability patterns discovered in the wild, findings from Theta Arena competitions,
                  and validated community submissions are incorporated into the training pipeline.
                </p>
                <p className="mt-4">
                  This feedback loop ensures ThetaCore stays current with emerging attack vectors rather than being limited
                  to vulnerabilities known at training time.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold text-deep-blue mb-4">Comparison with Existing Tools</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-silver/30 rounded-lg overflow-hidden">
                    <thead className="bg-light-blue/50">
                      <tr>
                        <th className="border border-silver/30 px-4 py-3 text-left text-deep-blue">Capability</th>
                        <th className="border border-silver/30 px-4 py-3 text-left text-deep-blue">Static Analyzers</th>
                        <th className="border border-silver/30 px-4 py-3 text-left text-deep-blue">Manual Audits</th>
                        <th className="border border-silver/30 px-4 py-3 text-left text-deep-blue">ThetaCore</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="border border-silver/30 px-4 py-3">Known vulnerability patterns</td><td className="border border-silver/30 px-4 py-3">Yes</td><td className="border border-silver/30 px-4 py-3">Yes</td><td className="border border-silver/30 px-4 py-3">Yes</td></tr>
                      <tr><td className="border border-silver/30 px-4 py-3">Business logic analysis</td><td className="border border-silver/30 px-4 py-3">Limited</td><td className="border border-silver/30 px-4 py-3">Yes</td><td className="border border-silver/30 px-4 py-3">Yes</td></tr>
                      <tr><td className="border border-silver/30 px-4 py-3">Cross-contract analysis</td><td className="border border-silver/30 px-4 py-3">Limited</td><td className="border border-silver/30 px-4 py-3">Yes</td><td className="border border-silver/30 px-4 py-3">Yes</td></tr>
                      <tr><td className="border border-silver/30 px-4 py-3">Natural language explanations</td><td className="border border-silver/30 px-4 py-3">No</td><td className="border border-silver/30 px-4 py-3">Yes</td><td className="border border-silver/30 px-4 py-3">Yes</td></tr>
                      <tr><td className="border border-silver/30 px-4 py-3">Analysis time</td><td className="border border-silver/30 px-4 py-3">Minutes</td><td className="border border-silver/30 px-4 py-3">Weeks</td><td className="border border-silver/30 px-4 py-3">Minutes</td></tr>
                      <tr><td className="border border-silver/30 px-4 py-3">Continuous improvement</td><td className="border border-silver/30 px-4 py-3">Manual updates</td><td className="border border-silver/30 px-4 py-3">N/A</td><td className="border border-silver/30 px-4 py-3">Automated (CARL)</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold text-deep-blue mb-4">Developer Integrations</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>VSCode Extension</strong> — Real-time analysis as you code with inline annotations</li>
                  <li><strong>GitHub App</strong> — Automated security checks on pull requests with detailed comments</li>
                  <li><strong>GitLab CI/CD</strong> — Pipeline integration with configurable severity thresholds</li>
                  <li><strong>REST API</strong> — Programmatic access for custom integrations and automation</li>
                  <li><strong>CLI Tool</strong> — Local scanning for development and scripting workflows</li>
                </ul>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold text-deep-blue mb-4">Language Support</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-silver/30 rounded-lg overflow-hidden">
                    <thead className="bg-light-blue/50">
                      <tr>
                        <th className="border border-silver/30 px-4 py-3 text-left text-deep-blue">Language</th>
                        <th className="border border-silver/30 px-4 py-3 text-left text-deep-blue">Status</th>
                        <th className="border border-silver/30 px-4 py-3 text-left text-deep-blue">Ecosystems</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="border border-silver/30 px-4 py-3 font-semibold">Solidity</td><td className="border border-silver/30 px-4 py-3">Full Support</td><td className="border border-silver/30 px-4 py-3">Ethereum, Arbitrum, Optimism, Base, Polygon, BSC, Avalanche</td></tr>
                      <tr><td className="border border-silver/30 px-4 py-3 font-semibold">Rust (Anchor)</td><td className="border border-silver/30 px-4 py-3">Full Support</td><td className="border border-silver/30 px-4 py-3">Solana</td></tr>
                      <tr><td className="border border-silver/30 px-4 py-3 font-semibold">Move</td><td className="border border-silver/30 px-4 py-3">Full Support</td><td className="border border-silver/30 px-4 py-3">Aptos, Sui</td></tr>
                      <tr><td className="border border-silver/30 px-4 py-3 font-semibold">Vyper</td><td className="border border-silver/30 px-4 py-3">Beta</td><td className="border border-silver/30 px-4 py-3">Ethereum, EVM chains</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* Section 8: Roadmap */}
          <section id="section-8" className="mb-16">
            <h2 className="font-display text-3xl font-bold text-deep-blue mb-6">8. Roadmap</h2>
            <div className="prose prose-lg text-royal-blue space-y-8">

              <div>
                <h3 className="font-display text-xl font-bold text-deep-blue mb-4">Q1 2026 — Platform Launch</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>ThetaCore Scanner public beta</li>
                  <li>Chat with Theta release</li>
                  <li>Free and Pro tier availability</li>
                  <li>VSCode and GitHub integrations</li>
                  <li>Ethereum, Solana, Aptos, Sui support</li>
                </ul>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold text-deep-blue mb-4">Q2 2026 — Growth & Community</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Real-time monitoring launch</li>
                  <li>Team tier release</li>
                  <li>CI/CD pipeline integrations</li>
                  <li>Theta Arena beta launch</li>
                  <li>Security researcher onboarding</li>
                </ul>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold text-deep-blue mb-4">Q3 2026 — Enterprise & Token</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>$THETANIUM token launch</li>
                  <li>Enterprise tier and Hybrid Audit</li>
                  <li>Staking and governance features</li>
                  <li>Theta Arena reputation system</li>
                  <li>First ecosystem audit partnerships</li>
                </ul>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold text-deep-blue mb-4">Q4 2026 & Beyond</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Theta-Bench open-source release</li>
                  <li>White-label solutions for partners</li>
                  <li>Advanced monitoring features</li>
                  <li>Global Theta Arena expansion</li>
                  <li>Additional chain integrations</li>
                </ul>
              </div>

            </div>
          </section>

          {/* Section 9: Token Economics */}
          <section id="section-9" className="mb-16">
            <h2 className="font-display text-3xl font-bold text-deep-blue mb-6">9. Token Economics</h2>
            <div className="prose prose-lg text-royal-blue space-y-6">
              <p>
                The $THETANIUM token creates the economic foundation for Thetanium&apos;s security infrastructure, aligning
                incentives across developers, security researchers, and the community.
              </p>

              <h3 className="font-display text-xl font-bold text-deep-blue mt-8 mb-4">Token Utility</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Payment</strong> — Primary payment token for services. 20-30% discount vs. fiat.</li>
                <li><strong>Staking</strong> — Stake to earn yield from platform fees. Est. APY: 8-15%.</li>
                <li><strong>Governance</strong> — Vote on platform parameters, features, and treasury allocation.</li>
                <li><strong>Theta Arena</strong> — Fund competitive audit events, stake for researcher credibility, earn rewards.</li>
                <li><strong>Reputation</strong> — Stake-backed researcher rankings and quality contribution rewards.</li>
              </ul>

              <h3 className="font-display text-xl font-bold text-deep-blue mt-8 mb-4">Token Distribution</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-silver/30 rounded-lg overflow-hidden">
                  <thead className="bg-light-blue/50">
                    <tr>
                      <th className="border border-silver/30 px-4 py-3 text-left text-deep-blue">Allocation</th>
                      <th className="border border-silver/30 px-4 py-3 text-left text-deep-blue">Percentage</th>
                      <th className="border border-silver/30 px-4 py-3 text-left text-deep-blue">Vesting</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border border-silver/30 px-4 py-3">Community & Ecosystem</td><td className="border border-silver/30 px-4 py-3 font-semibold">40%</td><td className="border border-silver/30 px-4 py-3">24 months linear</td></tr>
                    <tr><td className="border border-silver/30 px-4 py-3">Team & Advisors</td><td className="border border-silver/30 px-4 py-3 font-semibold">20%</td><td className="border border-silver/30 px-4 py-3">12 mo cliff, 36 mo linear</td></tr>
                    <tr><td className="border border-silver/30 px-4 py-3">Treasury</td><td className="border border-silver/30 px-4 py-3 font-semibold">15%</td><td className="border border-silver/30 px-4 py-3">Governance controlled</td></tr>
                    <tr><td className="border border-silver/30 px-4 py-3">Investors</td><td className="border border-silver/30 px-4 py-3 font-semibold">15%</td><td className="border border-silver/30 px-4 py-3">6 mo cliff, 24 mo linear</td></tr>
                    <tr><td className="border border-silver/30 px-4 py-3">Liquidity</td><td className="border border-silver/30 px-4 py-3 font-semibold">10%</td><td className="border border-silver/30 px-4 py-3">At TGE</td></tr>
                  </tbody>
                </table>
              </div>

              <h3 className="font-display text-xl font-bold text-deep-blue mt-8 mb-4">Token Details</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-silver/30 rounded-lg overflow-hidden">
                  <thead className="bg-light-blue/50">
                    <tr>
                      <th className="border border-silver/30 px-4 py-3 text-left text-deep-blue">Parameter</th>
                      <th className="border border-silver/30 px-4 py-3 text-left text-deep-blue">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border border-silver/30 px-4 py-3">Token Name</td><td className="border border-silver/30 px-4 py-3 font-semibold">Thetanium</td></tr>
                    <tr><td className="border border-silver/30 px-4 py-3">Symbol</td><td className="border border-silver/30 px-4 py-3 font-semibold">$THETANIUM</td></tr>
                    <tr><td className="border border-silver/30 px-4 py-3">Total Supply</td><td className="border border-silver/30 px-4 py-3 font-semibold">1,000,000,000</td></tr>
                    <tr><td className="border border-silver/30 px-4 py-3">Token Type</td><td className="border border-silver/30 px-4 py-3 font-semibold">ERC-20 / Multi-chain</td></tr>
                    <tr><td className="border border-silver/30 px-4 py-3">TGE Date</td><td className="border border-silver/30 px-4 py-3 font-semibold">Q3 2026</td></tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm italic mt-4">
                Note: Token details are subject to change. Final parameters will be announced prior to TGE.
              </p>
            </div>
          </section>

          {/* Section 10: Conclusion */}
          <section id="section-10" className="mb-16">
            <h2 className="font-display text-3xl font-bold text-deep-blue mb-6">10. Conclusion</h2>
            <div className="prose prose-lg text-royal-blue space-y-4">
              <p>
                The smart contract security landscape is at an inflection point. As blockchain technology matures and
                manages increasing value, the gap between security demand and available supply continues to widen.
                Traditional approaches cannot scale to meet this challenge.
              </p>
              <p>
                Thetanium offers a new paradigm: AI-native security infrastructure that is fast, affordable, and
                continuously improving. By combining the speed and scalability of AI with the rigor of institutional-grade
                security practices, we&apos;re making professional security accessible to everyone.
              </p>

              <blockquote className="border-l-4 border-accent-blue pl-6 italic text-deep-blue my-8">
                &ldquo;Making precision-engineered security accessible and affordable for the modern web.&rdquo;
              </blockquote>

              <p className="font-semibold text-deep-blue">
                Join us in building the security infrastructure for the modern web.
              </p>
            </div>
          </section>

          {/* Section 11: Disclaimer */}
          <section id="section-11" className="mb-16">
            <h2 className="font-display text-3xl font-bold text-deep-blue mb-6">11. Disclaimer</h2>
            <div className="prose prose-lg text-royal-blue space-y-4 text-sm">
              <p>
                This whitepaper is for informational purposes only and does not constitute financial, legal, or investment
                advice. The information contained herein is subject to change without notice.
              </p>
              <p>
                The $THETANIUM token, if and when launched, may be subject to regulatory requirements in various
                jurisdictions. Prospective participants should conduct their own due diligence and consult with qualified
                advisors before making any decisions.
              </p>
              <p>
                No representation or warranty, express or implied, is made as to the accuracy, completeness, or
                reliability of the information contained in this document. This document does not constitute an offer to
                sell or a solicitation of an offer to buy any tokens or securities.
              </p>
              <p>
                Forward-looking statements in this document are based on current expectations and are subject to risks and
                uncertainties that could cause actual results to differ materially.
              </p>
              <p className="mt-8 text-silver">
                © 2026 Thetanium. All rights reserved.
              </p>
            </div>
          </section>

          {/* Back to Home */}
          <div className="text-center mt-16">
            <Link href="/" className="btn-primary">
              Back to Home
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}

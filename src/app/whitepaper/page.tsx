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
                Smart contract security is broken. Billions of dollars flow through decentralized protocols, yet the
                security infrastructure protecting them relies on manual audits that are slow, expensive, and scarce.
                The result: the majority of deployed contracts go unaudited, and billions are lost to preventable exploits.
              </p>
              <p>
                Thetanium is building the security infrastructure for the next generation of the web. Our core product,
                ThetaCore, combines static analysis, symbolic execution, and large language models into a multi-agent
                system that delivers comprehensive security analysis in minutes rather than weeks.
              </p>
              <p>
                We are not replacing human auditors — we are augmenting them. ThetaCore handles the systematic analysis
                that consumes auditor time, while our Hybrid Audit and Theta Arena products connect protocols with
                expert human reviewers for the highest-stakes deployments.
              </p>

              <h3 className="font-display text-xl font-bold text-deep-blue mt-8 mb-4">What We Offer</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-silver/30 rounded-lg overflow-hidden">
                  <thead className="bg-light-blue/50">
                    <tr>
                      <th className="border border-silver/30 px-4 py-3 text-left text-deep-blue">Product</th>
                      <th className="border border-silver/30 px-4 py-3 text-left text-deep-blue">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border border-silver/30 px-4 py-3 font-semibold">ThetaCore Scanner</td><td className="border border-silver/30 px-4 py-3">AI-powered vulnerability detection with natural language explanations</td></tr>
                    <tr><td className="border border-silver/30 px-4 py-3 font-semibold">Chat with Theta</td><td className="border border-silver/30 px-4 py-3">Conversational interface for security questions and code review</td></tr>
                    <tr><td className="border border-silver/30 px-4 py-3 font-semibold">Real-Time Monitoring</td><td className="border border-silver/30 px-4 py-3">Continuous on-chain surveillance for deployed contracts</td></tr>
                    <tr><td className="border border-silver/30 px-4 py-3 font-semibold">Hybrid Audit</td><td className="border border-silver/30 px-4 py-3">AI analysis combined with expert human review</td></tr>
                    <tr><td className="border border-silver/30 px-4 py-3 font-semibold">Theta Arena</td><td className="border border-silver/30 px-4 py-3">Competitive audit platform connecting protocols with security researchers</td></tr>
                  </tbody>
                </table>
              </div>

              <h3 className="font-display text-xl font-bold text-deep-blue mt-8 mb-4">Supported Ecosystems</h3>
              <p>
                Solidity (Ethereum, Arbitrum, Optimism, Base, Polygon, BSC, Avalanche, Lisk), Rust/Anchor (Solana), Move (Aptos, Sui)
              </p>
            </div>
          </section>

          {/* Section 2: Mission */}
          <section id="section-2" className="mb-16">
            <h2 className="font-display text-3xl font-bold text-deep-blue mb-6">2. Mission</h2>
            <div className="prose prose-lg text-royal-blue space-y-4">
              <p className="text-xl font-semibold text-deep-blue">
                Precision security infrastructure that scales with the ecosystem.
              </p>
              <p>
                The blockchain ecosystem deploys thousands of new contracts daily. Traditional audit firms, constrained by
                human capacity, can only serve a fraction of this demand. The result is a two-tier security landscape:
                well-funded protocols receive thorough audits while the majority ship unreviewed code.
              </p>
              <p>
                Thetanium exists to change this dynamic. By combining AI capabilities with human expertise, we can provide
                meaningful security analysis to every project — from solo developers to institutional protocols.
              </p>

              <h3 className="font-display text-xl font-bold text-deep-blue mt-8 mb-4">Guiding Principles</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-silver/30 rounded-lg overflow-hidden">
                  <tbody>
                    <tr><td className="border border-silver/30 px-4 py-3 font-semibold w-1/4">Accessibility</td><td className="border border-silver/30 px-4 py-3">Free tier available to all developers. Security should not be gated by budget.</td></tr>
                    <tr><td className="border border-silver/30 px-4 py-3 font-semibold">Speed</td><td className="border border-silver/30 px-4 py-3">Analysis in minutes, not weeks. Security checks at every stage of development.</td></tr>
                    <tr><td className="border border-silver/30 px-4 py-3 font-semibold">Depth</td><td className="border border-silver/30 px-4 py-3">Beyond pattern matching. Business logic analysis that catches what static tools miss.</td></tr>
                    <tr><td className="border border-silver/30 px-4 py-3 font-semibold">Transparency</td><td className="border border-silver/30 px-4 py-3">Clear explanations for every finding. Developers understand the &ldquo;why,&rdquo; not just the &ldquo;what.&rdquo;</td></tr>
                  </tbody>
                </table>
              </div>
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
                Smart contract exploits have resulted in billions of dollars in losses. Yet the tools and processes
                designed to prevent these incidents remain stuck in an earlier era of software development.
              </p>

              <h3 className="font-display text-xl font-bold text-deep-blue mt-8 mb-4">Why Current Solutions Fall Short</h3>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-silver/30 rounded-lg overflow-hidden">
                  <thead className="bg-light-blue/50">
                    <tr>
                      <th className="border border-silver/30 px-4 py-3 text-left text-deep-blue">Challenge</th>
                      <th className="border border-silver/30 px-4 py-3 text-left text-deep-blue">Impact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-silver/30 px-4 py-3 font-semibold">Cost Barrier</td>
                      <td className="border border-silver/30 px-4 py-3">Audits priced at $30K-$500K exclude early-stage projects and independent developers</td>
                    </tr>
                    <tr>
                      <td className="border border-silver/30 px-4 py-3 font-semibold">Timeline Friction</td>
                      <td className="border border-silver/30 px-4 py-3">Multi-week audit cycles slow development and create pressure to skip security reviews</td>
                    </tr>
                    <tr>
                      <td className="border border-silver/30 px-4 py-3 font-semibold">Static Tool Limitations</td>
                      <td className="border border-silver/30 px-4 py-3">Pattern-matching tools miss business logic vulnerabilities — the cause of most major exploits</td>
                    </tr>
                    <tr>
                      <td className="border border-silver/30 px-4 py-3 font-semibold">Auditor Scarcity</td>
                      <td className="border border-silver/30 px-4 py-3">Qualified security researchers are in short supply; demand far exceeds capacity</td>
                    </tr>
                    <tr>
                      <td className="border border-silver/30 px-4 py-3 font-semibold">Point-in-Time Coverage</td>
                      <td className="border border-silver/30 px-4 py-3">One-time audits become stale as code evolves; post-audit changes go unreviewed</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-6">
                The consequence is predictable: projects either delay launches waiting for audit slots, skip security
                reviews entirely, or rely solely on automated tools that provide false confidence. Each path carries
                significant risk.
              </p>
            </div>
          </section>

          {/* Section 5: Our Solution */}
          <section id="section-5" className="mb-16">
            <h2 className="font-display text-3xl font-bold text-deep-blue mb-6">5. Our Solution</h2>
            <div className="prose prose-lg text-royal-blue space-y-4">
              <p>
                Thetanium provides a layered security stack that addresses different needs at different stages of
                the development lifecycle.
              </p>

              <h3 className="font-display text-xl font-bold text-deep-blue mt-8 mb-4">The Thetanium Stack</h3>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-silver/30 rounded-lg overflow-hidden">
                  <thead className="bg-light-blue/50">
                    <tr>
                      <th className="border border-silver/30 px-4 py-3 text-left text-deep-blue">Layer</th>
                      <th className="border border-silver/30 px-4 py-3 text-left text-deep-blue">When</th>
                      <th className="border border-silver/30 px-4 py-3 text-left text-deep-blue">How</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-silver/30 px-4 py-3 font-semibold">Development</td>
                      <td className="border border-silver/30 px-4 py-3">While coding</td>
                      <td className="border border-silver/30 px-4 py-3">IDE plugins, Chat with Theta for real-time guidance</td>
                    </tr>
                    <tr>
                      <td className="border border-silver/30 px-4 py-3 font-semibold">Pre-Deployment</td>
                      <td className="border border-silver/30 px-4 py-3">Before launch</td>
                      <td className="border border-silver/30 px-4 py-3">ThetaCore full scan, CI/CD gates, PR checks</td>
                    </tr>
                    <tr>
                      <td className="border border-silver/30 px-4 py-3 font-semibold">High-Stakes Review</td>
                      <td className="border border-silver/30 px-4 py-3">Major releases</td>
                      <td className="border border-silver/30 px-4 py-3">Hybrid Audit (AI + human), Theta Arena competitions</td>
                    </tr>
                    <tr>
                      <td className="border border-silver/30 px-4 py-3 font-semibold">Post-Deployment</td>
                      <td className="border border-silver/30 px-4 py-3">After launch</td>
                      <td className="border border-silver/30 px-4 py-3">Real-time monitoring, anomaly detection, alerts</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="font-display text-xl font-bold text-deep-blue mt-8 mb-4">Key Differentiators</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-deep-blue">AI + Human, Not AI vs. Human</h4>
                  <p>
                    We don&apos;t position AI as a replacement for human auditors. ThetaCore handles systematic analysis
                    efficiently, freeing human experts to focus on complex logic, edge cases, and novel attack vectors.
                    Our Hybrid Audit and Theta Arena products formalize this collaboration.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-deep-blue">Continuous, Not One-Time</h4>
                  <p>
                    Security is integrated into the development workflow, not bolted on at the end. Every commit can
                    trigger a scan. Post-deployment monitoring catches issues that emerge in production.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-deep-blue">Accessible Pricing</h4>
                  <p>
                    Free tier for individual developers. Paid tiers priced for startups and teams, not just enterprises.
                    The goal: no project goes unreviewed due to cost.
                  </p>
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
                      <tr><td className="border border-silver/30 px-4 py-3 font-semibold">Solidity</td><td className="border border-silver/30 px-4 py-3">Full Support</td><td className="border border-silver/30 px-4 py-3">Ethereum, Arbitrum, Optimism, Base, Polygon, BSC, Avalanche, Lisk</td></tr>
                      <tr><td className="border border-silver/30 px-4 py-3 font-semibold">Rust (Anchor)</td><td className="border border-silver/30 px-4 py-3">Full Support</td><td className="border border-silver/30 px-4 py-3">Solana</td></tr>
                      <tr><td className="border border-silver/30 px-4 py-3 font-semibold">Move</td><td className="border border-silver/30 px-4 py-3">Full Support</td><td className="border border-silver/30 px-4 py-3">Aptos, Sui</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* Section 8: Roadmap */}
          <section id="section-8" className="mb-16">
            <h2 className="font-display text-3xl font-bold text-deep-blue mb-6">8. Roadmap</h2>
            <div className="prose prose-lg text-royal-blue space-y-6">
              <p>
                Development is organized into four phases, each building on the previous. Timelines are indicative
                and may adjust based on technical progress and market conditions.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-silver/30 rounded-lg overflow-hidden">
                  <thead className="bg-light-blue/50">
                    <tr>
                      <th className="border border-silver/30 px-4 py-3 text-left text-deep-blue w-1/4">Phase</th>
                      <th className="border border-silver/30 px-4 py-3 text-left text-deep-blue">Focus</th>
                      <th className="border border-silver/30 px-4 py-3 text-left text-deep-blue">Key Deliverables</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-silver/30 px-4 py-3 font-semibold align-top">Phase 1<br/><span className="font-normal text-sm">Q1 2026</span></td>
                      <td className="border border-silver/30 px-4 py-3 align-top">Platform Launch</td>
                      <td className="border border-silver/30 px-4 py-3">
                        <ul className="list-disc pl-4 space-y-1 text-sm">
                          <li>ThetaCore Scanner public beta</li>
                          <li>Chat with Theta release</li>
                          <li>Free and Pro tier availability</li>
                          <li>VSCode and GitHub integrations</li>
                          <li>Multi-chain support (Ethereum, Solana, Aptos, Sui)</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-silver/30 px-4 py-3 font-semibold align-top">Phase 2<br/><span className="font-normal text-sm">Q2 2026</span></td>
                      <td className="border border-silver/30 px-4 py-3 align-top">Token & Community</td>
                      <td className="border border-silver/30 px-4 py-3">
                        <ul className="list-disc pl-4 space-y-1 text-sm">
                          <li>$THETANIUM token launch</li>
                          <li>Theta Arena beta launch with token rewards</li>
                          <li>Staking activation</li>
                          <li>Real-time monitoring for deployed contracts</li>
                          <li>Team tier with collaboration features</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-silver/30 px-4 py-3 font-semibold align-top">Phase 3<br/><span className="font-normal text-sm">Q3 2026</span></td>
                      <td className="border border-silver/30 px-4 py-3 align-top">Enterprise & Growth</td>
                      <td className="border border-silver/30 px-4 py-3">
                        <ul className="list-disc pl-4 space-y-1 text-sm">
                          <li>Enterprise tier and Hybrid Audit service</li>
                          <li>Governance activation</li>
                          <li>Theta Arena reputation and ranking system</li>
                          <li>CI/CD pipeline integrations (GitLab)</li>
                          <li>Initial ecosystem partnerships</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-silver/30 px-4 py-3 font-semibold align-top">Phase 4<br/><span className="font-normal text-sm">Q4 2026+</span></td>
                      <td className="border border-silver/30 px-4 py-3 align-top">Expansion</td>
                      <td className="border border-silver/30 px-4 py-3">
                        <ul className="list-disc pl-4 space-y-1 text-sm">
                          <li>Theta-Bench benchmark dataset (open-source)</li>
                          <li>White-label solutions for partners</li>
                          <li>Advanced threat detection and monitoring</li>
                          <li>Global Theta Arena competitions</li>
                          <li>Additional chain and language support</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm italic mt-4 p-4 bg-light-blue/30 rounded-lg">
                <strong>Note:</strong> This roadmap reflects current planning and is subject to change. We prioritize
                shipping quality over meeting arbitrary deadlines. Updates will be shared via official channels.
              </p>
            </div>
          </section>

          {/* Section 9: Token Economics */}
          <section id="section-9" className="mb-16">
            <h2 className="font-display text-3xl font-bold text-deep-blue mb-6">9. Token Economics</h2>
            <div className="prose prose-lg text-royal-blue space-y-6">
              <p>
                The $THETANIUM token is designed to align incentives across all participants in the Thetanium ecosystem:
                developers seeking security, researchers providing expertise, and protocols requiring continuous protection.
              </p>

              <h3 className="font-display text-xl font-bold text-deep-blue mt-8 mb-4">Core Utility</h3>
              <p>
                Unlike tokens that exist primarily for speculation, $THETANIUM has direct utility within the platform:
              </p>

              <div className="space-y-6 mt-4">
                <div>
                  <h4 className="font-semibold text-deep-blue">Platform Access & Payments</h4>
                  <p>
                    $THETANIUM serves as the primary payment method for Thetanium services. Users paying with $THETANIUM
                    receive discounted rates compared to fiat payments, creating natural demand as platform usage grows.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-deep-blue">Theta Arena Economics</h4>
                  <p>
                    Theta Arena creates a circular economy around security research:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><strong>Protocol Sponsors</strong> — Fund audit competitions in $THETANIUM, attracting researcher attention</li>
                    <li><strong>Researcher Rewards</strong> — Earn $THETANIUM for valid findings, proportional to severity</li>
                    <li><strong>Reputation Staking</strong> — Researchers stake $THETANIUM to signal credibility; higher stakes unlock premium competitions</li>
                    <li><strong>Quality Assurance</strong> — Stake slashing for invalid or plagiarized submissions maintains quality</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-deep-blue">Staking & Fee Distribution</h4>
                  <p>
                    Token holders can stake $THETANIUM to earn a share of platform fees. This creates alignment between
                    token holders and platform success — as more developers use Thetanium, staking rewards increase.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-deep-blue">Governance</h4>
                  <p>
                    Staked $THETANIUM grants voting rights on protocol parameters including fee structures, treasury
                    allocation, and new feature prioritization. Governance follows a time-weighted model where longer
                    staking periods grant proportionally more voting power.
                  </p>
                </div>
              </div>

              <h3 className="font-display text-xl font-bold text-deep-blue mt-8 mb-4">Token Distribution</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-silver/30 rounded-lg overflow-hidden">
                  <thead className="bg-light-blue/50">
                    <tr>
                      <th className="border border-silver/30 px-4 py-3 text-left text-deep-blue">Allocation</th>
                      <th className="border border-silver/30 px-4 py-3 text-left text-deep-blue">%</th>
                      <th className="border border-silver/30 px-4 py-3 text-left text-deep-blue">Vesting</th>
                      <th className="border border-silver/30 px-4 py-3 text-left text-deep-blue">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border border-silver/30 px-4 py-3 font-semibold">Community & Ecosystem</td><td className="border border-silver/30 px-4 py-3">40%</td><td className="border border-silver/30 px-4 py-3">24 mo linear</td><td className="border border-silver/30 px-4 py-3">Arena rewards, grants, airdrops, incentives</td></tr>
                    <tr><td className="border border-silver/30 px-4 py-3 font-semibold">Team & Advisors</td><td className="border border-silver/30 px-4 py-3">20%</td><td className="border border-silver/30 px-4 py-3">12 mo cliff, 36 mo linear</td><td className="border border-silver/30 px-4 py-3">Long-term team alignment</td></tr>
                    <tr><td className="border border-silver/30 px-4 py-3 font-semibold">Treasury</td><td className="border border-silver/30 px-4 py-3">15%</td><td className="border border-silver/30 px-4 py-3">Governance controlled</td><td className="border border-silver/30 px-4 py-3">Protocol development, partnerships</td></tr>
                    <tr><td className="border border-silver/30 px-4 py-3 font-semibold">Investors</td><td className="border border-silver/30 px-4 py-3">15%</td><td className="border border-silver/30 px-4 py-3">6 mo cliff, 24 mo linear</td><td className="border border-silver/30 px-4 py-3">Seed, private, and strategic rounds</td></tr>
                    <tr><td className="border border-silver/30 px-4 py-3 font-semibold">Liquidity</td><td className="border border-silver/30 px-4 py-3">10%</td><td className="border border-silver/30 px-4 py-3">At TGE</td><td className="border border-silver/30 px-4 py-3">DEX/CEX liquidity provision</td></tr>
                  </tbody>
                </table>
              </div>

              <h3 className="font-display text-xl font-bold text-deep-blue mt-8 mb-4">Value Accrual</h3>
              <p>
                $THETANIUM accrues value through multiple mechanisms:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Fee Revenue</strong> — Percentage of platform fees distributed to stakers</li>
                <li><strong>Burn Mechanism</strong> — Portion of fees permanently burned, reducing supply over time</li>
                <li><strong>Staking Lock-up</strong> — Tokens staked for governance and rewards reduce circulating supply</li>
                <li><strong>Arena Deposits</strong> — Researcher stakes and protocol deposits lock tokens during competitions</li>
              </ul>

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
                    <tr><td className="border border-silver/30 px-4 py-3">Total Supply</td><td className="border border-silver/30 px-4 py-3 font-semibold">1,000,000,000 (fixed, deflationary via burn)</td></tr>
                    <tr><td className="border border-silver/30 px-4 py-3">Token Standard</td><td className="border border-silver/30 px-4 py-3 font-semibold">ERC-20 with cross-chain bridges</td></tr>
                    <tr><td className="border border-silver/30 px-4 py-3">Target TGE</td><td className="border border-silver/30 px-4 py-3 font-semibold">Q3 2026</td></tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm italic mt-6 p-4 bg-light-blue/30 rounded-lg">
                <strong>Note:</strong> Token economics are subject to refinement based on market conditions and regulatory
                guidance. Final parameters will be published prior to TGE. This document does not constitute an offer to
                sell tokens.
              </p>
            </div>
          </section>

          {/* Section 10: Conclusion */}
          <section id="section-10" className="mb-16">
            <h2 className="font-display text-3xl font-bold text-deep-blue mb-6">10. Conclusion</h2>
            <div className="prose prose-lg text-royal-blue space-y-4">
              <p>
                The blockchain ecosystem has a security problem that traditional approaches cannot solve at scale.
                Manual audits serve a critical purpose but cannot keep pace with the volume of code being deployed.
                Static analysis tools catch known patterns but miss the business logic flaws that cause major exploits.
              </p>
              <p>
                Thetanium represents a different approach: AI-powered analysis that combines the speed of automation
                with the depth of expert review. ThetaCore provides immediate, accessible security analysis. Hybrid
                Audit and Theta Arena connect protocols with human expertise when stakes are highest.
              </p>
              <p>
                Our goal is straightforward: ensure that every smart contract — regardless of the team&apos;s budget or
                timeline — receives meaningful security review before deployment. By making security accessible and
                continuous, we can reduce the attack surface across the entire ecosystem.
              </p>

              <div className="bg-light-blue/30 p-6 rounded-xl mt-8">
                <h3 className="font-display text-xl font-bold text-deep-blue mb-4">Get Started</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Sign up for early access at <strong>thetaniumai.com</strong></li>
                  <li>Follow development updates on Twitter <strong>@thetanium_ai</strong></li>
                  <li>Review our code on GitHub <strong>github.com/thetanium-ai</strong></li>
                </ul>
              </div>
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

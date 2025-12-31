const integrations = [
  { icon: '📝', name: 'VSCode' },
  { icon: '🐙', name: 'GitHub' },
  { icon: '🔧', name: 'GitLab' },
  { icon: '🔄', name: 'CI/CD' },
  { icon: '💻', name: 'Cursor' },
]

export default function Integrations() {
  return (
    <section className="py-16 bg-light-blue/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <div className="section-label">Integrations</div>
          <h2 className="section-title">Works Where You Work</h2>
          
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {integrations.map((item) => (
              <div
                key={item.name}
                className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-4xl">{item.icon}</span>
                <span className="text-sm font-medium text-royal-blue">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

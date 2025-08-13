export default function Services() {
  const services = [
    {
      title: "Video Editing",
      description: "Video editing for event highlights, social media, corporate videos, and more. From raw footage to polished final product.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      features: ["Color Grading", "Audio Mixing", "Motion Graphics", "Transitions"]
    },
    {
      title: "Graphic Design",
      description: "Creative graphic design solutions including logos, branding, marketing materials, and digital assets.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      ),
      features: ["Logo Design", "Brand Identity", "Marketing Materials", "Social Media Graphics"]
    },
    
    {
      title: "Social Media Content",
      description: "Optimized content creation for all major social media platforms with engaging visuals and compelling messaging.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
        </svg>
      ),
      features: ["Instagram Posts", "YouTube Thumbnails", "Facebook Ads", "TikTok Videos"]
    }
  ]

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-violet-100 mb-4">
            My Services
          </h2>
          <p className="text-xl text-violet-200/80 max-w-3xl mx-auto">
            Comprehensive creative services to help your brand stand out and engage your audience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {services.map((service, index) => (
            <div key={index} className="card-bg rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
              <div className="w-16 h-16 bg-violet-500/15 rounded-lg flex items-center justify-center text-violet-400 mb-6">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-violet-100 mb-4">
                {service.title}
              </h3>
              
              <p className="text-violet-200/80 mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2 mt-auto">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-violet-200/80">
                    <div className="w-2 h-2 bg-violet-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}

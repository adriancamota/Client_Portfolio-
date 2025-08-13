export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-violet-100 mb-6">
              About Me
            </h2>
            <p className="text-lg text-violet-200/80 mb-6">
              I'm a Frances Camota a passionate video editor and graphic designer with over 3 years of experience creating compelling visual content. 
              My journey began with a love for storytelling through visuals, and I've since worked with clients across various industries 
              to bring their creative visions to life.
            </p>
            <p className="text-lg text-violet-200/80 mb-8">
              From corporate videos to social media content, from brand identity design to marketing materials, I specialize in 
              creating high-quality, engaging content that resonates with your audience and achieves your business goals.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-violet-500 rounded-full"></div>
                <span className="text-violet-200/90">Adobe Creative Suite</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-violet-500 rounded-full"></div>
                <span className="text-violet-200/90">Final Cut Pro</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-violet-500 rounded-full"></div>
                <span className="text-violet-200/90">Motion Graphics</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-violet-500 rounded-full"></div>
                <span className="text-violet-200/90">3D Animation</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="card-bg rounded-2xl p-4 md:p-6">
              <div className="rounded-xl overflow-hidden shadow-xl ring-1 ring-violet-700/30">
                <video
                  className="w-full h-[260px] md:h-[360px] object-cover"
                  src="https://www.facebook.com/watch/?mibextid=wwXIfr&v=608500288464671&rdid=1slpfQJ7hPliLVdi"
                  controls
                  preload="metadata"
                />
              </div>
              <div className="text-center mt-6">
                <h3 className="text-xl font-semibold text-violet-100 mb-2">Showreel</h3>
                <p className="text-violet-200/80">A quick look at recent edits and design motion pieces.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

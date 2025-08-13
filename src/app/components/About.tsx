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
              I'm Frances Camota a passionate video editor and graphic designer with over 3 years of experience creating compelling visual content. 
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
                <span className="text-violet-200/90">Adobe Premiere Pro</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-violet-500 rounded-full"></div>
                <span className="text-violet-200/90">Capcut Pro</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-violet-500 rounded-full"></div>
                <span className="text-violet-200/90">Adobe Photoshop</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-violet-500 rounded-full"></div>
                <span className="text-violet-200/90">Canva Pro</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            <span className="gradient-ring rounded-full">
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-[22rem] h-[22rem] md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] rounded-full object-cover bg-black"
              />
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

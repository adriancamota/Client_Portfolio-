'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [lightboxItem, setLightboxItem] = useState<any | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState<number>(0)

  const getImages = (it: any): string[] => {
    if (Array.isArray(it?.images) && it.images.length > 0) return it.images
    if (typeof it?.image === 'string') return [it.image]
    return ['/file.svg']
  }

  const openLightbox = (it: any, startIndex: number = 0) => {
    setLightboxItem(it)
    setLightboxIndex(startIndex)
  }

  // Close lightbox on ESC
  useEffect(() => {
    if (!lightboxItem) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxItem(null)
      if (e.key === 'ArrowRight') setLightboxIndex((i) => (i + 1) % getImages(lightboxItem).length)
      if (e.key === 'ArrowLeft') setLightboxIndex((i) => (i - 1 + getImages(lightboxItem).length) % getImages(lightboxItem).length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxItem])

  const portfolioItems = [
    {
      id: 1,
      title: "Lemery Colleges Promotional Video",
      category: "video",
      description: "Promotional Video highlighting academic excellence, vibrant campus life, and courses for colleges",
      image: "/thumbnails/video1.jpg",
      tags: ["Corporate", "Branding", "Video Editing"],
      url: "https://www.facebook.com/watch/?mibextid=wwXIfr&v=995853468991606&rdid=1NSRcQ4A59BQeKce"
    },
    {
      id: 2,
      title: "Film Poster Designs",
      category: "design",
      description: "Captivating poster designs that bring short films to life in a single frame.",
      images: [
        "/thumbnails/image1.jpg",
        "/thumbnails/image2.jpg",
        "/thumbnails/image3.jpg",
      ],
      tags: ["ShortFilm", "Documentary", "AnimatedFilm"],
    },
    {
      id: 3,
      title: "Brand Advertising Reel",
      category: "social",
      description: "Short, engaging video highlighting a brand’s products, identity, and marketing message.",
      image: "/thumbnails/video18.jpg",
      tags: ["Social Media", "Content Creation", "Graphics"],
      url: "https://www.instagram.com/mondaygeeks/reel/DMocFaRykze/"
    },
    {
      id: 26,
      title: "Brand Advertising Reel",
      category: "social",
      description: "Short, engaging video highlighting a brand’s products, identity, and marketing message.",
      image: "/thumbnails/image20.jpg",
      tags: ["Social Media", "Promo", "Reels"],
      url: "https://www.instagram.com/reel/DM61b9Guc9Y/?igsh=MTNyOXA2bnBxZWViNw%3D%3D"
    },
    {
      id: 27,
      title: "Brand Advertising Reel",
      category: "social",
      description: "Short, engaging video highlighting a brand’s products, identity, and marketing message.",
      image: "/thumbnails/image21.jpg",
      tags: ["Social Media", "Product", "Reel"],
      url: "https://www.instagram.com/mondaygeeks/reel/DMW-qS-ReJv/"
    },
    
    {
      id: 5,
      title: "Creative Storytelling",
      category: "video",
      description: "Engaging video using creative storytelling to inspire and connect with the audience.",
      image: "/thumbnails/video2.jpg",
      tags: ["Events", "Promotional", "Video Editing"],
      url: "https://drive.google.com/file/d/1nbdJKEeOyJx2R47EKOD6yspldFoiRJtq/view"
    },
    {
      id: 6,
      title: "School Public Materials",
      category: "design",
      description: "Eye-catching social media designs that engage, inform, and inspire your audience.",
      images: [
        "/thumbnails/image4.jpg",
        "/thumbnails/image5.jpg",
        "/thumbnails/image6.jpg",
        "/thumbnails/image7.jpg",
        "/thumbnails/image8.jpg",
        "/thumbnails/image9.jpg",
        "/thumbnails/image10.jpg",
        "/thumbnails/image11.jpg",
        "/thumbnails/image12.jpg",
        "/thumbnails/image13.jpg",
        "/thumbnails/image14.jpg",
        "/thumbnails/image15.jpg",
        "/thumbnails/image16.jpg",
      ],
      tags: ["Engage", "Inform", "Inspire"],
    },
    {
      id: 25,
      title: "Brand Logos and Designs",
      category: "design",
      description: "Logo, color palette, and social templates for a cohesive brand.",
      images: [
        "/thumbnails/image17.jpg",
        "/thumbnails/image18.jpg",
        "/thumbnails/image19.jpg",
      ],
      tags: ["Branding", "Logo", "Templates"],
    },
    {
      id: 7,
      title: "HFA Promotional Video",
      category: "video",
      description: "Promotional video showcasing Holy Family Academy’s values, achievements, and nurturing learning environment.",
      image: "/thumbnails/video3.jpg",
      tags: ["Music", "Cutdown", "Fast Edit"],
      url: "https://www.facebook.com/holyfamilyacademyofficial/videos/608500288464671/?vh=e&fs=e&mibextid=wwXIfr&rdid=Cy7QpmKc24JNYeTq#"
    },
    {
      id: 8,
      title: "OSJAA Event Teaser",
      category: "video",
      description: "Exciting teaser video giving a sneak peek of upcoming OSJAA events and activities.",
      image: "/thumbnails/video4.jpg",
      tags: ["Documentary", "Teaser", "Story"],
      url: "https://www.facebook.com/watch/?mibextid=wwXIfr&v=639416051971626&rdid=kb9Kq4PsxHPOC7dC"
    },
    {
      id: 9,
      title: "OSJAA Sport Highlights",
      category: "video",
      description: "Action-packed video showing the best moments and achievements from OSJAA sports events.",
      image: "/thumbnails/video5.jpg",
      tags: ["Campus", "Walkthrough", "Video Editing"],
      url: "https://www.facebook.com/watch/?mibextid=wwXIfr&v=485353087709561&rdid=LfX9c3s0dpaiSK7q"
    },
    {
      id: 10,
      title: "Short Film Trailer",
      category: "video",
      description: "Intense trailer giving a suspenseful preview of the short film’s thrilling moments.",
      image: "/thumbnails/video6.jpg",
      tags: ["Trailer", "Short Film", "Edit"],
      url: "https://www.facebook.com/watch/?mibextid=wwXIfr&v=1221759782272867&rdid=IHsmLUGoklxWya2U"
    },
    {
      id: 11,
      title: "SDE Sport Highlights",
      category: "video",
      description: "Video highlights showing the best plays and memorable moments from sports event.",
      image: "/thumbnails/video7.jpg",
      tags: ["Documentary", "Teaser", "Story"],
      url: "https://www.facebook.com/watch/?mibextid=wwXIfr&v=1295503781807697&rdid=KF2S4cpED7BzEbcy"
    },
    {
      id: 12,
      title: "SDE Leadership Training",
      category: "video",
      description: "Video highlighting the activities and key moments from the Leadership Training event.",
      image: "/thumbnails/video8.jpg",
      tags: ["Brand", "Story", "Edit"],
      url: "https://www.facebook.com/watch/?mibextid=wwXIfr&v=1226043195092267&rdid=DOJd45K92HrzbIY4"
    },
    {
      id: 13,
      title: "Graduation Prom Highlights",
      category: "video",
      description: "Vibrant video capturing the excitement, memories, and celebrations of the Graduation Prom night.",
      image: "/thumbnails/video9.jpg",
      tags: ["Graduation", "Highlights", "Video Editing"],
      url: "https://www.facebook.com/watch/?mibextid=wwXIfr&v=486686337260855&rdid=1IoAhUHUvTt8rLED"
    },
    {
      id: 14,
      title: "Holy Family Promotional Video",
      category: "video",
      description: "Warm, inspiring video that celebrates Holy Family Academy’s community spirit and student achievements.",
      image: "/thumbnails/video10.jpg",
      tags: ["Sports", "Highlights", "Video Editing"],
      url: "https://www.facebook.com/watch/?mibextid=wwXIfr&v=7749415925117772&rdid=yOqfUsWnBTQIlt2C"
    },
    {
      id: 15,
      title: "Grand Coronation Night Highlights",
      category: "video",
      description: "Cinematic recap showcasing the glamour, winners, and magical moments of the evening.",
      image: "/thumbnails/video11.jpg",
      tags: ["Cinematic", "Reel", "Edit"],
      url: "https://www.facebook.com/watch/?mibextid=wwXIfr&v=984006493139816&rdid=4Lvc7cDPIpfgbYeF"
    },
    {
      id: 16,
      title: "El Filibusterismo Teaser",
      category: "video",
      description: "Dark, intriguing teaser hinting at secrets and the rising unrest in El Filibusterismo.",
      image: "/thumbnails/video12.jpg",
      tags: ["Documentary", "Teaser", "Edit"],
      url: "https://www.facebook.com/joan.16.cuenca/videos/1991234421219578/?fs=e&mibextid=wwXIfr&rdid=Pr0qzqN26cUrQGrU#"
    },
    {
      id: 17,
      title: "DAZSMA Recollection Video",
      category: "video",
      description: "Heartwarming video capturing the reflections, prayers, and bonding moments from the students.",
      image: "/thumbnails/video13.jpg",
      tags: ["Institutional", "AVP", "Edit"],
      url: "https://www.facebook.com/watch/?mibextid=wwXIfr&v=1235224821295411&rdid=vhzfR0afKWM2ruaR"
    },
    {
      id: 18,
      title: "OLMA Recollection Video",
      category: "video",
      description: "Inspiring video capturing the reflections, prayers, and bonding moments from OLMA students.",
      image: "/thumbnails/video14.jpg",
      tags: ["Campus", "Orientation", "Edit"],
      url: "https://www.facebook.com/watch/?mibextid=wwXIfr&v=1774647559605909&rdid=rMbd1uUT9rMOnWdm"
    },
    {
      id: 19,
      title: "Basic Faith Formation Highlights ",
      category: "video",
      description: "Short recap showcasing the meaningful experiences and growth in Basic Faith Formation.",
      image: "/thumbnails/video15.jpg",
      tags: ["Outreach", "Recap", "Video Editing"],
      url: "https://www.facebook.com/watch/?mibextid=wwXIfr&v=205785872507985&rdid=uAoou3tv4snocXzN"
    },
    {
      id: 20,
      title: "St. Joseph College Recollection Video",
      category: "video",
      description: "Inspiring video capturing reflections, prayers, and bonding moments from the St. Joseph Colleges.",
      image: "/thumbnails/video16.jpg",
      tags: ["Anniversary", "Highlights", "Video Editing"],
      url: "https://www.facebook.com/watch/?mibextid=wwXIfr&v=496438959957903"
    },
    {
      id: 21,
      title: "Sport Rules Edit",
      category: "video",
      description: "Informative edit highlighting the key rules and gameplay of different sports.",
      image: "/thumbnails/video17.jpg",
      tags: ["Cultural", "Event", "Video Editing"],
      url: "https://drive.google.com/file/d/1PZ0y7ax87Gwws34e-N7Oy-fIRv7bBeRi/view"
    },
    {
      id: 22,
      title: "UpKidz Playtrack Reels 1", 
      category: "social",
      description: "Fun and lively video showcasing the activities and joyful moments at UpKidz Playtrack.",
      image: "/thumbnails/video19.jpg",
      tags: ["Social Media", "Reels", "Carousels"],
      url: "https://www.facebook.com/reel/727756256856285"
    },
    {
      id: 23,
      title: "UpKidz Playtrack Reels 2",
      category: "social",
      description: "Fun and lively video showcasing the activities and joyful moments at UpKidz Playtrack.",
      image: "/thumbnails/video19.jpg",
      tags: ["Social Media", "Reels", "Stories"],
      url: "https://www.facebook.com/watch/?mibextid=wwXIfr&v=1243978027206571&rdid=6z0QtvKG6XcRdhSz"
    },
    {
      id: 24,
      title: "UpKidz Playtrack Reels 3",
      category: "social",
      description: "Fun and lively video showcasing the activities and joyful moments at UpKidz Playtrack.",
      image: "/thumbnails/video19.jpg",
      tags: ["Social Media", "Teaser", "Reel"],
      url: "https://www.facebook.com/reel/3595606340733976"
    },
    {
      id: 28,
      title: "Influencers Travel Reels",
      category: "social",
      description: "Exciting video capturing travel adventures and experiences shared by an influencer.",
      image: "/thumbnails/image22.jpg",
      tags: ["Social Media", "Highlights", "Reel"],
      url: "https://www.facebook.com/reel/3081466485373051/"
    },
  ]

  const filters = [
    { key: 'all', label: 'All Work' },
    { key: 'video', label: 'Video Editing' },
    { key: 'design', label: 'Graphic Design' },
    
    { key: 'social', label: 'Social Media' }
  ]

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter)

  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-violet-100 mb-4">
            My Portfolio
          </h2>
          <p className="text-xl text-violet-200/80 max-w-3xl mx-auto">
            A showcase of my best work across video editing, graphic design, and creative content creation
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 border border-violet-700/50 ${
                activeFilter === filter.key
                  ? 'violet-gradient text-white shadow-lg'
                  : 'bg-transparent text-violet-300 hover:bg-violet-600/10'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="card-bg rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group ring-1 ring-violet-700/25 hover:ring-violet-500/40">
              <div className="relative overflow-hidden">
                <div className="w-full h-64 relative">
                  <img
                    src={`${(getImages(item)[0]) || '/file.svg'}?v=1`}
                    alt={item.title}
                    className="object-cover w-full h-full block"
                    loading="lazy"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/file.svg' }}
                  />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                  {item.category === 'design' ? (
                    <button
                      type="button"
                      onClick={() => openLightbox(item, 0)}
                      className="opacity-0 group-hover:opacity-100 bg-violet-600 text-white px-6 py-3 rounded-lg font-semibold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg cursor-zoom-in"
                    >
                      View Project
                    </button>
                  ) : (
                    <a
                      href={('url' in item && (item as any).url) ? (item as any).url : '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-0 group-hover:opacity-100 bg-violet-600 text-white px-6 py-3 rounded-lg font-semibold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg"
                    >
                      View Project
                    </a>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-violet-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-violet-200/80 mb-4">
                  {item.description}
                </p>
                
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 border-2 border-violet-500 text-violet-300 font-semibold rounded-lg hover:bg-violet-600 hover:text-white transition-all duration-200"
          >
            Start Your Project
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
      {/* Lightbox for design thumbnails */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setLightboxItem(null)}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              aria-label="Close"
              onClick={() => setLightboxItem(null)}
              className="absolute -top-3 -right-3 z-10 bg-black/60 hover:bg-black/80 text-white rounded-full w-9 h-9 flex items-center justify-center"
            >
              ✕
            </button>
            <div className="bg-black rounded-xl overflow-hidden ring-1 ring-white/10 relative">
              <img
                src={`${getImages(lightboxItem)[lightboxIndex]}?v=1`}
                alt={(lightboxItem as any).title || 'Design image'}
                className="w-full max-h-[80vh] object-contain bg-black"
              />
              {/* Prev */}
              {getImages(lightboxItem).length > 1 && (
                <>
                  <button
                    aria-label="Previous"
                    onClick={() => setLightboxIndex((i) => (i - 1 + getImages(lightboxItem).length) % getImages(lightboxItem).length)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full w-10 h-10 flex items-center justify-center"
                  >
                    ‹
                  </button>
                  <button
                    aria-label="Next"
                    onClick={() => setLightboxIndex((i) => (i + 1) % getImages(lightboxItem).length)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full w-10 h-10 flex items-center justify-center"
                  >
                    ›
                  </button>
                </>
              )}
            </div>
            <div className="mt-3 text-center text-violet-100 text-sm">
              {(lightboxItem as any).title} · {lightboxIndex + 1}/{getImages(lightboxItem).length}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

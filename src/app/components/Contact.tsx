export default function Contact() {

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-violet-100 mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-violet-200/80 max-w-3xl mx-auto">
            Ready to bring your creative vision to life? Get in touch and let's discuss your project
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-violet-100 mb-6">
                Get In Touch
              </h3>
              <p className="text-lg text-violet-200/80 mb-8">
                I'm always excited to hear about new projects and creative opportunities. 
                Whether you have a specific vision in mind or need help developing your ideas, 
                I'm here to help bring your creative dreams to reality.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-violet-500/15 rounded-lg flex items-center justify-center text-violet-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-violet-100">Email</h4>
                  <p className="text-violet-200/80">francescamota08@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-violet-500/15 rounded-lg flex items-center justify-center text-violet-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-violet-100">Phone</h4>
                  <p className="text-violet-200/80">+63 (96) 86241873 </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-violet-500/15 rounded-lg flex items-center justify-center text-violet-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-violet-100">Location</h4>
                  <p className="text-violet-200/80">Available for remote work worldwide</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="font-semibold text-violet-100 mb-4">Response Time</h4>
              <p className="text-violet-200/80">
                I typically respond to all inquiries within 24 hours during business days. 
                For urgent projects, please mention your timeline in your message.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

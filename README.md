# CreativeStudio Portfolio Website

A modern, professional portfolio website for video editors and graphic designers built with Next.js 15 and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with beautiful animations
- **Modern UI/UX**: Clean, professional design with smooth transitions
- **Portfolio Showcase**: Filterable portfolio section with categories
- **Contact Form**: Professional contact form for client inquiries
- **SEO Optimized**: Proper metadata and structured content
- **Fast Performance**: Built with Next.js 15 and optimized for speed

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Icons**: Heroicons (SVG)
- **Fonts**: Geist Sans & Geist Mono

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── Header.tsx          # Navigation header
│   │   ├── Hero.tsx            # Hero section
│   │   ├── About.tsx           # About section
│   │   ├── Services.tsx        # Services showcase
│   │   ├── Portfolio.tsx       # Portfolio with filtering
│   │   ├── Contact.tsx         # Contact form
│   │   └── Footer.tsx          # Footer
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Home page
├── public/                     # Static assets
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### Colors
The website uses a blue-purple color scheme. You can customize colors in the Tailwind classes throughout the components.

### Content
- Update the content in each component file
- Replace placeholder text with your client's information
- Add real portfolio images and projects
- Update contact information and social media links

### Branding
- Change "CreativeStudio" to your client's brand name
- Update the logo and brand colors
- Modify the hero section messaging

## 📱 Responsive Design

The website is fully responsive and includes:
- Mobile-first design approach
- Responsive navigation with hamburger menu
- Adaptive grid layouts for different screen sizes
- Touch-friendly interactions

## 🔧 Build & Deploy

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Deploy
The website can be deployed to:
- Vercel (recommended for Next.js)
- Netlify
- Any static hosting service

## 📝 Customization Guide

### Adding Portfolio Items
Edit `src/app/components/Portfolio.tsx` and add new items to the `portfolioItems` array:

```typescript
{
  id: 7,
  title: "Your Project Title",
  category: "video", // video, design, motion, social
  description: "Project description",
  image: "/path/to/image.jpg",
  tags: ["Tag1", "Tag2", "Tag3"]
}
```

### Updating Services
Modify the services array in `src/app/components/Services.tsx` to match your client's offerings.

### Contact Form
The contact form is currently set up to log form data to the console. Integrate with your preferred email service:
- EmailJS
- Formspree
- Netlify Forms
- Custom API endpoint

## 🎯 SEO Features

- Meta tags for social media sharing
- Structured content with proper headings
- Alt text for images (when added)
- Semantic HTML structure
- Fast loading times

## 🔒 Security

- Form validation on client side
- XSS protection with React
- Secure headers with Next.js

## 📊 Performance

- Optimized images and assets
- Lazy loading for components
- Efficient CSS with Tailwind
- Fast page transitions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

For support or questions:
- Create an issue in the repository
- Contact the development team

---

**Built with ❤️ using Next.js and Tailwind CSS**

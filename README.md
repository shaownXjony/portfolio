# Portfolio - MD Shaown Rahman

A modern, polished portfolio website showcasing data science and machine learning projects, built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Modern, minimal design with smooth animations
- ✨ Framer Motion animations throughout
- 📱 Fully responsive design
- 🎯 TypeScript for type safety
- 🚀 Fast development with Vite
- 📄 Interactive CV viewer (HTML & PDF)
- 🔗 GitHub integration for projects

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # React components
│   ├── About.tsx        # About section with education & experience
│   ├── Blog.tsx         # Blog posts section
│   ├── Certifications.tsx # Certifications & courses
│   ├── Footer.tsx       # Contact form & footer
│   ├── Hero.tsx         # Hero section with CV buttons
│   ├── HTMLCVViewer.tsx # HTML CV modal viewer
│   ├── Navbar.tsx       # Navigation bar
│   ├── Projects.tsx     # Projects showcase
│   └── Skills.tsx       # Skills & technical proficiency
├── data/                # Content data
│   └── content.ts       # Centralized content data
├── App.tsx              # Main app component
├── main.tsx             # Entry point
└── index.css            # Global styles & Tailwind

public/
├── assets/
│   └── images/
│       └── profile-photo.png  # Profile photo
└── cv/
    ├── resume.html      # HTML version of CV
    └── resume.pdf       # PDF version of CV
```

## Adding Your Content

1. **Profile Photo**: Place your photo at `public/assets/images/profile-photo.png`
2. **CV Files**: 
   - HTML CV: `public/cv/resume.html`
   - PDF CV: `public/cv/resume.pdf`
3. **Content**: Edit `src/data/content.ts` to update all content

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React (Icons)
- Vite

## License

Copyright © MD Shaown Rahman 2025. All Rights Reserved.


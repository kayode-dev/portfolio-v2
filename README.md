# Kayode Babalola - Portfolio v2

A modern, responsive portfolio website showcasing my experience as a Frontend Developer and featuring my projects, skills, and professional journey.

## 🚀 Live Demo

Visit the live portfolio: [kayodedev.com](https://kayodedev.com)

## ✨ Features

- **Modern Design**: Clean, minimalist interface with smooth animations
- **Responsive Layout**: Optimized for all device sizes
- **Interactive Sections**:
  - Professional experience timeline
  - Featured projects with live demos
  - Contact information with direct links
  - Currently listening to music (Spotify integration)
- **Performance Optimized**: Built with Next.js 15 and React 19
- **TypeScript**: Fully typed for better development experience
- **Tailwind CSS**: Utility-first styling with custom components

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **UI Components**: Custom components with [Class Variance Authority](https://cva.style/)
- **Deployment**: [Vercel](https://vercel.com/)

## 🏗️ Project Structure

```
src/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── experience-list.tsx
│   │   ├── project-list.tsx
│   │   ├── navbar.tsx
│   │   └── ...
│   ├── assets/             # Images and static assets
│   │   ├── icons/
│   │   └── projects/
│   └── page.tsx            # Main portfolio page
├── lib/
│   ├── constants.ts        # Project and experience data
│   ├── types.ts           # TypeScript type definitions
│   └── utils.ts           # Utility functions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/kayode-dev/portfolio-v2.git
   cd portfolio-v2
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Run the development server**

   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 📝 Customization

### Adding New Projects

Edit `src/lib/constants.ts` to add new projects to the `PROJECTS` array:

```typescript
{
  title: "Project Name",
  description: "Project description...",
  image: projectImage,
  liveUrl: "https://project-url.com",
  githubUrl: "https://github.com/username/repo", // optional
  stacks: ["React", "Next.js", "TypeScript"],
}
```

### Updating Experience

Modify the `EXPERIENCE` array in `src/lib/constants.ts` to update your professional experience.

### Styling

The project uses Tailwind CSS for styling. Custom styles can be added in `src/app/globals.css` or by extending the Tailwind configuration in `tailwind.config.ts`.

## 🎨 Design Philosophy

This portfolio emphasizes:

- **Simplicity**: Clean, uncluttered design that puts content first
- **Performance**: Fast loading times and smooth interactions
- **Accessibility**: Semantic HTML and keyboard navigation support
- **Mobile-First**: Responsive design that works on all devices

## 📱 Sections

- **Hero**: Introduction with professional photo and bio
- **Experience**: Timeline of professional roles and achievements
- **Projects**: Showcase of featured work with live demos
- **Contact**: Direct links to email and LinkedIn
- **Music**: Currently listening to music via Spotify integration

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome! Feel free to:

- Open an issue for bugs or feature requests
- Submit a pull request for improvements
- Share feedback on design or functionality

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: [babalolakayode44@gmail.com](mailto:babalolakayode44@gmail.com)
- **LinkedIn**: [Connect with me](https://www.linkedin.com/in/kayodedev/)
- **Portfolio**: [kayodedev.com](https://kayodedev.com)

---

Built with ❤️ by [Kayode Babalola](https://kayodedev.com)

# Alaeddine ZORGUI - Interactive 3D Portfolio

An interactive 3D portfolio experience built with React, Three.js, and styled-components. Features a cozy room scene with a desk where users can click on objects to explore different sections.

## 🚀 Live Demo

[Coming Soon]

## ✨ Features

- **Interactive 3D Room Scene**: A cozy room with desk, lamp, window, and more
- **Smooth Camera Transitions**: Animated camera movements when selecting sections
- **Terminal Aesthetic**: Developer-focused UI with typing animations
- **Dark/Light Theme**: Toggle between dark and light modes
- **Responsive Design**: Works on desktop and tablet devices
- **Performance Optimized**: Lazy loading and efficient rendering

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite + TypeScript
- **3D Engine**: Three.js via @react-three/fiber + @react-three/drei
- **Styling**: styled-components with CSS-in-JS theming
- **State Management**: Zustand
- **Animations**: Three.js native animations
- **Icons**: Lucide React
- **Fonts**: Space Mono + Orbitron

## 📦 Project Structure

```
├── apps/
│   └── portfolio/          # Main portfolio application
│       ├── src/
│       │   ├── components/
│       │   │   ├── three/  # 3D scene components
│       │   │   ├── ui/     # UI overlay components
│       │   │   └── content/# Section content components
│       │   ├── stores/     # Zustand state management
│       │   ├── styles/     # Theme and global styles
│       │   ├── hooks/      # Custom React hooks
│       │   ├── data/       # Portfolio data
│       │   ├── utils/      # Constants and helpers
│       │   └── types/      # TypeScript types
│       └── public/         # Static assets
├── packages/
│   └── ui/                 # Shared UI components (future)
└── package.json            # Root workspace configuration
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/zorguiala/Zorgui-Alaeddine.git
cd Zorgui-Alaeddine

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:3000`

### Building for Production

```bash
# Build the app
npm run build

# Preview the build
npm run preview
```

## 🎮 How to Use

1. **Overview**: The portfolio starts with a view of a cozy room with a desk
2. **Navigate**: Click on objects to zoom into different sections:
   - **Monitor** → About Me
   - **Laptop** → Contact Information
   - **Toolbox** → Skills
   - **Books** → Work Experience
   - **Folder** → Projects
3. **Go Back**: Press `ESC` or click the Back button to return to overview
4. **Theme**: Click the sun/moon icon to toggle dark/light mode

## 🎨 Customization

### Updating Your Information

Edit the files in `apps/portfolio/src/data/`:

- `profile.ts` - Personal information
- `skills.ts` - Technical skills
- `experience.ts` - Work history
- `projects.ts` - Portfolio projects

### Modifying the Theme

Edit `apps/portfolio/src/styles/theme.ts` to customize colors.

### Adding New Projects

Add entries to the `projects` array in `apps/portfolio/src/data/projects.ts`:

```typescript
{
  id: 'my-project',
  title: 'My Awesome Project',
  description: 'Description of the project',
  technologies: ['React', 'TypeScript'],
  github: 'https://github.com/...',
  live: 'https://...',
  status: 'completed',
}
```

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

WebGL support is required for the 3D scene.

## 🤝 Contributing

This is an open-source portfolio. Feel free to:

1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## 📄 License

MIT License - feel free to use this as a template for your own portfolio!

## 👤 Author

**Alaeddine ZORGUI**

- LinkedIn: [zorgui-alaeddine](https://www.linkedin.com/in/zorgui-alaeddine/)
- GitHub: [zorguiala](https://github.com/zorguiala)
- Email: zorguialadinne@outlook.com

---

Built with ❤️ using React + Three.js

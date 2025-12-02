# David Tan - 3D Portfolio

A clean, Drake-inspired 3D interactive portfolio built with Next.js, Three.js, and React Three Fiber. Experience an elegant workspace where visitors can explore projects, learn about music taste, and discover more through interactive 3D objects.

## ✨ Features

### 🏠 Clean 3D Room Design

- **Minimal room structure** with subtle walls and clean flooring
- **Simple desk** as the focal point with professional setup
- **Soft ambient lighting** with accent colors from interactive objects
- **Floating geometric elements** for visual depth

### 🎯 Interactive Objects

- **External hard drive** with pulsing blue LED - click to explore projects
- **Ultrawide monitor** displaying clean code editor with portfolio class
- **Spinning vinyl record** with teal label - click to learn about music taste
- **Now playing rack** for vinyl display

### 🎨 David Tan Branding

- **"David Tan" logo** with gradient in the navigation
- **Contact | About | Projects** navigation links
- **Professional SF Pro Display** font throughout

### 🎮 Interaction Features

- **Three hotspots** positioned over the vinyl, hard drive, and general setup
- **Info panels** slide in with relevant content when clicked
- **Smooth camera movements** that follow mouse cursor
- **Camera controls** for different viewing angles (Home, Desk Focus, Room Overview)

### ✨ Subtle Animations

- **Vinyl continuously spins** at a relaxed pace
- **Hard drive LED pulses** softly
- **Floating elements** gently bob in the background
- **Monitor screen glows** with soft blue light

## 🛠 Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety and better development experience
- **Three.js** - 3D graphics library
- **React Three Fiber (R3F)** - React renderer for Three.js
- **Drei** - Useful helpers and abstractions for R3F
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Zustand** - Lightweight state management
- **Lucide React** - Beautiful icons

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd PersonalWebsite
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Adding Your Own Content

1. **Update personal information** in `components/UI/InfoPanel.tsx`
2. **Modify 3D objects** in the `components/3D/` directory
3. **Customize colors** in `tailwind.config.js`
4. **Add your own 3D models** by exporting from Blender as GLTF/GLB

### Blender Integration

To create custom 3D models:

1. **Model in Blender** - Create your objects with clean geometry
2. **Export as GLTF** - Use the glTF 2.0 format for web optimization
3. **Import in React** - Use `@react-three/drei`'s `useGLTF` hook
4. **Optimize** - Ensure models are under 1MB for web performance

### Color Scheme

The current color palette:

- **David Blue**: `#1e3a8a` - Primary brand color
- **David Teal**: `#0d9488` - Accent color for interactions
- **David Dark**: `#0f172a` - Background color
- **David Gray**: `#64748b` - Secondary text color

## 📁 Project Structure

```
PersonalWebsite/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main page
├── components/
│   ├── 3D/               # 3D components
│   │   ├── Room.tsx      # Main room structure
│   │   ├── HardDrive.tsx # Interactive hard drive
│   │   ├── Monitor.tsx   # Monitor with code display
│   │   ├── VinylRecord.tsx # Spinning vinyl record
│   │   └── FloatingElements.tsx # Background elements
│   └── UI/               # UI components
│       ├── Navigation.tsx # Top navigation
│       └── InfoPanel.tsx # Slide-out info panels
├── store/
│   └── useStore.ts       # Zustand state management
└── public/               # Static assets
```

## 🎯 Performance Tips

1. **Optimize 3D models** - Keep polygon count low
2. **Use LOD (Level of Detail)** - Different quality models for different distances
3. **Implement frustum culling** - Only render visible objects
4. **Compress textures** - Use WebP format when possible
5. **Lazy load** - Load 3D assets only when needed

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm run build
vercel --prod
```

### Netlify

```bash
npm run build
netlify deploy --prod --dir=out
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by Drake's aesthetic and clean design principles
- Built with the amazing Three.js and React Three Fiber communities
- Icons by [Lucide](https://lucide.dev/)

---

**Built with ❤️ by David Tan**

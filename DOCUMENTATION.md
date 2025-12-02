# David Tan 3D Portfolio - Complete Editing Guide

## 📁 Project Structure Overview

```
PersonalWebsite/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles and Tailwind imports
│   ├── layout.tsx               # Root layout with metadata
│   └── page.tsx                 # Main 3D portfolio page
├── components/
│   ├── 3D/                      # Three.js 3D components
│   │   ├── Room.tsx             # Main room structure and layout
│   │   ├── HardDrive.tsx        # Interactive hard drive object
│   │   ├── Monitor.tsx          # Monitor with code display
│   │   ├── VinylRecord.tsx      # Spinning vinyl record
│   │   └── FloatingElements.tsx # Background floating objects
│   └── UI/                      # User interface components
│       ├── Navigation.tsx       # Top navigation bar
│       └── InfoPanel.tsx        # Slide-out information panels
├── store/
│   └── useStore.ts              # Zustand state management
├── public/                      # Static assets (fonts, images, 3D models)
├── package.json                 # Dependencies and scripts
├── tailwind.config.js           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
└── next.config.js               # Next.js configuration
```

---

## 🎨 1. Three.js Elements Customization

### 1.1 Monitor Customization

**File:** `components/3D/Monitor.tsx`

#### Change Monitor Size:

```tsx
// Current size: [1.6, 0.9, 0.1] (width, height, depth)
<Box
  ref={monitorRef}
  args={[2.0, 1.2, 0.1]} // Make it wider and taller
  position={[0, 0.3, 0]}
>
```

#### Change Monitor Color:

```tsx
<meshStandardMaterial
  color={hovered ? "#1e3a8a" : "#2d3748"} // Change to different colors
  roughness={0.2}
  metalness={0.8}
/>
```

#### Change Screen Content:

```tsx
// Replace the screen display with your own content
<Plane ref={screenRef} args={[1.4, 0.7]} position={[0, 0.3, 0.06]}>
  <meshStandardMaterial
    color="#0f172a"
    emissive="#0d9488" // Change glow color
    emissiveIntensity={0.3} // Change glow intensity
  />
</Plane>
```

#### Add Custom Screen Content:

```tsx
// Add text or images to the screen
<Text
  position={[0, 0.2, 0.07]}
  fontSize={0.08}
  color="#ffffff"
  anchorX="center"
  anchorY="middle"
>
  Your Custom Text Here
</Text>
```

### 1.2 Room Background Customization

**File:** `components/3D/Room.tsx`

#### Change Floor Color:

```tsx
<Plane args={[20, 20]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]}>
  <meshStandardMaterial
    color="#1a202c" // Change floor color
    roughness={0.8}
    metalness={0.1}
  />
</Plane>
```

#### Change Wall Colors:

```tsx
// Back wall
<Plane args={[20, 8]} position={[0, 2, -10]}>
  <meshStandardMaterial
    color="#0a0a0a" // Darker walls
    roughness={0.9}
  />
</Plane>
```

#### Change Room Lighting:

```tsx
// In app/page.tsx - modify lighting
<ambientLight intensity={0.4} /> // Increase ambient light
<directionalLight
  position={[10, 10, 5]}
  intensity={1.2} // Increase directional light
  color="#ffffff" // Change light color
/>
```

### 1.3 Desk and Table Customization

**File:** `components/3D/Room.tsx`

#### Change Desk Size:

```tsx
<Box args={[5, 0.1, 2.5]} position={[0, -0.5, -2]}>
  {" "}
  // Wider and deeper desk
  <meshStandardMaterial color="#1e293b" />
</Box>
```

#### Change Desk Color:

```tsx
<meshStandardMaterial
  color="#2d3748" // Different desk color
  roughness={0.6}
  metalness={0.2}
/>
```

#### Change Side Table:

```tsx
<Box args={[2, 0.1, 2]} position={[3, -0.3, -1]}>
  {" "}
  // Larger side table
  <meshStandardMaterial color="#1e293b" />
</Box>
```

### 1.4 Adding New 3D Objects

#### Add a New Object to the Room:

```tsx
// In components/3D/Room.tsx
import { Box, Sphere, Cylinder } from "@react-three/drei";

// Add a new object
<Box args={[0.5, 0.5, 0.5]} position={[1, 0, -1]}>
  <meshStandardMaterial color="#ff6b6b" />
</Box>

// Add a sphere
<Sphere args={[0.3]} position={[-1, 0, -1]}>
  <meshStandardMaterial color="#4ecdc4" />
</Sphere>
```

#### Create a New Interactive Object:

```tsx
// Create new file: components/3D/NewObject.tsx
"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Box } from "@react-three/drei";
import { Mesh } from "three";
import { useStore } from "@/store/useStore";

interface NewObjectProps {
  position: [number, number, number];
}

export function NewObject({ position }: NewObjectProps) {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const { setActivePanel } = useStore();

  useFrame((state) => {
    if (meshRef.current) {
      // Add animation
      meshRef.current.rotation.y += 0.01;
    }
  });

  const handleClick = () => {
    setActivePanel("your-panel-name");
  };

  return (
    <Box
      ref={meshRef}
      args={[1, 1, 1]}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={handleClick}
    >
      <meshStandardMaterial color={hovered ? "#ff6b6b" : "#4ecdc4"} />
    </Box>
  );
}
```

#### Import and Use New Object:

```tsx
// In components/3D/Room.tsx
import { NewObject } from "./NewObject";

// Add to the room
<NewObject position={[2, 0, -1]} />;
```

### 1.5 Adding Custom 3D Models from Blender

#### Export from Blender:

1. Create your model in Blender
2. File → Export → glTF 2.0 (.glb/.gltf)
3. Place the file in `public/models/`

#### Load in React:

```tsx
import { useGLTF } from "@react-three/drei";

function CustomModel({ position }: { position: [number, number, number] }) {
  const { scene } = useGLTF("/models/your-model.glb");

  return (
    <primitive
      object={scene}
      position={position}
      scale={[1, 1, 1]} // Adjust scale
    />
  );
}

// Use it in Room.tsx
<CustomModel position={[0, 0, 0]} />;
```

---

## 🎨 2. Color Scheme Customization

### 2.1 Tailwind Colors

**File:** `tailwind.config.js`

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Change these colors to match your brand
        "david-blue": "#1e3a8a", // Primary blue
        "david-teal": "#0d9488", // Accent teal
        "david-dark": "#0f172a", // Background dark
        "david-gray": "#64748b", // Text gray
      },
    },
  },
};
```

### 2.2 3D Object Colors

#### Hard Drive Colors:

```tsx
// In components/3D/HardDrive.tsx
<meshStandardMaterial
  color={hovered ? "#your-hover-color" : "#your-default-color"}
  roughness={0.3}
  metalness={0.7}
/>
```

#### Vinyl Record Colors:

```tsx
// In components/3D/VinylRecord.tsx
<meshStandardMaterial
  color={hovered ? "#your-hover-color" : "#your-default-color"}
  roughness={0.8}
  metalness={0.1}
/>
```

---

## 📝 3. Content Customization

### 3.1 Personal Information

**File:** `components/UI/InfoPanel.tsx`

#### Update About Section:

```tsx
const panelContent = {
  about: {
    title: "About Your Name",
    content: (
      <div className="space-y-4">
        <p className="text-david-gray leading-relaxed">
          Your personal description here...
        </p>
        <div className="space-y-2">
          <h4 className="text-white font-semibold">Skills & Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {["Your", "Skills", "Here"].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-david-dark/50 border border-david-teal/30 rounded-full text-sm text-david-teal"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  // ... other sections
};
```

#### Update Projects Section:

```tsx
projects: {
  title: "Featured Projects",
  content: (
    <div className="space-y-4">
      <div className="grid gap-4">
        <div className="p-4 bg-david-dark/30 border border-david-gray/20 rounded-lg">
          <h4 className="text-white font-semibold mb-2">Your Project Name</h4>
          <p className="text-david-gray text-sm mb-2">Project description</p>
          <div className="flex gap-2">
            <span className="px-2 py-1 bg-david-blue/20 text-david-blue text-xs rounded">Technology</span>
          </div>
        </div>
      </div>
    </div>
  )
}
```

#### Update Contact Information:

```tsx
contact: {
  title: "Get In Touch",
  content: (
    <div className="space-y-4">
      <p className="text-david-gray leading-relaxed">
        Your contact message...
      </p>
      <div className="space-y-3">
        <a href="mailto:your@email.com" className="flex items-center space-x-3 p-3 bg-david-dark/30 border border-david-gray/20 rounded-lg hover:border-david-teal/50 transition-colors">
          <Mail className="w-5 h-5 text-david-teal" />
          <span className="text-white">your@email.com</span>
        </a>
        {/* Add more contact links */}
      </div>
    </div>
  )
}
```

### 3.2 Navigation Branding

**File:** `components/UI/Navigation.tsx`

#### Change Logo:

```tsx
<div className="flex items-center space-x-2">
  <div className="w-8 h-8 bg-gradient-to-br from-david-blue to-david-teal rounded-lg flex items-center justify-center">
    <span className="text-white font-bold text-sm">YT</span>{" "}
    {/* Your initials */}
  </div>
  <h1 className="text-2xl font-bold bg-gradient-to-r from-david-blue to-david-teal bg-clip-text text-transparent font-sf-pro">
    Your Name {/* Your name */}
  </h1>
</div>
```

#### Change Navigation Links:

```tsx
const navItems = [
  { id: "about", label: "About", action: () => setActivePanel("about") },
  {
    id: "projects",
    label: "Projects",
    action: () => setActivePanel("projects"),
  },
  { id: "contact", label: "Contact", action: () => setActivePanel("contact") },
  { id: "blog", label: "Blog", action: () => setActivePanel("blog") }, // Add new link
];
```

---

## 🎬 4. Animation Customization

### 4.1 Object Animations

#### Vinyl Record Spinning Speed:

```tsx
// In components/3D/VinylRecord.tsx
useFrame((state) => {
  if (vinylRef.current) {
    vinylRef.current.rotation.y += 0.01; // Faster: 0.02, Slower: 0.005
  }
});
```

#### Floating Animation:

```tsx
// In components/3D/FloatingElements.tsx
useFrame((state) => {
  element.position.y += Math.sin(time * speed) * 0.002; // Increase for more movement
});
```

#### Hover Effects:

```tsx
// Scale on hover
if (hovered) {
  meshRef.current.scale.setScalar(1.1); // Increase scale
} else {
  meshRef.current.scale.lerp({ x: 1, y: 1, z: 1 } as any, 0.1);
}
```

### 4.2 Camera Controls

**File:** `app/page.tsx`

#### Camera Position:

```tsx
<Canvas
  camera={{
    position: [0, 2, 5], // [x, y, z] - adjust camera position
    fov: 50, // Field of view
    near: 0.1,
    far: 1000,
  }}
>
```

#### Orbit Controls:

```tsx
<OrbitControls
  enablePan={false} // Allow/disallow panning
  enableZoom={true} // Allow/disallow zooming
  enableRotate={true} // Allow/disallow rotation
  minPolarAngle={Math.PI / 6} // Minimum vertical angle
  maxPolarAngle={Math.PI / 2} // Maximum vertical angle
  minDistance={3} // Minimum zoom distance
  maxDistance={10} // Maximum zoom distance
/>
```

---

## 🎵 5. Music Section Customization

**File:** `components/UI/InfoPanel.tsx`

#### Update Music Content:

```tsx
music: {
  title: "Music & Creativity",
  content: (
    <div className="space-y-4">
      <p className="text-david-gray leading-relaxed">
        Your music description...
      </p>
      <div className="space-y-3">
        <h4 className="text-white font-semibold">Currently Listening</h4>
        <div className="space-y-2">
          <div className="flex items-center justify-between p-3 bg-david-dark/30 border border-david-gray/20 rounded-lg">
            <div>
              <p className="text-white text-sm font-medium">Song Title</p>
              <p className="text-david-gray text-xs">Artist Name</p>
            </div>
            <div className="w-2 h-2 bg-david-teal rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
```

---

## 🚀 6. Deployment

### 6.1 Build for Production:

```bash
npm run build
```

### 6.2 Deploy to Vercel:

```bash
npm install -g vercel
vercel --prod
```

### 6.3 Deploy to Netlify:

```bash
npm run build
netlify deploy --prod --dir=out
```

---

## 🔧 7. Troubleshooting

### Common Issues:

#### 3D Objects Not Visible:

- Check camera position and object positions
- Verify lighting is sufficient
- Check if objects are outside camera view

#### Performance Issues:

- Reduce polygon count in 3D models
- Use LOD (Level of Detail) for complex objects
- Optimize textures and materials

#### Import Errors:

- Check file paths are correct
- Verify all dependencies are installed
- Check TypeScript types are correct

---

## 📚 8. Useful Resources

- [Three.js Documentation](https://threejs.org/docs/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- [Drei Helpers](https://github.com/pmndrs/drei)
- [Blender to Web](https://threejs.org/docs/#manual/en/introduction/Creating-a-scene)
- [Tailwind CSS](https://tailwindcss.com/docs)

---

## 🎯 Quick Start Checklist

- [ ] Update personal information in `InfoPanel.tsx`
- [ ] Change colors in `tailwind.config.js`
- [ ] Modify 3D object sizes and positions
- [ ] Add your own 3D models
- [ ] Update navigation branding
- [ ] Customize animations and interactions
- [ ] Test on different devices
- [ ] Deploy to your preferred platform

This documentation covers all aspects of customizing your 3D portfolio. Start with the sections most relevant to your needs and gradually explore more advanced features!

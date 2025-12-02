# File Reference Guide - David Tan 3D Portfolio

## 📁 Complete File Structure & Purpose

### 🏠 App Directory (`app/`)

#### `app/page.tsx` - Main 3D Portfolio Page

**Purpose:** The main entry point that renders the 3D scene and UI components.

**Key Sections:**

- **Canvas Setup:** Configures Three.js canvas with camera, lighting, and controls
- **3D Scene:** Contains all 3D objects (Room, lighting, shadows)
- **UI Components:** Navigation and InfoPanel integration
- **State Management:** Connects to Zustand store for panel state

**Important Code Blocks:**

```tsx
// Camera configuration
camera={{
  position: [0, 2, 5], // Camera position in 3D space
  fov: 50, // Field of view
  near: 0.1, // Near clipping plane
  far: 1000, // Far clipping plane
}}

// Lighting setup
<ambientLight intensity={0.3} />
<directionalLight position={[10, 10, 5]} intensity={1} />

// Camera controls
<OrbitControls
  enablePan={false}
  enableZoom={true}
  enableRotate={true}
  minDistance={3}
  maxDistance={10}
/>
```

#### `app/layout.tsx` - Root Layout Component

**Purpose:** Defines the HTML structure, metadata, and global layout.

**Key Features:**

- **Metadata:** SEO tags, title, description
- **Viewport:** Responsive viewport configuration
- **Global Styles:** Imports global CSS

**Customizable Elements:**

```tsx
export const metadata: Metadata = {
  title: "David Tan - 3D Portfolio", // Your title
  description: "Interactive 3D portfolio...", // Your description
  keywords: ["David Tan", "Portfolio", "3D"], // Your keywords
};
```

#### `app/globals.css` - Global Styles

**Purpose:** Global CSS styles, Tailwind imports, and custom styles.

**Key Sections:**

- **Tailwind Imports:** Base, components, utilities
- **Font Imports:** Google Fonts integration
- **Global Resets:** CSS resets and base styles
- **Custom Styles:** Scrollbar, transitions, etc.

---

### 🎨 Components Directory (`components/`)

#### `components/3D/Room.tsx` - Main Room Structure

**Purpose:** Creates the 3D room environment with walls, floor, desk, and furniture.

**Key Elements:**

- **Floor:** Large plane with material properties
- **Walls:** Three walls (back, left, right) with materials
- **Main Desk:** Central desk with legs
- **Side Table:** Smaller table for vinyl record
- **Lighting:** Ambient lighting elements
- **Interactive Objects:** Imports and positions all interactive elements

**Customization Examples:**

```tsx
// Change floor color
<meshStandardMaterial color="#1e293b" />

// Resize desk
<Box args={[4, 0.1, 2]} position={[0, -0.5, -2]} />

// Add new furniture
<Box args={[1, 1, 1]} position={[2, 0, -1]}>
  <meshStandardMaterial color="#your-color" />
</Box>
```

#### `components/3D/Monitor.tsx` - Computer Monitor

**Purpose:** Creates an interactive monitor with screen display and hover effects.

**Key Features:**

- **Monitor Body:** Main monitor structure with stand
- **Screen Display:** Glowing screen with emissive material
- **Hover Effects:** Scale and color changes on interaction
- **Click Handler:** Opens about panel when clicked

**Customization:**

```tsx
// Change monitor size
<Box args={[1.6, 0.9, 0.1]} /> // [width, height, depth]

// Change screen glow color
<meshStandardMaterial
  emissive="#0d9488"
  emissiveIntensity={0.3}
/>

// Add custom screen content
<Text position={[0, 0, 0.07]} fontSize={0.08}>
  Your Content Here
</Text>
```

#### `components/3D/HardDrive.tsx` - Interactive Hard Drive

**Purpose:** Creates a hard drive object with LED indicator and hover effects.

**Key Features:**

- **Hard Drive Body:** Main rectangular body
- **LED Light:** Pulsing blue LED indicator
- **USB Port:** Small detail for realism
- **Hover Effects:** Rotation and scaling
- **Click Handler:** Opens projects panel

**Customization:**

```tsx
// Change hard drive size
<Box args={[0.8, 0.4, 1.2]} /> // [width, height, depth]

// Change LED color
<meshStandardMaterial
  color="#3b82f6"
  emissive="#3b82f6"
  emissiveIntensity={0.5}
/>

// Change hover color
color={hovered ? "#1e3a8a" : "#374151"}
```

#### `components/3D/VinylRecord.tsx` - Spinning Vinyl Record

**Purpose:** Creates a spinning vinyl record with grooves and center label.

**Key Features:**

- **Vinyl Disc:** Main spinning cylinder
- **Center Hole:** Realistic center hole
- **Grooves:** Ring elements for vinyl texture
- **Now Playing Rack:** Base for the record
- **Continuous Spinning:** Smooth rotation animation
- **Hover Effects:** Faster spinning and scaling

**Customization:**

```tsx
// Change spinning speed
vinylRef.current.rotation.y += 0.01; // Faster: 0.02, Slower: 0.005

// Change vinyl size
<Cylinder args={[0.4, 0.4, 0.02]} /> // [radiusTop, radiusBottom, height]

// Change label color
<Ring args={[0.05, 0.15, 32]}>
  <meshStandardMaterial color="#0d9488" />
</Ring>
```

#### `components/3D/FloatingElements.tsx` - Background Objects

**Purpose:** Creates subtle floating geometric elements for visual depth.

**Key Features:**

- **Multiple Shapes:** Boxes, spheres, torus shapes
- **Floating Animation:** Gentle movement in 3D space
- **Transparency:** Semi-transparent materials
- **Emissive Properties:** Subtle glow effects

**Customization:**

```tsx
// Add new floating object
<Box args={[0.1, 0.1, 0.1]} position={[x, y, z]}>
  <meshStandardMaterial
    color="#your-color"
    transparent
    opacity={0.3}
    emissive="#your-color"
    emissiveIntensity={0.2}
  />
</Box>;

// Change floating speed
const speed = 0.5 + index * 0.2; // Adjust multiplier
```

---

### 🎛️ UI Components Directory (`components/UI/`)

#### `components/UI/Navigation.tsx` - Top Navigation Bar

**Purpose:** Creates the top navigation with branding and camera controls.

**Key Features:**

- **Logo:** Gradient logo with initials
- **Brand Name:** Styled name with gradient text
- **Navigation Links:** About, Projects, Contact buttons
- **Camera Controls:** Home, Desk Focus, Room Overview buttons
- **Hover Effects:** Smooth transitions and indicators

**Customization:**

```tsx
// Change logo initials
<span className="text-white font-bold text-sm">DT</span>

// Change brand name
<h1 className="text-2xl font-bold...">David Tan</h1>

// Add new navigation item
{ id: "blog", label: "Blog", action: () => setActivePanel("blog") }

// Change hover colors
className={`... ${hovered === item.id ? 'text-david-teal' : 'text-david-gray'}`}
```

#### `components/UI/InfoPanel.tsx` - Slide-out Information Panels

**Purpose:** Creates animated slide-out panels with different content sections.

**Key Features:**

- **Multiple Panels:** About, Projects, Music, Contact
- **Smooth Animations:** Framer Motion slide animations
- **Rich Content:** Text, links, skill tags, project cards
- **Interactive Elements:** Clickable links and hover effects
- **Responsive Design:** Adapts to different screen sizes

**Content Sections:**

```tsx
// About section
about: {
  title: "About David",
  icon: <User className="w-6 h-6" />,
  content: (/* Your bio and skills */)
}

// Projects section
projects: {
  title: "Featured Projects",
  icon: <Code className="w-6 h-6" />,
  content: (/* Project cards with descriptions */)
}

// Music section
music: {
  title: "Music & Creativity",
  icon: <Music className="w-6 h-6" />,
  content: (/* Music taste and current listening */)
}

// Contact section
contact: {
  title: "Get In Touch",
  icon: <Mail className="w-6 h-6" />,
  content: (/* Contact links and information */)
}
```

---

### 🗄️ Store Directory (`store/`)

#### `store/useStore.ts` - State Management

**Purpose:** Manages global application state using Zustand.

**State Properties:**

- **activePanel:** Currently open info panel (string | null)
- **cameraPosition:** Current camera view ('home' | 'desk' | 'overview')

**Actions:**

- **setActivePanel:** Opens/closes info panels
- **setCameraPosition:** Changes camera view

**Usage Example:**

```tsx
const { activePanel, setActivePanel } = useStore();

// Open a panel
setActivePanel("about");

// Close panel
setActivePanel(null);
```

---

### ⚙️ Configuration Files

#### `package.json` - Dependencies and Scripts

**Purpose:** Defines project dependencies, scripts, and metadata.

**Key Dependencies:**

- **Next.js 14:** React framework
- **Three.js:** 3D graphics library
- **React Three Fiber:** React renderer for Three.js
- **Drei:** Three.js helpers and abstractions
- **Tailwind CSS:** Utility-first CSS framework
- **Framer Motion:** Animation library
- **Zustand:** State management
- **TypeScript:** Type safety

#### `tailwind.config.js` - Tailwind Configuration

**Purpose:** Configures Tailwind CSS with custom colors, fonts, and animations.

**Custom Extensions:**

```js
theme: {
  extend: {
    fontFamily: {
      'sf-pro': ['SF Pro Display', 'system-ui', 'sans-serif'],
    },
    colors: {
      'david-blue': '#1e3a8a',
      'david-teal': '#0d9488',
      'david-dark': '#0f172a',
      'david-gray': '#64748b',
    },
    animation: {
      'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      'float': 'float 6s ease-in-out infinite',
      'spin-slow': 'spin 8s linear infinite',
    }
  }
}
```

#### `tsconfig.json` - TypeScript Configuration

**Purpose:** Configures TypeScript compiler options and path mapping.

**Key Settings:**

- **Target:** ES5 for browser compatibility
- **Module Resolution:** Bundler for modern bundlers
- **Path Mapping:** @/\* maps to project root
- **Strict Mode:** Enabled for type safety

#### `next.config.js` - Next.js Configuration

**Purpose:** Configures Next.js build and runtime options.

**Current Settings:**

- **Image Domains:** Allows localhost for development
- **App Directory:** Uses new App Router (Next.js 13+)

---

### 📁 Public Directory (`public/`)

**Purpose:** Contains static assets that are served directly.

**Typical Contents:**

- **Fonts:** Custom font files (.woff, .woff2)
- **Images:** Static images (.png, .jpg, .svg)
- **3D Models:** GLTF/GLB model files
- **Icons:** Favicon and app icons

**Usage:**

```tsx
// Reference public assets
<img src="/images/logo.png" />
<useGLTF("/models/chair.glb") />
```

---

## 🔧 Common Customization Patterns

### Adding New Interactive Objects

1. Create new component in `components/3D/`
2. Import and use in `Room.tsx`
3. Add click handler to open info panel
4. Style with hover effects

### Modifying Existing Objects

1. Find object in respective component file
2. Adjust geometry args for size
3. Change material properties for appearance
4. Modify animations in useFrame hook

### Updating Content

1. Edit `InfoPanel.tsx` for text content
2. Update `Navigation.tsx` for branding
3. Modify `layout.tsx` for metadata

### Changing Colors

1. Update `tailwind.config.js` for global colors
2. Modify individual component materials
3. Adjust lighting colors in `page.tsx`

This file reference provides a complete understanding of each file's purpose and how to customize them effectively.

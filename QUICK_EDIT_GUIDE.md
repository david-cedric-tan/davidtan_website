# Quick Edit Guide - David Tan 3D Portfolio

## 🚀 Most Common Edits

### 1. Change Your Name and Branding

**File:** `components/UI/Navigation.tsx`

```tsx
// Line 25-30: Change logo initials and name
<span className="text-white font-bold text-sm">DT</span> // Your initials
<h1 className="text-2xl font-bold...">David Tan</h1> // Your name
```

### 2. Update Personal Information

**File:** `components/UI/InfoPanel.tsx`

```tsx
// Line 15-25: Update about section
title: "About David", // Your name
  // Line 20-25: Your description
  "I'm a passionate developer..."; // Your bio
```

### 3. Change Colors

**File:** `tailwind.config.js`

```js
// Line 8-12: Change color scheme
colors: {
  'david-blue': '#1e3a8a',    // Primary color
  'david-teal': '#0d9488',    // Accent color
  'david-dark': '#0f172a',    // Background
  'david-gray': '#64748b',    // Text color
}
```

### 4. Resize Monitor

**File:** `components/3D/Monitor.tsx`

```tsx
// Line 45: Change monitor size
args={[2.0, 1.2, 0.1]} // [width, height, depth]
```

### 5. Change Room Background

**File:** `components/3D/Room.tsx`

```tsx
// Line 25: Change floor color
<meshStandardMaterial color="#1a202c" />
// Line 35: Change wall color
<meshStandardMaterial color="#0a0a0a" />
```

### 6. Add New 3D Object

**File:** `components/3D/Room.tsx`

```tsx
// Add after line 80
<Box args={[0.5, 0.5, 0.5]} position={[1, 0, -1]}>
  <meshStandardMaterial color="#ff6b6b" />
</Box>
```

### 7. Update Contact Info

**File:** `components/UI/InfoPanel.tsx`

```tsx
// Line 180: Update email
href = "mailto:your@email.com";
// Line 185: Update GitHub
href = "https://github.com/yourusername";
```

### 8. Change Vinyl Spinning Speed

**File:** `components/3D/VinylRecord.tsx`

```tsx
// Line 25: Faster = 0.02, Slower = 0.005
vinylRef.current.rotation.y += 0.01;
```

### 9. Modify Camera Position

**File:** `app/page.tsx`

```tsx
// Line 23-28: Camera settings
camera={{
  position: [0, 2, 5], // [x, y, z] position
  fov: 50, // Field of view
}}
```

### 10. Add Your Projects

**File:** `components/UI/InfoPanel.tsx`

```tsx
// Line 60-80: Add project cards
<div className="p-4 bg-david-dark/30 border border-david-gray/20 rounded-lg">
  <h4 className="text-white font-semibold mb-2">Your Project</h4>
  <p className="text-david-gray text-sm mb-2">Description</p>
</div>
```

## 🎨 Color Palette Reference

```css
/* Current Colors */
Primary Blue: #1e3a8a
Accent Teal: #0d9488
Background Dark: #0f172a
Text Gray: #64748b

/* Alternative Palettes */
/* Dark Purple Theme */
Primary: #6b46c1
Accent: #a855f7
Background: #1e1b4b

/* Green Theme */
Primary: #059669
Accent: #10b981
Background: #064e3b

/* Orange Theme */
Primary: #ea580c
Accent: #f97316
Background: #7c2d12
```

## 📁 File Structure Quick Reference

```
app/
├── page.tsx          # Main 3D scene
├── layout.tsx        # HTML structure
└── globals.css       # Global styles

components/3D/
├── Room.tsx          # Room layout & furniture
├── Monitor.tsx       # Computer monitor
├── HardDrive.tsx     # Interactive hard drive
├── VinylRecord.tsx   # Spinning vinyl
└── FloatingElements.tsx # Background objects

components/UI/
├── Navigation.tsx    # Top navigation bar
└── InfoPanel.tsx    # Slide-out panels

store/
└── useStore.ts      # State management
```

## 🔧 Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Install new dependencies
npm install package-name

# Check for errors
npm run lint
```

## 🎯 Quick Customization Checklist

- [ ] Change name in Navigation.tsx
- [ ] Update bio in InfoPanel.tsx
- [ ] Change colors in tailwind.config.js
- [ ] Update contact info
- [ ] Add your projects
- [ ] Resize monitor if needed
- [ ] Test on mobile devices
- [ ] Deploy to your domain

## 🚨 Important Notes

1. **Always test changes** in development mode first
2. **Save files** after making changes
3. **Refresh browser** to see updates
4. **Check console** for any errors
5. **Backup your work** before major changes

## 📞 Need Help?

1. Check the full DOCUMENTATION.md for detailed guides
2. Look at the Three.js documentation for 3D concepts
3. Check React Three Fiber docs for component usage
4. Test changes incrementally to isolate issues

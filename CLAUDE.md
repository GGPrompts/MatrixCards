# CLAUDE.md - Matrix Game Hall Master Documentation

## 🎮 Project Vision

Transform the Matrix Cards into a full 3D casino/game hall experience using Three.js CSS3D rendering, inspired by the periodic table example but adapted for playing cards with Matrix aesthetics.

## 🃏 CSS3D Card Rendering Strategy

### Why CSS3D for Cards?

Based on the Three.js periodic table example (https://threejs.org/examples/#css3d_periodictable), CSS3D is perfect for cards because:

1. **HTML/CSS Power**: Full access to gradients, shadows, animations, fonts
2. **Performance**: Leverages GPU acceleration for transforms
3. **Interactivity**: Native DOM events (click, hover, etc.)
4. **Quality**: No texture resolution limits - cards stay crisp at any distance

### Core Implementation Pattern (from periodic table example)

```javascript
// Create CSS3D card element
const element = document.createElement('div');
element.className = 'matrix-card';
element.style.width = '140px';
element.style.height = '200px';

// Add to 3D scene
const card3D = new CSS3DObject(element);
card3D.position.set(x, y, z);
scene.add(card3D);

// Animate between layouts (table spread, hand fan, deck stack)
function transform(targets, duration) {
  TWEEN.update();
  objects.forEach((object, i) => {
    new TWEEN.Tween(object.position)
      .to(targets[i].position, duration)
      .easing(TWEEN.Easing.Exponential.InOut)
      .start();
  });
}
```

### Layout Modes for Cards

1. **Deck Stack**: Cards stacked with slight offset
2. **Table Spread**: Cards laid out on virtual table
3. **Hand Fan**: Cards fanned out like held in hand  
4. **Grid Gallery**: Wall display of all cards
5. **Helix Tower**: Spiral showcase formation
6. **Sphere Globe**: Cards on spherical surface

## 🏗️ Modular Architecture

### Project Structure
```
matrix-game-hall/
├── packages/
│   ├── @matrix/cards-core/          # Current card components
│   ├── @matrix/game-engine/         # Game logic & rules
│   ├── @matrix/3d-renderer/         # Three.js CSS3D setup
│   ├── @matrix/multiplayer/         # WebSocket server
│   ├── @matrix/ai-opponents/        # AI player logic
│   └── @matrix/shared/              # Types & utilities
├── apps/
│   ├── game-hall/                   # Main Next.js app
│   └── game-server/                 # Node.js backend
└── assets/
    ├── card-designs/                # AI-generated art
    └── sounds/                      # Matrix sound effects
```

### Terminal Workflow (Max Plan)
```bash
# Terminal 1 - Card Components
cd packages/@matrix/cards-core
claude code # "Update card designs with new AI art"

# Terminal 2 - 3D Renderer  
cd packages/@matrix/3d-renderer
claude code # "Implement CSS3D card animations"

# Terminal 3 - Game Logic
cd packages/@matrix/game-engine
claude code # "Create poker hand evaluation system"

# Terminal 4 - Multiplayer
cd packages/@matrix/multiplayer
claude code # "Build WebSocket room management"
```

## 🎨 Card Design System

### Standard Cards (52 + Jokers)
- **Suits**: Replace with Matrix themes
  - ♠️ Spades → Binary (Green)
  - ♥️ Hearts → Neural (Purple)  
  - ♦️ Diamonds → Quantum (Teal)
  - ♣️ Clubs → Firewall (Orange)

### Special Face Cards
- **CLAUDE.md**: Ace of Binary (most powerful)
- **Workflow Chains**: King of Neural
- **MCP Setup**: Queen of Quantum
- **Hooks**: Jack of Firewall
- **Config Files**: Special Jokers

### AI Art Generation Prompts
See template in previous message for generating card backs with consistent Matrix aesthetic.

## 🎯 Technical Implementation

### Three.js + CSS3D Setup

```javascript
// Based on 3dFileSystem research
import * as THREE from 'three';
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer';

// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000);
camera.position.z = 3000;

// Dual renderers (WebGL for environment, CSS3D for cards)
const glRenderer = new THREE.WebGLRenderer({ antialias: true });
const cssRenderer = new CSS3DRenderer();

// Matrix environment (from 3dFileSystem)
const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(10000, 10000),
  new THREE.MeshStandardMaterial({ 
    color: 0x0a0a0a,
    roughness: 0.8,
    metalness: 0.2 
  })
);
scene.add(floor);

// Neon lighting
const ambientLight = new THREE.AmbientLight(0x404040);
const spotLight = new THREE.SpotLight(0x00ff00, 1);
scene.add(ambientLight, spotLight);
```

### Card Component Integration

```javascript
// Convert React card to CSS3D
function createCard3D(cardData) {
  const cardElement = document.createElement('div');
  
  // Apply Matrix card styles
  cardElement.className = `matrix-card ${cardData.variant}`;
  cardElement.innerHTML = `
    <div class="card-front">
      <h3>${cardData.title}</h3>
      <div class="card-content">${cardData.content}</div>
    </div>
    <div class="card-back">
      ${cardData.backContent}
    </div>
  `;
  
  const css3DObject = new CSS3DObject(cardElement);
  return css3DObject;
}
```

### Performance Optimizations (from 3dFileSystem docs)

1. **Instanced Rendering**: For multiple cards of same type
2. **Frustum Culling**: Hide cards outside camera view
3. **LOD System**: Lower detail for distant cards
4. **Object Pooling**: Reuse card objects
5. **Render-on-demand**: Only update when needed

```javascript
// Efficient animation loop
let needsRender = false;
function animate() {
  requestAnimationFrame(animate);
  TWEEN.update();
  
  if (needsRender) {
    glRenderer.render(scene, camera);
    cssRenderer.render(scene, camera);
    needsRender = false;
  }
}
```

## 🎮 Game Implementations

### Solitaire
- **Layout**: Tableau, foundation, stock, waste
- **Animations**: Smooth card movements via TWEEN
- **Auto-complete**: Particle effects on win

### Poker
- **Multiplayer**: WebSocket real-time sync
- **Hand evaluation**: Fast bit manipulation
- **Betting**: Chip animations with physics

### Blackjack
- **Dealer AI**: Configurable strategies
- **Card counting**: Track for achievements
- **Split/Double**: Animated card movements

## 🚀 Next Steps

### Phase 1: Core Setup
1. Create monorepo structure
2. Port CSS3DRenderer from Three.js
3. Adapt Matrix card styles for CSS3D
4. Basic card animations

### Phase 2: First Game
1. Implement Solitaire (single-player)
2. Card drag & drop with physics
3. Win conditions & celebrations
4. Sound effects

### Phase 3: Multiplayer
1. WebSocket server setup
2. Room/lobby system
3. Poker implementation
4. Chat & emotes

### Phase 4: Polish
1. AI opponents with personalities
2. Achievements & progression
3. Custom card deck builder
4. Tournament modes

## 📚 Resources

### Three.js Documentation
- [CSS3DRenderer](https://threejs.org/docs/#examples/en/renderers/CSS3DRenderer)
- [Examples](https://threejs.org/examples/)
- [Performance Tips](https://discoverthreejs.com/tips-and-tricks/)

### From 3dFileSystem Project
- Camera controls implementation
- Performance optimization patterns
- Memory management strategies
- FPS monitoring setup

### CSS3D Specific
- Transform3D properties
- GPU acceleration tricks
- Layering & z-index in 3D
- Event handling in 3D space

## 🎯 Development Commands

```bash
# Install dependencies
npm install three @types/three
npm install tween.js @types/tween.js
npm install socket.io socket.io-client

# Run development
npm run dev

# Type checking
npm run type-check

# Performance profiling
npm run profile
```

## 🔥 Matrix Aesthetic Guidelines

1. **Colors**: Neon green (#00ff00), cyan, orange, purple on black
2. **Effects**: Glow, scanlines, digital rain, glitch
3. **Typography**: Monospace fonts, terminal style
4. **Animations**: Smooth with occasional glitch
5. **Sounds**: Electronic, cyber, terminal beeps

---

*This document serves as the master reference for the Matrix Game Hall project. Update as features are implemented.*
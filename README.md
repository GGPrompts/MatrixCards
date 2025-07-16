# Matrix Cards

A cyberpunk-themed React card component featuring Matrix and Neon Glass styles.

## Features

- **Matrix Style Cards**: Terminal-inspired design with green glow effects
- **Neon Glass Cards**: Cyberpunk aesthetic with cyan glow and glass morphism
- **Flip Animation**: 3D card flip to reveal additional content
- **Responsive Design**: Works on desktop and mobile
- **Dark/Cyber Themes**: Toggle between dark and cyber gradient backgrounds

## Installation

```bash
npm install
```

## Running the App

```bash
npm start
```

## Card Variants

### Matrix Card (Green)
- Black background with green borders and text
- Terminal-style monospace font
- Animated binary code at the top
- Scanline effects
- Digital rain animation on back

### Matrix Teal Card
- Black background with teal/cyan glow
- Terminal-style monospace font
- Quantum computing theme
- Animated binary code and rain effects

### Matrix Orange Card  
- Black background with orange glow
- Terminal-style monospace font
- Firewall/security theme
- Animated binary code and rain effects

### Matrix Purple Card
- Black background with purple glow
- Terminal-style monospace font
- AI/neural network theme
- Animated binary code and rain effects

### Matrix Blue Card
- Black background with blue glow
- Terminal-style monospace font
- Deep web/data theme
- Animated binary code and rain effects

### Neon Glass Card  
- Dark glass with cyan neon glow
- Backdrop blur effects
- Cyberpunk-inspired design
- Semi-transparent with glow effects

## Usage

```jsx
<Card
  title="SYSTEM.INIT"
  variant="matrix" // Options: "matrix", "matrix-teal", "matrix-orange", "matrix-purple", "matrix-blue", "neon"
  content={<div>Front content</div>}
  backContent={<div>Back content</div>}
/>
```

## Customization

The cards use CSS modules for styling. You can modify:
- Colors in the CSS variables
- Animation speeds
- Glow intensity
- Font styles

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support (backdrop-filter with flag)
- Safari: Full support

Enjoy the cyberpunk aesthetic! 🎭💚

## Transferring to Another Project

### Important Notes for GGPrompts Integration

1. **CSS Modules**: Both `Card` and `CardPack` components use CSS modules properly:
   - All styles are scoped using `styles.className`
   - No global CSS pollution
   - Ready for integration into CSS module-based projects

2. **Files to Transfer**:
   ```
   src/components/Card/
   ├── Card.jsx
   └── Card.module.css
   
   src/components/CardPack/
   ├── CardPack.jsx
   └── CardPack.module.css
   ```

3. **Dependencies**: 
   - No external dependencies required
   - Pure React components with CSS modules
   - Icons use inline SVG (no icon libraries needed)

4. **⚠️ CSS Module Compatibility Issue**:
   - The `Card.module.css` contains some `:global()` selectors for icon animations
   - These are used for the special icon effects (Claude, quantum, neural, data icons)
   - **Solution**: Either:
     a) Convert these to module classes (recommended)
     b) Ensure the global classes don't conflict with your project

5. **Integration Steps**:
   ```bash
   # 1. Copy component folders to your project
   cp -r src/components/Card your-project/src/components/
   cp -r src/components/CardPack your-project/src/components/
   
   # 2. Import and use
   import Card from './components/Card/Card';
   import CardPack from './components/CardPack/CardPack';
   ```

6. **Customization**:
   - All colors use CSS `currentColor` which inherits from variant classes
   - Easily themeable by modifying the color values in CSS
   - Responsive design included

7. **Usage Example**:
   ```jsx
   // Individual card
   <Card
     title="SYSTEM.INIT"
     variant="matrix"
     content={<div>Front content</div>}
     backContent={<div>Back content</div>}
   />
   
   // Card pack
   <CardPack
     title="MATRIX CARDS"
     subtitle="DIGITAL COLLECTION"
     cards={cardsArray}
     variant="matrix-green"
     onOpen={handlePackOpen}
   />
   ```
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
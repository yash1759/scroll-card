# Card Rolling - Dynamic Card Display

A modern, dynamic card rolling interface built with Next.js and Tailwind CSS. The page displays cards in a fan-like arrangement with smooth animations and supports multiple card types including images, text, logos, and abstract designs.

## Features

- **Dynamic Card System**: Pass any number of cards with different types
- **Multiple Card Types**: Support for images, text, logos, abstract designs, and portraits
- **Responsive Design**: Works on different screen sizes
- **Smooth Animations**: Cards have hover effects and entrance animations
- **Flexible Layout**: Cards automatically arrange in a fan-like spread

## Card Types

### 1. Image Cards
```javascript
{
  id: 1,
  type: 'image',
  imageUrl: '/path/to/your/image.jpg',
  title: 'Card Title'
}
```

### 2. Text Cards
```javascript
{
  id: 2,
  type: 'text',
  backgroundColor: '#f3f4f6',
  textLines: ['LINE 1', 'LINE 2', 'LINE 3'],
  vertical: false // Set to true for vertical text
}
```

### 3. Logo Cards
```javascript
{
  id: 3,
  type: 'logo',
  backgroundColor: '#000',
  logo: '✓' // Any symbol or text
}
```

### 4. Abstract Cards
```javascript
{
  id: 4,
  type: 'abstract',
  backgroundColor: '#000',
  shapes: [
    { top: '16px', left: '16px', width: '64px', height: '64px', color: '#9ca3af', opacity: 0.8 },
    { top: '80px', left: '32px', width: '80px', height: '48px', color: '#d1d5db', opacity: 0.6 }
  ]
}
```

### 5. Portrait Cards
```javascript
{
  id: 5,
  type: 'portrait',
  background: 'linear-gradient(to bottom right, #374151, #000)'
}
```

### 6. Default Cards
```javascript
{
  id: 6,
  type: 'default',
  backgroundColor: '#3b82f6',
  title: 'CARD TITLE'
}
```

## Usage

### Basic Usage
```javascript
import Home from './app/page';

const myCards = [
  {
    id: 1,
    type: 'image',
    imageUrl: '/my-image.jpg',
    title: 'My Image'
  },
  {
    id: 2,
    type: 'text',
    backgroundColor: '#fbbf24',
    textLines: ['HELLO', 'WORLD'],
    vertical: true
  }
];

export default function MyPage() {
  return <Home cards={myCards} />;
}
```

### Adding Images

1. Place your images in the `public` folder
2. Reference them in your card data:
```javascript
{
  id: 1,
  type: 'image',
  imageUrl: '/my-image.jpg', // Path relative to public folder
  title: 'My Image'
}
```

### Customizing Card Positions

The cards automatically arrange in a fan-like spread, but you can customize the layout by modifying the Card component's positioning logic in `app/components/Card.js`.

## File Structure

```
app/
├── components/
│   └── Card.js          # Card component
├── globals.css          # Global styles
├── layout.js            # Root layout
└── page.js              # Main page component
```

## Styling

The component uses Tailwind CSS for styling. Key classes:
- `card`: Base card styling with hover effects
- `vertical-text`: For vertical text display
- `shadow-custom`: Enhanced shadow effects
- `abstract-shape`: For abstract card shapes

## Customization

### Changing Card Sizes
Modify the width and height in the Card component:
```javascript
style={{
  width: '256px',  // Change card width
  height: '320px', // Change card height
}}
```

### Adjusting Spread
Modify the rotation and translation calculations in the Card component:
```javascript
const rotation = -15 + (index * (30 / (totalCards - 1)));
const translateX = -200 + (index * (400 / (totalCards - 1)));
const translateY = -20 + (index * (40 / (totalCards - 1)));
```

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000)

## Technologies Used

- Next.js 15
- React 19
- Tailwind CSS 4
- JavaScript ES6+

## License

MIT License

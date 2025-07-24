// Generate 100 sample cards for the carousel
export const generateSampleCards = () => {
  const cards = [];
  
  // Card types for variety
  const cardTypes = ['text', 'logo', 'abstract', 'portrait', 'default'];
  const colors = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899'];
  const logos = ['✓', '★', '◆', '●', '▲', '■'];
  
  for (let i = 0; i < 100; i++) {
    const cardType = cardTypes[i % cardTypes.length];
    const color = colors[i % colors.length];
    
    let card = {
      id: i + 1,
      type: cardType,
      title: `Card ${i + 1}`
    };
    
    switch (cardType) {
      case 'text':
        card = {
          ...card,
          backgroundColor: '#f3f4f6',
          textLines: [`TEXT ${i + 1}`, `LINE ${i + 1}`, `CONTENT ${i + 1}`],
          vertical: i % 3 === 0 // Every 3rd text card is vertical
        };
        break;
        
      case 'logo':
        card = {
          ...card,
          backgroundColor: '#000',
          logo: logos[i % logos.length]
        };
        break;
        
      case 'abstract':
        card = {
          ...card,
          backgroundColor: '#000',
          shapes: [
            {
              top: `${16 + (i % 20)}px`,
              left: `${16 + (i % 20)}px`,
              width: `${48 + (i % 32)}px`,
              height: `${48 + (i % 32)}px`,
              color: colors[i % colors.length],
              opacity: 0.6 + (i % 4) * 0.1
            },
            {
              top: `${80 + (i % 40)}px`,
              left: `${32 + (i % 30)}px`,
              width: `${64 + (i % 40)}px`,
              height: `${32 + (i % 24)}px`,
              color: colors[(i + 1) % colors.length],
              opacity: 0.5 + (i % 3) * 0.1
            },
            {
              bottom: `${32 + (i % 20)}px`,
              right: `${24 + (i % 20)}px`,
              width: `${72 + (i % 32)}px`,
              height: `${24 + (i % 20)}px`,
              color: colors[(i + 2) % colors.length],
              opacity: 0.7 + (i % 3) * 0.1
            }
          ]
        };
        break;
        
      case 'portrait':
        card = {
          ...card,
          background: `linear-gradient(to bottom right, ${color}dd, ${color})`
        };
        break;
        
      case 'default':
        card = {
          ...card,
          backgroundColor: color,
          title: `CARD ${i + 1}`
        };
        break;
    }
    
    cards.push(card);
  }
  
  return cards;
};

// Generate cards with specific content matching the image
export const generateImageMatchingCards = () => {
  return [
    {
      id: 1,
      type: 'abstract',
      backgroundColor: '#000',
      shapes: [
        { top: '16px', left: '16px', width: '64px', height: '64px', color: '#9ca3af', opacity: 0.8 },
        { top: '80px', left: '32px', width: '80px', height: '48px', color: '#d1d5db', opacity: 0.6 },
        { bottom: '32px', right: '24px', width: '96px', height: '32px', color: '#6b7280', opacity: 0.7 },
        { bottom: '80px', left: '48px', width: '48px', height: '48px', color: '#4b5563', opacity: 0.5 }
      ]
    },
    {
      id: 2,
      type: 'portrait',
      background: 'linear-gradient(to bottom right, #374151, #000)'
    },
    {
      id: 3,
      type: 'text',
      backgroundColor: '#f3f4f6',
      textLines: ['BODY', 'WORK', '197', 'NOW', 'BODY', 'WOR']
    },
    {
      id: 4,
      type: 'logo',
      backgroundColor: '#000',
      logo: '✓'
    },
    {
      id: 5,
      type: 'text',
      backgroundColor: '#fbbf24',
      textLines: ['PARK'],
      vertical: true
    },
    // Add more cards to reach 100 with variety
    ...Array.from({ length: 95 }, (_, i) => {
      const cardType = ['text', 'logo', 'abstract', 'portrait', 'default'][i % 5];
      const colors = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899'];
      const color = colors[i % colors.length];
      
      let card = {
        id: i + 6,
        type: cardType,
        title: `Card ${i + 6}`
      };
      
      switch (cardType) {
        case 'text':
          card = {
            ...card,
            backgroundColor: '#f3f4f6',
            textLines: [`TEXT ${i + 6}`, `LINE ${i + 6}`, `CONTENT ${i + 6}`],
            vertical: i % 3 === 0
          };
          break;
          
        case 'logo':
          card = {
            ...card,
            backgroundColor: '#000',
            logo: ['✓', '★', '◆', '●', '▲', '■'][i % 6]
          };
          break;
          
        case 'abstract':
          card = {
            ...card,
            backgroundColor: '#000',
            shapes: [
              {
                top: `${16 + (i % 20)}px`,
                left: `${16 + (i % 20)}px`,
                width: `${48 + (i % 32)}px`,
                height: `${48 + (i % 32)}px`,
                color: colors[i % colors.length],
                opacity: 0.6 + (i % 4) * 0.1
              },
              {
                top: `${80 + (i % 40)}px`,
                left: `${32 + (i % 30)}px`,
                width: `${64 + (i % 40)}px`,
                height: `${32 + (i % 24)}px`,
                color: colors[(i + 1) % colors.length],
                opacity: 0.5 + (i % 3) * 0.1
              },
              {
                bottom: `${32 + (i % 20)}px`,
                right: `${24 + (i % 20)}px`,
                width: `${72 + (i % 32)}px`,
                height: `${24 + (i % 20)}px`,
                color: colors[(i + 2) % colors.length],
                opacity: 0.7 + (i % 3) * 0.1
              }
            ]
          };
          break;
          
        case 'portrait':
          card = {
            ...card,
            background: `linear-gradient(to bottom right, ${color}dd, ${color})`
          };
          break;
          
        case 'default':
          card = {
            ...card,
            backgroundColor: color,
            title: `CARD ${i + 6}`
          };
          break;
      }
      
      return card;
    })
  ];
}; 
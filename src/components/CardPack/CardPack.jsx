import React, { useState } from 'react';
import styles from './CardPack.module.css';

const CardPack = ({ 
  title = "MATRIX CARDS",
  subtitle = "DIGITAL COLLECTION",
  cards = [],
  variant = 'matrix-green',
  onOpen,
  isOpen = false,
  className = ''
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);

  const handleClick = () => {
    if (!isFlipping && onOpen) {
      setIsFlipping(true);
      setTimeout(() => {
        onOpen();
        setIsFlipping(false);
      }, 600);
    }
  };

  const getCardCount = () => {
    return cards.length || 0;
  };

  return (
    <div 
      className={`${styles.packContainer} ${className} ${isOpen ? styles.packOpen : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div className={`${styles.pack} ${styles[variant]} ${isHovered ? styles.packHovered : ''} ${isFlipping ? styles.packFlipping : ''}`}>
        {/* Front face of the pack */}
        <div className={styles.packFront}>
          <div className={styles.circuitPattern}></div>
          <div className={styles.packContent}>
            <h2 className={styles.packTitle}>{title}</h2>
            <div className={styles.packDivider}></div>
            <p className={styles.packSubtitle}>{subtitle}</p>
            <div className={styles.cardCount}>
              <span className={styles.countNumber}>{getCardCount()}</span>
              <span className={styles.countLabel}>CARDS</span>
            </div>
          </div>
          <div className={styles.packGlow}></div>
        </div>

        {/* Side faces for 3D effect */}
        <div className={styles.packRight}>
          <div className={styles.sidePattern}></div>
        </div>
        <div className={styles.packLeft}>
          <div className={styles.sidePattern}></div>
        </div>
        <div className={styles.packTop}>
          <div className={styles.topPattern}></div>
        </div>
        <div className={styles.packBottom}>
          <div className={styles.bottomPattern}></div>
        </div>

        {/* Back face (visible when opened) */}
        <div className={styles.packBack}>
          <div className={styles.backPattern}></div>
        </div>
      </div>

      {/* Floating cards preview when hovered */}
      {isHovered && cards.length > 0 && (
        <div className={styles.previewCards}>
          {cards.slice(0, 3).map((card, index) => (
            <div 
              key={index} 
              className={`${styles.previewCard} ${styles[`previewCard${index + 1}`]}`}
              style={{ '--card-index': index }}
            >
              <div className={styles.previewCardContent}>
                <span className={styles.previewTitle}>{card.title || `Card ${index + 1}`}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Digital rain effect */}
      <div className={styles.digitalRain}>
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className={styles.rainDrop}
            style={{ 
              '--drop-delay': `${Math.random() * 5}s`,
              '--drop-duration': `${3 + Math.random() * 2}s`,
              left: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CardPack;
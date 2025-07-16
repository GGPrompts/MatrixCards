import React, { useState } from 'react';
import styles from './Card.module.css';

const Card = ({ 
  title, 
  content, 
  backContent, 
  width = '100%', 
  height = '450px',
  className = '',
  variant = 'matrix' // Default to matrix style
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleHeaderClick = () => {
    if (backContent) {
      setIsFlipped(!isFlipped);
    }
  };
  
  const handleAction = (action) => {
    console.log(`Action clicked: ${action}`);
  };

  return (
    <div 
      className={`${styles.cardContainer} ${className} ${isFlipped ? styles.containerFlipped : ''}`}
      style={{ height }}
    >
      <div 
        className={`${styles.card} ${styles[variant]} ${isFlipped ? styles.flipped : ''}`}
      >
        <div className={styles.cardFront}>
          <div className={styles.cardTitle} onClick={handleHeaderClick}>
            <h3>{title}</h3>
          </div>
          <div className={styles.cardContent}>
            {content}
          </div>
          <div className={styles.cardActions}>
            <button className={styles.actionButton} onClick={() => handleAction('execute')} title="Execute">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </button>
            <button className={styles.actionButton} onClick={() => handleAction('terminal')} title="Terminal">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="4 17 10 11 4 5"></polyline>
                <line x1="12" y1="19" x2="20" y2="19"></line>
              </svg>
            </button>
            <button className={styles.actionButton} onClick={() => handleAction('download')} title="Download">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </button>
            <button className={styles.actionButton} onClick={() => handleAction('hack')} title="Hack">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"></path>
              </svg>
            </button>
            <button className={styles.actionButton} onClick={() => handleAction('power')} title="Power">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
                <line x1="12" y1="2" x2="12" y2="12"></line>
              </svg>
            </button>
          </div>
        </div>
        {backContent && (
          <div className={styles.cardBack} onClick={handleHeaderClick}>
            <div className={styles.cardBackContent}>
              {backContent}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
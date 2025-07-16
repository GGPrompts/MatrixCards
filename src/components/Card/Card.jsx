import React, { useState, useRef, useEffect } from 'react';
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
  const [frontScrollIndicators, setFrontScrollIndicators] = useState({ top: false, bottom: false });
  const [backScrollIndicators, setBackScrollIndicators] = useState({ top: false, bottom: false });
  const frontContentRef = useRef(null);
  const backContentRef = useRef(null);

  const handleHeaderClick = () => {
    if (backContent) {
      setIsFlipped(!isFlipped);
    }
  };
  
  const handleAction = (action) => {
    console.log(`Action clicked: ${action}`);
  };

  // Check if content is scrollable and update indicators
  const updateScrollIndicators = (element, setIndicators) => {
    if (!element) return;
    
    const { scrollTop, scrollHeight, clientHeight } = element;
    const isScrollable = scrollHeight > clientHeight;
    const hasScrolledDown = scrollTop > 1; // Small threshold for float precision
    const hasMoreBelow = scrollTop < (scrollHeight - clientHeight - 1);
    
    setIndicators({
      top: isScrollable && hasScrolledDown,
      bottom: isScrollable && hasMoreBelow
    });
  };

  // Handle scroll via the invisible handle
  useEffect(() => {
    const handleScrollGesture = (scrollHandle, contentContainer) => {
      if (!scrollHandle || !contentContainer) return;

      let isScrolling = false;
      let startY = 0;
      let startScrollTop = 0;

      const handleStart = (e) => {
        isScrolling = true;
        startY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
        startScrollTop = contentContainer.scrollTop;
        e.preventDefault();
      };

      const handleMove = (e) => {
        if (!isScrolling) return;
        e.preventDefault();
        
        const currentY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
        const deltaY = startY - currentY;
        contentContainer.scrollTop = startScrollTop + deltaY;
      };

      const handleEnd = () => {
        isScrolling = false;
      };

      // Touch events
      scrollHandle.addEventListener('touchstart', handleStart, { passive: false });
      scrollHandle.addEventListener('touchmove', handleMove, { passive: false });
      scrollHandle.addEventListener('touchend', handleEnd);

      // Mouse events for testing
      scrollHandle.addEventListener('mousedown', handleStart);
      window.addEventListener('mousemove', handleMove);
      window.addEventListener('mouseup', handleEnd);

      return () => {
        scrollHandle.removeEventListener('touchstart', handleStart);
        scrollHandle.removeEventListener('touchmove', handleMove);
        scrollHandle.removeEventListener('touchend', handleEnd);
        scrollHandle.removeEventListener('mousedown', handleStart);
        window.removeEventListener('mousemove', handleMove);
        window.removeEventListener('mouseup', handleEnd);
      };
    };

    // Set up scroll handles for both front and back content
    const frontHandle = frontContentRef.current?.querySelector(`.${styles.scrollHandle}`);
    const frontContent = frontContentRef.current;
    const backHandle = backContentRef.current?.querySelector(`.${styles.scrollHandle}`);
    const backContent = backContentRef.current;

    const cleanupFront = handleScrollGesture(frontHandle, frontContent);
    const cleanupBack = handleScrollGesture(backHandle, backContent);

    return () => {
      if (cleanupFront) cleanupFront();
      if (cleanupBack) cleanupBack();
    };
  }, []);

  // Monitor scroll position for indicators
  useEffect(() => {
    const frontContent = frontContentRef.current;
    const backContent = backContentRef.current;

    // Initial check
    updateScrollIndicators(frontContent, setFrontScrollIndicators);
    updateScrollIndicators(backContent, setBackScrollIndicators);

    // Scroll event handlers
    const handleFrontScroll = () => updateScrollIndicators(frontContent, setFrontScrollIndicators);
    const handleBackScroll = () => updateScrollIndicators(backContent, setBackScrollIndicators);

    if (frontContent) {
      frontContent.addEventListener('scroll', handleFrontScroll);
    }
    if (backContent) {
      backContent.addEventListener('scroll', handleBackScroll);
    }

    // Also check on resize
    const handleResize = () => {
      updateScrollIndicators(frontContent, setFrontScrollIndicators);
      updateScrollIndicators(backContent, setBackScrollIndicators);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      if (frontContent) {
        frontContent.removeEventListener('scroll', handleFrontScroll);
      }
      if (backContent) {
        backContent.removeEventListener('scroll', handleBackScroll);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [content, backContent]); // Re-check when content changes

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
          <div className={styles.cardContent} ref={frontContentRef}>
            {content}
            <div className={styles.scrollHandle} />
          </div>
          <div className={`${styles.scrollIndicatorTop} ${frontScrollIndicators.top ? styles.visible : ''}`} />
          <div className={`${styles.scrollIndicatorBottom} ${frontScrollIndicators.bottom ? styles.visible : ''}`} />
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
            <div className={styles.cardBackContent} ref={backContentRef}>
              {backContent}
              <div className={styles.scrollHandle} />
            </div>
            <div className={`${styles.scrollIndicatorTop} ${backScrollIndicators.top ? styles.visible : ''}`} />
            <div className={`${styles.scrollIndicatorBottom} ${backScrollIndicators.bottom ? styles.visible : ''}`} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
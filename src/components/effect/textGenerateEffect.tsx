'use client'
import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  delay: number; 
  infinite?: boolean;  
}

const Typewriter: React.FC<TypewriterProps> = ({ text, delay, infinite = false }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (currentIndex < text.length ) {
      timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

    } else if (infinite) {
      setCurrentIndex(0);
      setCurrentText('');
    }

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return <span>{currentText}</span>;
};

export default Typewriter;

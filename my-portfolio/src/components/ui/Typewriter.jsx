import { useState, useEffect } from 'react';

const Typewriter = ({ text, delay = 100 }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // If we haven't reached the end of the string, set a timeout to add the next character
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
      
      // Cleanup function to prevent memory leaks if the component unmounts
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <span className="typewriter-wrapper">
      {currentText}
      {/* The blinking terminal cursor */}
      <span className="typewriter-cursor">_</span>
    </span>
  );
};

export default Typewriter;
import React, { useState, useEffect } from 'react';

export default function TypeWriter({ text, speed = 50 }) {
  const [displayedText, setDisplayedText] = useState('');
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;
      if (index >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return <pre className="whitespace-pre-wrap">{displayedText}</pre>;
}

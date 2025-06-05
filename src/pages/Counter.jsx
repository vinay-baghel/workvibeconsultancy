import React, { useEffect, useState } from 'react';

const Counter = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target);
    const incrementTime = 30;
    const totalIncrements = duration / incrementTime;
    const increment = end / totalIncrements;

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.ceil(start));
      }
    }, incrementTime);

    return () => clearInterval(counter);
  }, [target, duration]);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ fontSize: '2.5rem', color: 'white' }}>{count}+</h2>
    </div>
  );
};

export default Counter;
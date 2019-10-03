import React, { useState, useEffect } from 'react';

let App = () => {
  let [count, setCount] = useState(0);
  let [mousePosition, setMousePosition] = useState({ x: null, y: null});

  useEffect(() => {
    document.title = `You have clicked ${ count } times`;
    window.addEventListener('mousemove', onMouseMove);

    return () => window.removeEventListener('mousemove', onMouseMove);
  }, [count]);

  let addCount = () => setCount(count + 1);

  let onMouseMove = event => {
    setMousePosition({
      x: event.pageX,
      y: event.pageY
    })
  };

  return (
    <div>
      <button onClick={ addCount }>+</button>
      <div>{ count }</div>
      <h2>Mouse Position</h2>
      <p>X position: { mousePosition.x }</p>
      <p>Y position: { mousePosition.y }</p>
    </div>
  );
};

export default App;
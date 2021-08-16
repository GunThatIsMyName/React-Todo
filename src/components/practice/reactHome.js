import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clic${count} times`;
  });

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <p>You clicked {count} times</p>
    </div>
  );
}

export default Example;
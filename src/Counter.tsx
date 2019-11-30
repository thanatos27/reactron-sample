import React, { useState } from 'react';

interface Props {
  name: string,
}

const Counter: React.FC<Props> = (props) => {
  const {name} = props;
  const [count, setCount] = useState(0);

  return (
    <div style={{border: 'solid 0.5px'}}>
      <h3>{name}</h3>
      <p>You clicked {count} times</p>
      <div>
        <button onClick={() => setCount(count + 1)}>
          Click me
      </button>
      </div>
      <div>
        <button onClick={() => setCount(0)}>
          Reset count
      </button>
      </div>
    </div>
  );
}

export default Counter;

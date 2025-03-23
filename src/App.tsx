import * as React from 'react';
import { useState, useEffect } from 'react';

export const App: React.FC = () => {
  const [key, setKey] = useState('');

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      setKey(event.key);
    };

    window.addEventListener('keyup', handleKeyDown);

    return () => {
      window.removeEventListener('keyup', handleKeyDown);
    };
  }, []);

  return (
    <div className="App">
      <p className="App__message">
        {key ? `The last pressed key is [${key}]` : 'Nothing was pressed yet'}
      </p>
    </div>
  );
};

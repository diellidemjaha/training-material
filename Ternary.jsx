import { useState } from 'react';

function ToggleContent() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'} Content
      </button>

      {isVisible && <p>This is the toggled content!</p>}
    </div>
  );
}

export default ToggleContent;
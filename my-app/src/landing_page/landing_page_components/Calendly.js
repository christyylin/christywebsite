import React, { useEffect } from 'react';

const YourComponent = () => {
  useEffect(() => {
    // Include Calendly JavaScript file
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);

    // Initialize Calendly inline widget
    Calendly.initInlineWidget({
      "url": 'https://calendly.com/YOURLINK',
      "parentElement": document.getElementById('calendly-signup'),
      "prefill": {},
      "utm": {}
    });
  }, []);

  return (
    <div>
      {/* Other content */}
      <div id="calendly-signup">
        {/* Calendly inline widget will be inserted here */}
      </div>
    </div>
  );
};

export default YourComponent;

import React, { useEffect } from 'react';
import Calendly from '@calendly/calendly'; // Import Calendly library

const Contact = () => {
  useEffect(() => {
    // Initialize Calendly inline widget
    Calendly.initInlineWidget({
      "url": 'https://calendly.com/christylin33/1-1-coffee-chat',
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

export default Contact;
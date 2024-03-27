import React from 'react';
import { InlineWidget } from 'react-calendly';

const Contact = () => {
  return (
    <div>
      {/* Other content */}
      <div id="calendly-signup">
        <InlineWidget url="https://calendly.com/christylin33/1-1-coffee-chat" />
      </div>
    </div>
  );
};

export default Contact;

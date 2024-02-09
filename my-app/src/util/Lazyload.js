import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const LazyLoadContent = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once when in view
  });

  const [content, setContent] = useState(['Item 1', 'Item 2', 'Item 3']);

  const fetchMoreContent = () => {
    // Simulate fetching more content (replace with your actual fetching logic)
    const newContent = ['Item 4', 'Item 5', 'Item 6'];
    setContent((prevContent) => [...prevContent, ...newContent]);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {content.map((item, index) => (
          <div key={index} className="bg-gray-200 p-4 rounded">
            {item}
          </div>
        ))}
        <div ref={ref}></div>
      </div>

      {inView && <div className="loader" onClick={fetchMoreContent}>Load More</div>}
    </div>
  );
};

export default LazyLoadContent;

import React, { useState } from 'react';

const ProjectComponent = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const styles = {
    container: {
      position: 'relative',
      overflow: 'hidden',
    },
    image: {
      maxwidth: '100%', // Adjust the width as needed
      height: 'auto', // Maintain aspect ratio
      transition: 'transform 0.3s ease', // Smooth transition for the hover effect
      transform: isHovered ? 'scale(1.03)' : 'scale(1)', // Scale up the image on hover

    },
    imageOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      border: '2px solid transparent',
      transition: 'border 0.3s ease', // Smooth transition for the border color change
      transform: isHovered ? 'scale(1.1)' : 'scale(1)', // Match the image scale on hover
    },
    content: {
      padding: '10px', // Adjust the padding as needed
    },
  };

  return (
    <div
      style={styles.container}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <img src={props.imageSource} alt="Description" style={styles.image} />
      {isHovered && <div style={styles.imageOverlay}></div>}
      <div style={styles.content}>
        <h3 className="text-2xl ml-1 mt-[-10px] font-medium text-left text-black">{props.title}</h3>
        <p className="text-medium ml-1 mb-4 font-medium text-left text-black">{props.description}</p>
      </div>
    </div>
  );
};

export default ProjectComponent;

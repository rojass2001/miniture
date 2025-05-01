/* eslint-disable react/prop-types */

// Reusable Button component that accepts custom styles, click handler, type, and children
function Button({ className, onClick, children, type }) {
  return (
    // Render a <button> element with dynamic type, styles, and onClick functionality
    <button type={type} className={className} onClick={onClick}>
       {children}
    </button>
  );
}

export default Button; // Exporting the Button component for use in other parts of the app

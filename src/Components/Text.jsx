/* eslint-disable react/prop-types */
// Text component renders a <p> element with optional styling and content passed via props


function Text({ className, children }) {
  return (
    // The paragraph element uses the passed className for styling and renders the children inside it
    <p className={className}>
      {children}
    </p>
  );
}

export default Text; // Exporting the Text component for use in other parts of the application

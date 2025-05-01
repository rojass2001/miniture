// Reusable Box component to wrap content with optional styles and click handler

// eslint-disable-next-line react/prop-types
function Box({ className, children, onClick }) {
  return (
    // Renders a <div> with passed className and onClick functionality
    <div className={className} onClick={onClick}>
      {/* Renders any child components or elements inside the Box */}
      {children}
    </div>
  )
}

export default Box // Exporting the Box component for use throughout the app

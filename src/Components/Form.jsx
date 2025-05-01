/* eslint-disable react/prop-types */

// Reusable Form component accepting styling, submit handler, and child elements
function Form({ className, children, onsubmit }) {
  return (
    // Render a <form> element with provided class and onSubmit function
    <form className={className} onSubmit={onsubmit}>
      {/* Render any nested components or elements inside the form */}
      {children}
    </form>
  );
}

export default Form; // Exporting the Form component for use elsewhere in the app

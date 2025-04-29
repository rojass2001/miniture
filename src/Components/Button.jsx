/* eslint-disable react/prop-types */

function Button({className,onClick,children,type}) {
  return (
      <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button

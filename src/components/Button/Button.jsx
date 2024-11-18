import { Link } from "react-router-dom"
import PropTypes from "prop-types"
export default function Button({
  children,
  href,
  to,
  onClick,
  className,
  type = 'button',
  ...rest}) {
  
    // Cek tipe komponen berdasarkan props
    const Component = to ? Link : href ? 'a' : 'button';

    // Assign common props for button, anchor, or link elements
    const commonProps = {
      className, onClick, ...rest
    }

    // cek hanya type untuk button
    if(Component === 'button') {
      commonProps.type = type
    }

    // cek hanya type untuk <a>
    if(Component === 'a') {
      commonProps.href = href
    }

    // cek hanya type untuk link
    if(Component === Link) {
      commonProps.to = to
    }

  return (
    <Component {...commonProps}>{children}</Component>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']) 
}

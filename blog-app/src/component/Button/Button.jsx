import React from 'react'

const Button = ({
    children,
    bgColor='bg-black',
    type="button",
    textColor='text-white',
    className="",
    ...props

},ref) => {
  return (
    <button type={type} className={`px-4 py-1 cursor-pointer rounded-lg ${bgColor} ${textColor} ${className}`} {...props} ref={ref}>{children}</button>
  )
}

export default React.forwardRef(Button)
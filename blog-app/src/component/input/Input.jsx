import React, { useId } from "react";

const Input = ({ label, className = "", type = "text", ...props }, ref) => {
  const id = useId();
  return (
    <div className="flex flex-col gap-1">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type={type}
        className={`${className}`}
        {...props}
        id={id}
        ref={ref}
      />
    </div>
  );
};

export default React.forwardRef(Input);

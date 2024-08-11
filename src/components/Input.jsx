import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  // --> Forword Refference
  const id = useId();
  return;
  <div className="w-full">
    {label && (
      <label className="inline-block mb-1 p1" htmlFor={id}>
        {label}
      </label>
    )}
    <input
      type={type}
      className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
      ref={ref} // YAHI Ref pass hoga dusre{Parent} component mei, is componenet ka.
      {...props}
      id={id}
    />
  </div>;
});

export default Input;

import { useId } from "react";

const input = React.forwardRef(
  (Input = ({ label, type = "text", className = "", ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="inlinw-block mb-1 pl-1" htmlFor={id}>
            {label}
          </label>
        )}

        <input
          type={type}
          className={`w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
          ref={ref}
          {...props}
          id={id}
        />
      </div>
    );
  })
);
export default input;

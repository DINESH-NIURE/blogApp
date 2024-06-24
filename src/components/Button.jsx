const Button = ({children,
    type = "button",
    bgColor = "bg-blue-500",
    textColor = "text-white",
    className = "font-bold py-2 px-4 rounded-full inline-block duration-200 hover:bg-blue-700",
    ...props
   }) => {

  return (
   <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}{...props}>
       {children}
   </button>
  )
}
export default Button
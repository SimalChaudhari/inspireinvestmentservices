const ListItem = ({ children, className = "" }) => {
  return (
    <li className={`flex items-start ${className}`}>
      <span className="text-customBlue font-bold mr-3">•</span>
      <span>{children}</span>
    </li>
  )
}

export default ListItem

const Badge = ({ label }: { label: string }) => {
  return (
    <div className="p-3 bg-gray-100 rounded-md hover:cursor-pointer hover:text-blue-500 w-fit">{label}</div>
  )
}

export default Badge
import { FC } from "react"

interface Props {
  navigationList: string[]
}

const Header: FC<Props> = ({ navigationList }) => {
  return (
    <div className="flex justify-between w-full p-2 bg-gray-100 ">
      <ul className="flex gap-3 mx-auto">
        {navigationList.map(link => (
          <li key={link}><a href={link} className="capitalize hover:text-blue-400">{link}</a></li>
        ))}
      </ul>
    </div>
  )
}

export default Header
import { Badge } from "@/shared/components"

const BadgeList = ({ badgeList }: { badgeList: string[] }) => {
  return (
    <ul>
      {badgeList.map(badge => <Badge label={badge} key={badge} /> )}
    </ul>
  )
}

export default BadgeList
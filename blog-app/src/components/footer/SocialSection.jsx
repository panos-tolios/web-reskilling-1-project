import { Link } from "react-router-dom"
import { FbIcon, YtIcon, InstaIcon, LinkedinIcon } from "./SocialIcons"
export default function SocialSection() {
  return (
    <div className="flex flex-row justify-between">
      <Link to="#">
        <FbIcon className="w-5 h-5 icon-white" />
      </Link>
      <Link to="#">
        <LinkedinIcon className="w-5 h-5 icon-white" />
      </Link>
      <Link to="#">
        <YtIcon className="w-5 h-5 icon-white" />
      </Link>
      <Link to="#">
        <InstaIcon className="w-5 h-5 icon-white" />
      </Link>
    </div>
  )
}

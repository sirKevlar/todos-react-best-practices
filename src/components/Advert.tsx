import { AdvertProps } from "../lib/types/types";

export default function Advert({id, image, link}: AdvertProps) {
  return (
    <a href={link} className="advert-link">
        <img className="advert" id={id} src={image}/>
    </a>
  )
}

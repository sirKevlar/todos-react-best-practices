import { AdvertProps } from "../lib/types/types";

export default function Advert({id, imgUrl, link}: AdvertProps) {
  return (
    <a href={link}>
        <img id={id} src={imgUrl}/>
    </a>
  )
}

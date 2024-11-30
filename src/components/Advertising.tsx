import { AdvertisingProps } from "../lib/types/types";
import Advert from "./Advert";

export default function Advertising({adverts}: AdvertisingProps) {
  return (
    <section id="advertising" className="flex flex-col justify-around">
        {adverts.map((advert, i)=>{
            return <Advert key={`advert${i}`} id={`${i}`} image={advert.image} link={advert.link}/>
        })}
    </section>
  )
}

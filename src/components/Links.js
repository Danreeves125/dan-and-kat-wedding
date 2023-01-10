import menuImage from "/public/images/menu.jpg"
import AcommodationImage from "/public/images/accommodation.jpg"
import GiftImage from "/public/images/gifts.jpg"
import LocationImage from "/public/images/location.jpg"
import EveningImage from "/public/images/pendrall-at-night.jpg"
import TheDay from "/public/images/the-day.jpg"

import Link from "next/link"
import Image from "next/image"

const siteLinks = [
    {
        title: "Accommodation",
        pageLink: "/accommodation",
        linkImage: AcommodationImage,
    },
    {
        title: "Menu",
        pageLink: "/menu",
        linkImage: menuImage,
    },
    {
        title: "Location",
        pageLink: "/location",
        linkImage: LocationImage,
    },
    {
        title: "Gifts",
        pageLink: "/gifts",
        linkImage: GiftImage,
    },
    {
        title: "The Day",
        pageLink: "/the-day",
        linkImage: TheDay,
    },
    {
        title: "Evening Guests",
        pageLink: "/evening-guests",
        linkImage: EveningImage,
    },
]

export default function Links() {
    return (
        <>
            <h1 className="text-center mb-[3rem] small:mb-[5rem]">Guest Information</h1>

            <div className="links w-full max-w-[110rem] mx-auto px-[2rem] relative z-[2]">
                {siteLinks.map((item, key) => (
                    <Link key={key} className="link relative overflow-hidden" href={item.pageLink}>
                        <Image className="w-full block" src={item.linkImage} />
                        <div className="absolute flex items-center justify-center bottom-0 left-0 w-full h-full bg-black py-[1.4rem] px-[1rem] bg-opacity-[0.6]">
                            <span className="block text-center text-white text-[2.2rem] opacity-100">{item.title}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}

import PageLayout from "@/components/PageLayout"

import Link from "next/link"
import bg from "/public/images/banner-bg.jpg"
import Image from "next/image"
import TheCouple from "/public/images/me.jpg"
import flowerTop from "/public/images/flower-top.png"
import flowerBottom from "/public/images/flower-bottom.png"
const bannerStyling = {
    background: `linear-gradient(90deg, rgba(136,155,174,0.9) 0%, rgba(136,155,174,0.9) 100%), url('${bg.src}')`,
    backgroundSize: "cover",
}
import ContactForm from "@/components/ContactForm"
import Links from "@/components/Links"

export default function Menu({ data }) {
    return (
        <PageLayout>
            <section className="py-[10rem] relative overflow-hidden">
                <Image className="absolute top-0 right-[-10rem]  max-w-[25rem] small:max-w-[30rem] medium:right-[-30rem] medium:max-w-[60rem] w-full" src={flowerTop} />
                <div className="px-[2rem] relative z-[3] mb-[4rem] small:mb-[8rem]">
                    <h4 className="h1 text-center mb-[3rem]">Menu</h4>
                    <div className="mb-[3rem] text-center px-[2rem]">
                        <p className="">Thank you for being part of our day, please choose a main & dessert below and tell us of any dietary requirments.</p>
                    </div>

                    <ContactForm />
                </div>
                <Links />
                <Image className="absolute bottom-0 left-[-10rem] scale-y-[-1] max-w-[25rem] medium:left-[-25rem] small:max-w-[30rem] medium:max-w-[60rem] w-full scale-x-[-1] z-[1]" src={flowerTop} />
            </section>
        </PageLayout>
    )
}

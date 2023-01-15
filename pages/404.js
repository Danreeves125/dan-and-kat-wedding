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

export default function custom404({ data }) {
    return (
        <PageLayout>
            <section className="py-[10rem] relative overflow-hidden">
                <Link href="/" className="w-[9rem] small:w-[11rem] block absolute top-[1rem] left-[1rem] small:left-[3rem] small:top-[3rem] z-[3]">
                    <Image className="w-[100%] max-w-[10rem] rounded-[50%] border-black border-[0.1rem] border-solid p-[0.5rem]" src={TheCouple} />
                </Link>
                <Image className="absolute top-0 right-[-10rem]  max-w-[25rem] small:max-w-[30rem] medium:right-[-30rem] medium:max-w-[60rem] w-full" src={flowerTop} />

                <div className="text-center pb-[6rem] px-[2rem] w-full max-w-[64rem] mx-auto">
                    <h1 className="mb-[3rem]">Opps!!!</h1>
                    <p className="text-[2rem] leading-[2.5rem]">Unfourtuanlty the page has not been found. Use the links below to navigate to another page.</p>
                </div>

                <Links />
                <Image className="absolute bottom-0 left-[-10rem] scale-y-[-1] max-w-[25rem] medium:left-[-25rem] small:max-w-[30rem] medium:max-w-[60rem] w-full scale-x-[-1] z-[1]" src={flowerTop} />
            </section>
        </PageLayout>
    )
}

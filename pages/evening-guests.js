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

export default function Acommodation({ data }) {
    return (
        <PageLayout>
            <section className="py-[10rem] relative overflow-hidden">
                <Link href="/" className="w-[9rem] small:w-[11rem] block absolute top-[1rem] left-[1rem] small:left-[3rem] small:top-[3rem] z-[3]">
                    <Image className="w-[100%] max-w-[10rem] rounded-[50%] border-black border-[0.1rem] border-solid p-[0.5rem]" src={TheCouple} />
                </Link>
                <Image className="absolute top-0 right-[-10rem]  max-w-[25rem] small:max-w-[30rem] medium:right-[-30rem] medium:max-w-[60rem] w-full" src={flowerTop} />
                <div className="px-[2rem] relative z-[3] mb-[4rem] small:mb-[8rem]">
                    <h4 className="h1 text-center mb-[3rem]">Acommodation</h4>

                    <div className="mb-[3rem] max-w-[64rem] text-center px-[2rem] mx-auto">
                        <p className="text-[2rem] leading-[2.5rem]">Limited acommodation is available at Pendrell Hall, Exclusive to wedding guests. Please visit:</p>
                        <p>
                            <a className="underline text-[2.3rem] my-[1.5rem] block text-theme-blush" href="http://pendrellhall-venue.co.uk/accommodation-booking-form/" target="_blank">
                                <strong> http://pendrellhall-venue.co.uk/accommodation-booking-form/</strong>
                            </a>
                        </p>
                        <p className="text-[2rem] leading-[2.5rem]">
                            and use the code <strong>22478</strong> to book onsite accommodation if available.
                        </p>
                    </div>
                </div>
                <Links />
                <Image className="absolute bottom-0 left-[-10rem] scale-y-[-1] max-w-[25rem] medium:left-[-25rem] small:max-w-[30rem] medium:max-w-[60rem] w-full scale-x-[-1] z-[1]" src={flowerTop} />
            </section>
        </PageLayout>
    )
}

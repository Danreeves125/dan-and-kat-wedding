import PageLayout from "@/components/PageLayout"
import Link from "next/link"

import SimpleMap from "@/components/GoogleMap"

import Image from "next/image"
import TheCouple from "/public/images/me.jpg"
import flowerTop from "/public/images/flower-top.png"

import Links from "@/components/Links"

export default function Location() {
    return (
        <PageLayout>
            <section className="py-[10rem] relative overflow-hidden">
                <Link href="/" className="w-[9rem] small:w-[11rem] block absolute top-[1rem] left-[1rem] small:left-[3rem] small:top-[3rem] z-[3]">
                    <Image className="w-[100%] max-w-[10rem] rounded-[50%] border-black border-[0.1rem] border-solid p-[0.5rem]" src={TheCouple} />
                </Link>
                <Image className="absolute top-0 right-[-10rem]  max-w-[25rem] small:max-w-[30rem] medium:right-[-30rem] medium:max-w-[60rem] w-full" src={flowerTop} />
                <div className="px-[2rem] relative z-[3] mb-[4rem] small:mb-[8rem]">
                    <h4 className="h1 text-center mb-[3rem]">Location</h4>

                    <div className="mb-[3rem] max-w-[64rem] text-center px-[2rem] mx-auto">
                        <p className="text-[2rem] leading-[2.5rem]">If you need anything or have any questions about the venu or the day the please don't hesitate to drop me or Kat a message.</p>

                        <a className="mt-[3rem] mb-[1rem] block text-[2rem] leading-[2.5rem]" href="tel:07490280888">
                            {" "}
                            <strong>Dan: </strong> 07490280888
                        </a>
                        <a className="block text-[2rem] leading-[2.5rem]" href="tel:07845758389">
                            {" "}
                            <strong>Kat: </strong> 07845758389
                        </a>

                        <h2 className="text-[3.5rem] mt-[3rem]">Venu Address</h2>
                        <p className="text-[2rem] leading-[2.5rem]">Pendrell Hall, Codsall Wood, Staffordshire, WV8 1QP</p>

                        <SimpleMap />
                    </div>
                </div>
                <Links />
                <Image className="absolute bottom-0 left-[-10rem] scale-y-[-1] max-w-[25rem] medium:left-[-25rem] small:max-w-[30rem] medium:max-w-[60rem] w-full scale-x-[-1] z-[1]" src={flowerTop} />
            </section>
        </PageLayout>
    )
}

import PageLayout from "@/components/PageLayout"
import client from "apollo-client"
import { HOME_QUERY } from "@/lib/queries"
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

export default function Home({ data }) {
    return (
        <PageLayout>
            <section className="home__banner w-full h-[100vh] flex flex-col items-center justify-center" style={bannerStyling} role="Banner">
                <Image className="absolute top-0 right-0  max-w-[45rem] small:max-w-[60rem] w-full" src={flowerTop} />

                <div className="flex flex-col items-center z-2 relative">
                    <Image className="rounded-[50%] w-[20rem] image mb-[2rem]" src={TheCouple} />
                    <h1 className="text-white text-center">
                        Kat & Dan's <br />
                        Wedding
                    </h1>
                </div>

                <Image className="absolute bottom-0 left-0 max-w-[30rem] small:max-w-[40rem] w-full" src={flowerBottom} />
            </section>
            <section className="pt-[5rem] pb-[5rem]"></section>
        </PageLayout>
    )
}

export async function getStaticProps() {
    const { data: pageData } = await client.query({
        query: HOME_QUERY,
    })

    return {
        props: {
            data: pageData,
        },
    }
}

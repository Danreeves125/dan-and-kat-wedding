import PageLayout from "@/components/PageLayout";
import client from "apollo-client";
import { HOME_QUERY } from "@/lib/queries";
import Link from "next/link";
import bg from "/public/images/banner-bg.jpg";
import Image from "next/image";
import TheCouple from "/public/images/me.jpg";
import flowerTop from "/public/images/flower-top.png";
import flowerBottom from "/public/images/flower-bottom.png";
import image3 from "/public/images/image-1.jpg";
import image2 from "/public/images/image-2.jpg";
import image1 from "/public/images/image-3.jpg";
import image4 from "/public/images/image-4.jpg";

import Links from "@/components/Links";

const gallery = [image1, image2, image3, image4];

const bannerStyling = {
	background: `linear-gradient(90deg, rgba(136,155,174,0.9) 0%, rgba(136,155,174,0.9) 100%), url('${bg.src}')`,
	backgroundSize: "cover",
};

export default function Home({ data }) {
	return (
		<PageLayout>
			<section className="home__banner w-full h-[100vh] flex flex-col items-center justify-center" style={bannerStyling} role="Banner">
				<Image className="absolute top-0 right-0  max-w-[45rem] small:max-w-[60rem] w-full" src={flowerTop} />
				<div className="flex flex-col items-center z-2 relative">
					<Image className="rounded-[50%] w-[20rem] image mb-[2rem]" src={TheCouple} />
					<h1 className="text-white text-center">Kat & Dan's Wedding</h1>
					<span className="text-[2.5rem] text-white mb-[2.8rem]">03/04/2023</span>
					<Link href="/menu" className="button relative z-[5]">
						RSVP
					</Link>
				</div>

				<Image className="absolute bottom-0 left-0 max-w-[30rem] small:max-w-[40rem] w-full" src={flowerBottom} />
			</section>
			<section className="py-[10rem] relative overflow-hidden">
				<Image className="absolute top-0 right-[-10rem]  max-w-[25rem] small:max-w-[30rem] medium:right-[-30rem] medium:max-w-[60rem] w-full" src={flowerTop} />
				<div className="px-[2rem] relative z-[3]">
					<p className="text-center text-[3rem] leading-[4rem]">Welcome to the website for the marriage of</p>
					<div className="text-center block mt-[3rem] small:mt-[4.2rem]">
						<h2 className="h1">Kathryn Ormsby</h2>
						<span className="block text-center text-[3rem] my-[1rem] small:my-[2rem]">&</span>
						<h2 className="h1">Daniel Reeves</h2>

						<p className="text-[3rem] py-[3rem]">Monday 3rd April 2023</p>
					</div>
				</div>

				<div className="gallery max-w-[110rem] w-full">
					{gallery.map((item, key) => (
						<div className="item" key={key}>
							<Image className="image" src={item} />
						</div>
					))}
				</div>

				<Links />

				<Image className="absolute bottom-0 left-[-10rem] scale-y-[-1] max-w-[25rem] medium:left-[-25rem] small:max-w-[30rem] medium:max-w-[60rem] w-full scale-x-[-1] z-[1]" src={flowerTop} />
			</section>
		</PageLayout>
	);
}

export async function getStaticProps() {
	const { data: pageData } = await client.query({
		query: HOME_QUERY,
	});

	return {
		props: {
			data: pageData,
		},
	};
}

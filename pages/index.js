import PageLayout from "@/components/PageLayout";
import client from "apollo-client";
import { HOME_QUERY } from "@/lib/queries";
import Link from "next/link";
import bg from "/public/images/banner-bg.jpg";
import Image from "next/image";
import TheCouple from "/public/images/me.jpg";
import flowerTop from "/public/images/flower-top.png";
import flowerBottom from "/public/images/flower-bottom.png";

import menuImage from "/public/images/menu.jpg";
import AcommodationImage from "/public/images/accommodation.jpg";
import GiftImage from "/public/images/gifts.jpg";
import LocationImage from "/public/images/location.jpg";

const siteLinks = [
	{
		title: "Accommodation",
		pageLink: "",
		linkImage: AcommodationImage
	},
	{
		title: "Menu",
		pageLink: "/menu",
		linkImage: menuImage
	},
	{
		title: "Location",
		pageLink: "",
		linkImage: GiftImage
	},
	{
		title: "Gifts",
		pageLink: "",
		linkImage: LocationImage
	}
]

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
					<Link href="" className="button">
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
					</div>
				</div>

				<h1 className="text-center mb-[3rem] small:mb-[5rem]">Guest Information</h1>

				<div className="links w-full max-w-[110rem] mx-auto px-[2rem] relative z-[2]">
					{ siteLinks.map((item, key) => (
						<Link key={key} className="link relative overflow-hidden" href={item.pageLink}>
							<Image className="w-full block" src={item.linkImage} />
							<div className="absolute flex items-center justify-center bottom-0 left-0 w-full h-full bg-black py-[1.4rem] px-[1rem] bg-opacity-[0.6]">
								<span className="block text-center text-white text-[2.2rem] opacity-100">{item.title}</span>
							</div>
						</Link>
					))}
				</div>

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

import PageLayout from "@/components/PageLayout";

import Link from "next/link";
import bg from "/public/images/banner-bg.jpg";
import Image from "next/image";
import TheCouple from "/public/images/me.jpg";
import flowerTop from "/public/images/flower-top.png";
import flowerBottom from "/public/images/flower-bottom.png";
const bannerStyling = {
	background: `linear-gradient(90deg, rgba(136,155,174,0.9) 0%, rgba(136,155,174,0.9) 100%), url('${bg.src}')`,
	backgroundSize: "cover",
};
import ContactForm from "@/components/ContactForm";
import Links from "@/components/Links";

export default function Acommodation({ data }) {
	return (
		<PageLayout>
			<section className="py-[10rem] relative overflow-hidden">
				<Link href="/" className="w-[9rem] small:w-[11rem] block absolute top-[1rem] left-[1rem] small:left-[3rem] small:top-[3rem] z-[3]">
					<Image className="w-[100%] max-w-[10rem] rounded-[50%] border-black border-[0.1rem] border-solid p-[0.5rem]" src={TheCouple} />
				</Link>
				<Image className="absolute top-0 right-[-10rem]  max-w-[25rem] small:max-w-[30rem] medium:right-[-30rem] medium:max-w-[60rem] w-full" src={flowerTop} />
				<div className="px-[2rem] relative z-[3] mb-[4rem] small:mb-[8rem]">
					<h4 className="h1 text-center mb-[3rem]">Gifts</h4>

					<div className="mb-[3rem] max-w-[64rem] text-center px-[2rem] mx-auto">
						<p className="text-[2rem] leading-[2.5rem]">As we've lived together for a year or two, we really don't need anything new. But if you're thinking of getting us a wedding gift, some money for out future wouldn't go amiss</p>

						<p className="text-[2rem] leading-[2.5rem]">If you really would prefer to get use a gift, here are some ideas below.</p>
					</div>
					<div></div>
				</div>
				<Links />
				<Image className="absolute bottom-0 left-[-10rem] scale-y-[-1] max-w-[25rem] medium:left-[-25rem] small:max-w-[30rem] medium:max-w-[60rem] w-full scale-x-[-1] z-[1]" src={flowerTop} />
			</section>
		</PageLayout>
	);
}

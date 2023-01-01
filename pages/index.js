import PageLayout from "@/components/PageLayout"
import client from "apollo-client"
import { HOME_QUERY } from "@/lib/queries"
import Link from "next/link"
import Me from "/public/images/me.svg"
import Image from "next/image"

export default function Home({ data }) {
    return (
        <PageLayout>
            <section>
                <div className="container flex items-center">
                    <div className="w-[50%] pr-[1.5rem]">
                        <Image src={Me} />
                        <ul className="m-0 flex items-center w-full justify-center">
                            <li className="mr-[1.5rem]">
                                <a className="flex items-center justify-center w-[5.5rem] h-[5.5rem] rounded-[50%] bg-theme-pink" href="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26.25" height="26.249" viewBox="0 0 26.25 26.249">
                                        <path id="Path_283" data-name="Path 283" d="M5.876,26V8.475H.434V26ZM3.152,6.084A3.167,3.167,0,1,0,0,2.9,3.178,3.178,0,0,0,3.152,6.084ZM26.244,26h.006V16.373c0-4.711-1.013-8.338-6.52-8.338a5.718,5.718,0,0,0-5.149,2.83H14.5V8.475H9.285V26h5.436V17.322c0-2.285.434-4.494,3.263-4.494,2.788,0,2.829,2.607,2.829,4.641V26Z" transform="translate(0 0.249)" fill="#fff" />
                                    </svg>
                                </a>
                            </li>
                            <li className="mr-[1.5rem]">
                                <a className="flex items-center justify-center w-[5.5rem] h-[5.5rem] rounded-[50%] bg-theme-pink" href="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="29.062" height="28.336" viewBox="0 0 29.062 28.336">
                                        <path
                                            id="Path_284"
                                            data-name="Path 284"
                                            d="M9.721,23.035c0-.135-.152-.229-.328-.211-.17,0-.3.094-.3.211,0,.135.135.228.328.211C9.586,23.246,9.721,23.152,9.721,23.035ZM7.9,22.772c-.041.117.076.252.252.287a.275.275,0,0,0,.363-.117c.035-.117-.076-.252-.252-.3A.3.3,0,0,0,7.9,22.772Zm2.59-.1c-.17.041-.287.152-.27.287.018.117.17.193.346.152s.287-.152.27-.27S10.658,22.654,10.488,22.672ZM14.344.219A14.05,14.05,0,0,0,0,14.516,14.69,14.69,0,0,0,9.932,28.531c.75.135,1.014-.328,1.014-.709,0-.363-.018-2.367-.018-3.6,0,0-4.1.879-4.963-1.746,0,0-.668-1.705-1.629-2.145,0,0-1.342-.92.094-.9a3.093,3.093,0,0,1,2.262,1.512,3.1,3.1,0,0,0,4.271,1.225,3.257,3.257,0,0,1,.937-1.975c-3.275-.363-6.58-.838-6.58-6.475A4.441,4.441,0,0,1,6.7,10.268a5.536,5.536,0,0,1,.152-3.979C8.08,5.908,10.9,7.871,10.9,7.871a13.842,13.842,0,0,1,7.359,0S21.076,5.9,22.3,6.289a5.534,5.534,0,0,1,.152,3.979,4.555,4.555,0,0,1,1.512,3.451c0,5.654-3.451,6.105-6.727,6.475a3.465,3.465,0,0,1,1,2.719c0,1.975-.018,4.418-.018,4.9,0,.381.27.844,1.014.709a14.555,14.555,0,0,0,9.832-14C29.062,6.389,22.471.219,14.344.219ZM5.7,20.428c-.076.059-.059.193.041.3.094.094.228.135.3.059.076-.059.059-.193-.041-.3C5.906,20.393,5.771,20.352,5.7,20.428Zm-.633-.475c-.041.076.018.17.135.229a.174.174,0,0,0,.252-.041c.041-.076-.018-.17-.135-.229C5.2,19.877,5.1,19.895,5.063,19.953Zm1.9,2.086c-.094.076-.059.252.076.363.135.135.3.152.381.059.076-.076.041-.252-.076-.363C7.213,21.963,7.037,21.945,6.961,22.039Zm-.668-.861c-.094.059-.094.211,0,.346s.252.193.328.135a.267.267,0,0,0,0-.363C6.539,21.16,6.387,21.1,6.293,21.178Z"
                                            transform="translate(0 -0.219)"
                                            fill="#fff"
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a className="flex items-center justify-center w-[5.5rem] h-[5.5rem] rounded-[50%] bg-theme-pink" href="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="22.5" viewBox="0 0 30 22.5">
                                        <path id="Path_285" data-name="Path 285" d="M15,20.375a4.478,4.478,0,0,1-2.763-.962L0,9.9V23.188A2.813,2.813,0,0,0,2.813,26H27.188A2.812,2.812,0,0,0,30,23.188V9.9L17.766,19.42A4.513,4.513,0,0,1,15,20.375ZM.954,8.264l12.434,9.674a2.626,2.626,0,0,0,3.226,0L29.048,8.264A2.647,2.647,0,0,0,30,6.313,2.813,2.813,0,0,0,27.188,3.5H2.813A2.812,2.812,0,0,0,0,6.313,2.474,2.474,0,0,0,.954,8.264Z" transform="translate(0 -3.5)" fill="#fff" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="pl-[1.5rem] w-[50%] flex items-start flex-col">
                        <h1 className="uppercase text-[5.5rem] leading-[5.5rem] m-0 mb-[1.5rem]">
                            <strong>Hi</strong> I'm Dan
                        </h1>
                        <h2 className="m-0 text-[3rem] uppercase font-bold leading-[3rem] mb-[1.5rem]">A Front-end Web Developer</h2>
                        <div className="text mb-[3rem]">
                            <p>Got a website idea or need a update to an existing site? I'm always interested in?...</p>
                        </div>
                        <a href="mailto:hello@danielreeves.net" className="button">
                            Get In Touch
                        </a>
                        <div className="bg-theme-pink text mt-[3rem] text-white rounded-[1.5rem] p-[3rem]">
                            <p>My website is currently in the process of a redesign so keep checking back to see the finished result.</p>
                            <p>I'n the mean time if you would like to see the ongoing process of the redesign visit the dev URL here https://dan-reeves.vercel.app/</p>
                        </div>
                    </div>
                </div>
            </section>
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

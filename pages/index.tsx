import Head from "next/head";
import Image from "next/image";
import CazzKaroLogo from "../public/logo.png";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>CazzKaro | Coming Soon</title>
        <meta name="The only ecommerce solution for HIT" content="CazzKaro" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon2.jpg" />
      </Head>
      <main className="mx-auto flex w-[375px] flex-col gap-5 p-12 md:w-[540px]">
        <header className="flex items-center justify-center">
          <Image src={CazzKaroLogo} alt="CazzKaroLogo" />
        </header>

        <section className="space-y-4 text-center ">
          <h2 className="text-2xl tracking-wide text-gray md:text-3xl">
            We are launching{" "}
            <span className="font-bold text-veryDarkBlue"> soon!</span>
          </h2>
        </section>

        {/* <section className="relative h-[200px] w-full p-4 md:h-[385px]">
          <Image src="/illustration-dashboard.png" alt="Dashboard" fill />
        </section> */}
      </main>
      <footer className="mx-auto mt-4 p-4 text-center">
        <div className="space-y-8">
          <section className="flex items-center justify-center gap-4 text-sm text-blue">
            {/* <div className="flex h-8 w-8 items-center justify-center rounded-full outline outline-1 outline-paleBlue drop-shadow-lg">
              <FaFacebookF />
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full outline outline-1 outline-paleBlue drop-shadow-lg">
              <FaTwitter />
            </div> */}
            <Link href={'https://www.instagram.com/cazzkaro.in/'} target="_blank">
              <div className="flex h-8 w-8 items-center justify-center rounded-full outline outline-1 outline-paleBlue drop-shadow-lg">
                <FaInstagram />
              </div>
            </Link>
          </section>
          <section className="text-xs">
            &copy; Copyright CazzKaro. All rights reserved.
          </section>
        </div>
      </footer>
    </>
  );
}

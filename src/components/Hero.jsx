"use client";
import Image from "next/image";
import { HERO_CONTENT, NAV_LINKS, SOCIAL_LINKS } from "@/constants";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import Button from "@/components/Button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden text-white bg-black">
      {/* Background Image */}
      <Image
        src="/images/hero.png"
        alt="Hero background"
        fill
        className="object-cover opacity-40"
        priority
      />

      {/* Overlay content */}
      <div className="">
        <div className="relative z-10 flex flex-col min-h-screen px-6 md:px-16 py-10 max-w-[1440px] mx-auto">
          {/* Navbar */}
          <nav className="flex items-center justify-between mb-10">
            <Image src="/images/logo.svg" alt="Logo" width={100} height={40} />
            <ul className="hidden gap-8 font-medium md:flex">
              {NAV_LINKS.map((link) => (
                <li key={link} className="cursor-pointer hover:text-gray-300 ">
                <Link href={'#'+link}>
                  {link}
                </Link>
                </li>
              ))}
            </ul>
            <Button className="rounded-4xl" variant="primary" >{HERO_CONTENT.ctaSecondary}</Button>
          </nav>

          {/* Main Text */}
          <div className="flex flex-col justify-center flex-grow max-w-xl gap-6">
            <h1 className="text-5xl font-extrabold leading-tight md:text-6xl">
              {HERO_CONTENT.heading}
            </h1>
            <p className="text-lg text-gray-300">{HERO_CONTENT.subheading}</p>
            <div className="flex items-center gap-4">
              <Button variant="primary">{HERO_CONTENT.ctaPrimary}</Button>
            </div>
            <div className="flex gap-4 pt-4">
              <FaTwitter className="cursor-pointer hover:text-gray-400" />
              <FaFacebookF className="cursor-pointer hover:text-gray-400" />
              <FaInstagram className="cursor-pointer hover:text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

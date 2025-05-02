import Image from "next/image";
import { FOOTER } from "@/constants";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full">
      {/* Call To Action */}
      <div className="w-full relative h-[450px] ">
        <Image
          src="/images/footer-bg.png"
          alt="Footer Banner"
          fill
          className="object-cover opacity-100"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          <p className="text-lg md:text-xl">{FOOTER.contact.label}</p>
          <h2 className="text-2xl md:text-3xl font-extrabold">{FOOTER.contact.phone}</h2>
        </div>
      </div>

      {/* Footer Content */}
      <div className="bg-white py-12 px-6 ">
        <div className="max-w-[1440px] mx-auto px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Logo + Info */}
          <div className="space-y-4">
            <Image src="/icons/logo-bt.svg" alt="Logo" width={100} height={40} />
            <p className="text-gray-600 text-sm">{FOOTER.contact.description}</p>
            <p className="text-gray-800 text-sm">{FOOTER.contact.email}</p>
            <div className="flex gap-4 pt-2 text-gray-700 text-lg">
              <FaFacebookF className="hover:text-black cursor-pointer" />
              <FaTwitter className="hover:text-black cursor-pointer" />
              <FaInstagram className="hover:text-black cursor-pointer" />
            </div>
          </div>

          {/* Footer Links */}
          {FOOTER.footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-black mb-4">{section.title}</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                {section.links.map((link, i) => (
                  <li key={i} className="hover:text-black cursor-pointer">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

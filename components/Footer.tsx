import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Interested in working with a{" "}
          <span className="text-purple">dedicated</span> software engineer?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Let’s connect! I’m open to new opportunities and eager to contribute
          my skills to an innovative team.
        </p>
        <a
          href="mailto:mingxiangzhang_mark@outlook.com"
          className="hover:scale-[102%] transition-transform duration-200"
        >
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16  md:flex-row flex-col justify-between items-center">
        <p className="md:text-base mb-5 md:mb-0 text-sm md:font-normal font-light">
          Copyright © 2025 Mark (Mingxiangzhang)
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-14 h-14 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:scale-[105%] transition-transform duration-200"
            >
              <Link href={info.link}>
                <Image src={info.img} alt="icons" width={25} height={25} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

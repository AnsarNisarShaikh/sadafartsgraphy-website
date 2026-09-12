"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaInstagram, FaWhatsapp, FaFacebookF } from "react-icons/fa";
import { CircleArrowOutDownRight, Mail, Phone } from "lucide-react";

const aboutUsArray = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About",
    link: "/about",
  },
  {
    id: 3,
    name: "My Work",
    link: "/my-work",
  },
  {
    id: 4,
    name: "Contact",
    link: "/contact",
  },
];

const ourServicesArray = [
  {
    id: "1",
    title: "Live/studio calligraphy",
    linkSrc: "/my-work/live-studio-calligraphy",
    slug: "live-studio-calligraphy"
  },
  {
    id: "2",
    title: "Bespoke calligraphy",
    linkSrc: "/my-work/bespoke-calligraphy",
    slug: "bespoke-calligraphy"
  },
  {
    id: "3",
    title: "Live/studio Engraving",
    linkSrc: "/my-work/live-studio-engraving",
    slug: "live-studio-engraving"
  },
  {
    id: "4",
    title: "Jewellery illustration",
    linkSrc: "/my-work/jewellery-illustration",
    slug: "jewellery-illustration"
  },
  {
    id: "5",
    title: "Heat foiling",
    linkSrc: "/my-work/heat-foiling",
    slug: "heat-foiling"
  },
  {
    id: "6",
    title: "Product painting",
    linkSrc: "/my-work/product-painting",
    slug: "product-painting"
  },
  {
    id: "7",
    title: "Leather painting",
    linkSrc: "/my-work/leather-painting",
    slug: "leather-painting"
  },
  {
    id: "8",
    title: "Mural painting",
    linkSrc: "/my-work/mural-painting",
    slug: "mural-painting"
  },
  {
    id: "9",
    title: "Tote bag live ",
    linkSrc: "/my-work/tote-bag-live",
    slug: "tote-bag-live"
  },
  {
    id: "10",
    title: "Artwork customisation",
    linkSrc: "/my-work/artwork-customisation",
    slug: "artwork-customisation"
  },
  {
    id: "11",
    title: "Beads making",
    linkSrc: "/my-work/beads-making",
    slug: "beads-making"
  },
  {
    id: "12",
    title: "Hand Embroidery work",
    linkSrc: "/my-work/hand-embroidery-work",
    slug: "hand-embroidery-work"
  },
  {
    id: "13",
    title: "Silhouette arts",
    linkSrc: "/my-work/silhouette-arts",
    slug: "silhouette-arts"
  },
  {
    id: "14",
    title: "Origami work",
    linkSrc: "/my-work/origami-work",
    slug: "origami-work"
  },
];

function Footer() {
  return (
    <footer className="bg-gray-950 pt-12 pb-3 border-t border-gray-800">
      <div className="myContainer">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-3 gap-x-0 sm:gap-x-10 justify-between sm:gap-y-2">
          {/* Address */}
          <div>
            <div className="pb-8 sm:pb-11  flex flex-col  items-center justify-center sm:items-start sm:justify-start sm:flex-col ">
              <div className="">
                <Link href="/" className="">
                  <Image
                    src="/images/logo-f.png"
                    alt="pic"
                    width={185}
                    height={185}
                    className="p-1 w-40 sm:w-52 h-full  border border-white"
                  />
                </Link>
              </div>
              <div className="my-2 space-y-2  pl-5 sm:pl-0">
                <div className=" text-gray-500 hover:text-white">
                  <a
                    href="tel:+966502269892"
                    className="flex gap-x-2"
                    aria-label="Call"
                  >
                    <Phone className="" />
                    <span >+966502269892</span>
                  </a>
                </div>
                <div className=" text-gray-500 hover:text-white">
                  <a
                    href="mailto:ar_sadaf1@yahoo.com?subject=Project%20Inquiry"
                    className="flex gap-x-2"
                    aria-label="Email"
                  >
                    <Mail className="" />
                    <span >ar_sadaf1@yahoo.com</span>
                  </a>

                </div>
              </div>

              {/* social media icons */}
              <div className="">
                <div className=" flex sm:justify-start gap-x-4 py-4   sm:gap-x-2 sm:py-3">
                  <Link
                    href="https://www.instagram.com/sadafartsgraphy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                  >
                    <button
                      className="bg-gray-400 cursor-pointer hover:bg-white text-white  transition-colors ease-in duration-200
                        hover:text-red-600  shadow drop-shadow font-normal h-10 w-10 items-center flex justify-center align-center rounded-full   border-white border-2 border-dotted p-1"
                      type="button"
                    >
                      <FaInstagram className="text-2xl" />
                    </button>
                  </Link>

                  <Link
                    href="https://www.linkedin.com/in/sadaf-khan-9894122b2"
                    target="_blank"
                  >
                    <button
                      className="bg-gray-400 cursor-pointer hover:bg-white text-white  transition-colors ease-in duration-200
                        hover:text-blue-900  shadow drop-shadow font-normal h-10 w-10 items-center flex justify-center align-center rounded-full   border-white border-2 border-dotted p-1"
                      type="button"
                    >
                      <FaLinkedinIn className="text-2xl" />
                    </button>
                  </Link>
                  <Link
                    href="https://www.facebook.com/sadaf.ambreen.35/about_work_and_education"
                    target="_blank"
                  >
                    <button
                      className="bg-gray-400 cursor-pointer hover:bg-white text-white  transition-colors ease-in duration-200
                        hover:text-blue-900  shadow drop-shadow font-normal h-10 w-10 items-center flex justify-center align-center rounded-full   border-white border-2 border-dotted p-1"
                      type="button"
                    >
                      <FaFacebookF className="text-2xl" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Quik links Section */}
          <div className="pb-8 sm:pb-0 flex flex-col  order-1 ">
            <h2 className="text-gray-400  font-bold text-2xl sm:text-xl   pb-5">
              <span className="  ">
                QUICK
              </span>{" "}
              LINKS
            </h2>
            <div className="flex flex-col  gap-y-2 ">
              {aboutUsArray.map((item, i) =>
                <div

                  className="group w-fit"
                  key={i}
                >
                  <Link
                    href={item.link}

                    className={` group-hover:text-gray-300   text-gray-500 font-medium text-sm sm:text-sm flex items-center transition-colors duration-300 ease-in-out `}
                  >
                    <div className="pr-2">
                      <CircleArrowOutDownRight
                        className={`group-hover:text-gray-300   text-gray-500 group-hover:-rotate-45 mt-1 transition-transform duration-300 ease-in-out `}
                      />
                    </div>
                    <div className="">{item.name}</div>
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Our Services Section */}
          <div className="pb-6 sm:pb-0 order-2 col-span-1 sm:col-span-2">
            <h2 className="text-gray-400  font-bold text-2xl sm:text-xl   pb-5">
              <span className=" ">
                MY
              </span>{" "}
              SERVICES
            </h2>
            <div className="flex flex-wrap gap-x-2 gap-y-2">
              {ourServicesArray.map((items, index) =>

                <div

                  className="group w-fit"
                  key={index}
                >
                  <Link
                    href={items.linkSrc}
                    className={` group-hover:text-gray-300   text-gray-500 font-medium text-sm sm:text-sm flex items-start transition-colors duration-300 ease-in-out `}
                  >
                    <div className="px-2 py-1 border  border-1-white">
                      {items.title}
                    </div>
                  </Link>
                </div>

              )}
            </div>
          </div>
        </div>

        <div className="border-gray-800  text-center ">
          <div className="flex sm:justify-between justify-center items-center flex-wrap mt-0  lg:px-0  lg:mx-auto  pt-5 gap-y-1 sm:gap-y-0">
            <p className=" text-sm font-light text-gray-400">
              2026 &copy;All Right Reserved By   <span className=" text-gray-300">Sadafartsgraphy</span>
            </p>
            <Link href="https://api.whatsapp.com/send?phone=919970613673" target="_blank" >
              <span
                title="Best Website developer."
                className=" text-sm font-light group text-gray-400 "
              >
                Designed and Developed by{" "}
                <span className=" text-gray-300">
                  Ansar Nisar Shaikh
                </span>
              </span>
            </Link>{" "}
          </div>
        </div>
      </div>
      <div className="fixed right-0 bottom-3 sm:bottom-6 z-50">
        <Link href="https://api.whatsapp.com/send?phone=966502269892" target="_blank">         
          <div className="flex flex-col gap-y-2 items-center justify-center">
            <FaWhatsapp className="w-8 h-8 sm:w-16 sm:h-16 text-green-500" />
            <p className="text-gray-200 text-xs sm:text-base  ">Chat Now</p>
          </div>

        </Link>
      </div>
    </footer>
  )
}
export default Footer;
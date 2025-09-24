"use client";
import React, { useState } from "react";

import { House, Mail, Menu, SquareChartGantt, User, X } from "lucide-react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export function Header() {
  const [open, setOpen] = useState(false)
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <House className="h-6 w-6 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <User className="h-6 w-6 text-neutral-500 dark:text-white" />,
    },
    {
      name: "My Work",
      link: "/my-work",
      icon: <SquareChartGantt className="h-6 w-6 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <Mail className="h-6 w-6 text-neutral-500 " />
      ),
    },
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/90 backdrop-blur-sm border-b border-gray-800">
      <div className="myContainer py-2 sm:py-2 relative">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-base sm:text-2xl flex gap-x-2 items-center ">
            {/* Sadafartsgraphy */}
            <img src="/images/logo.png" className="rounded-full w-12 h-12 sm:w-14 sm:h-14" alt="logo" />
            <span className="font-halimun font-semibold text-gray-300">Sadaf Khan</span>
          </Link>

          <button onClick={() => setOpen(!open)} className="text-white sm:hidden block text-xl">  {open ? <X /> : <Menu />} </button>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, i) => {
              return <Link key={i} href={item.link} className="text-gray-300 hover:text-white transition-colors">{item.name}</Link>

            })}

          </div>

        </div>
        {/* mobile */}
        <div className={`sm:hidden absolute border-b-2 bg-gray-950 opacity-90 border-gray-200 top-16 transition-all duration-700 w-full ease-in-out ${open ? 'left-0 ' : '-left-[500px] '}`}>
          <div className="flex flex-col px-5 pt-3 divide-y-1 divide-gray-600  w-full">
            {navItems.map((item, i) => {
              return <Link key={i} onClick={() => setOpen(!open)} href={item.link} className="text-gray-100 py-2 text-lg hover:text-white transition-colors">{item.name}</Link>

            })}

          </div>

              <div className=" flex justify-center gap-x-4 py-4   ">
                      <Link
                        href="https://www.instagram.com/sadafartsgraphy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                        target="_blank"
                      >
                        <button
                          className="cursor-pointer bg-white   transition-colors ease-in duration-200
                        text-red-600  shadow drop-shadow font-normal h-10 w-10 items-center flex justify-center align-center rounded-full   border-white border-2 border-dotted p-1"
                          type="button"
                        >
                          <FaInstagram  className="text-2xl" />
                        </button>
                      </Link>

                      <Link
                        href="https://www.linkedin.com/in/sadaf-khan-9894122b2"
                        target="_blank"
                      >
                        <button
                          className="cursor-pointer bg-white   transition-colors ease-in duration-200
                        text-blue-900  shadow drop-shadow font-normal h-10 w-10 items-center flex justify-center align-center rounded-full   border-white border-2 border-dotted p-1"
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
                          className=" cursor-pointer bg-white   transition-colors ease-in duration-200
                        text-blue-900  shadow drop-shadow font-normal h-10 w-10 items-center flex justify-center align-center rounded-full   border-white border-2 border-dotted p-1"
                          type="button"
                        >
                          <FaFacebookF  className="text-2xl" />
                        </button>
                      </Link>
                    </div>
        </div>
      </div>
    </nav>
  );
}


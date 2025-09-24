"use client"
import React from 'react'
import ScrollAnimationWrapper from "@/motions/ScrollAnimationWrapper";

import { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimationYB from "@/motions/getScrollAnimationYB";


// const brandsData = [
//   {
//     imgSrc: "/images/brands/bvlgari.png",
//     alt: "bvlgari"
//   },
//   {
//     imgSrc: "/images/brands/sephora.png",
//     alt: "sephora"
//   },
//   {
//     imgSrc: "/images/brands/guess.png",
//     alt: "guess"
//   },
//   {
//     imgSrc: "/images/brands/maiz.png",
//     alt: "maiz"
//   },
//   {
//     imgSrc: "/images/brands/chanel.png",
//     alt: "chanel"
//   },
//   {
//     imgSrc: "/images/brands/eyewa.png",
//     alt: "eyewa"
//   },
//   {
//     imgSrc: "/images/brands/trendyol.png",
//     alt: "trendyol"
//   },
//   {
//     imgSrc: "/images/brands/swarovski.png",
//     alt: "swarovski"
//   },
//   {
//     imgSrc: "/images/brands/halla.png",
//     alt: "halla"
//   },
//   {
//     imgSrc: "/images/brands/boucheron.png",
//     alt: "boucheron"
//   },
//   {
//     imgSrc: "/images/brands/digitalcity.png",
//     alt: "digitalcity"
//   },
//   {
//     imgSrc: "/images/brands/medicalcity.png",
//     alt: "medicalcity"
//   },
//   {
//     imgSrc: "/images/brands/dunesanddates.png",
//     alt: "dunesanddates"
//   },
//   {
//     imgSrc: "/images/brands/via.png",
//     alt: "via"
//   },
//   {
//     imgSrc: "/images/brands/homecentre.png",
//     alt: "homecentre"
//   },
//   {
//     imgSrc: "/images/brands/Jetour.png",
//     alt: "Jetour"
//   },
//   {
//     imgSrc: "/images/brands/dunesofarabia.png",
//     alt: "dunesofarabia"
//   },
//   {
//     imgSrc: "/images/brands/koohejijewellary.png",
//     alt: "koohejijewellary"
//   },
// ]

function Brands({brandsDetails}) {

  const scrollAnimationyb = useMemo(() => getScrollAnimationYB(), []);
  return (
    <div className="myContainer">
      <div className={`text-center mb-16 transform transition-all duration-1000`}>
        <h2 className="text-3xl sm:text-5xl font-bold mb-2 text-white">
          Clients that chose us
        </h2>
      </div>
      <div className="py-5 sm:py-0  grid grid-cols-2 sm:grid-cols-4 items-center justify-center gap-8">
        {
          brandsDetails?.map((item, i) =>
            <ScrollAnimationWrapper key={i}>
              <motion.img
               variants={scrollAnimationyb}
                custom={{ delay: i * 0.2 }} src={item?.image.url} alt={item.title} className="h-28 bg-primary mx-auto" />
            </ScrollAnimationWrapper>
          )
        }

      </div>
    </div>
  )
}

export default Brands
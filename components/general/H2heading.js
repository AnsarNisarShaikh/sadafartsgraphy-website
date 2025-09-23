"use client";
import { FadeUpStagger } from "@/motions/FadeUp";
import React from "react";

function H2heading({ title,   className = "", ...props }) {
  return (
    <div>
      <FadeUpStagger
        title={title}
        className={`text-center  text-[#465259] ${className} text-3xl lg:text-4xl 2xl:text-4xl font-semibold`}
      />   
    </div>
  );
}

export default H2heading;
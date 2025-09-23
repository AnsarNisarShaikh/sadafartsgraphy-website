'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
// import { services } from '@/utils/serviceData';

export function Services({ useAt, workDetails }) {
  const [servicesVisible, setServicesVisible] = useState(false);
  // console.log(useAt,"useAt")
  // console.log(workDetails,"work Details")
  useEffect(() => {
    

    const timer = setTimeout(() => setServicesVisible(true), 500);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const displayServices = useAt === "home" ? workDetails?.slice(0, 6) : workDetails;
  // console.log(displayServices,"displayServices")

  return (
    <div className="">
      <div className="">


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayServices?.map((service, index) => (
            <Link href={`/my-work/${service.slug}`} key={index}>
              <div

                className={`group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10 ${servicesVisible ? `translate-y-0 opacity-100 transition-all duration-700 delay-${index * 150}` : 'translate-y-20 opacity-0'}`}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image.url}
                    alt={service.title}
                    fill
                    priority   // 🚀 ensures it loads immediately
                    // quality={90}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                </div>
                <div className="p-4">
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">

                    {service.description.length > 140 ? `${service.description.slice(0, 140)}...` : service.description}
                  </p>

                  <button className="cursor-pointer mt-5 bg-gray-800 flex items-center justify-center w-32 mx-auto hover:text-gray-800 hover:bg-white px-4 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"> View more</button>

                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}



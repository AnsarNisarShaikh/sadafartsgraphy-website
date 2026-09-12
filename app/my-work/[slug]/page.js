// import React, { use } from 'react'
import React from 'react'
import MyWorkPages from "@/constants/SidebarList"
import Gallery from '@/components/general/Gallery';
// import { serviceData } from '@/components/my-work/ServicesData';
import Link from 'next/link';
// import { services } from '@/utils/serviceData';
import { fetchServicesDetail } from '@/apis/getServiceData';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { metaServices } from "@/utils/metaServiceData"
import { notFound } from "next/navigation";
import {services} from "@/utils/serviceData"
// meta data start
// ISR (Incremented Static regeneration)
// it will reload after 60 sec and get data from server..if contentful data changed
//It does NOT call Contentful every 60 seconds automatically.
//It only calls Contentful when a user requests the page after the stale time.
export const revalidate = 60;
// SSG (static site Generation)
export  function generateStaticParams() {
  const slugs = services.map((item) => ({ slug: `${item.slug}` }));  
  return slugs;
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const Metaservice = metaServices[slug];

  if (!Metaservice) {
    return {
      title: "Service Not Found",
      description: "This service is not available.",
    };
  }

  const { serviceDetails } = await fetchServicesDetail(slug);
  const service = serviceDetails[0];
  const bannerUrl = service?.banner?.url;

  return {
    title: Metaservice.title,
    description: Metaservice.description,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/my-work/${slug}`,
    },
    openGraph: {
      title: Metaservice.title,
      description: Metaservice.description,
      url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/my-work/${slug}`,
      siteName: "sadafartsgraphy",
      images: bannerUrl
        ? [{ url: bannerUrl, width: 1200, height: 630, alt: Metaservice.title }]
        : undefined,
      locale: "en_SA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: Metaservice.title,
      description: Metaservice.description,
      images: bannerUrl ? [bannerUrl] : undefined,
    },
  };
}

async function Page({ params }) {
  // const { slug } = use(params);
  const { slug } = await params
  //  const resolvedParams = await params
  // const slug = resolvedParams.slug
  // console.log(slug, "slug")
  const { serviceDetails } = await fetchServicesDetail(slug);
  // console.log(serviceDetails,"service data")
  const service = serviceDetails[0];

  const galleryArray = serviceDetails[0]?.galleryCollection.items;
  // let service=serviceData.filter((item)=>item.slug===slug);
  // service=service[0];
  // console.log(service,"service")
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <strong>{text}</strong>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="pb-2 text-lg text-gray-300">{children}</p>
      ),
    },
    renderText: (text) => text,
  };

   if (!service) return notFound();

  return (
    <div className=' bg-gray-950 min-h-[400px] text-white overflow-hidden'>
      <section className="relative h-[200px] sm:h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            // backgroundImage: `url(${service?.bannerUrl})`,
            backgroundImage: `url(${service?.banner.url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="relative z-10 myContainer text-center">
          <h1 className="text-2xl sm:text-6xl pt-10  font-bold mb-6 ">
            {service?.title}
          </h1>
        </div>

        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl animate-pulse delay-1000"></div>
      </section>
      <section className='myContainer py-14 '>
        <div className='grid grid-cols-1 sm:grid-cols-12 gap-x-4 justify-between'>
          <div className='sm:col-span-9'>

            <div className='mb-5 space-y-3'>
              {documentToReactComponents(service.desc.json, options)}
              {/* <p className="text-lg text-gray-300 ">
                {service?.descOne}
              </p>
              <p className="text-lg text-gray-300 ">
                 {service?.descTwo}
              </p> */}
            </div>

            {/* <Gallery workImages={service?.images}/> */}
            <Gallery workImages={galleryArray} />

          </div>

          <div className="sm:col-span-3 space-y-5">
            <div className='shadow-xl bg-gray-900/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-800'>
              <h2 className="text-xl font-bold mb-6 text-center text-white">Other Work</h2>
              <ul className='self-start flex flex-wrap  item-start text-white text-sm  space-x-2 space-y-2'>
                {MyWorkPages.map((item, i) =>
                  <Link key={i} href={item.linkSrc} className='w-full'>
                    <li className={`${item.slug === service?.slug ? "bg-white text-gray-900" : "bg-gray-800"} w-full text-center p-2 rounded-md text-wrap wrap-break-word hover:bg-white hover:text-gray-900`} >{item.title}</li>
                  </Link>
                )}

              </ul>
            </div>
            <div className='bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-xl p-6 border border-purple-500/20'>
              <h3 className="text-2xl font-bold text-white mb-4">Do you need any help?</h3>
              <h5 className="text-lg font-semibold text-white mb-2 text-left">Available for:</h5>
              <div className="grid grid-cols-1 gap-3 mb-4">
                {[
                  'Live Event Art & Activations',
                  'Studio Commissions',
                  'Luxury Brand Collaborations',
                  'Private Custom Orders',
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                    <span className="text-gray-300 text-sm">{service}</span>
                  </div>
                ))}
              </div>
              <h5 className="text-lg font-semibold text-white mb-2 text-left">Let&apos;s create something meaningful together.</h5>
            </div>

          </div>

        </div>




      </section>
    </div>
  )
}
export default Page
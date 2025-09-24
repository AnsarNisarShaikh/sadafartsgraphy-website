import React from 'react'
import { Check } from 'lucide-react';

export const metadata = {
  title: "About - Sadaf Khan | Calligraphy & Art Specialist in Riyadh",
  description:
    "Discover my journey as a Riyadh-based artist blending tradition & modern creativity. Specializing in calligraphy, murals, painting & bespoke art.",
   openGraph: {
      title: "About - Sadaf Khan | Calligraphy & Art Specialist in Riyadh",
      description: "Discover my journey as a Riyadh-based artist blending tradition & modern creativity. Specializing in calligraphy, murals, painting & bespoke art.",
      url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/about`,
      siteName: "sadafartsgraphy",
      locale: "en_US",
      type: "website",
    },
};

function page() {
    return (
        <div className="overflow-x-hidden sm:min-h-screen bg-gray-950 text-white">
            <section className='myContainer mt-12 sm:mt-20 max-w-4xl'>
                <h2 className="text-3xl text-center pt-10 sm:text-5xl font-bold mb-6 text-white">
                    About me
                </h2>
                <div className='py-0 sm:py-10 flex sm:flex-row flex-col gap-x-2 items-center justify-center'>
                    <img src="/images/about-page.png" className='hidden sm:block' alt='about' />
                    <img src="/images/about-page-mobile.png" className='sm:hidden block' alt='about' />
                    <div>
                        <p className='text-base mb-2 text-gray-300'>Hello! My name is</p>
                        <h1 className="font-extrabold mb-2 text-2xl text-gray-200 sm:text-5xl mx-auto  leading-10 sm:leading-16 tracking-wide">
                            <span className=" font-halimun drop-shadow-sm drop-shadow-gray-600">Sadaf Khan</span>
                        </h1>
                        <h2 className='text-base sm:text-xl w-full font-semibold text-gray-400 flex sm:flex-row flex-col sm:gap-x-5 gap-y-2 sm:gap-y-0 justify-between pt-2'>
                            <span className='flex gap-x-2'><Check className='text-white bold p-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full' /> An Architect  </span>
                            <span className='flex gap-x-2'><Check className='text-white bold p-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full' /> An Artist</span>
                            <span className='flex gap-x-2'><Check className='text-white bold p-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full' /> A Calligrapher</span></h2>
                    </div>
                </div>
            </section>
            <section className='myContainer mt-5 mb-10 max-w-4xl'>
                <div className='text-base sm:text-lg  space-y-3 text-gray-300'>
                    <p>
                        Passionate about transforming everyday objects into timeless works of art. Specializing in <strong >live</strong>  and  <strong >studio calligraphy</strong>, <strong >engraving</strong>, and <strong >bespoke artwork customisation</strong>, I combine traditional craftsmanship with modern elegance across various mediums.
                    </p>
                    <p>
                        From <strong >jewellery illustration</strong>  and <strong >heat foiling </strong> to <strong >leather </strong> and <strong >product painting</strong>, my work spans across intimate keepsakes to large-scale <strong >mural paintings</strong>. Whether it&apos;s a <strong >hand-painted tote</strong>, <strong >watercolour art</strong>, or <strong >personalised embroidery</strong>, I infuse each piece with meaning, detail, and beauty.
                    </p>
                    <p>
                        I also explore the art of <strong >silhouettes</strong>, <strong >origami</strong>, <strong >beadwork</strong>, and more—offering a truly personalised, handcrafted touch to every creation.
                    </p>
                </div>
                <ul className='my-2 text-base sm:text-lg  space-y-2 text-gray-300'>
                    <span className='font-semibold mb-4'>Available for:</span>
                    <li className='flex items-center space-x-3'> <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span> <span>Live Event Art & Activations</span></li>
                    <li className='flex items-center space-x-3'> <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span> <span>Studio Commissions</span></li>
                    <li className='flex items-center space-x-3'> <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span> <span>Luxury Brand Collaborations</span></li>
                    <li className='flex items-center space-x-3'> <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span> <span>Private Custom Orders</span></li>
                </ul>
            </section>
            <section className='bg-gray-900/50 py-4 sm:py-8 '>
                <div className="myContainer my-6 sm:my-12 max-w-4xl grid lg:grid-cols-2 gap-5 items-center">
                    <div className={`space-y-6 `}>
                        <h2 className="text-3xl sm:text-5xl text-white font-bold">
                            My Artistic Journey
                        </h2>
                        <div className='text-base sm:text-lg  space-y-3 text-gray-300'>
                            <p>
                                I began my creative path studying traditional <strong>calligraphy</strong> and <strong>fine arts</strong>, then explored <strong>modern illustration</strong>, <strong>engraving</strong> and <strong>decorative techniques</strong>. Over the years I have refined a practice that honors craft and cultural heritage while experimenting with new materials and styles.
                            </p>
                            <p>
                                My work has evolved from intimate commissions to larger projects—murals, live events, and branded artworks—each project deepening my commitment to quality and meaning.
                            </p>
                        </div>

                    </div>

                    <div className={`relative `}>
                        <div className="relative">
                            <img
                                src="/images/about-bottom3.png"
                                alt="about"


                                className="w-full h-auto object-cover rounded-2xl shadow-2xl"
                            />
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-50"></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-10 sm:py-20 myContainer  max-w-4xl bg-gray-950">
                <h2 className="text-3xl text-center sm:text-5xl text-white font-bold">
                    My Approach & Process
                </h2>
                <div className='text-base sm:text-lg py-5 sm:py-10 space-y-3 text-gray-300'>
                    <p>
                        Every commission begins with listening — I learn your story, purpose, and aesthetic preferences. Next comes concept development (sketches and mockups), client review, and careful production using high-quality materials and techniques.
                    </p>
                    <p>
                        I prioritize clear communication, on-time delivery, and finishing details that ensure durability and visual impact. For events, I provide engaging <strong>live calligraphy</strong> and <strong>live tote bag painting</strong> experiences to delight guests and create memorable keepsakes.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default page
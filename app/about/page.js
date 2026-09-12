import React from 'react'
import { Check } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
    title: "About - Sadaf Khan | Calligraphy & Art Specialist in Riyadh",
    description:
        "Discover my journey as a Riyadh-based artist blending tradition & modern creativity. Specializing in calligraphy, murals, painting & bespoke art.",
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/about`,
    },
    openGraph: {
        title: "About - Sadaf Khan | Calligraphy & Art Specialist in Riyadh",
        description: "Discover my journey as a Riyadh-based artist blending tradition & modern creativity. Specializing in calligraphy, murals, painting & bespoke art.",
        url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/about`,
        siteName: "sadafartsgraphy",
        locale: "en_SA",
        type: "profile",
    },
};

function page() {
    return (
        <div className="overflow-x-hidden sm:min-h-screen bg-gray-950 text-white">
            <section className='myContainer mt-12 sm:mt-20 max-w-5xl'>
                <h1 className="text-3xl text-center pt-10 sm:text-5xl font-bold mb-6 text-white">
                    About me
                </h1>
                <div className='py-0 sm:py-10 flex sm:flex-row flex-col gap-x-2 items-center justify-center'>
                    <Image src="/images/about-page.png" className='hidden sm:block' alt='Sadaf Khan Calligraphy Artist' width={400} height={500} />
                    <Image src="/images/about-page-mobile.png" className='sm:hidden block' alt='Sadaf Khan Calligraphy Artist' width={400} height={500} />
                    <div>
                        <p className='text-base mb-2 text-gray-300'>Hello!  I&apos;m</p>
                        <h2 className="font-extrabold mb-2 text-2xl text-gray-200 sm:text-5xl mx-auto  leading-10 sm:leading-16 tracking-wide">
                            <span className=" font-halimun drop-shadow-sm drop-shadow-gray-600">Sadaf Khan</span>
                        </h2>
                        <h3 className='text-base sm:text-xl w-full font-semibold text-gray-400 flex sm:flex-row flex-col sm:gap-x-5 gap-y-2 sm:gap-y-0 justify-between pt-2'>
                            <span className='flex gap-x-2'><Check className='text-white bold p-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full' /> A live calligrapher </span>
                            <span className='flex gap-x-2'><Check className='text-white bold p-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full' /> Visual artist</span>
                            <span className='flex gap-x-2'><Check className='text-white bold p-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full' /> Architect</span></h3>
                    </div>
                </div>
            </section>
            <section className='myContainer mt-5 mb-10 max-w-4xl'>
                <div className='text-base sm:text-lg  space-y-3 text-gray-300'>
                    <p>
                        Based in Riyadh, Saudi Arabia. I am a licensed artist specializing in creating <strong>Arabic and English calligraphy live at events</strong>, <strong>exhibitions</strong> and <strong>cultural gatherings</strong>—offering an engaging and memorable experience that brings the beauty of handwritten art to life in real time.
                    </p>
                    <p>
                        It&apos;s been four years since I began my artistic journey—a path filled with growth, challenges, and endless inspiration. My work spans <strong>abstract painting</strong>, <strong>digital art</strong>, <strong>mural painting</strong>, <strong>jewellery illustration</strong>, <strong>beads making</strong>, <strong>engraving</strong>, <strong>heat foiling</strong>, <strong>origami</strong>, and <strong>silhouette art</strong>.
                    </p>
                    <p>
                        One of my signature styles involves <strong>combining Arabic calligraphy with abstract painting</strong>, often featuring <strong>Qur&apos;anic verses through techniques</strong> such as <strong>pouring</strong> and <strong>mixed media</strong>. These pieces are not only visually compelling but also spiritually resonant, inviting viewers into a space of introspection and cultural appreciation.
                    </p>
                    <p>
                        I&apos;ve had the privilege of showcasing my work at various <strong>art exhibitions</strong> and <strong>creative platforms</strong>, and each piece I create is a reflection of my inner world—a visual dialogue that connects deeply with its audience.
                    </p>
                    <p>
                        In addition to fine art, I&apos;m also a skilled <strong>graphic designer</strong> and <strong>digital artist</strong>, creating powerful visual content including <strong>logo designs</strong>, <strong>illustrations</strong>, and <strong>web layouts</strong>. With a strong foundation in design principles and an eye for innovation, I bring clarity, creativity, and impact to every project I undertake.
                    </p>
                    <p className='font-bold'>Let&apos;s Collaborate</p>
                    <p>Whether it&apos;s through <strong>a live calligraphy session</strong>, <strong>a custom painting</strong>, or <strong>a digital design project</strong>, being <strong>a live calligrapher</strong> and <strong>live event artist</strong> i am always excited to collaborate on meaningful work that inspires and uplifts.</p>
                    <p className='italic font-semibold'>Thank you for visiting—please take a moment to explore my work and feel free to get in touch to bring your creative vision to life.</p>
                </div>

            </section>
            <section className='bg-gray-900/50 py-4 sm:py-8 '>
                <div className="myContainer my-6 sm:my-12 max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-5 items-center">
                    <div className={`space-y-6  `}>
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
                            <Image
                                src="/images/new-about-bottom.png"
                                alt="Sadaf Khan Artistic Journey"


                                className="w-full h-auto "
                                width={600}
                                height={400}
                            />
                            {/* rounded-2xl shadow-2xl */}
                            {/* <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-50"></div> */}
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
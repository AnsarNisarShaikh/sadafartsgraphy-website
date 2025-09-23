'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import ContactForm from '@/components/general/ContactForm';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
 

  useEffect(() => {
    setIsVisible(true);
    setTimeout(() => setFormVisible(true), 500);
  }, []);

  const ourServicesArray = [
   {
    id: "1",
    title: "Live/studio calligraphy",
    linkSrc: "/my-work/live-studio-calligraphy",
    slug:"live-studio-calligraphy"
  },
  {
    id: "2",
    title: "Bespoke calligraphy",
    linkSrc: "/my-work/bespoke-calligraphy",
    slug:"bespoke-calligraphy"
  },
  {
    id: "3",
    title: "Live/studio Engraving",
    linkSrc: "/my-work/live-studio-engraving",
    slug:"live-studio-engraving"
  },
  {
    id: "4",
    title: "Jewellery illustration",
    linkSrc: "/my-work/jewellery-illustration",
    slug:"jewellery-illustration"
  },
  {
    id: "5",
    title: "Heat foiling",
    linkSrc: "/my-work/heat-foiling",
    slug:"heat-foiling"
  },
  {
    id: "6",
    title: "Product painting",
    linkSrc: "/my-work/product-painting",
    slug:"product-painting"
  },
  {
    id: "7",
    title: "Leather painting",
    linkSrc: "/my-work/leather-painting",
    slug:"leather-painting"
  },
  {
    id: "8",
    title: "Mural painting",
    linkSrc: "/my-work/mural-painting",
    slug:"mural-painting"
  },
  {
    id: "9",
    title: "Tote bag live ",
    linkSrc: "/my-work/tote-bag-live",
    slug:"tote-bag-live"
  },
  {
    id: "10",
    title: "Artwork customisation",
    linkSrc: "/my-work/artwork-customisation",
    slug:"artwork-customisation"
  },
  {
    id: "11",
    title: "Beads making",
    linkSrc: "/my-work/beads-making",
    slug:"beads-making"
  },
  {
    id: "12",
    title: "Hand Embroidery work",
    linkSrc: "/my-work/hand-embroidery-work",
    slug:"hand-embroidery-work"
  },
  {
    id: "13",
    title: "Silhouette arts",
    linkSrc: "/my-work/silhouette-arts",
    slug:"silhouette-arts"
  },
  {
    id: "14",
    title: "Origami work",
    linkSrc: "/my-work/origami-work",
    slug:"origami-work"
  },
];

 

  return (
    <div className="overflow-x-hidden sm:min-h-screen bg-gray-950 text-white">
    

      {/* Hero Section */}
      <section className="pb-8 pt-20 sm:pt-32 sm:pb-10">
        <div className="myContainer text-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-3xl sm:text-5xl font-bold mb-6">
              <span className="text-white">
                Let&apos;s Create
              </span>
           
              <span className="text-white"> Together</span>
            </h1>
            <p className="text-sm px-3 sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-12">
              Ready to bring your artistic vision to life? Whether you need custom calligraphy, 
              digital art, murals, or specialized services, I&apos;m here to help make it happen.< br />
              Based in Riyadh, Saudi Arabia, I provide both studio services and live art experiences for individuals, brands, and events.
            </p>
          </div>
        </div>
      </section>
      <section className='myContainer pb-16'>
        <div className='grid grid-cols-1 sm:grid-cols-7 sm:gap-x-4 gap-y-4 sm:gap-y-0'>
      
              <div className="sm:col-span-4 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-xl p-4 border border-purple-500/20">
                <h3 className="text-2xl font-bold text-white mb-4">Services I Offer</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {ourServicesArray.map((service, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                     <Link href={service.linkSrc}><span className="text-gray-300 text-sm">{service.title}</span></Link> 
                    </div>
                  ))}
                </div>
              </div>

         
              <div className="sm:col-span-3 bg-gray-900/30 rounded-xl p-6 border border-gray-800">
                <h3 className="text-xl font-semibold text-white mb-3">What to Expect</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center space-x-3">
                    <i className="ri-check-line text-green-400"></i>
                    <span>Initial consultation within 24-48 hours</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <i className="ri-check-line text-green-400"></i>
                    <span>Detailed project proposal and timeline</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <i className="ri-check-line text-green-400"></i>
                    <span>Regular updates throughout the process</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <i className="ri-check-line text-green-400"></i>
                    <span>Revisions included to ensure satisfaction</span>
                  </li>
                </ul>
              </div>

        </div>

      </section>

      {/* Contact Form and Info */}
      <section className="pb-10 sm:pb-20 sm:pt-10">
        <div className="myContainer">
          <div className="grid grid-cols-1 lg:grid-cols-2 sm:gap-16">
            {/* Contact Form */}
            <div className={`transform transition-all duration-1000 ${formVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
           <ContactForm />
            </div>

            {/* Contact Information */}
            <div className={`space-y-8 mt-10 sm:mt-0 transform transition-all duration-1000 delay-300 ${formVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
              <div>
                <h2 className="text-xl sm:text-3xl font-bold mb-6 text-white">Get In Touch</h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  I&apos;m always excited to discuss new projects and creative collaborations. 
                  Whether you have a clear vision or just an idea, let&apos;s explore how we can 
                  bring your artistic dreams to life.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-gray-900/30 rounded-xl border border-gray-800">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-mail-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                    <p className="text-gray-300 mb-1">ar_sadaf1@yahoo.com</p>
                    <p className="text-sm text-gray-400">I typically respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-gray-900/30 rounded-xl border border-gray-800">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-phone-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                    <p className="text-gray-300 mb-1">966502269892</p>
                    <p className="text-sm text-gray-400">Available Sun-Thur, 9AM-6PM AST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-gray-900/30 rounded-xl border border-gray-800">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-instagram-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
                    <p className="text-gray-300 mb-1">Al Malaz, Riyadh, Saudi Arabia</p>
                    <p className="text-sm text-gray-400">Providing services locally and across the Kingdom</p>
                  </div>
                </div>
              </div>

            
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
}
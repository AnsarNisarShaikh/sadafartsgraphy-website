'use client';
import { useState, useEffect } from 'react';

function ContactBanner() {
      const [isVisible, setIsVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(false); 

  useEffect(() => {
    setIsVisible(true);
    setTimeout(() => setFormVisible(true), 500);
  }, []);
  return (
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
  )
}

export default ContactBanner
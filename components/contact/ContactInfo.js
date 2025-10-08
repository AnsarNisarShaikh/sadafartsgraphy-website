'use client';
import { useState, useEffect } from 'react';
import ContactForm from '../general/ContactForm';

function ContactInfo() {
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setFormVisible(true), 500);
  }, []);
  return (
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
                  <p className="text-gray-300 mb-1">
                    <a
                      href="mailto:ar_sadaf1@yahoo.com?subject=Project%20Inquiry"
                      className=""
                      aria-label="Email"
                    >

                      <span >ar_sadaf1@yahoo.com</span>
                    </a>
                  </p>
                  <p className="text-sm text-gray-400">I typically respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gray-900/30 rounded-xl border border-gray-800">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-phone-line text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                  <p className="text-gray-300 mb-1">
                    <a
                      href="tel:+966502269892"
                      className=""
                      aria-label="Call"
                    >

                      <span >+966502269892</span>
                    </a>
                  </p>
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
  )
}

export default ContactInfo
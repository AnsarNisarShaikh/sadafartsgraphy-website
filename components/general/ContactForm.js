"use client"
import React, { useState } from 'react'

function ContactForm() {
     const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      const [isSubmitting, setIsSubmitting] = useState(false);
      const [submitStatus, setSubmitStatus] = useState('');
     const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      setSubmitStatus("error");
    }
  } catch (error) {
    setSubmitStatus("error");
    // console.log(error,"error")
  } finally {
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(""), 5000);
  }
};


  return (
    <div>
           <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
                <h2 className="text-xl sm:text-3xl font-bold mb-6 text-white">Work With Me</h2>
                
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-900/20 border border-green-500/50 rounded-lg text-green-400">
                    Thank you! Your message has been sent successfully. I&apos;ll get back to you soon.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-900/20 border border-red-500/50 rounded-lg text-red-400">
                    Something went wrong. Please try again or contact me directly.
                  </div>
                )}

                <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Your Name<span className='text-red-500'>*</span> 
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Phone NUmber<span className='text-red-500'>*</span> 
                      </label>
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                        placeholder="Enter Your Phone number"
                      />
                    </div>
                  </div>
                   <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address 
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                   
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                        placeholder="Enter Your Email"
                      />
                    </div>

            

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Project Details<span className='text-red-500'>*</span> 
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      maxLength={500}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    ></textarea>
                    <div className="text-right text-xs text-gray-400 mt-1">
                      {formData.message.length}/500 characters
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="cursor-pointer w-full bg-gray-800 hover:text-gray-800 hover:bg-white disabled:from-gray-600 disabled:to-gray-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] disabled:scale-100 hover:shadow-lg hover:shadow-purple-500/25 disabled:cursor-not-allowed whitespace-nowrap"
                  >
                    {isSubmitting ? 'Sending Message...' : 'Send Message'}
                  </button>
                </form>
              </div>
    </div>
  )
}

export default ContactForm
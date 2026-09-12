import Link from 'next/link';
import ContactBanner from '@/components/contact/ContactBanner';
import ContactInfo from '@/components/contact/ContactInfo';
import { fetchWorksDetail } from '@/apis/getWorkData';

export const metadata = {
  title: "Contact Sadaf Khan | Calligraphy & Art Services in Riyadh",
  description:
    "Get in touch for bespoke calligraphy, murals, engraving & custom artwork in Riyadh. Available Sun–Thu, 9AM–6PM AST.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/contact`,
  },
   openGraph: {
      title: "Contact Sadaf Khan | Calligraphy & Art Services in Riyadh",
      description: "Get in touch for bespoke calligraphy, murals, engraving & custom artwork in Riyadh. Available Sun–Thu, 9AM–6PM AST.",
      url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/contact`,
      siteName: "sadafartsgraphy",
      locale: "en_SA",
      type: "website",
    },
};

export default async function Contact() {
   const { workDetails } = await fetchWorksDetail(); 

  return (
    <div className="overflow-x-hidden sm:min-h-screen bg-gray-950 text-white">
    
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Sadaf Artsgraphy",
            description: "Arabic & English calligraphy, murals, leather art, engraving & bespoke designs in Riyadh",
            url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/contact`,
            telephone: "+966502269892",
            email: "ar_sadaf1@yahoo.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Riyadh",
              addressRegion: "Riyadh Province",
              addressCountry: "SA",
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"],
              opens: "09:00",
              closes: "18:00",
            },
            sameAs: [
              "https://www.instagram.com/sadafartsgraphy",
              "https://www.linkedin.com/in/sadaf-khan-9894122b2",
              "https://www.facebook.com/sadaf.ambreen.35/about_work_and_education",
            ],
          }),
        }}
      />

      {/* Banner Section */}
   <ContactBanner />
      <section className='myContainer pb-16'>
        <div className='grid grid-cols-1 sm:grid-cols-8 lg:grid-cols-7 sm:gap-x-4 gap-y-4 sm:gap-y-0'>
      
              <div className="sm:col-span-5 lg:col-span-5 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-xl p-4 border border-purple-500/20">
                <h3 className="text-2xl font-bold text-white mb-4">Services I Offer</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {workDetails?.map((service, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                     <Link href={`/my-work/${service.slug}`}><span className="text-gray-300 text-sm">{service.title}</span></Link> 
                    </div>
                  ))}
                </div>
              </div>

         
              <div className="sm:col-span-3 lg:col-span-2 bg-gray-900/30 rounded-xl p-6 border border-gray-800">
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
     <ContactInfo />

     
    </div>
  );
}
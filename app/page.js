import Link from 'next/link';
import Image from 'next/image';
import Brands from '@/components/home/Brands';
import HomeBanner from '@/components/home/HomeBanner';
import HomeServices from '@/components/home/HomeServices';
import WhyClients from '@/components/home/WhyClients';
import PassionData from '@/components/home/PassionData';
import { fetchWorksDetail } from '@/apis/getWorkData';
import HomeAbout from '@/components/home/HomeAbout';
import { fetchBrandsDetail } from '@/apis/getBrandsData';

export default async function Home() {  

  const { workDetails } = await fetchWorksDetail();
  const { brandsDetails } = await fetchBrandsDetail();

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-hidden">
      {/* Navigation */}
      {/* <Header /> */}

      {/* Hero Section */}
      <section className="relative  h-[500px] lg:min-h-screen flex items-center justify-center overflow-hidden">
        {/* <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-950 to-pink-900/20"></div>
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url('./images/banner.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div> */}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-950 to-pink-900/20"></div>

        {/* Optimized background image */}
        <Image
          src="/images/banner.jpg"
          alt="Background banner"
          fill
          priority   
          // quality={90}
          className="object-cover opacity-30"
        />

        <div className="relative z-10 myContainer text-center">
          <HomeBanner />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl animate-pulse delay-1000"></div>
      </section>

      {/* About section */}

         <section className="bg-gray-950">
           <div className="myContainer relative">
            {/* <div className='absolute inset-0 top-0 left-0 right-0 w-full mx-auto z-0 '>
              <img src="/images/about-banner-home2.png" alt='About'/>
            </div> */}
          <HomeAbout />
          </div>
      </section>

      {/* Services Section */}
      <section className="py-10 sm:py-20 bg-gray-900/50 max-w-7xl mx-auto px-6">
       { workDetails !==undefined && <HomeServices workDetails={workDetails} />}
      </section>

      {/* Why Clients Choose My Work */}
      <section className="py-10 sm:py-20 bg-gray-950">
          <WhyClients />
      </section>

      {/* Passion for Artistic  */}
      <section className="py-10 sm:py-20 bg-gray-900/50">
        <div className="myContainer">
          <PassionData />
        </div>
      </section>

      {/* brands */}
      <section className="py-10 sm:py-20 bg-gray-950">
   {   brandsDetails !==undefined &&  <Brands brandsDetails={brandsDetails} />}
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="myContainer text-center">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-white">
            Let&apos;s Create Something Beautiful Together
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you need custom artwork, illustrations, or specialized artistic services,
            I&apos;m here to bring your vision to life.
          </p>
          <Link href="/contact" className="bg-gray-800 hover:text-gray-800 hover:bg-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
            Start Your Project
          </Link>
        </div>
      </section>


    </div>
  );
}
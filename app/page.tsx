"use client"

import Image from "next/image"
import Link from "next/link"
import { Search, MapPin, ChevronRight, ArrowRight } from "lucide-react"
import { useEffect } from "react"

export default function Home() {
  // Add animation initialization on component mount
  useEffect(() => {
    // Initialize animations for elements with animation classes
    const animatedElements = document.querySelectorAll('.fade-in, .slide-up, .slide-in-right, .slide-in-left');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.visibility = 'visible';
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(el => {
      el.style.visibility = 'hidden';
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header - Fixed position */}
      <header className="gradient-blue text-white py-3 fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto flex h-14 items-center justify-between px-6">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logo-placeholder.svg"
              alt="MedStar Health"
              width={190}
              height={40}
              className="h-11"
            />
          </div>

          {/* Navigation */}
          <nav className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
            <ul className="flex justify-center items-center space-x-4">
              <li>
                <Link href="#" className="text-xs font-bold hover:underline whitespace-nowrap hover-lift">
                  Healthcare Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs font-bold hover:underline whitespace-nowrap hover-lift">
                  Find a Doctor
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs font-bold hover:underline whitespace-nowrap hover-lift">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs font-bold hover:underline whitespace-nowrap hover-lift">
                  Patient Portal
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs font-bold hover:underline whitespace-nowrap hover-lift">
                  Research and Education
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs font-bold hover:underline whitespace-nowrap hover-lift">
                  Careers
                </Link>
              </li>
            </ul>
          </nav>

          {/* Search and Menu */}
          <div className="flex items-center">
            <button className="mr-4 p-2 hover-lift">
              <Search className="h-6 w-6" />
            </button>
            <div className="flex flex-col items-center gradient-yellow p-2 text-black rounded-lg hover-lift">
              <div className="space-y-1">
                <div className="h-0.5 w-6 bg-current"></div>
                <div className="h-0.5 w-6 bg-current"></div>
                <div className="h-0.5 w-6 bg-current"></div>
              </div>
              <span className="mt-1 text-xs">menu</span>
            </div>
          </div>
        </div>
      </header>
      
      {/* Header spacing to prevent content from hiding behind fixed header */}
      <div className="h-14 py-3"></div>

      {/* Hero Section */}
      <section className="relative h-[690px] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg"
            alt="Healthcare Professionals"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 gradient-hero-overlay"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 flex h-full flex-col justify-between">
          <div className="container mx-auto pl-[18.5%] pt-24">
            <div className="max-w-xl">
              <h1
                className="mb-10 text-6xl font-bold leading-tight text-[#002d72] fade-in"
                style={{ fontFamily: "Halcome, Arial, sans-serif" }}
              >
                We can help you today!
              </h1>

              <button className="rounded-xl btn-glossy btn-glossy-blue px-8 py-4 text-lg font-medium text-white slide-up delay-200">
                Book Appointment
              </button>
            </div>
          </div>

          {/* Quick Links Bar */}
          <div className="container mx-auto px-4 pb-16">
            <div className="mx-auto flex w-[65%] max-w-5xl overflow-hidden rounded-xl shadow-lg slide-up delay-300">
              {/* Find care now */}
              <div className="flex w-1/5 flex-col gradient-blue p-3 text-white">
                <h2 className="mb-2 text-2xl font-bold">
                  Find care
                  <br />
                  now
                </h2>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5" />
                  <span>Location</span>
                </div>
              </div>

              {/* Urgent Care */}
              <div className="relative w-1/5 gradient-yellow p-3 hover-lift">
                <div className="mb-2 flex items-center">
                  <div className="mr-2 h-8 w-8 rounded-full border-2 border-[#002d72]"></div>
                  <h3 className="text-lg font-bold">
                    Urgent
                    <br />
                    Care
                  </h3>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </div>
                <p className="text-sm">Nearest location (mi)</p>
                <div className="absolute bottom-0 right-0 top-0 w-px bg-gray-300"></div>
              </div>

              {/* Primary Care */}
              <div className="relative w-1/5 gradient-yellow p-3 hover-lift">
                <div className="mb-2 flex items-center">
                  <div className="mr-2 h-8 w-8 rounded-full border-2 border-[#002d72]"></div>
                  <h3 className="text-lg font-bold">
                    Primary
                    <br />
                    Care
                  </h3>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </div>
                <p className="text-sm">Nearest location (mi)</p>
                <div className="absolute bottom-0 right-0 top-0 w-px bg-gray-300"></div>
              </div>

              {/* Specialty Care */}
              <div className="relative w-1/5 gradient-yellow p-3 hover-lift">
                <div className="mb-2 flex items-center">
                  <div className="mr-2 h-8 w-8 rounded-full border-2 border-[#002d72]"></div>
                  <h3 className="text-lg font-bold">
                    Specialty
                    <br />
                    Care
                  </h3>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </div>
                <p className="text-sm">For specific health conditions</p>
                <div className="absolute bottom-0 right-0 top-0 w-px bg-gray-300"></div>
              </div>

              {/* Telehealth */}
              <div className="w-1/5 gradient-yellow p-3 hover-lift">
                <div className="mb-2 flex items-center">
                  <div className="mr-2 h-8 w-8 rounded-full border-2 border-[#002d72]"></div>
                  <h3 className="text-lg font-bold">
                    Tele
                    <br />
                    health
                  </h3>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </div>
                <p className="text-sm">Virtual care from home</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated to our community - MOVED FROM SECTION 4 TO SECTION 2 */}
      <section className="gradient-blue-light-translucent py-16 section-enhanced">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-start">
              {/* Left side content - styled like section below */}
              <div className="lg:w-[26%] mb-10 lg:mb-0 lg:pr-4 lg:ml-16 fade-in">
                <h2 className="text-4xl font-bold mb-4 text-[#002d72]">Dedicated to our community</h2>
                <div className="w-full h-1 bg-[#ffde00] mb-6"></div>
                <p className="mb-8 text-base leading-relaxed text-gray-800">
                  Every year MedStar Health contributes more than $400 million to improving health in our communities.
                </p>

                <div className="mb-10 flex justify-center">
                  <Image
                    src="/placeholder.svg"
                    alt="Community contribution pie chart"
                    width={450}
                    height={450}
                    className="object-contain"
                  />
                </div>

                <a
                  href="#"
                  className="inline-block btn-glossy btn-glossy-yellow px-8 py-3 text-base text-[#002d72] font-medium"
                >
                  Learn More About Our Commitment
                </a>
              </div>

              {/* Right side card - increased by 50% */}
              <div className="lg:w-[74%] flex justify-center slide-in-right">
                <div className="w-4/5">
                  <div className="bg-white rounded-xl shadow-md p-8 card-glossy">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-2xl font-bold text-[#002d72]">Our Stories</h3>
                      <div className="flex items-center gap-3">
                        <button className="gradient-blue text-white rounded-full p-2 flex items-center justify-center w-10 h-10 hover-lift">
                          <ChevronRight className="h-6 w-6 rotate-180" />
                        </button>
                        <span className="text-[#002d72] font-medium">2 / 3</span>
                        <button className="gradient-blue text-white rounded-full p-2 flex items-center justify-center w-10 h-10 hover-lift">
                          <ChevronRight className="h-6 w-6" />
                        </button>
                      </div>
                    </div>

                    <div className="mb-6 img-glossy">
                      <Image
                        src="/placeholder.svg"
                        alt="Elderly woman working on art"
                        width={800}
                        height={400}
                        className="w-full h-auto rounded-lg object-cover"
                      />
                    </div>

                    <h4 className="text-xl font-bold text-[#002d72]">Diabetes prevention education</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fixed Book Appointment button */}
        <div className="fixed right-6 bottom-6 z-50">
          <button className="gradient-yellow text-[#002d72] font-bold rounded-lg px-5 py-3 flex items-center text-base hover-lift btn-glossy shadow-lg">
            <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v8" />
              <path d="M8 12h8" />
            </svg>
            Book Appointment
          </button>
        </div>
      </section>

      {/* Specialty Care Services - MOVED FROM SECTION 2 TO SECTION 3 */}
      <section className="gradient-blue py-16 text-white relative section-enhanced">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-start">
              {/* Left side content */}
              <div className="lg:w-[26%] mb-10 lg:mb-0 lg:pr-4 lg:ml-16 fade-in">
                <h2 className="text-4xl font-bold mb-4">Specialty care services</h2>
                <div className="w-full h-1 bg-[#ffde00] mb-6"></div>
                <p className="mb-8 text-base leading-relaxed">
                  We deliver outstanding care to people experiencing a variety of medical conditions. Our specialists
                  have in-depth training in their chosen fields and are able to give you highly advanced, innovative
                  care close to where you live.
                </p>
                <a
                  href="#"
                  className="inline-block btn-glossy btn-glossy-yellow px-8 py-3 text-base text-[#002d72] font-medium"
                >
                  View All Healthcare Services
                </a>
              </div>

              {/* Right side icons grid - using custom layout for exact spacing */}
              <div className="lg:w-[74%] flex justify-center slide-in-right">
                <div className="w-full">
                  <div className="flex flex-wrap justify-center gap-4 pl-6">
                    {/* Row 1 */}
                    <div className="w-1/4 flex flex-col items-center text-center mb-8 px-2 delay-100">
                      <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center mb-3 hover-lift">
                        <svg
                          className="w-12 h-12 text-[#002d72]"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
                          <path d="M8 12h8" />
                          <path d="M12 8v8" />
                          <path d="M7.5 10.5c1-1 2.5-1.5 4.5-1.5s3.5.5 4.5 1.5" />
                          <path d="M7.5 13.5c1 1 2.5 1.5 4.5 1.5s3.5-.5 4.5-1.5" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-sm">
                        Heart and
                        <br />
                        Vascular
                      </h3>
                    </div>

                    <div className="w-1/4 flex flex-col items-center text-center mb-8 px-2 delay-200">
                      <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center mb-3 hover-lift">
                        <svg
                          className="w-12 h-12 text-[#002d72]"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <path d="M8 14a6 6 0 0 0 12 0 4 4 0 0 0-4-4 4 4 0 0 0-4 4 6 6 0 0 0 6 6" />
                          <path d="M17 18a2 2 0 0 1 4 0" />
                          <path d="M12 14a2 2 0 0 1-4 0" />
                          <path d="M3 18a2 2 0 0 1 4 0" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-sm">Orthopedics</h3>
                    </div>

                    <div className="w-1/4 flex flex-col items-center text-center mb-8 px-2 delay-300">
                      <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center mb-3 hover-lift">
                        <svg
                          className="w-12 h-12 text-[#002d72]"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <path d="M12 12v.01" />
                          <path d="M19.071 4.929c-1.562-1.562-6 .5-6 .5s2.063-4.438.5-6c-1.562-1.562-6 4.5-6 4.5s.5-8-2-8-3.5 9.5-3.5 9.5-5.5-2.5-7 1 4.5 7 4.5 7-7.5 1.5-5 5 8 2 8 2-2.5 5.5 1 7 7-5.5 7-5.5 1.5 7.5 5 5 2-8 2-8 5.5 2.5 7-1-4.5-7-4.5-7 7.5-1.5 5-5-8-2-8-2 2.5-5.5-1-7Z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-sm">
                        Cancer
                        <br />
                        Care
                      </h3>
                    </div>

                    {/* Row 2 */}
                    <div className="w-1/4 flex flex-col items-center text-center mb-8 px-2 delay-100">
                      <div className="gradient-yellow rounded-full w-24 h-24 flex items-center justify-center mb-3 hover-lift">
                        <svg
                          className="w-12 h-12 text-[#002d72]"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <path d="M15.5 9.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
                          <path d="M8.5 14.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
                          <path d="M15.5 21.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
                          <path d="M8.5 21.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-sm">
                        Neurology and
                        <br />
                        Neurosurgery
                      </h3>
                    </div>

                    <div className="w-1/4 flex flex-col items-center text-center mb-8 px-2 delay-200">
                      <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center mb-3 hover-lift">
                        <svg
                          className="w-12 h-12 text-[#002d72]"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <path d="M12 6c0-3.314-2.686-6-6-6S0 2.686 0 6c0 2.165 1.15 4.063 2.87 5.12C1.116 12.204 0 14.442 0 17c0 3.866 3.134 7 7 7a6.98 6.98 0 0 0 4.995-2.095A6.98 6.98 0 0 0 17 24c3.866 0 7-3.134 7-7 0-2.558-1.116-4.796-2.87-5.88A6.012 6.012 0 0 0 24 6c0-3.314-2.686-6-6-6s-6 2.686-6 6Z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-sm text-center">
                        MedStar
                        <br />
                        Georgetown
                        <br />
                        Transplant
                        <br />
                        Institute
                      </h3>
                    </div>

                    <div className="w-1/4 flex flex-col items-center text-center mb-8 px-2 delay-300">
                      <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center mb-3 hover-lift">
                        <svg
                          className="w-12 h-12 text-[#002d72]"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <path d="M16 14c.8.8 2 .8 2.8 0 .8-.8.8-2 0-2.8-.8-.8-2-.8-2.8 0-.8.8-.8 2 0 2.8Z" />
                          <path d="M2 9h7.5" />
                          <path d="M2 15h7.5" />
                          <path d="M9.5 9v6" />
                          <path d="M16 18c2.5 0 5-2.5 5-5 0-2.5-2.5-5-5-5-2.5 0-5 2.5-5 5 0 2.5 2.5 5 5 5Z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-sm">Gastroenterology</h3>
                    </div>

                    {/* Row 3 */}
                    <div className="w-1/4 flex flex-col items-center text-center mb-8 px-2 delay-100">
                      <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center mb-3 hover-lift">
                        <svg
                          className="w-12 h-12 text-[#002d72]"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <path d="M17 20h-1a5 5 0 0 1-5-5 5 5 0 0 1 5-5h1" />
                          <path d="M14 10V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-5Z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-sm">
                        Physical
                        <br />
                        Therapy and
                        <br />
                        Rehabilitation
                      </h3>
                    </div>

                    <div className="w-1/4 flex flex-col items-center text-center mb-8 px-2 delay-200">
                      <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center mb-3 hover-lift">
                        <svg
                          className="w-12 h-12 text-[#002d72]"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <path d="M12 15c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6Z" />
                          <path d="M3 15.364C4.636 13.455 8.182 12 12 12c3.818 0 7.364 1.455 9 3.364" />
                          <path d="M18 21H6a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2Z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-sm">
                        Women's
                        <br />
                        Health
                      </h3>
                    </div>

                    <div className="w-1/4 flex flex-col items-center text-center mb-8 px-2 delay-300">
                      <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center mb-3 hover-lift">
                        <svg
                          className="w-12 h-12 text-[#002d72]"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <path d="M12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                          <path d="M12 22V8" />
                          <path d="M17 12h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2" />
                          <path d="M5 12H3a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2" />
                          <path d="M8 22H5" />
                          <path d="M19 22h-3" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-sm">
                        Behavioral
                        <br />
                        Health
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automated admin for clinicians section - MOVED FROM SECTION 4 TO SECTION 5 */}
      <section className="py-16 gradient-blue-overlay section-enhanced">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            {/* Left side content */}
            <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 slide-in-left">
              <h2 className="text-4xl font-bold text-[#002d72] mb-6">Automated admin for clinicians</h2>
              <div className="w-24 h-1 bg-[#ffde00] mb-6"></div>
              <p className="text-gray-700 mb-8">
                The 98point6 platform enables providers to practice at the top of their license with tools that can
                automate intake, charting, orders, and more. Our provider-first technology is designed to drive
                efficiency, establish trust, and tackle burnout head-on.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-2 w-2 mt-2 rounded-full bg-[#1a4694] mr-3"></div>
                  <p className="text-gray-700">
                    Evidence-based clinical decision support increases quality, safety, and consistency of care
                  </p>
                </li>
              </ul>
            </div>

            {/* Right side image */}
            <div className="md:w-1/2 slide-in-right">
              <div className="img-glossy rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg"
                  alt="Clinician using healthcare platform"
                  width={800}
                  height={600}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Convenient care for patients section - MOVED FROM SECTION 3 TO SECTION 4 */}
      <section className="py-16 gradient-yellow-translucent section-enhanced">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            {/* Left side image */}
            <div className="md:w-1/2 mb-8 md:mb-0 slide-in-left">
              <div className="img-glossy rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg"
                  alt="Patient using healthcare app"
                  width={800}
                  height={600}
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Right side content */}
            <div className="md:w-1/2 md:pl-12 slide-in-right">
              <h2 className="text-4xl font-bold text-[#002d72] mb-6">Convenient care for patients</h2>
              <div className="w-24 h-1 bg-[#002d72] mb-6"></div>
              <p className="text-gray-800 mb-8">
                The 98point6 platform provides a seamless experience between patients and providers, resulting in
                increased access and patient satisfaction.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-2 w-2 mt-2 rounded-full bg-[#002d72] mr-3"></div>
                  <p className="text-gray-800">
                    Navigate patients to the most appropriate care modality for their symptoms
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-2 w-2 mt-2 rounded-full bg-[#002d72] mr-3"></div>
                  <p className="text-gray-800">
                    Automate recommended patient resources throughout the care journey, customized for you
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-2 w-2 mt-2 rounded-full bg-[#002d72] mr-3"></div>
                  <p className="text-gray-800">
                    Accessible through a web browser or on mobile devices, with an intuitive user experience
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* One team for all your healthcare needs */}
      <section className="gradient-blue-light py-16 text-white section-enhanced">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-12">
            {/* Left side content */}
            <div className="md:w-1/2 slide-in-left">
              <h2 className="text-4xl font-bold text-white mb-4">One team for all your healthcare needs</h2>
              <div className="w-full h-1 bg-[#ffde00] mb-8 max-w-md"></div>

              <p className="text-white mb-12 text-xl">Easy, convenient access to great health care.</p>

              <div className="grid grid-cols-2 gap-6 mb-12">
                <div className="border border-white rounded-lg p-6 text-center hover-lift">
                  <div className="text-4xl font-bold mb-1">10</div>
                  <div className="text-sm">Hospitals</div>
                </div>

                <div className="border border-white rounded-lg p-6 text-center hover-lift">
                  <div className="text-4xl font-bold mb-1">300</div>
                  <div className="text-sm">Care Sites</div>
                </div>

                <div className="border border-white rounded-lg p-6 text-center hover-lift">
                  <div className="text-4xl font-bold mb-1">5,400</div>
                  <div className="text-sm">Physicians</div>
                </div>

                <div className="border border-white rounded-lg p-6 text-center hover-lift">
                  <div className="text-4xl font-bold mb-1">8,000</div>
                  <div className="text-sm">Nurses</div>
                </div>

                <div className="border border-white rounded-lg p-6 text-center hover-lift">
                  <div className="text-4xl font-bold mb-1">30,000</div>
                  <div className="text-sm">Associates</div>
                </div>
              </div>

              <Link href="#" className="inline-flex items-center text-white font-medium hover:underline hover-lift">
                Learn More
                <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Right side content */}
            <div className="md:w-1/2 flex flex-col slide-in-right">
              <div className="bg-[#f8c8c8] rounded-xl overflow-hidden mb-6 img-glossy">
                <Image
                  src="/placeholder.svg"
                  alt="Nurse with elderly patient"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="gradient-blue p-6 rounded-xl text-center">
                <h3 className="text-2xl font-bold">
                  It's how we <span className="text-[#ffde00]">treat people.</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="py-16 bg-white section-enhanced">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#002d72] mb-4 text-center fade-in">Contact Us</h2>
          <div className="w-24 h-1 bg-[#ffde00] mb-10 mx-auto"></div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-[#f8f0e3] p-8 rounded-xl shadow-md card-glossy slide-up">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium text-[#002d72]">
                      First Name
                    </label>
                    <input
                      id="first-name"
                      className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 focus:border-[#002d72] focus:outline-none focus:ring-2 focus:ring-[#002d72]/20 hover-glow"
                      type="text"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium text-[#002d72]">
                      Last Name
                    </label>
                    <input
                      id="last-name"
                      className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 focus:border-[#002d72] focus:outline-none focus:ring-2 focus:ring-[#002d72]/20 hover-glow"
                      type="text"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-[#002d72]">
                    Email
                  </label>
                  <input
                    id="email"
                    className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 focus:border-[#002d72] focus:outline-none focus:ring-2 focus:ring-[#002d72]/20 hover-glow"
                    type="email"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-[#002d72]">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 focus:border-[#002d72] focus:outline-none focus:ring-2 focus:ring-[#002d72]/20 hover-glow"
                    type="tel"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="reason" className="text-sm font-medium text-[#002d72]">
                    Reason for Contact
                  </label>
                  <select
                    id="reason"
                    className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 focus:border-[#002d72] focus:outline-none focus:ring-2 focus:ring-[#002d72]/20 hover-glow"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Select a reason
                    </option>
                    <option value="appointment">Schedule an Appointment</option>
                    <option value="information">Request Information</option>
                    <option value="billing">Billing Question</option>
                    <option value="feedback">Provide Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-[#002d72]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full min-h-[120px] rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 focus:border-[#002d72] focus:outline-none focus:ring-2 focus:ring-[#002d72]/20 hover-glow"
                    required
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input
                    id="privacy"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-[#002d72] focus:ring-[#002d72]"
                    required
                  />
                  <label htmlFor="privacy" className="ml-2 text-sm text-gray-700">
                    I agree to the{" "}
                    <a href="#" className="text-[#002d72] hover:underline">
                      privacy policy
                    </a>{" "}
                    and consent to being contacted by MedStar Health.
                  </label>
                </div>

                <div className="flex justify-center pt-4">
                  <button
                    type="submit"
                    className="inline-flex items-center rounded-xl btn-glossy btn-glossy-blue px-8 py-3 text-base font-medium text-white"
                  >
                    Submit Message
                  </button>
                </div>
              </form>
            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-6 text-center slide-up delay-200">
              <div className="p-4">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full gradient-yellow">
                  <svg className="h-6 w-6 text-[#002d72]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-medium text-[#002d72]">Phone</h3>
                <p className="text-gray-600">1-800-123-4567</p>
              </div>

              <div className="p-4">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full gradient-yellow">
                  <svg className="h-6 w-6 text-[#002d72]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-medium text-[#002d72]">Email</h3>
                <p className="text-gray-600">contact@medstar.org</p>
              </div>

              <div className="p-4">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full gradient-yellow">
                  <svg className="h-6 w-6 text-[#002d72]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-medium text-[#002d72]">Location</h3>
                <p className="text-gray-600">Washington, DC Metro Area</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="gradient-blue py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-bold">About MedStar Health</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:underline hover-lift">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline hover-lift">
                    Leadership
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline hover-lift">
                    Newsroom
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline hover-lift">
                    Community Health
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline hover-lift">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-bold">Patient Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:underline hover-lift">
                    Find a Doctor
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline hover-lift">
                    Find a Location
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline hover-lift">
                    Patient Portal
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline hover-lift">
                    Pay Your Bill
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline hover-lift">
                    Insurance
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-bold">Healthcare Professionals</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:underline hover-lift">
                    Refer a Patient
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline hover-lift">
                    Medical Education
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline hover-lift">
                    Research
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline hover-lift">
                    Clinical Trials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline hover-lift">
                    Physician Portal
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-bold">Connect With Us</h3>
              <div className="mb-4 flex space-x-4">
                <Link href="#" className="rounded-full bg-white p-2 text-[#002d72] hover-lift">
                  <span className="sr-only">Facebook</span>
                  <div className="h-5 w-5"></div>
                </Link>
                <Link href="#" className="rounded-full bg-white p-2 text-[#002d72] hover-lift">
                  <span className="sr-only">Twitter</span>
                  <div className="h-5 w-5"></div>
                </Link>
                <Link href="#" className="rounded-full bg-white p-2 text-[#002d72] hover-lift">
                  <span className="sr-only">Instagram</span>
                  <div className="h-5 w-5"></div>
                </Link>
                <Link href="#" className="rounded-full bg-white p-2 text-[#002d72] hover-lift">
                  <span className="sr-only">LinkedIn</span>
                  <div className="h-5 w-5"></div>
                </Link>
              </div>
              <p className="text-sm">© 2025 MedStar Health. All rights reserved.</p>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-700 pt-8 text-sm">
            <div className="flex flex-wrap gap-4">
              <Link href="#" className="hover:underline hover-lift">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:underline hover-lift">
                Terms of Use
              </Link>
              <Link href="#" className="hover:underline hover-lift">
                Notice of Nondiscrimination
              </Link>
              <Link href="#" className="hover:underline hover-lift">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
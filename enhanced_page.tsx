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
      {/* Header */}
      <header className="gradient-blue text-white py-3">
        <div className="container mx-auto flex h-12 items-center justify-between px-6">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/placeholder.svg?height=40&width=190"
              alt="MedStar Health"
              width={190}
              height={40}
              className="h-10"
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

      {/* Hero Section */}
      <section className="relative h-[690px] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=550&width=1600"
            alt="Healthcare Professionals"
            fill
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

      {/* Telehealth Services (formerly Specialty care services) */}
      <section className="gradient-blue py-16 text-white relative section-enhanced">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-start">
              {/* Left side content */}
              <div className="lg:w-[26%] mb-10 lg:mb-0 lg:pr-4 lg:ml-16 fade-in">
                <h2 className="text-4xl font-bold mb-4">Telehealth Services</h2>
                <div className="w-full h-1 bg-[#ffde00] mb-6"></div>
                <p className="mb-8 text-base leading-relaxed">
                  Our telehealth services bring expert care directly to you. From virtual consultations to remote monitoring and follow-up appointments, we offer a full range of healthcare solutions tailored to your needs, all accessible from the comfort of home.
                </p>
                <a
                  href="#"
                  className="inline-block btn-glossy btn-glossy-yellow px-8 py-3 text-base text-[#002d72] font-medium"
                >
                  View All Healthcare Services
                </a>
              </div>

              {/* Right side cards */}
              <div className="lg:w-[74%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="bg-white text-[#002d72] rounded-lg overflow-hidden card-glossy slide-in-right delay-100">
                  <div className="h-48 relative img-glossy">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Primary Care"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Primary Care</h3>
                    <p className="text-gray-700 mb-4">
                      Comprehensive care for your everyday health needs, now available through virtual visits.
                    </p>
                    <a href="#" className="text-[#002d72] font-medium flex items-center hover-lift">
                      Learn More <ChevronRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white text-[#002d72] rounded-lg overflow-hidden card-glossy slide-in-right delay-200">
                  <div className="h-48 relative img-glossy">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Urgent Care"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Urgent Care</h3>
                    <p className="text-gray-700 mb-4">
                      Quick care for non-emergency conditions through our virtual urgent care service.
                    </p>
                    <a href="#" className="text-[#002d72] font-medium flex items-center hover-lift">
                      Learn More <ChevronRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white text-[#002d72] rounded-lg overflow-hidden card-glossy slide-in-right delay-300">
                  <div className="h-48 relative img-glossy">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Specialty Care"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Specialty Care</h3>
                    <p className="text-gray-700 mb-4">
                      Expert care for specific conditions from the comfort of your home.
                    </p>
                    <a href="#" className="text-[#002d72] font-medium flex items-center hover-lift">
                      Learn More <ChevronRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Find a Doctor Section */}
      <section className="py-16 bg-white section-enhanced">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 fade-in">
              <h2 className="text-4xl font-bold text-[#002d72] mb-4">Find a Doctor</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Connect with our experienced healthcare providers who are ready to help you through virtual consultations.
              </p>
            </div>

            <div className="bg-gray-100 rounded-xl p-8 shadow-lg slide-up">
              <div className="flex flex-col md:flex-row md:items-end gap-4">
                <div className="flex-1">
                  <label className="block text-gray-700 text-sm font-medium mb-2">Specialty</label>
                  <select className="w-full p-3 border border-gray-300 rounded-md hover-glow">
                    <option>All Specialties</option>
                    <option>Primary Care</option>
                    <option>Cardiology</option>
                    <option>Dermatology</option>
                    <option>Neurology</option>
                  </select>
                </div>
                <div className="flex-1">
                  <label className="block text-gray-700 text-sm font-medium mb-2">Location</label>
                  <select className="w-full p-3 border border-gray-300 rounded-md hover-glow">
                    <option>All Locations</option>
                    <option>Virtual Visit</option>
                    <option>Main Clinic</option>
                    <option>Downtown Office</option>
                  </select>
                </div>
                <div className="flex-1">
                  <label className="block text-gray-700 text-sm font-medium mb-2">Insurance</label>
                  <select className="w-full p-3 border border-gray-300 rounded-md hover-glow">
                    <option>All Insurance Plans</option>
                    <option>Aetna</option>
                    <option>Blue Cross</option>
                    <option>Cigna</option>
                    <option>UnitedHealthcare</option>
                  </select>
                </div>
                <button className="btn-glossy btn-glossy-blue py-3 px-6 rounded-md">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Convenient care for patients section */}
      <section className="py-16 bg-gray-50 section-enhanced">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            {/* Left side image */}
            <div className="md:w-1/2 mb-8 md:mb-0 slide-in-left">
              <div className="img-glossy rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Patient using healthcare app"
                  width={800}
                  height={600}
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right side content */}
            <div className="md:w-1/2 md:pl-12 slide-in-right">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Convenient care for patients</h2>
       <response clipped><NOTE>To save on context only part of this file has been shown to you. You should retry this tool after you have searched inside the file with `grep -n` in order to find the line numbers of what you are looking for.</NOTE>
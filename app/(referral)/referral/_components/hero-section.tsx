import ReferralModal from "@/components/global/Modal";
import Image from "next/image";
import React, { useState } from "react";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <section className="container mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 relative">
            <Image
              src={"/assets/hero-img.png"}
              alt="hero image"
              width={1500}
              height={1500}
              quality={100}
            />
          </div>

          <div className="w-full md:w-1/2 md:pl-8">
            <div className="bg-white rounded-xl shadow-2xl p-8 shadow-blue-400  md:p-10 transform hover:scale-105 transition duration-300 ease-in-out relative overflow-hidden">
              <div className="relative z-10">
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                  Give and Get{" "}
                  <span className="text-blue-600 relative inline-block">
                    Accredian
                    <svg
                      className="absolute -bottom-1 left-0 w-full"
                      height="5"
                      viewBox="0 0 100 5"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0,2.5 Q25,5 50,2.5 T100,2.5"
                        fill="none"
                        stroke="#3B82F6"
                        strokeWidth="3"
                      />
                    </svg>
                  </span>
                  <br />
                  for Rs 1500
                </h1>
                <p className="text-lg mb-6 text-gray-700">
                  Invite a friend and earn unlimited access to 7,000+ courses
                </p>
                <p className="text-md mb-8 text-gray-600">
                  Expand your skills and boost your career with our extensive
                  library of courses. Learn from industry experts and gain
                  certifications that matter.
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 mr-2 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      ></path>
                    </svg>
                    Access to top-quality courses
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 mr-2 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      ></path>
                    </svg>
                    Learn at your own pace
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 mr-2 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      ></path>
                    </svg>
                    Earn valuable certificates
                  </li>
                </ul>
                <button
                  className="w-full bg-blue-600 text-white px-6 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg"
                  onClick={openModal}
                >
                  Refer Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ReferralModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default HeroSection;

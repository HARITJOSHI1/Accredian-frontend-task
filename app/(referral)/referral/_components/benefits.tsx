import ReferralModal from "@/components/global/Modal";
import React, { useState } from "react";

interface Program {
  name: string;
  referrerBonus: string;
  refereeBonus: string;
}

const programs: Program[] = [
  {
    name: "Professional Certificate Program in Product Management",
    referrerBonus: "₹ 7,000",
    refereeBonus: "₹ 9,000",
  },
  {
    name: "PG Certificate Program in Strategic Product Management",
    referrerBonus: "₹ 9,000",
    refereeBonus: "₹ 11,000",
  },
  {
    name: "Executive Program in Data Driven Product Management",
    referrerBonus: "₹ 10,000",
    refereeBonus: "₹ 10,000",
  },
  {
    name: "Executive Program in Product Management and Digital Transformation",
    referrerBonus: "₹ 10,000",
    refereeBonus: "₹ 10,000",
  },
  {
    name: "Executive Program in Product Management",
    referrerBonus: "₹ 10,000",
    refereeBonus: "₹ 10,000",
  },
  {
    name: "Advanced Certification in Product Management",
    referrerBonus: "₹ 10,000",
    refereeBonus: "₹ 10,000",
  },
  {
    name: "Executive Program in Product Management and Project Management",
    referrerBonus: "₹ 10,000",
    refereeBonus: "₹ 10,000",
  },
];

const TableSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            What Are The{" "}
            <span className="text-blue-600 relative inline-block">
              Referral Benefits
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
                  strokeWidth="4"
                />
              </svg>
            </span>
          </h2>
          <div className="flex flex-col md:flex-row">
            <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6 md:mb-0 md:mr-4 w-full md:w-1/3">
              <div className="bg-blue-600 text-white p-4">
                <h3 className="text-lg font-semibold">Programs</h3>
              </div>
              <div className="p-4">
                <ul>
                  {programs.map((program, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center py-2 border-b"
                    >
                      <span className="text-gray-800">{program.name}</span>
                      <svg
                        className="w-2 h-2 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="12" cy="12" r="2" />
                      </svg>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex-grow bg-white shadow-md rounded-lg overflow-hidden h-[50vh]">
              <div className="overflow-x-auto h-[50vh]">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-blue-600">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                      >
                        Programs
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                      >
                        Referrer Bonus
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                      >
                        Referee Bonus
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {programs.map((program, index) => (
                      <tr
                        key={index}
                        className="hover:bg-gray-100 transition duration-150 ease-in-out"
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {program.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {program.referrerBonus}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {program.refereeBonus}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <button className="w-full md:w-[30%] bg-blue-600 text-white px-6 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg" onClick={openModal}>
              Refer Now
            </button>
          </div>
        </div>
      </section>

      <ReferralModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default TableSection;

import React from "react";

const Timeline = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          How to Refer a{" "}
          <span className="text-blue-600 relative inline-block">
            candidate
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
        <div className="relative flex flex-col md:flex-row justify-center items-center">
          <div className="space-y-20 md:space-y-0 md:space-x-20 flex flex-col md:flex-row items-center">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center mb-4 animate-bounce">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                Share Your Referral Link
              </h3>
              <p className="text-gray-600">
                Send your unique referral link to friends or colleagues
                interested in learning.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center mb-4 animate-bounce">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                Friend Signs Up
              </h3>
              <p className="text-gray-600">
                Your referred friend creates an account using your referral
                link.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center mb-4 animate-bounce">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                Earn Rewards
              </h3>
              <p className="text-gray-600">
                Both you and your friend receive rewards once they complete
                their first course.
              </p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(-25%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }
        .animate-bounce {
          animation: bounce 1s infinite;
        }
      `}</style>
    </section>
  );
};

export default Timeline;

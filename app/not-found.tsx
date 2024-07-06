import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <Head>
        <title>404 - Page Not Found</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-lg w-full space-y-8 text-center">
        <div>
          <h1 className="text-9xl font-extrabold text-blue-600 animate-pulse">
            404
          </h1>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Oops! Page Not Found
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        <div className="mt-8">
          <Link href="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
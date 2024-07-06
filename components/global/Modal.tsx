import React, { useState, useRef, useEffect } from 'react';

interface ReferralModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReferralModal: React.FC<ReferralModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted:', { email, name });
    setIsSubmitted(true);
    setEmail('');
    setName('');
    setTimeout(() => {
      closeModal();
    }, 3000);
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
      setIsSubmitted(false);
    }, 300); // Match this duration with the CSS transition duration
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen && !isClosing) return null;

  return (
    <div className={`fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex items-center justify-center backdrop-blur-sm transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}>
      <div 
        ref={modalRef} 
        className={`relative bg-white rounded-lg shadow-xl p-8 m-4 max-w-xl w-full transition-all duration-300 ${
          isClosing ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        } ${isOpen && !isClosing ? 'animate-modalOpen' : ''}`}
      >
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Refer a Friend</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Friend's Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Friend's Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300"
          >
            Send Referral
          </button>
        </form>
        {isSubmitted && (
          <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
            <p className="text-center font-medium">Referral submitted successfully!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReferralModal;
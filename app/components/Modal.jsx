'use client';

import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Script from 'next/script';

export default function Modal({ isOpen, onClose, children, title }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleKeyPress = (e) => {
      if (e.key.toLowerCase() === 'c' && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />
      
      {/* Modal */}
      <div
        ref={modalRef}
        className="relative bg-white rounded-2xl shadow-xl mx-4 transform transition-all flex flex-col items-center justify-center"
        style={{ width: '550px', height: '550px', maxWidth: '95vw', maxHeight: '90vh' }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header */}
        <div className="flex items-center justify-center w-full border-b border-gray-200" style={{ minHeight: 40, padding: '20px 10px' }}>
          <h2 id="modal-title" className="text-[1rem] md:text-[1.25rem] font-bold leading-tight text-[#222] text-center w-full">
            Let's talk <span className="text-blue-500">strategy and next steps</span>, no charge.
          </h2>
          <button
            onClick={onClose}
            className="absolute right-4 text-gray-400 hover:text-gray-500 focus:outline-none"
            aria-label="Close modal"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 w-full flex flex-col items-center justify-center" style={{ minHeight: 0 }}>
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/brady-clutch/30-minute-chat?hide_event_type_details=1&hide_gdpr_banner=1"
            style={{ width: '100%', height: '470px', maxWidth: '100%' }}
          />
          <Script
            src="https://assets.calendly.com/assets/external/widget.js"
            strategy="lazyOnload"
          />
        </div>
      </div>
    </div>,
    document.body
  );
} 
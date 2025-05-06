'use client';

import { useState } from 'react';
import Modal from './Modal';

export default function CalendlyLink({ children, className = '' }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <>
      <a 
        href="#" 
        onClick={handleClick}
        className={className}
      >
        {children}
      </a>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Schedule a Meeting"
      />
    </>
  );
} 
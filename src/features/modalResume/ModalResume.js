import React, { useState } from 'react';
import NewsletterModal from './components/NewsletterModal/NewsletterModal';

const ModalResume = () => {
    const [isNewsletterModalOpen, setNewsletterModalOpen] = useState(false);
    const [newsletterFormData, setNewsletterFormData] = useState(null);
  
    const handleOpenNewsletterModal = () => {
      setNewsletterModalOpen(true);
    };
  
    const handleCloseNewsletterModal = () => {
      setNewsletterModalOpen(false);
    };
  
    const handleFormSubmit = (data) => {
      setNewsletterFormData(data);
      handleCloseNewsletterModal();
    };
  
    return (
      <>
        <div style={{ display: 'flex', gap: '1em' }}>
          <button onClick={handleOpenNewsletterModal}>
            Open Newsletter Form (Modal)
          </button>
        </div>
  
        {newsletterFormData && newsletterFormData.email && (
          <div className="msg-box">
            <b>{newsletterFormData.email}</b> requested a{' '}
            <b>{newsletterFormData.digestType}</b> newsletter.
          </div>
        )}
  
        <NewsletterModal
          isOpen={isNewsletterModalOpen}
          onSubmit={handleFormSubmit}
          onClose={handleCloseNewsletterModal}
        />
      </>
    );
  };
  
  export default ModalResume;
  
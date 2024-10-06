import React, { useState, useEffect } from 'react';

export default function Footer() {
  const [cookieConsent, setCookieConsent] = useState(true);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent === null) {
      setCookieConsent(false);
    }
  }, []);

  const handleAccept = () => {
    setCookieConsent(true);
    localStorage.setItem('cookieConsent', 'true');
  };

  return (
    <footer style={{
      marginTop: '120%',
      backgroundColor: 'transparent',
      color: 'white',
      padding: '0rem',
      width: '100%',
      boxSizing: 'border-box',
      bottom: 0,
      left: 0,
      right: 0
    }}>
      
      {!cookieConsent && (
        <div style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          color: 'white',
          padding: '1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <p style={{ margin: 0, flex: 1 }}>
            We use cookies to improve your experience on our site. By continuing to use our site, you agree to our use of cookies.
          </p>
          <button 
            onClick={handleAccept}
            style={{
              backgroundColor: '#8c52ff',
              color: 'white',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              cursor: 'pointer',
              marginLeft: '1rem'
            }}
          >
            Accept
          </button>
        </div>
      )}
    </footer>
  );
}

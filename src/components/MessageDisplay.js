import React, { useState, useEffect } from 'react';
import { Card, Typography, Box } from '@mui/material';
import { useAtom } from 'jotai';
import { userLoggedIn, userObject } from '../state';

const messages = [
   {
   type: 'Withdrawal',
    message: '2547XX***782 has withdrawn Ksh 12,500. New balance: Ksh 500. Ref: TX12500EF.',
    color: 'warning'
  },
  {
    type: 'Disbursement',
    message: 'Ksh 12,500 has been successfully sent to 2547XX***901. Ref: TX12500EF. Fee: Ksh 25.',
    color: 'success'
  },
  {
    type: 'Withdrawal',
    message: '2547XX***782 has withdrawn Ksh 4,500. New balance: Ksh 180. Ref: TX7824AB.',
    color: 'warning'
  },
  {
    type: 'Disbursement',
    message: 'Ksh 4,500 has been successfully sent to 2547XX***901. Ref: TX7824AB. Fee: Ksh 25.',
    color: 'success'
  },
  {
    type: 'Withdrawal',
    message: '2547XX***782 has withdrawn Ksh 8,000. New balance: Ksh 320. Ref: TX8000AB.',
    color: 'warning'
  },
  {
    type: 'Disbursement',
    message: 'Ksh 8,000 has been successfully sent to 2547XX***901. Ref: TX8000AB. Fee: Ksh 25.',
    color: 'success'
  },
  {
    type: 'Withdrawal',
    message: '2547XX***345 has withdrawn Ksh 3,000. New balance: Ksh 220. Ref: TX3456CD.',
    color: 'warning'
  },
  {
    type: 'Disbursement',
    message: 'Ksh 3,000 has been successfully sent to 2547XX***678. Ref: TX3456CD. Fee: Ksh 15.',
    color: 'success'
  },
  {
    type: 'Withdrawal',
    message: '2547XX***901 has withdrawn Ksh 2,500. New balance: Ksh 130. Ref: TX9018EF.',
    color: 'warning'
  },
  {
    type: 'Disbursement',
    message: 'Ksh 2,500 has been successfully sent to 2547XX***234. Ref: TX9018EF. Fee: Ksh 20.',
    color: 'success'
  },
  {
    type: 'Withdrawal',
    message: '2547XX***567 has withdrawn Ksh 2,000. New balance: Ksh 250. Ref: TX5670GH.',
    color: 'warning'
  },
  {
    type: 'Disbursement',
    message: 'Ksh 2,000 has been successfully sent to 2547XX***890. Ref: TX5670GH. Fee: Ksh 10.',
    color: 'success'
  },
  {
    type: 'Withdrawal',
    message: '2547XX***123 has withdrawn Ksh 4,500. New balance: Ksh 150. Ref: TX1232IJ.',
    color: 'warning'
  },
  {
    type: 'Disbursement',
    message: 'Ksh 4,500 has been successfully sent to 2547XX***456. Ref: TX1232IJ. Fee: Ksh 25.',
    color: 'success'
  },
  {
    type: 'Withdrawal',
    message: '2547XX***789 has withdrawn Ksh 3,000. New balance: Ksh 190. Ref: TX7894KL.',
    color: 'warning'
  },
  {
    type: 'Disbursement',
    message: 'Ksh 3,000 has been successfully sent to 2547XX***012. Ref: TX7894KL. Fee: Ksh 15.',
    color: 'success'
  },
  {
    type: 'Withdrawal',
    message: '2547XX***234 has withdrawn Ksh 2,500. New balance: Ksh 210. Ref: TX2346MN.',
    color: 'warning'
  },
  {
    type: 'Disbursement',
    message: 'Ksh 2,500 has been successfully sent to 2547XX***567. Ref: TX2346MN. Fee: Ksh 20.',
    color: 'success'
  },
  {
    type: 'Withdrawal',
    message: '2547XX***890 has withdrawn Ksh 2,000. New balance: Ksh 120. Ref: TX8908OP.',
    color: 'warning'
  },
  {
    type: 'Disbursement',
    message: 'Ksh 2,000 has been successfully sent to 2547XX***123. Ref: TX8908OP. Fee: Ksh 10.',
    color: 'success'
  },
  {
    type: 'Withdrawal',
    message: '2547XX***456 has withdrawn Ksh 4,500. New balance: Ksh 240. Ref: TX4560QR.',
    color: 'warning'
  },
  {
    type: 'Disbursement',
    message: 'Ksh 4,500 has been successfully sent to 2547XX***789. Ref: TX4560QR. Fee: Ksh 25.',
    color: 'success'
  },
  {
    type: 'Withdrawal',
    message: '2547XX***782 has withdrawn Ksh 10,000. New balance: Ksh 400. Ref: TX10000CD.',
    color: 'warning'
  },
  {
    type: 'Disbursement',
    message: 'Ksh 10,000 has been successfully sent to 2547XX***901. Ref: TX10000CD. Fee: Ksh 25.',
    "color": 'success'
  },
  {
    type: 'Withdrawal',
    message: '2547XX***782 has withdrawn Ksh 15,000. New balance: Ksh 600. Ref: TX15000GH.',
    color: 'warning'
  },
  {
    type: 'Disbursement',
    message: 'Ksh 15,000 has been successfully sent to 2547XX***901. Ref: TX15000GH. Fee: Ksh 25.',
    color: 'success'
  },

  {
    type: 'Withdrawal',
    message: '2547XX***012 has withdrawn Ksh 3,000. New balance: Ksh 170. Ref: TX0122ST.',
    color: 'warning'
  },
  {
    type: 'Disbursement',
    message: 'Ksh 3,000 has been successfully sent to 2547XX***345. Ref: TX0122ST. Fee: Ksh 15.',
    color: 'success'
  }
];

export default function MessageDisplay() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [loggedIn] = useAtom(userLoggedIn);
  const [user] = useAtom(userObject);

  useEffect(() => {
    let timeoutId;

    const checkPathAndShowMessages = () => {
      const currentPath = window.location.pathname;

      // Show only on home, account, and referrals pages
      const allowedPaths = ['/home', '/account', '/referrals'];
      const isAllowedPage = allowedPaths.includes(currentPath);

      if (!isAllowedPage || !loggedIn) {
        setIsVisible(false);
        return;
      }

      const showNextMessage = () => {
        // Show message
        setIsVisible(true);
        setIsFading(false);
        
        // After 3 seconds, start fade
        timeoutId = setTimeout(() => {
          setIsFading(true);
          
          // After 0.5 seconds fade, hide message
          timeoutId = setTimeout(() => {
            setIsVisible(false);
            
            // After 7 seconds delay, show next message
            timeoutId = setTimeout(() => {
              setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
              showNextMessage();
            }, 7000);
          }, 500);
        }, 3000);
      };

      // Start first message after 1 second
      timeoutId = setTimeout(showNextMessage, 1000);
    };

    // Check path on mount
    checkPathAndShowMessages();

    // Listen for route changes
    const handleRouteChange = () => {
      if (timeoutId) clearTimeout(timeoutId);
      checkPathAndShowMessages();
    };

    window.addEventListener('popstate', handleRouteChange);
    
    // Also check on pushState/replaceState
    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;
    
    window.history.pushState = function(...args) {
      originalPushState.apply(this, args);
      handleRouteChange();
    };
    
    window.history.replaceState = function(...args) {
      originalReplaceState.apply(this, args);
      handleRouteChange();
    };

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      window.removeEventListener('popstate', handleRouteChange);
      window.history.pushState = originalPushState;
      window.history.replaceState = originalReplaceState;
    };
  }, [user]);

  const currentMessage = messages[currentIndex];

  if (!loggedIn) return null;

  return (
    <Box sx={{ 
      position: 'fixed',
      top: '70px',
      right: '20px',
      width: '250px',
      zIndex: 1000,
      pointerEvents: 'none'
    }}>
      <Card 
        variant="outlined"
        sx={{ 
          transition: 'opacity 0.5s ease-in-out',
          opacity: isVisible && !isFading ? 1 : 0,
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          borderRadius: '8px',
          backgroundColor: 'background.paper',
          borderColor: currentMessage.color === 'warning' ? '#ff9800' : '#4caf50',
          p: 1
        }}
      >
        <Typography variant="body2" fontWeight="bold" sx={{ mb: 0.5, color: 'text.primary', fontSize: '0.75rem' }}>
          {currentMessage.type}
        </Typography>
        <Typography variant="caption" sx={{ color: 'text.secondary', lineHeight: 1.3, fontSize: '0.65rem' }}>
          {currentMessage.message}
        </Typography>
      </Card>
    </Box>
  );
}

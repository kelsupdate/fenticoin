import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Modal,
  Box,
  Button,
  Typography,
  Paper,
  ClickAwayListener
} from '@mui/material';
import logo from '../assets/logo.png';

const LogoIcon = ({ size = 80 }) => (
  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
    <img src={logo} alt="App Logo" width={size} height={size} />
  </Box>
);

export default function InstallPromptWrapper({ children }) {
  const location = useLocation();
  const [installPromptEvent, setInstallPromptEvent] = useState(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [pendingAction, setPendingAction] = useState(null);
  const appRef = useRef(null);

  // Check if app is installed and listen for install prompt
  useEffect(() => {
    // Check if the app is running in standalone mode (installed)
    setIsInstalled(window.matchMedia('(display-mode: standalone)').matches);

    // Listen for beforeinstallprompt event
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setInstallPromptEvent(e);
      // Show prompt immediately if not installed
      if (!isInstalled) {
        setShowInstallPrompt(true);
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Listen for appinstalled event
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setInstallPromptEvent(null);
      setShowInstallPrompt(false);
    };

    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, [isInstalled]);

  // Handle clicks on login/register buttons
  const handleClick = (e) => {
    if (location.pathname === '/' && !isInstalled && installPromptEvent) {
      const text = e.target.innerText || e.target.textContent || '';
      if (text.toLowerCase().includes('login') || text.toLowerCase().includes('register') || text.toLowerCase().includes('signup')) {
        e.preventDefault();
        e.stopPropagation();
        setPendingAction(e.target);
        setShowInstallPrompt(true);
      }
    }
  };

  // Add click event listeners to interactive elements on welcome page
  useEffect(() => {
    if (location.pathname !== '/' || isInstalled || !installPromptEvent || !appRef.current) return;

    const interactiveElements = appRef.current.querySelectorAll(
      'a, button, [role="button"], input[type="submit"], input[type="button"], .clickable'
    );

    interactiveElements.forEach(element => {
      element.addEventListener('click', handleClick, true);
    });

    return () => {
      interactiveElements.forEach(element => {
        element.removeEventListener('click', handleClick, true);
      });
    };
  }, [location.pathname, isInstalled, installPromptEvent]);

  const handleInstall = async () => {
    if (installPromptEvent) {
      installPromptEvent.prompt();
      const choiceResult = await installPromptEvent.userChoice;

      if (choiceResult.outcome === 'accepted') {
        setIsInstalled(true);
      }

      setInstallPromptEvent(null);
      setShowInstallPrompt(false);

      // Execute the pending action after installation
      if (pendingAction) {
        setTimeout(() => {
          pendingAction.click();
        }, 1000);
      }
    }
  };

  const handleSkipInstall = () => {
    setShowInstallPrompt(false);

    // Execute the pending action without installation
    if (pendingAction) {
      setTimeout(() => {
        pendingAction.click();
      }, 100);
    }
  };

  return (
    <>
      <div ref={appRef} style={{ width: '100%', height: '100%' }}>
        {children}
      </div>

      {/* Install Prompt Modal */}
      <Modal
        open={showInstallPrompt}
        onClose={handleSkipInstall}
        aria-labelledby="install-modal-title"
        aria-describedby="install-modal-description"
        closeAfterTransition
      >
        <ClickAwayListener onClickAway={handleSkipInstall}>
          <Paper
            elevation={6}
            sx={{
              p: 4,
              borderRadius: 3,
              maxWidth: 400,
              width: '90%',
              mx: 'auto',
              mt: '10vh',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
              outline: 'none',
              color: 'white'
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white', mb: 2, textAlign: 'center' }}>
              Fenticoin Survey App
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', my: 3 }}>
              <LogoIcon />
            </Box>

            <Typography variant="body1" sx={{ color: 'white', mb: 1, textAlign: 'center' }}>
              Get the best experience by installing our app:
            </Typography>

            <Box sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              p: 2,
              borderRadius: 2,
              mb: 3
            }}>
              <Typography variant="body2" sx={{ color: 'white', display: 'flex', alignItems: 'center', mb: 1 }}>
                <Box component="span" sx={{ mr: 1, fontWeight: 'bold', color: '#10b981' }}>✓</Box> Faster loading times
              </Typography>
              <Typography variant="body2" sx={{ color: 'white', display: 'flex', alignItems: 'center', mb: 1 }}>
                <Box component="span" sx={{ mr: 1, fontWeight: 'bold', color: '#10b981' }}>✓</Box> Offline access to surveys
              </Typography>
              <Typography variant="body2" sx={{ color: 'white', display: 'flex', alignItems: 'center' }}>
                <Box component="span" sx={{ mr: 1, fontWeight: 'bold', color: '#10b981' }}>✓</Box> App icon on your home screen
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexDirection: { xs: 'column', sm: 'row' } }}>
              <Button
                onClick={handleSkipInstall}
                variant="outlined"
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  fontWeight: 'bold',
                  '&:hover': {
                    borderColor: '#71717a',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)'
                  }
                }}
              >
                Continue in Browser
              </Button>
              <Button
                onClick={handleInstall}
                variant="contained"
                sx={{
                  background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 50%, #2563eb 100%)',
                  color: 'white',
                  fontWeight: 'bold',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 50%, #1d4ed8 100%)'
                  }
                }}
              >
                Install App
              </Button>
            </Box>
          </Paper>
        </ClickAwayListener>
      </Modal>
    </>
  );
}

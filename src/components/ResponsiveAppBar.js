import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';
import logo from '../logo.png';
import GetAppIcon from '@mui/icons-material/GetApp';
const pages = ['Home', 'Account', 'Referrals'];

function ResponsiveAppBar() {
  const navigate = useNavigate()
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [activePage, setActivePage] = useState(null);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallButton, setShowInstallButton] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallButton(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
        setDeferredPrompt(null);
        setShowInstallButton(false);
      });
    }
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenMenu = (page) => {
    setActivePage(page);
    if (page === "Home") {
      navigate('/home')
    }
    if (page === "Account") {
      navigate('/account')
    }
    if (page === "Referrals") {
      navigate('/referrals')
    }
  }

  return (
    <AppBar position="sticky" sx={{ borderBottomLeftRadius: '16px', borderBottomRightRadius: '16px', overflow: 'hidden', top: 0, left: 0, right: 0, width: '100%' }}>
      <Container maxWidth="lg" disableGutters style={{
        background: '#228b22',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        borderBottomLeftRadius: '16px',
        borderBottomRightRadius: '16px',
      }}>
        <Toolbar disableGutters sx={{ maxWidth: '100%' }}>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', maxWidth: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                component="img"
                sx={{
                  height: { xs: 40, md: 80 },
                  width: { xs: 40, md: 80 },
                  borderRadius: '50%',
                  mr: { xs: 1, md: 1 },
                  display: 'block'
                }}
                alt=""
                src={logo}
              />
              <Typography
                variant="h6"
                component="span"
                sx={{
                  fontFamily: "'Montserrat', 'Roboto', 'Arial', sans-serif",
                  fontWeight: 'bold',
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  color: '#edeef1ff',
                  display: 'inline-block',
                  mt: { xs: 0.2, md: 0.4 }
                }}
              >
                Fenticoin Survey
              </Typography>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, justifyContent: 'space-around', ml: { xs: 1, md: 3 }, maxWidth: '100vw' }}>
              {pages.map((page) => {
                if (page === 'Referrals') {
                  return (
                    <Button
                      key={page}
                      onClick={() => handleOpenMenu(page)}
                      sx={{
                        my: { xs: 1, md: 2 },
                        color: '#228b22',
                        backgroundColor: 'white',
                        display: 'block',
                        textShadow: 'none',
                        fontSize: { xs: '1rem', md: '1.25rem' },
                        fontFamily: "'Arial', 'Helvetica', sans-serif",
                        px: { xs: 1, md: 2 },
                        '&:hover': {
                          backgroundColor: '#10b981',
                          color: 'white',
                          textShadow: 'none',
                        },
                        borderRadius: '50px',
                        border: '2px solid #228b22',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                      }}
                    >
                      {page}
                    </Button>
                  );
                }
                return (
                  <Button
                    key={page}
                    onClick={() => handleOpenMenu(page)}
                    sx={{
                      my: { xs: 1, md: 2 },
                      color: '#228b22',
                      backgroundColor: 'white',
                      display: 'block',
                      textShadow: 'none',
                      fontSize: { xs: '1rem', md: '1.25rem' },
                      fontFamily: "'Arial', 'Helvetica', sans-serif",
                      px: { xs: 1, md: 2 },
                      '&:hover': {
                        backgroundColor: '#10b981',
                        color: 'white',
                        textShadow: 'none',
                      },
                      borderRadius: '50px',
                      border: '2px solid #228b22',
                    }}
                  >
                    {page}
                  </Button>
                );
              })}
              {showInstallButton && (
                <Button
                  onClick={handleInstallClick}
                  startIcon={<GetAppIcon />}
                  sx={{
                    my: { xs: 1, md: 2 },
                    color: 'white',
                    backgroundColor: '#ff9800',
                    display: 'block',
                    textShadow: 'none',
                    fontSize: { xs: '1rem', md: '1.25rem' },
                    fontFamily: "'Arial', 'Helvetica', sans-serif",
                    px: { xs: 1, md: 2 },
                    '&:hover': {
                      backgroundColor: '#f57c00',
                      color: 'white',
                      textShadow: 'none',
                    },
                    borderRadius: '50px',
                  }}
                >
                  Install App
                </Button>
              )}
            </Box>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleOpenMenu(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
              {showInstallButton && (
                <MenuItem onClick={handleInstallClick}>
                  <Typography textAlign="center" sx={{ display: 'flex', alignItems: 'center' }}>
                    <GetAppIcon sx={{ mr: 1 }} />
                    Install App
                  </Typography>
                </MenuItem>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;

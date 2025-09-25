import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, Container, Grid, Card, CardContent, Avatar, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PeopleIcon from '@mui/icons-material/People';
import SpeedIcon from '@mui/icons-material/Speed';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';
import GetAppIcon from '@mui/icons-material/GetApp';

const WelcomeNew = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <AttachMoneyIcon sx={{ fontSize: 40, color: '#228b22' }} />,
      title: 'High Paying Surveys',
      description: 'Earn $5-50 per survey - highest rates in the industry'
    },
    {
      icon: <PeopleIcon sx={{ fontSize: 40, color: '#228b22' }} />,
      title: '25% Referral Commission',
      description: 'Earn lifetime commissions from your referrals'
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 40, color: '#228b22' }} />,
      title: 'Instant Payouts',
      description: 'Get paid within 2-24 hours - no waiting'
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 40, color: '#228b22' }} />,
      title: 'No Minimum Threshold',
      description: 'Withdraw any amount, anytime'
    },
    {
      icon: <CheckCircleIcon sx={{ fontSize: 40, color: '#228b22' }} />,
      title: '100% Legitimate',
      description: 'Trusted by 50,000+ users worldwide'
    },
    {
      icon: <StarIcon sx={{ fontSize: 40, color: '#228b22' }} />,
      title: '4.9★ Rating',
      description: 'Rated excellent by our community'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Mwanza.',
      earnings: 'Kes 2,000',
      avatar: '👩‍💼',
      text: 'Fenticoin Survey changed my life! I earn 2000+ weekly just by sharing my opinions.'
    },
    {
      name: 'John Kinyua.',
      earnings: 'Kes 4,500',
      avatar: '👨‍💻',
      text: 'I’m so glad I found this site! The extra income has helped me pay my bills.'
    },
    {
      name: 'Maria Lemayan.',
      earnings: 'Kes 3,000',
      avatar: '👩‍🎓',
      text: 'As a student, this is perfect. I work whenever I want and get paid instantly.'
    }
  ];

  return (
    <Box sx={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f0fff0 0%, #e0f7e0 100%)',
      color: '#006400'
    }}>
      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h1" sx={{
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            fontWeight: 'bold',
            color: '#006400',
            mb: 2
          }}>
            Start Earning with Fenticoin Survey
          </Typography>
          <Typography variant="h4" sx={{
            fontSize: { xs: '1.2rem', md: '1.5rem' },
            color: '#228b22',
            mb: 4
          }}>
            Join 50,000+ users earning real money daily
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', mb: 4 }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/register')}
              sx={{
                backgroundColor: '#228b22',
                color: 'white',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: '#32cd32'
                }
              }}
            >
              Start Earning Now
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => navigate('/login')}
              sx={{
                borderColor: '#228b22',
                color: '#228b22',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 'bold',
                '&:hover': {
                  borderColor: '#32cd32',
                  backgroundColor: 'rgba(34, 139, 34, 0.1)'
                }
              }}
            >
              Already a Member? Login
            </Button>
          </Box>

          <Typography variant="body1" sx={{ color: '#666', fontSize: '1.1rem' }}>
            ✅ Free to join • ✅ Instant payouts • ✅ No experience needed
          </Typography>
        </Box>

        {/* Stats Section */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: { xs: 2, md: 4 }, mb: 8, flexWrap: 'wrap' }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h3" sx={{ color: '#228b22', fontWeight: 'bold' }}>50K+</Typography>
            <Typography variant="body1" sx={{ color: '#666' }}>Active Users</Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h3" sx={{ color: '#228b22', fontWeight: 'bold' }}>$2M+</Typography>
            <Typography variant="body1" sx={{ color: '#666' }}>Total Payouts</Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h3" sx={{ color: '#228b22', fontWeight: 'bold' }}>4.9★</Typography>
            <Typography variant="body1" sx={{ color: '#666' }}>User Rating</Typography>
          </Box>
        </Box>

        {/* Features Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h2" sx={{
            textAlign: 'center',
            mb: 4,
            color: '#006400',
            fontWeight: 'bold'
          }}>
            Why Choose Fenticoin Survey?
          </Typography>
          <Grid container spacing={3}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{
                  height: '100%',
                  textAlign: 'center',
                  p: 2,
                  border: '1px solid #e0e0e0',
                  '&:hover': {
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                  }
                }}>
                  <CardContent>
                    <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                    <Typography variant="h6" sx={{ mb: 1, color: '#1a7e30ff', fontWeight: 'bold' }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#666' }}>
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Testimonials Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h2" sx={{
            textAlign: 'center',
            mb: 4,
            color: '#006400',
            fontWeight: 'bold'
          }}>
            Success Stories
          </Typography>
          <Grid container spacing={3}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card sx={{
                  height: '100%',
                  p: 3,
                  border: '1px solid #e0e0e0'
                }}>
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Avatar sx={{
                      width: 60,
                      height: 60,
                      mx: 'auto',
                      mb: 2,
                      backgroundColor: '#228b22',
                      fontSize: 30
                    }}>
                      {testimonial.avatar}
                    </Avatar>
                    <Typography variant="h6" sx={{ mb: 1, color: '#006400', fontWeight: 'bold' }}>
                      {testimonial.name}
                    </Typography>
                    <Typography variant="h5" sx={{
                      color: '#228b22',
                      fontWeight: 'bold',
                      mb: 2
                    }}>
                      Earned: {testimonial.earnings}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#666', fontStyle: 'italic' }}>
                      "{testimonial.text}"
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Final CTA */}
        <Box sx={{ textAlign: 'center', py: 4 }}>
          <Typography variant="h3" sx={{
            mb: 3,
            color: '#006400',
            fontWeight: 'bold'
          }}>
            Ready to Start Earning?
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/register')}
            sx={{
              backgroundColor: '#228b22',
              color: 'white',
              px: 6,
              py: 2,
              fontSize: '1.2rem',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#32cd32'
              }
            }}
          >
            Join Now - It's Free!
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default WelcomeNew;
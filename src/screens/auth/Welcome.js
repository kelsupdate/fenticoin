import React from 'react';
import { Box, Typography, Button, Container, Grid, Card, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PeopleIcon from '@mui/icons-material/People';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AnimatedBackground from '../../components/AnimatedBackground';

const StyledContainer = styled(Container)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(4),
  position: 'relative',
  zIndex: 1,
}));

const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(4),
  margin: theme.spacing(2),
  borderRadius: '25px',
  background: 'var(--glass-bg)',
  backdropFilter: 'blur(20px)',
  border: '1px solid var(--glass-border)',
  boxShadow: 'var(--glass-shadow)',
  transition: 'all 0.3s ease-in-out',
  animation: 'pulseGlow 3s ease-in-out infinite',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 0 40px rgba(99, 102, 241, 0.4), inset 0 0 30px rgba(236, 72, 153, 0.1)',
  },
}));

const FeatureCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  borderRadius: '20px',
  background: 'var(--glass-bg)',
  backdropFilter: 'blur(15px)',
  border: '1px solid var(--glass-border)',
  boxShadow: 'var(--glass-shadow)',
  height: '100%',
  transition: 'all 0.3s ease',
  animation: 'float 6s ease-in-out infinite',
  '&:hover': {
    boxShadow: '0 8px 30px rgba(99, 102, 241, 0.3)',
    transform: 'translateY(-2px)',
    borderColor: 'rgba(236, 72, 153, 0.5)',
  },
}));

const TestimonialCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  margin: theme.spacing(1),
  borderRadius: '20px',
  background: 'var(--glass-bg)',
  backdropFilter: 'blur(15px)',
  border: '1px solid var(--glass-border)',
  boxShadow: 'var(--glass-shadow)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(99, 102, 241, 0.2)',
  },
}));

const Welcome = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <TrendingUpIcon sx={{ fontSize: 40, color: '#6366f1' }} />,
      title: 'Easy Surveys',
      description: 'Complete simple surveys in minutes and earn real cash rewards instantly.',
    },
    {
      icon: <PeopleIcon sx={{ fontSize: 40, color: '#10b981' }} />,
      title: 'Refer & Earn',
      description: 'Invite friends and earn 20% commission on their survey earnings forever.',
    },
    {
      icon: <AttachMoneyIcon sx={{ fontSize: 40, color: '#f59e0b' }} />,
      title: 'Fast Payouts',
      description: 'Withdraw your earnings directly to mobile money within 24 hours.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      role: 'Student',
      content: 'PineCoin has been amazing! I earn extra money during my free time just by completing surveys. The payouts are fast and reliable.',
      rating: 5,
    },
    {
      name: 'John K.',
      role: 'Freelancer',
      content: 'Great platform for earning side income. The referral program is fantastic - I\'ve made more from referrals than surveys!',
      rating: 5,
    },
    {
      name: 'Amina L.',
      role: 'Teacher',
      content: 'Easy to use and trustworthy. I\'ve been paid every time without issues. Highly recommend to anyone looking for extra income.',
      rating: 5,
    },
  ];

  return (
    <StyledContainer maxWidth={false}>
      {/* Hero Section */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography
          variant="h1"
          className="text-gradient"
          sx={{
            fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
            fontWeight: 700,
            mb: 2,
            animation: 'neonPulse 3s ease-in-out infinite',
          }}
        >
          Welcome to PineCoin
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: '#6b7280',
            mb: 4,
            fontSize: { xs: '1.2rem', sm: '1.5rem' },
            maxWidth: 600,
            mx: 'auto',
          }}
        >
          Earn real money by completing surveys and referring friends. Join thousands of users already earning with PineCoin.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/register')}
            className="vibrant-button"
            sx={{
              background: 'var(--gradient-primary)',
              color: 'white',
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 600,
              borderRadius: '50px',
              textTransform: 'none',
              animation: 'float 6s ease-in-out infinite',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 25px rgba(99, 102, 241, 0.6)',
              },
            }}
          >
            Get Started Free
          </Button>
          <Button
            variant="outlined"
            size="large"
            onClick={() => navigate('/login')}
            className="glass-card"
            sx={{
              borderColor: 'var(--glass-border)',
              color: '#374151',
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 600,
              borderRadius: '12px',
              textTransform: 'none',
              '&:hover': {
                borderColor: 'rgba(99, 102, 241, 0.5)',
                backgroundColor: 'rgba(99, 102, 241, 0.1)',
              },
            }}
          >
            Sign In
          </Button>
        </Box>
      </Box>

      {/* Features Section */}
      <Box sx={{ mb: 8 }}>
        <Typography
          variant="h3"
          className="text-gradient"
          sx={{
            textAlign: 'center',
            fontWeight: 700,
            mb: 4,
            fontSize: { xs: '2rem', sm: '2.5rem' },
            animation: 'neonPulse 3s ease-in-out infinite',
          }}
        >
          Why Choose PineCoin?
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <FeatureCard className="glass-card">
                <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#1f2937', mb: 1 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#6b7280' }}>
                  {feature.description}
                </Typography>
              </FeatureCard>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ mb: 8 }}>
        <Typography
          variant="h3"
          className="text-gradient"
          sx={{
            textAlign: 'center',
            fontWeight: 700,
            mb: 4,
            fontSize: { xs: '2rem', sm: '2.5rem' },
            animation: 'neonPulse 3s ease-in-out infinite',
          }}
        >
          What Our Users Say
        </Typography>
        <Grid container spacing={3}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <TestimonialCard className="glass-card">
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar sx={{ bgcolor: '#6366f1', mr: 2 }}>
                    {testimonial.name.charAt(0)}
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#1f2937' }}>
                      {testimonial.name}
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#6b7280' }}>
                      {testimonial.role}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', mb: 1 }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} sx={{ fontSize: 16, color: '#fbbf24' }} />
                  ))}
                </Box>
                <Typography variant="body2" sx={{ color: '#4b5563', fontStyle: 'italic' }}>
                  "{testimonial.content}"
                </Typography>
              </TestimonialCard>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Stats Section */}
      <StyledCard className="glass-card">
        <Grid container spacing={4} sx={{ textAlign: 'center' }}>
          <Grid item xs={12} sm={3}>
            <Typography variant="h4" sx={{ fontWeight: 700, color: '#6366f1', mb: 1 }}>
              10K+
            </Typography>
            <Typography variant="body1" sx={{ color: '#6b7280' }}>
              Active Users
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h4" sx={{ fontWeight: 700, color: '#10b981', mb: 1 }}>
              50K+
            </Typography>
            <Typography variant="body1" sx={{ color: '#6b7280' }}>
              Surveys Completed
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h4" sx={{ fontWeight: 700, color: '#f59e0b', mb: 1 }}>
              $100K+
            </Typography>
            <Typography variant="body1" sx={{ color: '#6b7280' }}>
              Total Paid Out
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h4" sx={{ fontWeight: 700, color: '#8b5cf6', mb: 1 }}>
              4.8★
            </Typography>
            <Typography variant="body1" sx={{ color: '#6b7280' }}>
              User Rating
            </Typography>
          </Grid>
        </Grid>
      </StyledCard>
    </StyledContainer>
  );
};

export default Welcome;

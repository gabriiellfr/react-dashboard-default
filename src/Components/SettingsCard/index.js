import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)({
  borderRadius: '16px',
  boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.1)',
  '&:hover': {
    boxShadow: '0px 8px 12px rgba(0, 0, 0, 0.2)',
  },
});

const Title = styled(Typography)({
  fontWeight: 600,
  fontSize: '1.125rem',
  lineHeight: 1.3,
  marginBottom: '0.75rem',
});

const Description = styled(Typography)({
  fontWeight: 400,
  fontSize: '0.875rem',
  lineHeight: 1.4,
  color: '#4F4F4F',
  marginBottom: '1rem',
});

const EditButton = styled(Button)({
  borderRadius: '8px',
  padding: '0.75rem 1.5rem',
  fontWeight: 600,
  textTransform: 'none',
  boxShadow: 'none',
  '&:hover': {
    boxShadow: 'none',
  },
});

const SettingsCard = ({ title, description }) => {
  return (
    <StyledCard>
      <CardContent>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <EditButton variant="contained" color="primary">Edit</EditButton>
      </CardContent>
    </StyledCard>
  );
};

export default SettingsCard;

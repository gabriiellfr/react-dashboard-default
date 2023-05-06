import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Grid } from '@mui/material';

const Footer = ({ copyright, backgroundColor, textColor }) => {
  return (
    <Box sx={{ backgroundColor, color: textColor, py: 2 }}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="body1" sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            {copyright}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

Footer.propTypes = {
  copyright: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
};

Footer.defaultProps = {
  backgroundColor: '#3f51b5',
  textColor: '#fff',
};

export default Footer;

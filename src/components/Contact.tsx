import React from 'react';
import { Box, Button, Typography, Stack } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <Box textAlign="center" py={6}>
        <Typography variant="h4" gutterBottom>
          Let’s Connect 🚀
        </Typography>
        <Typography variant="body1" gutterBottom>
          Feel free to reach out to me via LinkedIn or email.
        </Typography>

        <Stack 
          direction="row" 
          spacing={3} 
          justifyContent="center" 
          mt={3}
        >
          <Button
            variant="contained"
            color="primary"
            startIcon={<LinkedInIcon />}
            href="https://www.linkedin.com/in/navyamadhuri/"
            target="_blank"
          >
            LinkedIn
          </Button>

          <Button
            variant="outlined"
            color="secondary"
            startIcon={<EmailIcon />}
            href="mailto:bagireddynavyamadhuri@gmail.com"
          >
            Email Me
          </Button>
        </Stack>
      </Box>
    </section>
  );
}

export default Contact;

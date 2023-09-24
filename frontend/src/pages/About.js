import React from 'react';
import Layout from '../components/Layout';
import { Box, Typography } from '@mui/material';
import '../styles/About.css';

const About = () => {
  return (
    <Layout>
      <Box className="box-container">
        <div className="sliding-bg"></div>
        <Typography variant='h3'>NyaySathi!</Typography>
        <p>
          Welcome to NyaySathi, the ultimate solution for managing your legal cases online. Whether you are a lawyer, a paralegal, a law firm, or a legal department, LegalCase can help you streamline your workflow, save time and money, and improve your client satisfaction.
        </p>
        <p>Why NyaySathi?</p>
        <ul>
        <li>User-Friendly Interface: Our user-friendly and intuitive interface minimizes the learning curve for legal professionals and litigants. Customize the platform to 
          your preferences and navigate effortlessly.</li>
          <li>Smart Scheduling and Reminders: We know that time is of the essence. NyaySathi's intelligent scheduling system takes into account the availability of all parties involved and automatically schedules pre-trial conferences. Our automated reminders ensure that everyone is well-prepared and punctual.</li>
          <li>Time and Cost Savings: Streamlining case management can reduce delays, leading to faster case resolutions, which can be more cost-effective for both litigants and the legal system.</li>
          <li>Transparency: Improved transparency in the case management process can build trust in the legal system and ensure fair treatment for all parties involved.</li>
          <li>Remote Access: In a world increasingly reliant on remote work and technology, an e-Portal can facilitate case management even when physical presence is challenging.</li>
          <li>Data Analytics: The portal can also serve as a valuable source of data for analytics, helping policymakers make informed decisions about the legal system.</li>
          <li>Compliance with Legal Standards: NyaySathi is designed with strict adherence to legal standards and regulations. We prioritize confidentiality, data privacy, and adherence to court procedures, ensuring that our platform can be used with confidence within the legal system.</li>
          <li>Innovation: Tackling this problem statement provides an opportunity for innovative solutions that can transform the legal industry and improve the overall justice system.</li>
        </ul>
      </Box>
    </Layout>
  );
}

export default About;
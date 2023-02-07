import React from 'react';
import { Avatar, Heading, VStack } from '@chakra-ui/react';
import FullScreenSection from './FullScreenSection';

const greeting = 'Hello, I am Pete!';
const bio1 = 'A frontend developer';
const bio2 = 'specialised in React';

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <img
      style={{ width: 80, height: 80, borderRadius: 40 }}
      src="https://i.pravatar.cc/150?img=7"
    />
    <p style={{ fontSize: 14, fontWeight: 'bold', marginBottom: 30 }}>
      {greeting}
    </p>
    <p style={{ fontSize: 34, fontWeight: 'bold' }}>{bio1}</p>
    <p style={{ fontSize: 34, fontWeight: 'bold' }}>{bio2}</p>
  </FullScreenSection>
);

export default LandingSection;

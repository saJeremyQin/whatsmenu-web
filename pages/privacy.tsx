import React from 'react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        Last updated: 02-07-2023
        <br />
        This Privacy Policy describes how WhatsMenu collects, uses, and shares personal information when you use our mobile application WhatsMenu .
      </p>
      <h2 className="text-xl font-bold mb-2">Information We Collect</h2>
      <h3 className="text-lg font-bold mb-1">1.1 Personal Information:</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Address</li>
      </ul>
      <h3 className="text-lg font-bold mb-1">1.2 Usage Data:</h3>
      <ul className="list-disc list-inside mb-4">
        <li>App usage statistics</li>
        <li>Crash reports</li>
        <li>Device information (e.g., device type, operating system version)</li>
      </ul>
      {/* Continue styling the rest of the privacy policy text using similar techniques */}
    </div>
  );
};

export default PrivacyPage;

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
        <li>Email address</li>
      </ul>
      <h3 className="text-lg font-bold mb-1">1.2 Usage Data:</h3>
      <ul className="list-disc list-inside mb-4">
        <li>App usage statistics</li>
        <li>Crash reports</li>
      </ul>
      <h2 className="text-xl font-bold mb-2">How We Use Your Information</h2>
      <h3 className="text-lg font-bold mb-1">2.1 Personal Information:</h3>
      <ul className="list-disc list-inside mb-4">
        <li>To provide and maintain the App &apos;s functionality</li>
        <li>To communicate with you and respond to your inquiries</li>
        <li>To send you promotional materials, updates, and important notices</li>
      </ul>
      <h3 className="text-lg font-bold mb-1">2.2 Usage Data:</h3>
      <ul className="list-disc list-inside mb-4">
        <li>To analyze app usage and improve our services</li>
        <li>To troubleshoot technical issues</li>
        <li>To personalize your app experience</li>
        <li>Information Sharing and Disclosure</li>
      </ul>
      <h3 className="text-lg font-bold mb-1">3.1 Service Providers:</h3>
      <ul className="list-disc list-inside mb-4">
        <li>We may engage third-party companies and individuals to facilitate the App&apos;s services or 
          perform app-related activities on our behalf.</li>
      </ul>
      <h3 className="text-lg font-bold mb-1">3.2 Legal Requirements:</h3>
      <ul className="list-disc list-inside mb-4">
        <li>We may disclose your personal information if required to do so by law or in response 
          to valid requests from public authorities.</li>
      </ul>
      <h2 className="text-xl font-bold mb-2">Data Retention</h2> 
      <ul className="list-disc list-inside mb-4" style={{listStyleType:'none'}}>
        <li className='leading-normal'>We will retain your personal information only for as long as
       necessary to fulfill the purposes outlined in this Privacy Policy.</li>
      </ul>    
      <h2 className="text-xl font-bold mb-2">Your Choices</h2> 
      <ul className="list-disc list-inside mb-4" style={{listStyleType:'none'}}>
        <li>You can opt-out of receiving promotional communications by 
       following the instructions provided in the App or by contacting us directly</li>
      </ul>  
      <h2 className="text-xl font-bold mb-2">Security</h2> 
      <ul className="list-disc list-inside mb-4" style={{listStyleType:'none'}}>
        <li>We take reasonable measures to protect your personal information from 
      unauthorized access or disclosure.</li>
      </ul> 
      <h2 className="text-xl font-bold mb-2">Children&apos;s Privacy</h2> 
      <ul className="list-disc list-inside mb-4" style={{listStyleType:'none'}}>
        <li>Our App is not intended for children under the age of 13. We do not 
      knowingly collect personal information from children under 13.
      </li> 
      </ul>
      <h2 className="text-xl font-bold mb-2">Changes to This Privacy Policy</h2> 
      <ul className="list-disc list-inside mb-4" style={{listStyleType:'none'}}>
        <li>We may update our Privacy Policy from time to time. We will 
      notify you of any changes by posting the new Privacy Policy on this page.
        </li>
      </ul>
      <h2 className="text-xl font-bold mb-2">Contact Us</h2> 
      <ul className="list-disc list-inside mb-4" style={{listStyleType:'none'}}>
        <li>
        If you have any questions or concerns about this Privacy
       Policy, please contact us at mooji.dev@gmail.com. </li>
       </ul>
      
      








      
  
      {/* Continue styling the rest of the privacy policy text using similar techniques */}
    </div>
  );
};

export default PrivacyPage;

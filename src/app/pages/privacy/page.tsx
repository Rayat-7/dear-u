"use client"
import React from 'react';
import { Heart, ArrowLeft, Home } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import Link from 'next/link';

// Define policy content types
interface PolicySection {
  title: string;
  content: React.ReactNode;
}

interface PolicyData {
  title: string;
  lastUpdated: string;
  introduction: string;
  sections: PolicySection[];
}

// Policy data
const policies: Record<string, PolicyData> = {
  privacy: {
    title: "Privacy Policy",
    lastUpdated: "May 15, 2025",
    introduction: "At DearU, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service.",
    sections: [
      {
        title: "Information We Collect",
        content: (
          <div className="space-y-4">
            <p>We collect information when you register for an account, use our services, or communicate with us. This information may include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Personal identifiers such as your name, email address, and phone number</li>
              <li>Profile information including your photo, bio, and preferences</li>
              <li>Content you create, such as messages, confessions, and other communications</li>
              <li>Usage data including how you interact with our service</li>
              <li>Device information such as IP address, browser type, and operating system</li>
            </ul>
          </div>
        )
      },
      {
        title: "How We Use Your Information",
        content: (
          <div className="space-y-4">
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process and complete transactions</li>
              <li>Send you technical notices, updates, and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Develop new products and services</li>
              <li>Match you with other users based on mutual interest</li>
              <li>Protect against harmful conduct and investigate violations of our policies</li>
            </ul>
          </div>
        )
      },
      {
        title: "Sharing Your Information",
        content: (
          <div className="space-y-4">
            <p>We do not sell your personal information. We may share information in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>With other users as part of the core functionality of our service (e.g., when a mutual match occurs)</li>
              <li>With service providers who perform services on our behalf</li>
              <li>To comply with legal obligations</li>
              <li>To protect the rights, property, or safety of DearU, our users, or others</li>
              <li>In connection with a business transaction such as a merger or acquisition</li>
            </ul>
            <p>We take special care to protect the anonymity of confessions until a mutual match occurs.</p>
          </div>
        )
      },
      {
        title: "Your Choices and Rights",
        content: (
          <div className="space-y-4">
            <p>You have several rights regarding your personal information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access and update your account information at any time</li>
              <li>Request deletion of your account and personal information</li>
              <li>Opt out of marketing communications</li>
              <li>Control visibility settings for your profile</li>
              <li>Depending on your location, you may have additional rights under applicable laws</li>
            </ul>
          </div>
        )
      },
      {
        title: "Data Security",
        content: (
          <div className="space-y-4">
            <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, accidental loss, or destruction.</p>
            <p>While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee absolute security. We encourage you to use strong passwords and be cautious about sharing personal information.</p>
          </div>
        )
      },
      {
        title: "Changes to This Policy",
        content: (
          <div className="space-y-4">
            <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.</p>
            <p>We encourage you to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
          </div>
        )
      },
      {
        title: "Contact Us",
        content: (
          <div className="space-y-4">
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p className="font-medium">privacy@dearu.com</p>
          </div>
        )
      }
    ]
  },
  terms: {
    title: "Terms of Service",
    lastUpdated: "May 15, 2025",
    introduction: "Welcome to DearU. By accessing or using our service, you agree to be bound by these Terms of Service. Please read them carefully.",
    sections: [
      {
        title: "Acceptance of Terms",
        content: (
          <div className="space-y-4">
            <p>By accessing or using DearU, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this service.</p>
          </div>
        )
      },
      {
        title: "User Accounts",
        content: (
          <div className="space-y-4">
            <p>To use certain features of our service, you must create an account. You are responsible for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Providing accurate and complete information</li>
              <li>Maintaining the security of your account</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use</li>
            </ul>
            <p>We reserve the right to terminate accounts, remove content, or cancel transactions at our discretion.</p>
          </div>
        )
      },
      {
        title: "User Conduct",
        content: (
          <div className="space-y-4">
            <p>You agree not to use our service to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Harass, bully, intimidate, or harm others</li>
              <li>Post content that is hateful, threatening, or pornographic</li>
              <li>Impersonate any person or entity</li>
              <li>Engage in any fraudulent activity</li>
              <li>Interfere with the proper functioning of the service</li>
              <li>Collect user information without permission</li>
              <li>Violate any applicable laws or regulations</li>
            </ul>
          </div>
        )
      },
      {
        title: "Intellectual Property",
        content: (
          <div className="space-y-4">
            <p>The service and its original content, features, and functionality are owned by DearU and are protected by international copyright, trademark, and other intellectual property laws.</p>
            <p>By submitting content to our service, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, and display such content in connection with providing and promoting our service.</p>
          </div>
        )
      },
      {
        title: "Limitation of Liability",
        content: (
          <div className="space-y-4">
            <p>In no event shall DearU, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your access to or use of or inability to access or use the service</li>
              <li>Any conduct or content of any third party on the service</li>
              <li>Any content obtained from the service</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content</li>
            </ul>
          </div>
        )
      },
      {
        title: "Governing Law",
        content: (
          <div className="space-y-4">
            <p>These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.</p>
            <p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.</p>
          </div>
        )
      },
      {
        title: "Changes to Terms",
        content: (
          <div className="space-y-4">
            <p>We reserve the right to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on this page and updating the "Last Updated" date.</p>
            <p>By continuing to access or use our service after any revisions become effective, you agree to be bound by the revised terms.</p>
          </div>
        )
      },
      {
        title: "Contact Us",
        content: (
          <div className="space-y-4">
            <p>If you have any questions about these Terms, please contact us at:</p>
            <p className="font-medium">legal@dearu.com</p>
          </div>
        )
      }
    ]
  },
  community: {
    title: "Community Guidelines",
    lastUpdated: "May 15, 2025",
    introduction: "At DearU, we believe in creating a safe, respectful, and positive environment for all users. These Community Guidelines outline the behaviors and content that are acceptable on our platform.",
    sections: [
      {
        title: "Be Respectful",
        content: (
          <div className="space-y-4">
            <p>Treat others with kindness and respect, even when expressing romantic interest or handling rejection. Remember that there are real people behind every profile.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use considerate language in all communications</li>
              <li>Respect boundaries and consent</li>
              <li>Accept rejection gracefully</li>
              <li>Avoid making assumptions about others</li>
            </ul>
          </div>
        )
      },
      {
        title: "Be Authentic",
        content: (
          <div className="space-y-4">
            <p>Honesty is essential for building meaningful connections:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use accurate and current photos of yourself</li>
              <li>Provide truthful information in your profile</li>
              <li>Don't create multiple accounts or fake profiles</li>
              <li>Don't impersonate others</li>
            </ul>
          </div>
        )
      },
      {
        title: "No Harassment",
        content: (
          <div className="space-y-4">
            <p>We have zero tolerance for harassment, which includes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Unwanted or repeated contact after someone has expressed disinterest</li>
              <li>Threats or intimidation</li>
              <li>Hate speech or discriminatory comments</li>
              <li>Sexual harassment or unwelcome advances</li>
              <li>Bullying or shaming</li>
            </ul>
          </div>
        )
      },
      {
        title: "Appropriate Content",
        content: (
          <div className="space-y-4">
            <p>Keep all content appropriate for a diverse audience:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>No explicit sexual content or nudity</li>
              <li>No graphic violence or gore</li>
              <li>No promotion of illegal activities</li>
              <li>No spam, scams, or commercial solicitation</li>
            </ul>
          </div>
        )
      },
      {
        title: "Privacy and Consent",
        content: (
          <div className="space-y-4">
            <p>Respect the privacy of others:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Don't share private conversations without consent</li>
              <li>Don't share others' personal information</li>
              <li>Don't screenshot or share confessions outside the platform</li>
              <li>Obtain consent before sharing any information about a match</li>
            </ul>
          </div>
        )
      },
      {
        title: "Reporting Violations",
        content: (
          <div className="space-y-4">
            <p>If you encounter content or behavior that violates these guidelines:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the in-app reporting feature</li>
              <li>Provide specific details about the violation</li>
              <li>Block users who make you uncomfortable</li>
              <li>Contact support for serious concerns</li>
            </ul>
            <p>We review all reports and take appropriate action, which may include warnings, content removal, or account termination.</p>
          </div>
        )
      },
      {
        title: "Consequences",
        content: (
          <div className="space-y-4">
            <p>Violations of these guidelines may result in:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Content removal</li>
              <li>Temporary account restrictions</li>
              <li>Permanent account termination</li>
              <li>Reporting to law enforcement in serious cases</li>
            </ul>
            <p>The severity of consequences depends on the nature and frequency of violations.</p>
          </div>
        )
      }
    ]
  }
};

const Policy: React.FC = () => {
  const { policyType = 'privacy' } = useParams<{ policyType: string }>();
  // const navigate = useNavigate();
  
  // // Default to privacy policy if the requested policy doesn't exist
  const policy = policies[policyType] || policies.privacy;

  // const handleBackClick = () => {
  //   navigate('/');
  // };

  // const handlePolicyClick = (type: string) => {
  //   navigate(`/policy/${type}`);
  // };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
            <Link href="/">
                <p className="absolute top-4 left-4 p-2 bg-white rounded-full shadow-md flex items-center">
                  <ArrowLeft className="w-6 h-6 text-black" />
                  <Home className="ml-2 h-6 text-rose-600">Home</Home>
                </p>
              </Link>
            </div>
            <div className="flex items-center">
              
              <span className="ml-2 text-2xl font-bold text-rose-600">Dear U</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Policy Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{policy.title}</h1>
          <p className="text-gray-500 mb-6">Last Updated: {policy.lastUpdated}</p>
          
          <div className="prose prose-pink max-w-none">
            <p className="text-lg mb-8">{policy.introduction}</p>
            
            {/* Table of Contents */}
            <div className="bg-pink-50 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
              <ol className="list-decimal pl-6 space-y-2">
                {policy.sections.map((section, index) => (
                  <li key={index}>
                    <a 
                      href={`#section-${index}`} 
                      className="text-pink-600 hover:text-pink-800"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
            
            {/* Policy Sections */}
            {policy.sections.map((section, index) => (
              <div key={index} id={`section-${index}`} className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">{section.title}</h2>
                <div className="text-gray-700">{section.content}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Policy Navigation */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Other Policies</h3>
          <div className="flex flex-wrap gap-4">
            {Object.entries(policies).map(([key, value]) => (
              <button 
                key={key}
                // onClick={() => handlePolicyClick(key)}
                className={`px-4 py-2 rounded-full ${
                  policyType === key 
                    ? 'bg-pink-500 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {value.title}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-50 py-8 px-4 mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <Heart className="h-5 w-5 text-pink-500" />
            <span className="ml-2 text-lg font-bold text-gray-900">DearU</span>
          </div>
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} DearU. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Policy;
"use client";

import Link from "next/link";
import { Github, Instagram, Linkedin, Twitter, ArrowRight, Heart, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

function PrivacyPolicyDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-white hover:text-white/80">Privacy Policy</button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-headline">Privacy Policy – AYUVAN</DialogTitle>
          <p className="text-sm text-muted-foreground">Last Updated: 1 January 2026</p>
        </DialogHeader>
        <ScrollArea className="h-[70vh] pr-6">
            <div className="prose prose-sm dark:prose-invert max-w-none">
              <p><strong>AYUVAN AI</strong> (“Company”, “We”, “Us”, “Our”) is committed to respecting user privacy and safeguarding personal data. This Privacy Policy explains how we collect, use, process, store, and protect information when you access or use our AI-powered plant disease detection platform, website, tools, and related services (“Services”).</p>
              <p>This Policy is framed in accordance with the <strong>Digital Personal Data Protection Act, 2023 (India)</strong>, the <strong>Information Technology Act, 2000</strong>, and other applicable laws.</p>
              <p>By accessing or using AYUVAN, you acknowledge that you have read, understood, and agreed to this Privacy Policy.</p>
              <hr className="my-4"/>
              <h2 className="text-xl font-bold">1. Scope & Applicability</h2>
              <p>This Privacy Policy applies to:</p>
              <ul>
                <li>Visitors accessing the AYUVAN website</li>
                <li>Users uploading plant or leaf images for disease detection</li>
                <li>Users viewing AI-generated diagnoses, confidence scores, or remedies</li>
                <li>Individuals interacting with educational content such as the Disease Library or Articles</li>
              </ul>
              <p>This Policy does <strong>not</strong> apply to:</p>
              <ul>
                <li>Third-party websites or services linked from AYUVAN</li>
                <li>Data processed entirely outside our operational control</li>
              </ul>
              <hr className="my-4"/>
              <h2 className="text-xl font-bold">2. Legal Basis for Processing</h2>
              <p>We process data based on:</p>
              <ul>
                <li>User consent</li>
                <li>Performance of services requested by the user</li>
                <li>Compliance with legal and regulatory obligations</li>
                <li>Legitimate purposes such as platform security, misuse prevention, and system monitoring</li>
                <li>Research and improvement of AI models using anonymized or non-identifiable data</li>
              </ul>
              <hr className="my-4"/>
              <h2 className="text-xl font-bold">3. Data We Collect</h2>
              <h3 className="text-lg font-semibold mt-2">3.1 Data Provided by Users</h3>
              <ul>
                <li>Uploaded plant or leaf images submitted for analysis</li>
                <li>Feedback, queries, or support communications</li>
                <li>Contact details (such as email), if voluntarily provided</li>
              </ul>
              <h3 className="text-lg font-semibold mt-2">3.2 Automatically Collected Data</h3>
              <ul>
                <li>IP address</li>
                <li>Device, browser, and operating system information</li>
                <li>Access timestamps and usage logs</li>
                <li>Non-identifying analytical and performance data</li>
              </ul>
              <h3 className="text-lg font-semibold mt-2">3.3 Sensitive Personal Data</h3>
              <p>AYUVAN does <strong>not</strong> intentionally collect sensitive personal data.</p>
              <p>Users are advised <strong>not to upload</strong> images containing personal identifiers, confidential material, or any content they do not have lawful rights to use.</p>
              <hr className="my-4"/>
              <h2 className="text-xl font-bold">4. Purpose of Data Processing</h2>
              <p>Data is processed strictly for:</p>
              <ul>
                <li>AI-based plant disease detection and health assessment</li>
                <li>Generating diagnosis results and confidence scores</li>
                <li>Providing preventive and remedial suggestions</li>
                <li>Improving AI accuracy, reliability, and system performance</li>
                <li>Ensuring platform security and preventing misuse</li>
                <li>Meeting legal and regulatory requirements</li>
              </ul>
              <p>AYUVAN <strong>does not sell, rent, or trade personal data</strong>.</p>
              <hr className="my-4"/>
              <h2 className="text-xl font-bold">5. Privacy-First Image Processing</h2>
              <p>AYUVAN follows a <strong>privacy-by-design</strong> approach:</p>
              <ul>
                <li>Uploaded images are processed only for disease detection</li>
                <li>Images are not used for identification or profiling</li>
                <li>No facial recognition, biometric analysis, or personal inference is performed</li>
                <li>Uploaded images are deleted automatically after processing or within a limited retention window</li>
                <li>Detection results are not publicly shared</li>
              </ul>
              <hr className="my-4"/>
              <h2 className="text-xl font-bold">6. User Consent</h2>
              <p>Consent is obtained through:</p>
              <ul>
                <li>Voluntary upload of plant images</li>
                <li>Acceptance of this Privacy Policy</li>
                <li>Continued use of the Services</li>
              </ul>
              <p>Users may withdraw consent at any time by contacting us (see Section 17).</p>
              <hr className="my-4"/>
              <h2 className="text-xl font-bold">7. Data Sharing & Disclosure</h2>
              <p>Data may be shared only under limited circumstances:</p>
              <h3 className="text-lg font-semibold mt-2">7.1 Service Providers</h3>
              <ul>
                <li>Secure hosting and cloud infrastructure</li>
                <li>System performance and security monitoring tools</li>
              </ul>
              <h3 className="text-lg font-semibold mt-2">7.2 Legal Requirements</h3>
              <p>Data may be disclosed if required by:</p>
              <ul>
                <li>Law enforcement agencies</li>
                <li>Court orders or government authorities</li>
              </ul>
              <p>AYUVAN does <strong>not</strong> share data with advertisers or marketing entities.</p>
              <hr className="my-4"/>
              <h2 className="text-xl font-bold">8. Cross-Border Data Transfers</h2>
              <p>If data is transferred outside India:</p>
              <ul>
                <li>Transfers comply with DPDP Act requirements</li>
                <li>Adequate contractual and technical safeguards are applied</li>
                <li>Transfers are limited to permitted jurisdictions only</li>
              </ul>
              <hr className="my-4"/>
              <h2 className="text-xl font-bold">9. Data Storage & Retention</h2>
              <ul>
                <li>Data is stored using secure and encrypted systems</li>
                <li>Uploaded images are deleted automatically after analysis</li>
                <li>Data retention occurs only for operational, legal, or security purposes</li>
                <li>Upon withdrawal of consent, data is deleted or anonymized unless legally required</li>
              </ul>
              <hr className="my-4"/>
              <h2 className="text-xl font-bold">10. User Rights (Data Principal Rights)</h2>
              <p>Users have the right to:</p>
              <ul>
                <li>Access personal data</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion or erasure</li>
                <li>Withdraw consent</li>
                <li>Request data portability (where applicable)</li>
                <li>Nominate a representative for data rights</li>
              </ul>
              <p>Requests may be made using the contact details in Section 17.</p>
              <hr className="my-4"/>
              <h2 className="text-xl font-bold">11. Children’s Privacy</h2>
              <p>AYUVAN is <strong>not intended for individuals under 18 years of age</strong>.</p>
              <p>We do not knowingly collect or process children’s personal data.</p>
              <hr className="my-4"/>
              <h2 className="text-xl font-bold">12. Cookies & Analytics</h2>
              <p>AYUVAN uses limited cookies for:</p>
              <ul>
                <li>Session management</li>
                <li>Basic analytics</li>
                <li>Performance optimization</li>
              </ul>
              <p>Disabling cookies may affect certain features of the platform.</p>
              <hr className="my-4"/>
              <h2 className="text-xl font-bold">13. Security Measures</h2>
              <p>We implement reasonable and industry-standard security practices, including:</p>
              <ul>
                <li>Encryption in transit and at rest</li>
                <li>Secure access controls</li>
                <li>AI-safe processing pipelines</li>
                <li>Periodic security reviews</li>
                <li>Secure development practices</li>
              </ul>
              <p>Despite these measures, no system can guarantee absolute security.</p>
              <hr className="my-4"/>
              <h2 className="text-xl font-bold">14. AI Output Disclaimer</h2>
              <p>AI-generated results provided by AYUVAN:</p>
              <ul>
                <li>Are probabilistic and informational in nature</li>
                <li>Do not guarantee absolute accuracy</li>
                <li>Must not be treated as professional agricultural or scientific advice</li>
              </ul>
              <p>Users are responsible for verifying outputs before taking farming or commercial decisions.</p>
              <hr className="my-4"/>
              <h2 className="text-xl font-bold">15. Limitation of Liability & Disclaimer</h2>
              <p>To the maximum extent permitted by law, <strong>AYUVAN</strong>, including its creator, developers, contributors, maintainers, AI models, datasets, and associated parties, shall not be held liable for any loss, damage, or consequence arising from:</p>
              <ul>
                <li>Use or misuse of the platform or its outputs</li>
                <li>Reliance on AI-generated diagnoses or recommendations</li>
                <li>Inaccurate, incomplete, or delayed results</li>
                <li>Crop loss, financial loss, or productivity impact</li>
                <li>User-uploaded content without lawful consent or authority</li>
                <li>Third-party services, infrastructure failures, or network issues</li>
              </ul>
              <p>All services are provided <strong>“AS IS” and “AS AVAILABLE”</strong>, without warranties of any kind.</p>
              <p>Final responsibility for interpretation and usage rests solely with the user.</p>
              <hr className="my-4"/>
              <h2 className="text-xl font-bold">16. Policy Changes Without Prior Notice</h2>
              <p>AYUVAN reserves the right to modify or update this Privacy Policy at any time without prior notice.</p>
              <p>Changes become effective immediately upon publication. Continued use of the Services constitutes acceptance of the updated Policy.</p>
              <p>Users are responsible for reviewing this Policy periodically.</p>
              <hr className="my-4"/>
              <h2 className="text-xl font-bold">17. Contact Information (Privacy & Data Requests)</h2>
              <p>For privacy-related queries, corrections, or deletion requests:</p>
              <p>📧 <a href="mailto:aayushxidsu.11am@gmail.com">aayushxidsu.11am@gmail.com</a></p>
              <hr className="my-4"/>
              <h2 className="text-xl font-bold">18. Governing Law & Jurisdiction</h2>
              <p>This Privacy Policy is governed by:</p>
              <ul>
                <li>Digital Personal Data Protection Act, 2023</li>
                <li>Information Technology Act, 2000</li>
                <li>Applicable laws of India</li>
              </ul>
              <p><strong>Jurisdiction:</strong> Odisha, India</p>
            </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

function DataPrivacyDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <PrivacyPolicyDialog />
      </DialogTrigger>
    </Dialog>
  );
}

function TermsOfServiceDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-white hover:text-white/80">Terms of Service</button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-headline">Terms & Conditions – AYUVAN</DialogTitle>
          <p className="text-sm text-muted-foreground">Last Updated: 1 January 2026</p>
        </DialogHeader>
        <ScrollArea className="h-[70vh] pr-6">
          <div className="prose prose-sm dark:prose-invert max-w-none">
            <p>Welcome to <strong>AYUVAN</strong> (“Platform”, “Company”, “We”, “Us”, “Our”). By accessing, browsing, or using our website, applications, tools, APIs, or services (“Services”), you (“User”, “You”) agree to be bound by these Terms & Conditions. If you do not agree, you must immediately discontinue use of the Services.</p>
            <hr className="my-4"/>
            <h2 className="text-xl font-bold">1. General Provisions</h2>
            <h3 className="text-lg font-semibold mt-2">1.1 Scope of Services</h3>
            <p>These Terms govern your access to and use of AYUVAN, including but not limited to:</p>
            <ul>
              <li>AI-based plant and leaf disease detection</li>
              <li>Image analysis, diagnosis, and confidence scoring</li>
              <li>Disease library, articles, and educational content</li>
              <li>Dashboards, APIs, tools, documentation, and related services</li>
            </ul>
            <h3 className="text-lg font-semibold mt-2">1.2 Legal Nature</h3>
            <p>These Terms constitute a legally binding agreement under the <strong>Indian Contract Act, 1872</strong>.</p>
            <h3 className="text-lg font-semibold mt-2">1.3 Eligibility</h3>
            <p>By using the Services, you confirm that:</p>
            <ul>
              <li>You are at least <strong>18 years of age</strong></li>
              <li>You are legally competent to enter into a contract</li>
            </ul>
            <h3 className="text-lg font-semibold mt-2">1.4 Platform Rights</h3>
            <p>AYUVAN reserves the right to modify, restrict, suspend, or discontinue any part of the Services at any time, temporarily or permanently, without liability.</p>
            <hr className="my-4"/>
            <h2 className="text-xl font-bold">2. Definitions</h2>
            <ul>
              <li><strong>“Platform / Services”</strong>: AYUVAN’s website, AI models, detection systems, APIs, tools, and documentation</li>
              <li><strong>“User”</strong>: Any individual or entity accessing or using the Services</li>
              <li><strong>“Content”</strong>: Images or other data uploaded by Users</li>
              <li><strong>“AI Output”</strong>: AI-generated diagnosis, disease classification, confidence score, or recommendations</li>
              <li><strong>“Personal Data”</strong>: As defined under the Digital Personal Data Protection Act, 2023</li>
            </ul>
            <hr className="my-4"/>
            <h2 className="text-xl font-bold">3. Service Availability & Support</h2>
            <h3 className="text-lg font-semibold mt-2">3.1 Availability</h3>
            <p>AYUVAN strives to provide reliable access but does not guarantee uninterrupted, continuous, or error-free operation.</p>
            <h3 className="text-lg font-semibold mt-2">3.2 Service Interruptions</h3>
            <p>Services may be unavailable due to:</p>
            <ul>
              <li>Maintenance or system upgrades</li>
              <li>Network or infrastructure failures</li>
              <li>Force majeure events</li>
            </ul>
            <h3 className="text-lg font-semibold mt-2">3.3 No Liability for Downtime</h3>
            <p>AYUVAN shall not be liable for service interruptions caused by:</p>
            <ul>
              <li>Internet or device failures</li>
              <li>User infrastructure</li>
              <li>Third-party service providers</li>
              <li>Cyber incidents beyond reasonable control</li>
            </ul>
            <hr className="my-4"/>
            <h2 className="text-xl font-bold">4. User Responsibilities & Lawful Use</h2>
            <h3 className="text-lg font-semibold mt-2">4.1 User Obligations</h3>
            <p>Users are solely responsible for ensuring that:</p>
            <ul>
              <li>Uploaded images are lawfully obtained</li>
              <li>All required permissions and consents are secured</li>
              <li>Platform usage complies with applicable laws</li>
            </ul>
            <h3 className="text-lg font-semibold mt-2">4.2 Prohibited Content</h3>
            <p>Users must not upload or process:</p>
            <ul>
              <li>Images without lawful authority</li>
              <li>Illegal, abusive, or harmful content</li>
              <li>Content violating privacy, intellectual property, or other legal rights</li>
            </ul>
            <h3 className="text-lg font-semibold mt-2">4.3 No Verification Obligation</h3>
            <p>AYUVAN does not verify ownership, legality, or consent related to user-uploaded content.</p>
            <hr className="my-4"/>
            <h2 className="text-xl font-bold">5. AI Diagnosis & Output Disclaimer</h2>
            <h3 className="text-lg font-semibold mt-2">5.1 Nature of AI Outputs</h3>
            <p>AI Outputs are generated using probabilistic machine learning models.</p>
            <h3 className="text-lg font-semibold mt-2">5.2 Limitations</h3>
            <p>AI Outputs:</p>
            <ul>
              <li>May contain inaccuracies or errors</li>
              <li>Are informational and advisory in nature</li>
              <li>Do <strong>not</strong> constitute professional agricultural, scientific, or legal advice</li>
            </ul>
            <h3 className="text-lg font-semibold mt-2">5.3 User Responsibility</h3>
            <p>Final interpretation, verification, and decision-making based on AI Outputs rest entirely with the User.</p>
            <hr className="my-4"/>
            <h2 className="text-xl font-bold">6. Payments & Pricing (If Applicable)</h2>
            <h3 className="text-lg font-semibold mt-2">6.1 Paid Features</h3>
            <p>Certain features or usage limits may be paid or subscription-based.</p>
            <h3 className="text-lg font-semibold mt-2">6.2 Pricing Changes</h3>
            <p>Prices may change at any time and may include applicable taxes.</p>
            <h3 className="text-lg font-semibold mt-2">6.3 Refund Policy</h3>
            <p>Payments are non-refundable unless required by applicable law.</p>
            <hr className="my-4"/>
            <h2 className="text-xl font-bold">7. Intellectual Property Rights</h2>
            <h3 className="text-lg font-semibold mt-2">7.1 Ownership</h3>
            <p>All platform components, including AI models, algorithms, datasets, UI/UX, branding, and documentation, are the intellectual property of AYUVAN unless otherwise stated.</p>
            <h3 className="text-lg font-semibold mt-2">7.2 License</h3>
            <p>Users are granted a limited, non-exclusive, non-transferable, and revocable license to use the Services.</p>
            <h3 className="text-lg font-semibold mt-2">7.3 Restrictions</h3>
            <p>Users shall not:</p>
            <ul>
              <li>Reverse engineer, decompile, or tamper with the Platform</li>
              <li>Resell, redistribute, or sublicense the Services</li>
              <li>Claim ownership over AI models or platform outputs</li>
            </ul>
            <hr className="my-4"/>
            <h2 className="text-xl font-bold">8. Prohibited Uses</h2>
            <p>Users shall not use the Platform for:</p>
            <ul>
              <li>Misuse or manipulation of agricultural data</li>
              <li>Misrepresentation of AI Outputs as guaranteed or certified results</li>
              <li>Fraudulent, misleading, or unlawful activities</li>
              <li>Any activity prohibited under Indian law</li>
            </ul>
            <p>Violation may result in immediate suspension or termination.</p>
            <hr className="my-4"/>
            <h2 className="text-xl font-bold">9. Data & Privacy</h2>
            <h3 className="text-lg font-semibold mt-2">9.1 Privacy Policy</h3>
            <p>All data processing is governed by the AYUVAN Privacy Policy.</p>
            <h3 className="text-lg font-semibold mt-2">9.2 Content Ownership</h3>
            <p>AYUVAN does not claim ownership over user-uploaded images.</p>
            <h3 className="text-lg font-semibold mt-2">9.3 Limited Processing</h3>
            <p>Uploaded content is processed solely for plant disease detection and system improvement, following privacy-by-design principles.</p>
            <hr className="my-4"/>
            <h2 className="text-xl font-bold">10. Confidentiality</h2>
            <p>Users agree not to disclose or misuse confidential or proprietary information related to the Platform, AI models, or Services.</p>
            <p>Confidentiality obligations survive termination.</p>
            <hr className="my-4"/>
            <h2 className="text-xl font-bold">11. Termination</h2>
            <h3 className="text-lg font-semibold mt-2">11.1 Termination by AYUVAN</h3>
            <p>AYUVAN may suspend or terminate access:</p>
            <ul>
              <li>For violation of these Terms</li>
              <li>For misuse or unlawful activity</li>
              <li>At its sole discretion, with or without notice</li>
            </ul>
            <h3 className="text-lg font-semibold mt-2">11.2 Termination by User</h3>
            <p>Users may stop using the Services at any time.</p>
            <hr className="my-4"/>
            <h2 className="text-xl font-bold">12. Post-Termination Obligations</h2>
            <p>Upon termination:</p>
            <ul>
              <li>All access rights cease immediately</li>
              <li>API keys or credentials must be deleted</li>
              <li>Outstanding legal obligations survive termination</li>
            </ul>
            <hr className="my-4"/>
            <h2 className="text-xl font-bold">13. Comprehensive Limitation of Liability & Disclaimer</h2>
            <p>To the maximum extent permitted by law, <strong>AYUVAN</strong>, including its creator, developers, contributors, maintainers, advisors, AI models, datasets, and associated parties, shall not be liable for any loss, damage, or consequence arising from:</p>
            <ul>
              <li>Use or misuse of the Platform or Services</li>
              <li>Reliance on AI-generated diagnoses or recommendations</li>
              <li>Inaccurate, incomplete, delayed, or misleading outputs</li>
              <li>Crop loss, financial loss, or productivity impact</li>
              <li>User-uploaded content without lawful consent</li>
              <li>Third-party service failures or cyber incidents</li>
              <li>User-side negligence or misconfiguration</li>
            </ul>
            <p>All Services are provided <strong>“AS IS” and “AS AVAILABLE”</strong>, without warranties of any kind.</p>
            <hr className="my-4"/>
            <h2 className="text-xl font-bold">14. Indemnification</h2>
            <p>Users agree to indemnify, defend, and hold harmless AYUVAN and its associated parties from any claims or liabilities arising from:</p>
            <ul>
              <li>User content</li>
              <li>Violation of applicable laws</li>
              <li>Breach of these Terms</li>
            </ul>
            <hr className="my-4"/>
            <h2 className="text-xl font-bold">15. Modification of Terms Without Prior Notice</h2>
            <p>AYUVAN reserves the unconditional right to modify, amend, or replace these Terms or related policies at any time without prior notice.</p>
            <p>Changes take effect immediately upon publication. Continued use constitutes acceptance.</p>
            <p>Users are responsible for reviewing updates periodically.</p>
            <hr className="my-4"/>
            <h2 className="text-xl font-bold">16. Dispute Resolution</h2>
            <h3 className="text-lg font-semibold mt-2">16.1 Amicable Resolution</h3>
            <p>Parties shall first attempt to resolve disputes amicably.</p>
            <h3 className="text-lg font-semibold mt-2">16.2 Arbitration</h3>
            <p>Unresolved disputes shall be settled by arbitration under the <strong>Arbitration and Conciliation Act, 1996</strong>.</p>
            <ul>
              <li><strong>Seat:</strong> New Delhi, India</li>
              <li><strong>Language:</strong> English</li>
            </ul>
            <h3 className="text-lg font-semibold mt-2">16.3 Jurisdiction</h3>
            <p>Courts at <strong>New Delhi, India</strong> shall have exclusive jurisdiction.</p>
            <hr className="my-4"/>
            <h2 className="text-xl font-bold">17. Governing Law</h2>
            <p>These Terms are governed by:</p>
            <ul>
              <li>Indian Contract Act, 1872</li>
              <li>Information Technology Act, 2000</li>
              <li>Digital Personal Data Protection Act, 2023</li>
            </ul>
            <hr className="my-4"/>
            <h2 className="text-xl font-bold">18. Final Provisions</h2>
            <h3 className="text-lg font-semibold mt-2">18.1 Severability</h3>
            <p>If any provision is held invalid, remaining provisions remain enforceable.</p>
            <h3 className="text-lg font-semibold mt-2">18.2 Waiver</h3>
            <p>Failure to enforce any right shall not constitute a waiver.</p>
            <h3 className="text-lg font-semibold mt-2">18.3 Entire Agreement</h3>
            <p>These Terms constitute the entire agreement between the User and AYUVAN.</p>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

function ContactDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-white hover:text-white/80">Contact</button>
      </DialogTrigger>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-headline">Contact Us – AYUVAN</DialogTitle>
        </DialogHeader>
        <div className="prose prose-sm dark:prose-invert max-w-none">
            <p>For inquiries, support, partnerships, or official communication, please reach out to us using the details below:</p>
            <p><strong>Email:</strong> <a href="mailto:aayushxidsu.11am@gmail.com">aayushxidsu.11am@gmail.com</a></p>
            <p><strong>Phone:</strong> +91 78940 38559</p>
            <p>We aim to respond to all legitimate queries in a timely and professional manner.</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}

function OurStoryDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-white hover:text-white/80">Our Story</button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-headline">Our Story – AYUVAN</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[70vh] pr-6">
          <div className="prose prose-sm dark:prose-invert max-w-none">
            <p>In a world where agriculture sustains life, plant health often goes unnoticed until damage is already done. Crop diseases spread silently—reducing yield, increasing costs, and threatening food security. As climate change, evolving pathogens, and resource limitations reshape farming, the challenge is no longer just growing crops—but protecting them early, accurately, and sustainably.</p>
            <p><strong>AYUVAN was created to meet this challenge.</strong></p>
            <hr className="my-4" />
            <h2 className="text-xl font-bold">The Meaning of AYUVAN</h2>
            <p>The name <strong>“AYUVAN”</strong> draws inspiration from Indian philosophical roots—symbolizing <strong>life, growth, and vitality</strong>. It reflects a simple yet powerful idea: healthy plants are the foundation of healthy ecosystems, resilient farmers, and a sustainable future.</p>
            <p>AYUVAN represents an intelligent system that looks beyond the surface of a leaf—interpreting patterns, symptoms, and signals to understand plant health at its earliest stage.</p>
            <hr className="my-4" />
            <h2 className="text-xl font-bold">The Origin</h2>
            <p>AYUVAN is the initiative of <strong>Ayush Das</strong>, an independent technologist from India with a strong background in artificial intelligence, computer vision, and applied system design.</p>
            <p>While exploring real-world AI applications, Ayush observed a critical gap: advanced AI technologies were rapidly evolving, yet farmers and gardeners—especially at the grassroots level—often lacked access to timely, reliable diagnostic tools. Traditional solutions were reactive, expert-dependent, or inaccessible at scale.</p>
            <p>This insight sparked a fundamental question: <strong>What if early plant disease detection could be as simple as taking a picture?</strong></p>
            <p>From that question, AYUVAN was born.</p>
            <hr className="my-4" />
            <h2 className="text-xl font-bold">The Concept of AYUVAN</h2>
            <p>AYUVAN is built as an <strong>AI-powered plant health intelligence platform</strong> that transforms ordinary leaf images into actionable insights.</p>
            <p>By combining trained computer vision models with agricultural knowledge, AYUVAN enables:</p>
            <ul>
              <li>Early detection of plant and crop diseases</li>
              <li>Identification of visible symptoms and disease patterns</li>
              <li>Confidence-based diagnosis from leaf images</li>
              <li>Preventive and remedial guidance</li>
              <li>Educational awareness through disease libraries and articles</li>
            </ul>
            <p>All while prioritizing <strong>accessibility, transparency, and responsible AI usage</strong>.</p>
            <hr className="my-4" />
            <h2 className="text-xl font-bold">MADE IN INDIA, BUILT FOR THE FIELD</h2>
            <p>AYUVAN is proudly developed in India, with deep awareness of local agricultural challenges, farming practices, and climatic diversity.</p>
            <p>The platform aligns with Indian digital and data protection frameworks and follows <strong>privacy-by-design</strong> principles—ensuring that technology empowers farmers without compromising trust or control.</p>
            <p>AYUVAN stands as proof that impactful agricultural AI can be:</p>
            <ul>
              <li>Ethical</li>
              <li>Farmer-centric</li>
              <li>Technically robust</li>
              <li>Scalable for real-world use</li>
            </ul>
            <hr className="my-4" />
            <h2 className="text-xl font-bold">Our Core Principles</h2>
            <p>AYUVAN is guided by four foundational pillars:</p>
            <h3 className="text-lg font-semibold mt-2">Early Intelligence</h3>
            <p>AI models designed to identify plant diseases at the earliest visible stage—before damage escalates.</p>
            <h3 className="text-lg font-semibold mt-2">Accessible Technology</h3>
            <p>Simple, image-based diagnostics that reduce dependency on costly or delayed expert intervention.</p>
            <h3 className="text-lg font-semibold mt-2">Responsible AI</h3>
            <p>Transparent, advisory-driven AI that supports decision-making rather than replacing human judgment.</p>
            <h3 className="text-lg font-semibold mt-2">Sustainable Impact</h3>
            <p>Technology that reduces crop loss, minimizes chemical overuse, and promotes eco-conscious farming.</p>
            <hr className="my-4" />
            <h2 className="text-xl font-bold">The Vision Ahead</h2>
            <p>AYUVAN is not a finished product—it is an evolving ecosystem.</p>
            <p>The future roadmap includes:</p>
            <ul>
              <li>Expanded crop and disease coverage</li>
              <li>Explainable AI for clearer diagnosis reasoning</li>
              <li>Regional and seasonal disease intelligence</li>
              <li>Research collaborations with agricultural institutions</li>
              <li>Scalable tools for farmers, educators, and agri-organizations</li>
            </ul>
            <p>By learning from real-world data and field feedback, AYUVAN aims to shape a future where <strong>AI strengthens agriculture without distancing it from human expertise</strong>.</p>
            <hr className="my-4" />
            <h2 className="text-xl font-bold">Founder’s Note</h2>
            <p>When I began building AYUVAN, my goal was never to create just another AI application.</p>
            <p>The real question was: <strong>Can artificial intelligence help farmers act earlier, smarter, and more sustainably?</strong></p>
            <p>Agriculture does not need opaque systems or overpromised automation—it needs trust, clarity, and timely insight. AYUVAN is my effort to bring meaningful AI into the hands of those who feed the world.</p>
            <p>This is not the end—it is the starting point.</p>
            <blockquote className="mt-4 border-l-2 pl-6 italic">“When technology serves life, progress becomes sustainable.” <br />— <strong>Ayush Das</strong>, Founder & Creator, <strong>AYUVAN</strong></blockquote>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

function PartnershipDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-white hover:text-white/80">Partnership</button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-headline">Partnership</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[70vh] pr-6">
          <div className="prose prose-sm dark:prose-invert max-w-none">
            <p><strong>AYUVAN</strong> is proud to announce that the platform has been developed in <strong>strategic partnership with Xidotic Pvt. Ltd.</strong>, a technology-driven organization focused on innovation, research, and next-generation digital solutions.</p>
            <p>This partnership reflects a shared commitment to <strong>responsible artificial intelligence, technical excellence, and scalable system architecture</strong>, combining AYUVAN’s vision for AI-powered plant health intelligence with Xidotic Pvt. Ltd.’s engineering-driven development approach.</p>
            <hr className="my-4" />

            <h2 className="text-xl font-bold">Strengthening Agricultural Intelligence Through Collaboration</h2>
            <p>The development of AYUVAN has been supported by Xidotic Pvt. Ltd. through technical collaboration, architectural guidance, and strategic engineering inputs. This collaboration enabled AYUVAN to be designed with a strong emphasis on:</p>
            <ul>
              <li>High-performance AI image analysis pipelines for plant disease detection</li>
              <li>Reliable and efficient leaf-image processing workflows</li>
              <li>Scalable, modular, and production-ready system architecture</li>
              <li>Secure, privacy-first infrastructure aligned with modern data protection standards</li>
            </ul>
            <p>By aligning on shared technical and ethical principles, both teams worked closely to ensure that AYUVAN delivers accurate, accessible, and trustworthy plant health insights—without compromising transparency or user confidence.</p>
            <hr className="my-4" />

            <h2 className="text-xl font-bold">Shared Values, Unified Vision</h2>
            <p>AYUVAN and Xidotic Pvt. Ltd. are united by a common philosophy that guides every stage of development:</p>
            <ul>
              <li>Innovation with responsibility</li>
              <li>Privacy-by-design system architecture</li>
              <li>Transparency in AI-assisted decision-making</li>
              <li>Long-term, sustainable technology development</li>
            </ul>
            <p>This collaboration reflects the belief that AI systems designed to support agriculture must be <strong>ethical, explainable, and farmer-centric</strong>, ensuring real-world impact rather than experimental complexity.</p>
            <hr className="my-4" />

            <h2 className="text-xl font-bold">Role of Xidotic Pvt. Ltd.</h2>
            <p>As a strategic technology partner, <strong>Xidotic Pvt. Ltd.</strong> contributed to:</p>
            <ul>
              <li>Platform engineering and system architecture design</li>
              <li>Development best practices and performance optimization</li>
              <li>Technical validation and architectural reviews</li>
              <li>Supporting AYUVAN’s long-term scalability and deployment roadmap</li>
            </ul>
            <p>This partnership ensured that AYUVAN was built on <strong>enterprise-grade foundations</strong>, while retaining the flexibility required for future innovation, expanded crop coverage, and evolving agricultural challenges.</p>
            <hr className="my-4" />

            <h2 className="text-xl font-bold">Looking Forward</h2>
            <p>The partnership between AYUVAN and Xidotic Pvt. Ltd. marks the beginning of a long-term collaboration aimed at:</p>
            <ul>
              <li>Advancing AI-driven plant disease detection accuracy</li>
              <li>Expanding crop, disease, and regional coverage</li>
              <li>Supporting research-led innovation in agri-tech and sustainable farming</li>
              <li>Building trusted, accessible plant health intelligence solutions for farmers and institutions</li>
            </ul>
            <p>Together, AYUVAN and Xidotic Pvt. Ltd. are committed to shaping the future of <strong>ethical, transparent, and high-impact agricultural AI technologies</strong> that strengthen food security and sustainable farming practices.</p>
            <hr className="my-4" />

            <h2 className="text-xl font-bold">About Xidotic Pvt. Ltd.</h2>
            <p><strong>Xidotic Pvt. Ltd.</strong> is a technology and innovation-focused organization dedicated to building scalable, research-driven digital solutions. The company supports emerging platforms through engineering expertise, system design, and strategic collaboration—helping transform innovative ideas into production-ready systems.</p>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

function SponsorshipDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-white hover:text-white/80">Sponsorship</button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-headline">Sponsorship</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[70vh] pr-6">
          <div className="prose prose-sm dark:prose-invert max-w-none">
            <p>At present, <strong>AYUVAN</strong> is an indigenously developed platform that has <strong>not sought, accepted, or received any form of sponsorship, financial funding, grants, endorsements, or monetary support</strong> from individuals, private organizations, government bodies, academic institutions, or third-party entities.</p>
            <p>All research, development, and implementation efforts related to AYUVAN have been carried out <strong>independently</strong>, without external financial influence. This ensures that every technical, architectural, and strategic decision is guided solely by <strong>engineering integrity, ethical responsibility, and user trust</strong>.</p>
            <hr className="my-4" />
            <h2 className="text-xl font-bold">Commitment to Independence & Transparency</h2>
            <p>Maintaining independence enables AYUVAN to:</p>
            <ul>
              <li>Uphold responsible and privacy-first AI design principles</li>
              <li>Avoid conflicts of interest or external influence</li>
              <li>Retain full control over technology direction and data governance</li>
              <li>Deliver unbiased and reliable plant disease detection and advisory insights</li>
            </ul>
            <p>This independence is a foundational principle of AYUVAN and reflects our commitment to <strong>transparency, accountability, and farmer-centric trust</strong>.</p>
            <hr className="my-4" />
            <h2 className="text-xl font-bold">Future Sponsorships or Funding</h2>
            <p>If, in the future, AYUVAN considers engaging in sponsorships, grants, or financial collaborations, such engagements will be:</p>
            <ul>
              <li>Clearly and publicly disclosed through official website and documentation</li>
              <li>Carefully evaluated for alignment with applicable laws, ethical standards, and platform values</li>
              <li>Structured to ensure that user privacy, data control, and technical independence remain uncompromised</li>
            </ul>
            <p>Any future sponsorship or funding will be accepted only if it supports AYUVAN’s mission to promote <strong>sustainable agriculture and responsible AI innovation</strong>.</p>
            <hr className="my-4" />
            <h2 className="text-xl font-bold">Our Assurance</h2>
            <p>Users, partners, and stakeholders are assured that AYUVAN:</p>
            <ul>
              <li>Does not contain sponsored content or paid endorsements</li>
              <li>Does not promote biased or financially influenced recommendations</li>
              <li>Operates without hidden influence in its AI outputs, research, or communications</li>
            </ul>
            <p>For AYUVAN, transparency is not a feature—it is a <strong>core operating principle</strong>.</p>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

function DPADialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-white hover:text-white/80">DPA</button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-headline">DATA PROCESSING AGREEMENT (DPA)</DialogTitle>
          <p className="text-sm text-muted-foreground">© 2026 AYUVAN. All Rights Reserved.</p>
        </DialogHeader>
        <ScrollArea className="h-[70vh] pr-6">
          <div className="prose prose-sm dark:prose-invert max-w-none">
            <h2 className="text-xl font-bold">Compliance Framework</h2>
            <p>This Data Processing Agreement (“Agreement”) is drafted in compliance with:</p>
            <ul>
              <li><strong>Digital Personal Data Protection Act, 2023 (India)</strong></li>
              <li><strong>Information Technology Act, 2000</strong></li>
              <li><strong>Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011</strong></li>
              <li><strong>CERT-In Directions, 2022</strong></li>
              <li>Principles aligned with <strong>GDPR Article 28</strong> (globally recognized data processing standards)</li>
            </ul>
            <p>This Agreement governs the processing of personal data by <strong>AYUVAN</strong> in its capacity as a <strong>Data Processor</strong>, acting on behalf of the <strong>Data Fiduciary (Controller)</strong>.</p>
            <hr className="my-4"/>
            <h2 className="text-xl font-bold">1. Definitions</h2>
            <p>For the purposes of this Agreement:</p>
            <ol>
              <li><strong>“Data Principal”</strong> means the natural person to whom personal data relates.</li>
              <li><strong>“Data Fiduciary” / “Controller”</strong> means the individual or entity determining the purpose and means of processing personal data.</li>
              <li><strong>“Data Processor”</strong> means <strong>AYUVAN</strong>, which processes personal data solely on documented instructions of the Controller.</li>
              <li><strong>“Personal Data”</strong> means any digital data relating to an identifiable individual as defined under the DPDP Act, 2023.</li>
              <li><strong>“Processing”</strong> includes collection, analysis, inference, storage, transmission, modification, or deletion of data.</li>
              <li><strong>“Applicable Law”</strong> includes all Indian data protection, cybersecurity, and information technology laws.</li>
            </ol>
            <hr className="my-4"/>
            <h2 className="text-xl font-bold">2. Purpose and Scope of Processing</h2>
            <h3 className="text-lg font-semibold mt-2">2.1 Purpose</h3>
            <p>AYUVAN shall process personal data solely for the purpose of providing AI-based plant health services, including:</p>
            <ul>
              <li>Plant disease detection from leaf images</li>
              <li>AI-driven diagnosis and classification of crop diseases</li>
              <li>Generation of disease confidence scores and reports</li>
              <li>Remedy, prevention, and crop-care recommendations</li>
              <li>Model performance improvement <strong>only where explicit consent is provided</strong></li>
            </ul>
            <p>AYUVAN does <strong>not</strong> use data for advertising, profiling, or non-agricultural surveillance.</p>
            <h3 className="text-lg font-semibold mt-2">2.2 Scope of Data Processed</h3>
            <p>Depending on usage, processed data may include:</p>
            <ul>
              <li>Uploaded images of plant leaves or crops</li>
              <li>Non-identifiable visual patterns and disease markers</li>
              <li>Device, browser, or session metadata (for security and performance)</li>
              <li>System logs for diagnostics, auditing, and compliance</li>
            </ul>
            <p>AYUVAN does <strong>not intentionally collect biometric, identity, or sensitive personal data</strong> unrelated to plant analysis.</p>
            <h3 className="text-lg font-semibold mt-2">2.3 Duration of Processing</h3>
            <p>This Agreement remains valid for the entire duration of the service relationship between the Controller and AYUVAN.</p>
            <hr className="my-4"/>
            <h2 className="text-xl font-bold">3. Categories of Data Subjects</h2>
            <p>Processing may involve data relating to:</p>
            <ul>
              <li>Farmers and agricultural professionals</li>
              <li>Gardeners and individual users</li>
              <li>Researchers, testers, or demo users (where applicable)</li>
            </ul>
            <hr className="my-4"/>
            <h2 className="text-xl font-bold">4. Location of Processing</h2>
            <p>Personal data is processed:</p>
            <ul>
              <li><strong>Within India</strong>, and/or</li>
              <li><strong>Locally on the user’s device</strong> (edge or on-device inference where supported)</li>
            </ul>
            <p>Cross-border data transfer shall <strong>not occur</strong> unless:</p>
            <ul>
              <li>Explicit written consent is provided by the Controller</li>
              <li>Adequate safeguards are implemented in accordance with Applicable Law</li>
            </ul>
            <hr className="my-4"/>
            <h2 className="text-xl font-bold">5. Technical and Organisational Measures (TOMs)</h2>
            <p>AYUVAN implements industry-standard security measures to protect data.</p>
            <h3 className="text-lg font-semibold mt-2">5.1 Confidentiality</h3>
            <ul>
              <li>Role-Based Access Control (RBAC)</li>
              <li>Secure authentication mechanisms</li>
              <li>Confidentiality obligations for authorized personnel</li>
              <li>Access logging and audit trails</li>
            </ul>
            <h3 className="text-lg font-semibold mt-2">5.2 Integrity & Security</h3>
            <ul>
              <li>TLS 1.2+ encryption for data in transit</li>
              <li>Secure APIs and validated endpoints</li>
              <li>Protection against unauthorized access and tampering</li>
            </ul>
            <h3 className="text-lg font-semibold mt-2">5.3 Availability</h3>
            <ul>
              <li>Secure and resilient infrastructure</li>
              <li>Firewalls and intrusion prevention systems</li>
              <li>Incident response and recovery mechanisms</li>
            </ul>
            <h3 className="text-lg font-semibold mt-2">5.4 Data Minimisation</h3>
            <ul>
              <li>No storage of images unless operationally required</li>
              <li>Preference for real-time inference</li>
              <li>Use of anonymized or non-identifiable data wherever possible</li>
            </ul>
            <h3 className="text-lg font-semibold mt-2">5.5 On-Device Processing</h3>
            <p>Where supported:</p>
            <ul>
              <li>Images remain on the user’s device</li>
              <li>No cloud upload by default</li>
              <li>Zero persistent storage unless explicitly enabled</li>
            </ul>
            <hr className="my-4"/>
            <h2 className="text-xl font-bold">6. Rights of the Controller (Data Fiduciary)</h2>
            <p>The Controller has the right to:</p>
            <ul>
              <li>Request access to stored data (if any)</li>
              <li>Request correction or deletion</li>
              <li>Restrict or cease processing</li>
              <li>Request security and compliance documentation</li>
            </ul>
            <p>AYUVAN shall act only on lawful, documented instructions.</p>
            <hr className="my-4"/>
            <h2 className="text-xl font-bold">7. Sub-Processing</h2>
            <p>AYUVAN may engage sub-processors only with documented approval from the Controller.</p>
            <p>Approved sub-processors may include:</p>
            <ul>
              <li>Indian cloud infrastructure providers</li>
              <li>Indian data centers</li>
              <li>Internal AYUVAN computing systems</li>
            </ul>
            <p>No foreign sub-processor shall be engaged without explicit written consent.</p>
            <hr className="my-4"/>
            <h2 className="text-xl font-bold">8. Data Breach Notification</h2>
            <p>In the event of a personal data breach, AYUVAN shall:</p>
            <ul>
              <li>Notify the Controller without undue delay</li>
              <li>Provide details of impact and mitigation measures</li>
              <li>Notify <strong>CERT-In within 6 hours</strong>, where applicable</li>
              <li>Cooperate fully in investigation and remediation</li>
            </ul>
            <hr className="my-4"/>
            <h2 className="text-xl font-bold">9. Controller Instructions</h2>
            <p>AYUVAN:</p>
            <ul>
              <li>Processes data strictly under documented instructions</li>
              <li>Shall inform the Controller if any instruction violates Applicable Law</li>
              <li>Maintains internal processing records</li>
            </ul>
            <hr className="my-4"/>
            <h2 className="text-xl font-bold">10. Data Deletion & Return</h2>
            <p>Upon termination or request:</p>
            <ul>
              <li>All personal data shall be deleted or securely returned</li>
              <li>Backups shall be purged within a reasonable timeframe</li>
              <li>Training datasets shall be retained <strong>only with explicit written consent</strong></li>
              <li>Proof of deletion may be provided upon request</li>
            </ul>
            <hr className="my-4"/>
            <h2 className="text-xl font-bold">11. Liability & Compliance</h2>
            <p>Both parties agree to comply with Applicable Law.</p>
            <h3 className="text-lg font-semibold mt-2">Processor Liability (AYUVAN)</h3>
            <p>AYUVAN shall be liable for:</p>
            <ul>
              <li>Breaches caused by negligence</li>
              <li>Failure to implement agreed security measures</li>
            </ul>
            <h3 className="text-lg font-semibold mt-2">Controller Liability</h3>
            <p>The Controller is responsible for:</p>
            <ul>
              <li>Lawful collection of data</li>
              <li>Obtaining valid consent</li>
              <li>Accuracy and legality of instructions</li>
            </ul>
            <hr className="my-4"/>
            <h2 className="text-xl font-bold">12. Term, Termination, and Validity</h2>
            <p>This Agreement remains effective until:</p>
            <ul>
              <li>The service relationship ends</li>
              <li>All personal data is deleted or returned</li>
              <li>Legal obligations are fulfilled</li>
            </ul>
            <hr className="my-4"/>
            <h2 className="text-xl font-bold">Annex A — Technical and Organisational Measures (TOMs)</h2>
            <h3 className="text-lg font-semibold mt-2">1. Physical Security</h3>
            <ul>
              <li>Access-controlled environments</li>
              <li>Secure devices and infrastructure</li>
            </ul>
            <h3 className="text-lg font-semibold mt-2">2. Network & Infrastructure Security</h3>
            <ul>
              <li>Zero-trust administrative controls</li>
              <li>Encrypted communication channels</li>
            </ul>
            <h3 className="text-lg font-semibold mt-2">3. Data Processing Security</h3>
            <ul>
              <li>Isolated AI inference environments</li>
              <li>Sandboxed model testing</li>
            </ul>
            <h3 className="text-lg font-semibold mt-2">4. Disaster Recovery</h3>
            <ul>
              <li>High-availability architecture</li>
              <li>Incident response and recovery protocols</li>
            </ul>
            <hr className="my-4"/>
            <p>© 2026 AYUVAN</p>
            <p><strong>Built for sustainable agriculture. Designed for trust. Powered by responsible AI.</strong></p>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

function ImprintDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-white hover:text-white/80">IMPRINT</button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-headline">IMPRINT (LEGAL NOTICE)</DialogTitle>
           <p className="text-sm text-muted-foreground">© 2026 AYUVAN. All Rights Reserved.</p>
        </DialogHeader>
        <ScrollArea className="h-[70vh] pr-6">
          <div className="prose prose-sm dark:prose-invert max-w-none">

            <h2 className="text-xl font-bold">Legal Compliance Statement</h2>
            <p>This Imprint (“Legal Notice”) is published in compliance with the following laws and regulations of India:</p>
            <ul>
              <li>Sections <strong>65A & 65B</strong> of the <strong>Information Technology Act, 2000</strong></li>
              <li>Rule <strong>3(1)</strong> of the <strong>Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021</strong></li>
              <li><strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong></li>
              <li><strong>Indian Contract Act, 1872</strong></li>
              <li>Applicable agricultural, commercial, cybersecurity, and digital compliance requirements in India</li>
            </ul>
            <p>This notice provides legally mandated information regarding the ownership, operation, and responsible entities behind <strong>AYUVAN</strong>.</p>
            <hr className="my-4"/>

            <h2 className="text-xl font-bold">1. Service Provider Information</h2>
            <ul>
              <li><strong>Platform Name:</strong> AYUVAN</li>
              <li><strong>Nature of Platform:</strong> AI-Based Plant Disease Detection & Crop Health Intelligence</li>
              <li><strong>Primary Use Case:</strong> Early detection of plant diseases using AI-powered image analysis</li>
              <li><strong>Registered Jurisdiction:</strong> India</li>
            </ul>
            <hr className="my-4"/>

            <h2 className="text-xl font-bold">2. Contact Information</h2>
            <ul>
              <li><strong>Official Contact Email:</strong> 📧 <a href="mailto:aayushxidsu.11am@gmail.com">aayushxidsu.11am@gmail.com</a></li>
              <li><strong>Contact Number (Optional):</strong> 📞 +91 7894038559</li>
            </ul>
            <hr className="my-4"/>

            <h2 className="text-xl font-bold">3. Authorized Representative</h2>
            <ul>
              <li><strong>Name:</strong> Ayush Das</li>
              <li><strong>Designation:</strong> Founder & Creator, AYUVAN</li>
            </ul>
            <hr className="my-4"/>

            <h2 className="text-xl font-bold">4. Data Protection & Grievance Officer</h2>
            <p>In compliance with the <strong>Information Technology Act, 2000</strong> and the <strong>Digital Personal Data Protection Act, 2023</strong>, AYUVAN has designated the following contact for data protection and grievance redressal:</p>
            <ul>
              <li><strong>Grievance & Data Protection Contact:</strong> 📧 <a href="mailto:aayushxidsu.11am@gmail.com">aayushxidsu.11am@gmail.com</a></li>
            </ul>
            <p>All data-related concerns, complaints, or lawful requests shall be addressed through the above channel.</p>
            <hr className="my-4"/>

            <h2 className="text-xl font-bold">5. Platform Description</h2>
            <p>AYUVAN provides AI-driven agricultural intelligence services, including:</p>
            <ul>
              <li>Plant disease detection using leaf and crop images</li>
              <li>AI-based disease classification and confidence scoring</li>
              <li>Preventive care and remedy suggestions</li>
              <li>Disease knowledge base and agricultural articles</li>
              <li>Privacy-first, real-time, and optionally on-device AI processing</li>
            </ul>
            <p>The platform is designed to support <strong>farmers, gardeners, researchers, and agri-tech stakeholders</strong>, with a focus on <strong>sustainable farming and crop loss reduction</strong>.</p>
            <hr className="my-4"/>

            <h2 className="text-xl font-bold">6. Regulatory Compliance Statement</h2>
            <p>AYUVAN operates in accordance with applicable Indian laws, including but not limited to:</p>
            <ul>
              <li>Information Technology Act, 2000 and IT Amendment Act, 2008</li>
              <li>IT (Reasonable Security Practices & Sensitive Personal Data) Rules, 2011</li>
              <li>CERT-In Cybersecurity Directions, 2022</li>
              <li>Digital Personal Data Protection Act, 2023</li>
              <li>Indian Evidence Act, 1872 (Electronic Records – Section 65B)</li>
              <li>Indian Contract Act, 1872</li>
            </ul>
            <p>AYUVAN does <strong>not knowingly host, process, or distribute illegal, misleading, or harmful content</strong>.</p>
            <hr className="my-4"/>

            <h2 className="text-xl font-bold">7. Liability Disclaimer</h2>
            <p>While reasonable technical and operational measures are taken, AYUVAN assumes no liability for:</p>
            <ul>
              <li>Errors, inaccuracies, or limitations in AI-generated disease predictions</li>
              <li>Crop loss or agricultural outcomes based solely on AI suggestions</li>
              <li>Temporary service disruptions or technical issues</li>
              <li>Misuse of the platform by users or third parties</li>
              <li>Decisions made without professional agricultural consultation</li>
            </ul>
            <p>AI-generated outputs are <strong>informational and assistive in nature</strong> and must <strong>not be treated as certified agricultural, legal, or scientific advice</strong>.</p>
            <hr className="my-4"/>

            <h2 className="text-xl font-bold">8. Copyright & Intellectual Property</h2>
            <p>Unless explicitly stated otherwise:</p>
            <ul>
              <li>All software, AI models, datasets (excluding public/open datasets), algorithms, UI designs, documentation, and branding are the <strong>exclusive intellectual property of AYUVAN</strong></li>
              <li>Unauthorized copying, reproduction, scraping, reverse engineering, or redistribution is strictly prohibited</li>
              <li>Third-party tools, datasets, and libraries remain the property of their respective owners and are governed by their licenses</li>
            </ul>
            <hr className="my-4"/>

            <h2 className="text-xl font-bold">9. Dispute Resolution & Jurisdiction</h2>
            <p>All disputes arising out of or related to the use of AYUVAN shall be governed by the <strong>laws of India</strong>.</p>
            <ul>
              <li><strong>Exclusive Jurisdiction:</strong> Courts of Odisha, India</li>
            </ul>
            <hr className="my-4"/>

            <h2 className="text-xl font-bold">10. Contact for Legal Notices</h2>
            <p>All legal notices, compliance communications, or official correspondence shall be sent to:</p>
            <p>📧 <strong>Email:</strong> <a href="mailto:aayushxidsu.11am@gmail.com">aayushxidsu.11am@gmail.com</a></p>
            <hr className="my-4"/>

            <h2 className="text-xl font-bold">11. Publication Scope</h2>
            <p>This Imprint applies to:</p>
            <ul>
              <li>AYUVAN Website</li>
              <li>AYUVAN Web and Mobile Applications</li>
              <li>AYUVAN APIs, Documentation, and Knowledge Resources</li>
            </ul>
            <hr className="my-4"/>

            <h2 className="text-xl font-bold">12. Final Note</h2>
            <p>This Imprint may be updated periodically to reflect changes in legal, regulatory, or operational requirements. Continued use of the AYUVAN platform constitutes acceptance of the updated Legal Notice.</p>
            <hr className="my-4"/>
            <h3 className="font-headline text-lg">AYUVAN</h3>
            <p><strong>Empowering sustainable agriculture through responsible AI.</strong></p>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

function MadeWithLove() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    // Render a placeholder with the same dimensions
    return <div className="h-5 w-48" />; // Adjust height and width as needed
  }

  return (
    <div className="flex items-center gap-2 text-sm text-white/90">
      Made with <Heart className="h-4 w-4 text-red-500 fill-current" /> by{' '}
      <Link href="https://github.com/aayush-xid-su" target="_blank" rel="noopener noreferrer" className="hover:underline">
        aayush_xid_su
      </Link>
    </div>
  );
}


export function Footer() {
  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com/in/ayushdas-11am", icon: <Linkedin className="h-5 w-5" /> },
    { name: "Instagram", href: "https://instagram.com/aayush_xid_su", icon: <Instagram className="h-5 w-5" /> },
    { name: "Twitter", href: "https://x.com/aayushxidsu", icon: <Twitter className="h-5 w-5" /> },
    { name: "GitHub", href: "https://github.com/aayush-xid-su", icon: <Github className="h-5 w-5" /> },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 pt-16 pb-8 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div className="space-y-4 md:col-span-2 lg:col-span-1">
            <h3 className="font-headline text-3xl font-extrabold tracking-tight text-white">AYUVAN</h3>
            <MadeWithLove />
            <p className="text-sm text-primary-foreground/90">
              Experience an intelligent farming platform that seamlessly uses AI to detect plant diseases from leaf images, diagnose health issues early, and recommend effective remedies — all powered by trained datasets for smarter, sustainable agriculture. 
            </p>
            <p>
               BUILT IN XIDOTIC LAB PVT LTD INDIA|| MADE FOR FARMER 
            </p>
            <p className="text-xs text-primary-foreground/90 pt-4">
              © 2024 AYUVAN. All rights reserved
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold uppercase tracking-wider text-sm text-white/90">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><PrivacyPolicyDialog /></li>
              <li><TermsOfServiceDialog /></li>
              <li><ContactDialog /></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold uppercase tracking-wider text-sm text-white/90">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><OurStoryDialog /></li>
              <li><PartnershipDialog /></li>
              <li><SponsorshipDialog /></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold uppercase tracking-wider text-sm text-white/90">Contact</h4>
            <ul className="space-y-2 text-sm text-white">
              <li><a href="mailto:aayushxidsu.11am@gmail.com" className="hover:text-white/80">aayushxidsu.11am@gmail.com</a></li>
              <li>+91 7894038559</li>
              <li>Nuapada, ODISHA</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-8">
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white">
                    <DPADialog />
                    <TermsOfServiceDialog />
                    <ImprintDialog />
                    <DataPrivacyDialog />
                </div>
                <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-start">
                    {socialLinks.map(link => (
                        <Link href={link.href} key={link.name} className="flex items-center gap-1 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:text-white/80">
                            {link.name} <ArrowRight className="h-4 w-4"/>
                        </Link>                    ))}
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
}

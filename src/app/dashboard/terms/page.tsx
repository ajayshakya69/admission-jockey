"use client";

import AboutUsFooter from "../partials/aboutUsFooter";

export default function TermsOfUse() {
  return (
    <section className="flex flex-col min-h-screen dark:bg-gradient-b dark:from-[#000000b0] dark:via-[#000000b0] dark:to-[#000000b0] bg-gradient-to-b from-[#F6F6F6] via-[#fef4f7] to-[#efeafe] dark:text-white text-black lg:space-y-30 space-y-20">
      <div className="lg:px-25 px-5 mx-auto space-y-10 lg:mt-20 mt-5">
        <h1 className="text-[24px] lg:text-[32px] font-bold text-transparent bg-clip-text bg-[linear-gradient(90deg,#A07DF1,#F69DBA)]">
          Terms of Use for Alumna.ai
        </h1>

        <p className="text-sm sm:text-base leading-relaxed">
          Effective Date: July 18, 2025<br />
          Welcome to Alumna.ai (the “Portal”), an AI-driven platform providing personalized course and career recommendations. These Terms of Use (“Terms”) govern your access to and use of the Portal, including all services, features, and content offered by Alumna.ai (“we,” “us,” or “our”). By accessing or using the Portal, you agree to be bound by these Terms.
        </p>

        <div className="space-y-4">
          <h2 className="text-lg sm:text-xl font-semibold">1. Acceptance of Terms</h2>
          <p className="text-sm sm:text-base">
            By using the Portal, you confirm that you are at least 18 years old or have obtained verifiable parental consent if under 18 (Section 9(1) of the DPDPA). If you do not agree with these Terms, you must not use the Portal.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg sm:text-xl font-semibold ">2. User Accounts</h2>
          <p className="text-sm sm:text-base ">You have the following rights under the DPDPA:</p>
          <ul className="list-disc pl-10 text-sm sm:text-base space-y-1">
            <li><strong>Registration :</strong>To access certain features, you must create an account by providing accurate and complete information (e.g., name, email, educational details). You must not impersonate others or provide false information (Section 15 of the DPDPA).</li>
            <li><strong>Account Security :</strong>You are responsible for maintaining the confidentiality of your account credentials and notifying us immediately of any unauthorized use.</li>
            <li><strong>Nomination :</strong>  You may nominate another individual to manage your account in case of death or incapacity (Section 14). Contact our Data Protection Officer to set this up.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg sm:text-xl font-semibold">3. Use of the Portal</h2>
          <p className="text-sm sm:text-base">You agree to use the Portal only for lawful purposes and in compliance with these Terms. You will not:</p>
          <ul className="list-disc pl-10 text-sm sm:text-base space-y-1">
            <li>Use the Portal to submit false or misleading information.</li>
            <li>Attempt to gain unauthorized access to the Portal or its systems.</li>
            <li>Engage in activities that disrupt or harm the Portal’s functionality (e.g., hacking, introducing malware).</li>
            <li>Use the Portal for commercial purposes without our prior written consent.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg sm:text-xl font-semibold">4. AI Recommendations</h2>
          <p className="text-sm sm:text-base">
            Our AI provides course and career recommendations based on your data (e.g., academic records, preferences). While we strive for accuracy, we do not guarantee the suitability or outcome of recommendations. You are responsible for verifying and acting on the recommendations.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg sm:text-xl font-semibold">5. Intellectual Property</h2>
          <p className="text-sm sm:text-base">
            All content on the Portal (e.g., text, graphics, algorithms, recommendations) is owned by or licensed to Alumna.ai and is protected by intellectual property laws. You may not reproduce, distribute, or modify any content without our prior written consent.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg sm:text-xl font-semibold">6. Data Protection and Privacy</h2>
          <p className="text-sm sm:text-base">Your use of the Portal is subject to our Privacy Policy (see above), which outlines how we collect, use, and protect your personal data in compliance with the DPDPA. Key points include:</p>
          <ul className="list-disc pl-10 text-sm sm:text-base space-y-1">
            <li>Obtaining your consent before processing data.</li>
            <li>Providing tools to access, correct, or erase your data.</li>
            <li>Implementing security measures to protect your data.</li>
            <li>Special protections for children’s data (under 18).</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg sm:text-xl font-semibold">7. Grievance Redressal</h2>
          <p className="text-sm sm:text-base">
            If you have concerns about the Portal or our data practices, you may:
          </p>
          <ul className="list-disc pl-10 text-sm sm:text-base space-y-1">
            <li>Submit a complaint via the “Contact Us” form on the Portal or email our Data Protection Officer at <a href="mailto:privacy@alumna.ai" className="underline text-purple-400">privacy@alumna.ai</a>.</li>
            <li>Expect a response within the prescribed period under the DPDPA.</li>
            <li>Escalate unresolved issues to the Data Protection Board of India.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg sm:text-xl font-semibold">8. Limitation of Liability</h2>
          <p className="text-sm sm:text-base">
            To the fullest extent permitted by law, Alumna.ai is not liable for:
          </p>
          <ul className="list-disc pl-10 text-sm sm:text-base space-y-1">
            <li>Any indirect, incidental, or consequential damages arising from your use of the Portal.</li>
            <li>Inaccuracies in AI recommendations or reliance on them.</li>
            <li>Data breaches despite reasonable security measures, provided we comply with DPDPA notification requirements.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg sm:text-xl font-semibold">9. Termination</h2>
          <p className="text-sm sm:text-base">
            We may suspend or terminate your access to the Portal if you:
          </p>
          <ul className="list-disc pl-10 text-sm sm:text-base space-y-1">
            <li>Violate these Terms or the DPDPA.</li>
            <li>Engage in fraudulent or unlawful activities.</li>
            <li>Fail to provide authentic information (Section 15).</li>
          </ul>
          <p className="text-sm sm:text-base">
            Upon termination, we will erase your personal data unless retention is required by law (Section 8(7)).
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg sm:text-xl font-semibold">10. Governing Law and Dispute Resolution</h2>
          <p className="text-sm sm:text-base">
            These Terms are governed by the laws of India. Any disputes will be resolved through:
          </p>
          <ul className="list-disc pl-10 text-sm sm:text-base space-y-1">
            <li>Our grievance redressal mechanism (see Section 7).</li>
            <li>Mediation, if directed by the Data Protection Board (Section 31).</li>
            <li>Appeals to the Telecom Disputes Settlement and Appellate Tribunal (Section 29).</li>
          </ul>
          <p className="text-sm sm:text-base">
            No civil court has jurisdiction over matters empowered to the Board under the DPDPA (Section 39).
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg sm:text-xl font-semibold">11. Changes to These Terms</h2>
          <p className="text-sm sm:text-base">
            We may update these Terms to reflect changes in legal requirements or our services. We will notify you of material changes via email or in-app notifications. Continued use of the Portal constitutes acceptance of the updated Terms. All content on the Portal (e.g., text, graphics, algorithms, recommendations) is owned by or licensed to Alumna.ai and is protected by intellectual property laws. You may not reproduce, distribute, or modify any content without our prior written consent.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg sm:text-xl font-semibold">12. Contact Information</h2>
          <p className="text-sm sm:text-base">
            For questions or concerns, contact:
            <br />
            <span className="ml-2">• Email: <a href="mailto:privacy@alumna.ai" className="underline text-purple-400">privacy@alumna.ai</a></span>
            <br />
            <span className="ml-2">• Address: 114, 1st floor, CPL Tower, 43-A, IT Park, Sahastradhara Road, Dehradun, Uttarakhand, 248001</span>
          </p>
          <p className="text-sm sm:text-base mt-2">
            By using Alumna.ai, you acknowledge that you have read, understood, and agree to these Terms of Use.
          </p>
        </div>
      </div>

      <AboutUsFooter />
    </section>
  );
}

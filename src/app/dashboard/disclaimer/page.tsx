"use client";

import AboutUsFooter from "../partials/aboutUsFooter";

export default function Disclaimer() {
  return (
    <section className="flex flex-col min-h-screen dark:bg-gradient-b dark:from-[#000000b0] dark:via-[#000000b0] dark:to-[#000000b0] bg-gradient-to-b from-[#F6F6F6] via-[#fef4f7] to-[#efeafe] dark:text-white text-black lg:space-y-30 space-y-20">
      <div className="lg:px-25 px-5 mx-auto space-y-10 lg:mt-20 mt-5">
        <h1 className="text-[24px] lg:text-[32px] font-bold text-transparent bg-clip-text bg-[linear-gradient(90deg,#A07DF1,#F69DBA)]">
          Disclaimer for Alumna.ai
        </h1>

        <p className="text-sm sm:text-base leading-relaxed">
          Effective Date: July 18, 2025<br />
          Alumna.ai provides AI-driven course and career recommendations to assist you in making informed educational and professional decisions. This Disclaimer outlines the limitations of our services, your responsibilities when using the Portal, and our compliance with applicable laws, including the Digital Personal Data Protection Act, 2023 (DPDPA).
        </p>

        {/* Section 1 */}
        <div className="space-y-4">
          <h2 className="text-lg sm:text-xl font-semibold">1. Nature of Recommendations</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
            <li>Our AI-driven recommendations for courses and careers are generated based on the personal data you provide, such as academic records, career preferences, and psychometric responses. While we strive to ensure accuracy, we do not guarantee the suitability, accuracy, or outcome of any recommendation due to factors such as:
              <ul className="list-disc pl-10">
                <li>Potential biases or limitations in our AI algorithms.</li>
                <li>Incomplete, inaccurate, or outdated data provided by you.</li>
                <li>External factors beyond our control (e.g., changes in course availability or job market trends)</li>
              </ul>
            </li>
            <li>You are responsible for verifying and acting on recommendations. We strongly recommend consulting qualified professionals (e.g., career counselors, educational advisors) before making decisions based on our recommendations.</li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className="space-y-4">
          <h2 className="text-lg sm:text-xl font-semibold">2. No Warranties</h2>
          <span className="text-sm sm:text-base">The Portal is provided on an “as-is” and “as-available” basis. Alumna.ai makes no warranties, express or implied, regarding:</span>
          <ul className="list-disc pl-10 space-y-1 text-sm sm:text-base">
            <li>The accuracy, completeness, or reliability of content, recommendations, or AI outputs.</li>
            <li>The uninterrupted or error-free operation of the Portal.</li>
            <li>The absence of viruses or other harmful components, though we implement reasonable security measures as required by Section 8(5) of the DPDPA.</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="space-y-4">
          <h2 className="text-lg sm:text-xl font-semibold">3. Limitation of Liability</h2>
          <span className="text-sm sm:text-base">To the fullest extent permitted by law, Alumna.ai, its affiliates, and its third-party service providers are not liable for:</span>
          <ul className="list-disc pl-10 space-y-1 text-sm sm:text-base">
            <li>Any direct, indirect, incidental, consequential, or special damages arising from your use of the Portal or reliance on its recommendations.</li>
            <li>Losses resulting from inaccurate, incomplete, or outdated data provided by you, which may affect AI-generated recommendations.</li>
            <li>Data breaches, provided we comply with DPDPA requirements for security safeguards and breach notifications (Sections 8(5–6)).</li>
            <li>Any decisions or actions you take based on the Portal’s recommendations.</li>
          </ul>
        </div>

        {/* Section 4 */}
        <div className="space-y-4">
          <h2 className="text-lg sm:text-xl font-semibold">4. Third-Party Services and External Links</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
            <li>We may engage third-party services (e.g., cloud providers, AI analytics vendors) to operate the Portal. These providers operate under contracts ensuring compliance with the DPDPA (Section 8(2)). We are not responsible for their performance or failures beyond our contractual oversight.</li>
            <li>The Portal may include links to external websites, such as course providers or educational resources. We do not endorse or control these third-party sites and are not liable for their content, accuracy, or practices. You access such links at your own risk.</li>
          </ul>
        </div>

        {/* Section 5 */}
        <div className="space-y-4">
          <h2 className="text-lg sm:text-xl font-semibold">5. Children’s Data</h2>
          <span className="text-sm lg:text-base">If you are under 18, your use of the Portal requires verifiable parental consent as mandated by Section 9(1) of the DPDPA. Parents or guardians are responsible for:</span>
          <ul className="list-disc pl-10 space-y-1 text-sm sm:text-base">
            <li>Reviewing and consenting to our Privacy Policy and Terms of Use on your behalf.</li>
            <li>Ensuring the accuracy of data provided for minors.</li>
            <li>We do not knowingly engage in behavioral tracking or targeted advertising for users under 18, as prohibited by Section 9(3).</li>
          </ul>
        </div>

        {/* Section 6 */}
        <div className="space-y-4">
          <h2 className="text-lg sm:text-xl font-semibold">6. User Responsibilities</h2>
          <span className="text-sm lg:text-base">You are responsible for:</span>
          <ul className="list-disc pl-10 space-y-1">
            <li>
              Providing accurate, complete, and authentic information, as required by Section 15 of the DPDPA. Inaccurate or incomplete data may lead to unreliable AI recommendations, for which we are not liable.
            </li>
            <li>
              Using the Portal for lawful purposes and in compliance with our Terms of Use and Privacy Policy.
            </li>
            <li>
              Not engaging in activities that disrupt or harm the Portal’s functionality (e.g., hacking, introducing malware).
            </li>
          </ul>
        </div>

        {/* Section 7 */}
        <div className="space-y-4">
          <h2 className="text-lg sm:text-xl font-semibold">7. Geographic Scope</h2>
          <p className="text-sm sm:text-base">
            This Disclaimer applies to users accessing the Portal from India and to any processing of personal data related to offering services in India, as per Section 3 of the DPDPA. If you access the Portal from outside India, you are responsible for complying with local laws in addition to these terms.
          </p>
        </div>

        {/* Section 8 */}
        <div className="space-y-4">
          <h2 className="text-lg sm:text-xl font-semibold">8. Compliance with Applicable Laws</h2>
          <p className="text-sm sm:text-base">
            Alumna.ai operates in compliance with the DPDPA and other relevant Indian laws, including the Information Technology Act, 2000, and its rules. We implement reasonable security safeguards, maintain accurate data for AI processing (Section 8(3)), and provide mechanisms for user rights, such as data access, correction, and erasure (Sections 11–14).
          </p>
        </div>

        {/* Section 9 */}
        <div className="space-y-4">
          <h2 className="text-lg sm:text-xl font-semibold">9. Updates to This Disclaimer</h2>
          <p className="text-sm sm:text-base">
            We may update this Disclaimer to reflect changes in our practices, legal requirements, or the Portal’s functionality. We will notify you of material changes via email, in-app notifications, or a prominent notice on the Portal. Continued use of the Portal after such updates constitutes acceptance of the revised Disclaimer.
          </p>
        </div>

        {/* Section 10 */}
        <div className="space-y-4">
          <h2 className="text-lg sm:text-xl font-semibold">10. Contact Information</h2>
          <p className="text-sm sm:text-base">
            For concerns or to exercise your rights:
            <br />• Email: <a href="mailto:privacy@alumna.ai" className="underline text-purple-400">privacy@alumna.ai</a>
            <br />• Grievance Portal: Available via “Contact Us” on Alumna.ai
            <br />If you have unresolved concerns, you may escalate them to the Data Protection Board of India, as per Section 13(3) of the DPDPA.
          </p>
        </div>

        <p className="text-sm sm:text-base">
          By using Alumna.ai, you acknowledge that you have read, understood, and agree to this Disclaimer.
        </p>
      </div>

      <AboutUsFooter />
    </section>
  );
}

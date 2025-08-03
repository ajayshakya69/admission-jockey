"use client";

import AboutUsFooter from "../partials/aboutUsFooter";

export default function ConsentNotice() {
  return (
    <section className="flex flex-col min-h-screen dark:bg-gradient-b dark:from-[#000000b0] dark:via-[#000000b0] dark:to-[#000000b0] bg-gradient-to-b from-[#F6F6F6] via-[#fef4f7] to-[#efeafe] dark:text-white text-black lg:space-y-30 space-y-20">
      <div className=" lg:px-25 px-5 mx-auto space-y-10 lg:mt-20 mt-5">
        <h1 className="text-[24px] lg:text-[32px] font-bold text-transparent bg-clip-text bg-[linear-gradient(90deg,#A07DF1,#F69DBA)]">Consent Notice for Alumna.ai</h1>
        <p className="text-sm sm:text-base leading-relaxed ">
          At Alumna.ai, we value your privacy and are committed to complying with the Digital Personal Data Protection Act, 2023 (DPDPA). This Consent Notice explains how we collect, use, and process your personal data when you use our AI-driven platform to receive personalized course and career recommendations. By providing your consent, you agree to the processing of your data as described below.
        </p>

        {/* Section 1: Data We Collect */}
        <div className="space-y-4">
          <h2 className="text-lg sm:text-xl font-semibold ">1. Data We Collect</h2>
          <p className="text-sm sm:text-base ">
            We collect the following personal data to provide our services:
          </p>
          <ul className="list-disc pl-5 text-sm sm:text-base space-y-1">
            <li>Identity Information: Name, email address, phone number.</li>
            <li>Educational Data: Academic records, grades, qualifications, test results.</li>
            <li>Career Preferences: Interests, skills, career goals, psychometric test responses.</li>
            <li>Demographic Data: Age, gender, location.</li>
            <li>Technical Data: IP address, browser type, device information, usage data.</li>
          </ul>
          <p className="text-sm sm:text-base">
            If you are under 18, we will collect your data only with verifiable parental consent (e.g., OTP sent to a parent's phone).
          </p>
        </div>

        {/* Section 2: Purpose */}
        <div className="space-y-4">
          <h2 className="text-lg sm:text-xl font-semibold">2. Purpose of Processing</h2>
          <p className="text-sm sm:text-base">We process your data for the following purposes:</p>
          <ul className="list-disc pl-5 text-sm sm:text-base space-y-1">
            <li>To generate personalized course and career recommendations using our AI algorithms.</li>
            <li>To improve the Portal’s functionality and user experience.</li>
            <li>To communicate with you (e.g., course updates, responses to inquiries).</li>
            <li>To comply with legal obligations, such as audits or regulatory requests.</li>
          </ul>
          <p className="text-sm sm:text-base">
            We will not process your data for other purposes without your explicit consent, except as permitted under Section 7 of the DPDPA (e.g., for legal compliance or medical emergencies).
          </p>
        </div>

        {/* Section 3: Consent */}
        <div className="space-y-4">
          <h2 className="text-lg sm:text-xl font-semibold ">3. Your Consent</h2>
          <p className="text-sm sm:text-base ">
            By clicking “I Agree” or taking a similar affirmative action, you provide free, specific, informed, unconditional, and unambiguous consent for us to process your personal data for the purposes listed above (Section 6(1)). This consent is limited to the data necessary for these purposes.
          </p>
        </div>

        {/* Section 4: Rights */}
        <div className="space-y-4">
          <h2 className="text-lg sm:text-xl font-semibold ">4. Your Rights</h2>
          <p className="text-sm sm:text-base ">You have the following rights under the DPDPA:</p>
          <ul className="list-disc pl-5 text-sm sm:text-base space-y-1">
            <li><strong>Withdraw Consent :</strong> Withdraw at any time via the “Manage My Data” section of the Portal. This may affect certain features (e.g., recommendations).</li>
            <li><strong>Access :</strong> Request a summary of your data and its processing.</li>
            <li><strong>Correction and Erasure :</strong> Request correction, updating, or deletion of your data.</li>
            <li><strong>Grievance Redressal :</strong> Submit complaints via our “Contact Us” form.</li>
            <li><strong>Nomination :</strong> Nominate someone to manage your data in case of death or incapacity.</li>
          </ul>
        </div>
      </div>
      <AboutUsFooter />
    </section>
  );
}

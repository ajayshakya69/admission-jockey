"use client";

import AboutUsFooter from "../partials/aboutUsFooter";

export default function PrivacyPolicy() {
  return (
    <section className="flex flex-col min-h-screen dark:bg-gradient-b dark:from-[#000000b0] dark:via-[#000000b0] dark:to-[#000000b0] bg-gradient-to-b from-[#F6F6F6] via-[#fef4f7] to-[#efeafe] dark:text-white text-black lg:space-y-30 space-y-20">
      <div className="lg:px-25 px-5 mx-auto space-y-10 lg:mt-20 mt-5">
        <h1 className="text-[24px] lg:text-[32px] font-bold text-transparent bg-clip-text bg-[linear-gradient(90deg,#A07DF1,#F69DBA)]">
          Privacy Policy for Alumna.ai
        </h1>

        <p className="text-sm sm:text-base leading-relaxed">
          Effective Date: July 18, 2025<br />
          Alumna.ai ("we," "us," or "our") is committed to protecting your
          privacy and ensuring compliance with the Digital Personal Data
          Protection Act, 2023 (DPDPA). This Privacy Policy explains how we
          collect, use, store, protect, and share your personal data when you
          use our AI-driven platform (the "Portal") to receive personalized
          course and career recommendations. By using Alumna.ai, you agree to
          the practices described in this policy.
        </p>

        {[...Array(17)].map((_, i) => (
          <div key={i + 1} className="space-y-4">
            <h2 className="text-lg sm:text-xl font-semibold">
              {`${i + 1}. ${sections[i].title}`}
            </h2>
            {sections[i].content.map((p, j) => (
              <p key={j} className="text-sm sm:text-base leading-relaxed">
                {p}
              </p>
            ))}
            {sections[i].list && (
              <ul className="list-disc pl-10 text-sm sm:text-base space-y-1">
                {sections[i].list.map((item, k) => (
                  <li key={k}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <AboutUsFooter />
    </section>
  );
}

const sections = [
  {
    title: "Scope and Applicability",
    content: [
      "This Privacy Policy applies to all personal data processed by Alumna.ai within India, whether collected in digital form (e.g., through user profiles or quizzes) or digitized from non-digital sources (e.g., uploaded documents).",
      "It also applies to data processed outside India if related to offering services to users in India, as per Section 3 of the DPDPA. This policy does not apply to data processed for personal or domestic purposes or data you have made publicly available."
    ]
  },
  {
    title: "Definitions",
    list: [
      "Personal Data: Any information that can identify you, such as your name, email, academic records, or career preferences.",
      "Digital Personal Data: Personal data in digital form.",
      "Data Principal: You, the individual to whom the personal data relates.",
      "Data Fiduciary: Alumna.ai, the entity determining the purpose and means of processing your data.",
      "Data Processor: Third-party providers (e.g., cloud services or AI analytics vendors) processing data on our behalf.",
      "Consent Manager: A registered entity that may facilitate your consent management (if implemented)."
    ],
    content: []
  },
  {
    title: "Data We Collect",
    content: [
      "We collect the following personal data to provide personalized course and career recommendations:",
      "We adhere to the principle of data minimization, collecting only the data necessary for the specified purpose (Section 6(1) of the DPDPA)."
    ],
    list: [
      "Identity Information: Name, email address, phone number, or other identifiers provided during sign-up.",
      "Educational Data: Academic records, grades, qualifications, or test results you upload or input.",
      "Career Preferences: Interests, skills, career goals, or psychometric test responses.",
      "Demographic Data: Age, gender, location, or other details relevant to recommendations.",
      "Technical Data: IP address, browser type, device information, and usage data (e.g., pages visited, time spent).",
      "Children’s Data: If you are under 18, we may collect data with verifiable parental consent (e.g., via OTP verification)."
    ]
  },
  {
    title: "Purpose of Data Processing",
    list: [
      "To provide personalized course and career recommendations using our AI algorithms.",
      "To improve our Portal’s functionality and user experience.",
      "To communicate with you, including sending course updates or responding to inquiries.",
      "To comply with legal obligations, such as retaining data for audits or responding to regulatory requests.",
      "To protect against fraud, unauthorized access, or other security threats."
    ],
    content: [
      "We will not process your data for purposes beyond those specified unless we obtain your explicit consent or as permitted under Section 7 of the DPDPA (e.g., for state functions, legal compliance, or medical emergencies)."
    ]
  },
  {
    title: "Consent and Notice",
    list: [
      "Consent: We will obtain your free, specific, informed, unconditional, and unambiguous consent with a clear affirmative action (e.g., clicking “I Agree” on a consent pop-up) before processing your personal data (Section 6(1)). You can withdraw your consent at any time via the “Manage My Data” section of the Portal, with the same ease as giving consent (Section 6(4)).",
      "Notice: Before collecting your data, we will provide a clear notice in plain English (or any language listed in the Eighth Schedule of the Constitution, such as Hindi).",
      "Pre-existing Consent: If you provided consent before the DPDPA’s commencement, we will issue a new notice as soon as practicable, and processing will continue until you withdraw consent (Section 5(2))."
    ],
    content: [
      "The notice will explain the data being collected and its purpose, your rights, and how to file a complaint with the Data Protection Board of India."
    ]
  },
  {
    title: "Your Rights as a Data Principal",
    list: [
      "Access: Request a summary of your personal data and details of its processing or sharing.",
      "Correction and Updating: Request correction, completion, or updating of inaccurate or incomplete data.",
      "Erasure: Request deletion of your data unless retention is required by law.",
      "Grievance Redressal: Use our grievance redressal mechanism.",
      "Nomination: Nominate another individual to exercise your rights in case of death or incapacity."
    ],
    content: [
      "To exercise these rights, visit the “Manage My Data” section of the Portal or contact our Data Protection Officer."
    ]
  },
  {
    title: "Children’s Data",
    list: [
      "We will obtain verifiable parental consent before processing children’s data.",
      "We will not track or monitor behavior for profiling.",
      "We will not engage in targeted advertising directed at children.",
      "We will not process data in a way that may harm well-being."
    ],
    content: [
      "Exemptions may apply if notified by the government as verifiably safe (Section 9(5))."
    ]
  },
  {
    title: "Security Safeguards",
    list: [
      "We implement reasonable security measures such as encryption, access controls, and secure cloud storage.",
      "In case of breach, we notify the Data Protection Board and affected users promptly.",
      "We take immediate actions to mitigate breach impacts."
    ],
    content: []
  },
  {
    title: "Data Retention and Erasure",
    list: [
      "We erase personal data when purpose is fulfilled, consent is withdrawn, or inactivity is detected.",
      "We retain data only if legally required.",
      "Our Data Processors will also erase your data when instructed."
    ],
    content: []
  },
  {
    title: "Grievance Redressal",
    list: [
      "Submit complaints via “Contact Us” form or email our Data Protection Officer.",
      "Expect response within prescribed period.",
      "If unresolved, escalate to the Data Protection Board of India."
    ],
    content: []
  },
  {
    title: "Significant Data Fiduciary Obligations",
    list: [
      "Appoint a Data Protection Officer in India.",
      "Conduct Data Protection Impact Assessments.",
      "Perform audits and appoint independent data auditor."
    ],
    content: []
  },
  {
    title: "Cross-Border Data Transfers",
    list: [
      "We comply with government-notified restrictions on international data transfers.",
      "Third-party processors must follow DPDPA standards."
    ],
    content: []
  },
  {
    title: "Data Accuracy for AI Recommendations",
    content: [
      "We ensure data accuracy and completeness to avoid misleading AI outcomes.",
      "We maintain documentation of AI processing for audits."
    ]
  },
  {
    title: "Third-Party Data Processors",
    content: [
      "We may engage third parties under valid contracts.",
      "We ensure they implement safeguards and comply with DPDPA, including data erasure."
    ]
  },
  {
    title: "Penalties for Non-Compliance",
    list: [
      "Up to ₹250 crore for failing to prevent data breaches.",
      "Up to ₹200 crore for breach notification or mishandling children’s data.",
      "Up to ₹150 crore for failing significant fiduciary duties."
    ],
    content: [
      "We are committed to strong compliance to avoid penalties and protect your trust."
    ]
  },
  {
    title: "Contact Information",
    list: [
      "Email: privacy@alumna.ai",
      "Address: [Your business address in India]",
      "Grievance Redressal Portal: Available via the “Contact Us” section"
    ],
    content: [
      "To file a complaint, refer to the official guidelines of the Data Protection Board of India."
    ]
  },
  {
    title: "Changes to This Privacy Policy",
    content: [
      "We may update this Privacy Policy based on changes in legal or operational practices.",
      "You will be notified via email or in-app messages.",
      "Continued use of Alumna.ai means you agree to the updated policy."
    ]
  }
];
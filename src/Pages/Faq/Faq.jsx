import React, { useEffect } from "react";

const Faq = () => {
  useEffect(() => {
    // Accordion Logic: Only one open at a time
    const details = document.querySelectorAll("#faqAccordion details");

    details.forEach((targetDetail) => {
      targetDetail.addEventListener("toggle", () => {
        if (targetDetail.open) {
          details.forEach((detail) => {
            if (detail !== targetDetail) {
              detail.open = false;
            }
          });
        }
      });
    });
  }, []);

  return (
    <section className="py-16 px-4 sm:px-6 transition-all duration-300">
      <div className="container mx-auto">
        <div className="flex justify-center flex-col lg:flex-row gap-10 items-center">
          {/* Left Side Image */}
          <div className="flex justify-center">
            <img
              src="https://i.ibb.co.com/62gF5Cy/faq.jpg"
              alt="FAQ Illustration"
              className="w-full max-w-4xl lg:max-w-md rounded-4xl hover:scale-105 transition-transform duration-300 p-4"
            />
          </div>

          {/* Right Side FAQ */}
          <section className="py-10 px-4 sm:px-6 transition-all duration-300 w-full lg:w-1/2">
            {/* Heading */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-4  leading-tight">
              Frequently Asked Questions
            </h2>

            {/* FAQ Items */}
        <div
  className="space-y-5 mt-5"
  id="faqAccordion"
  data-aos="fade-up"
  data-aos-duration="1200"
>
  <details className="bg-base-300/60 p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-primary">
    <summary className="cursor-pointer text-lg font-semibold flex justify-between items-center">
      <span>What is CleanBangla?</span>
      <span className="text-xl text-primary">+</span>
    </summary>
    <p className="mt-3 text-base text-base-content/80 leading-relaxed">
      CleanBangla is a community-driven platform where citizens can report
      public issues such as garbage, road damage, illegal constructions, and
      other civic problems to raise awareness and help local authorities take
      action.
    </p>
  </details>

  <details className="bg-base-300/60 p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-secondary">
    <summary className="cursor-pointer text-lg font-semibold flex justify-between items-center">
      <span>How can I report an issue?</span>
      <span className="text-xl text-secondary">+</span>
    </summary>
    <p className="mt-3 text-base text-base-content/80 leading-relaxed">
      Simply log in to your CleanBangla account, go to the “Add Issue” page,
      fill in the problem details, upload an image (optional), and submit it.
      Your report will be visible to others and can be tracked from your
      dashboard.
    </p>
  </details>

  <details className="bg-base-300/60 p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-primary">
    <summary className="cursor-pointer text-lg font-semibold flex justify-between items-center">
      <span>Is CleanBangla free to use?</span>
      <span className="text-xl text-primary">+</span>
    </summary>
    <p className="mt-3 text-base text-base-content/80 leading-relaxed">
      Yes! CleanBangla is completely free for all users. Our mission is to
      promote community awareness and encourage responsible reporting for a
      cleaner and safer Bangladesh.
    </p>
  </details>

  <details className="bg-base-300/60 p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-secondary">
    <summary className="cursor-pointer text-lg font-semibold flex justify-between items-center">
      <span>Can I track the progress of my reported issue?</span>
      <span className="text-xl text-secondary">+</span>
    </summary>
    <p className="mt-3 text-base text-base-content/80 leading-relaxed">
      Absolutely! You can visit the “My Issues” section after logging in to see
      the current status of your submitted reports, updates, and any community
      contributions.
    </p>
  </details>

  <details className="bg-base-300/60 p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-primary">
    <summary className="cursor-pointer text-lg font-semibold flex justify-between items-center">
      <span>Who can view the reported issues?</span>
      <span className="text-xl text-primary">+</span>
    </summary>
    <p className="mt-3 text-base text-base-content/80 leading-relaxed">
      All reported issues are publicly visible on the “All Issues” page so that
      other citizens and organizations can stay informed and take collective
      steps toward resolving them.
    </p>
  </details>
</div>

          </section>
        </div>
      </div>
    </section>
  );
};

export default Faq;

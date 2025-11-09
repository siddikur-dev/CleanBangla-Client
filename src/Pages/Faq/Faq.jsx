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
              src="https://i.ibb.co.com/20SBxLWK/faq.png"
              alt="FAQ Illustration"
              className="w-full max-w-sm lg:max-w-md rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 p-4"
            />
          </div>

          {/* Right Side FAQ */}
          <section className="py-10 px-4 sm:px-6 transition-all duration-300 w-full lg:w-1/2">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary heading-font">
              Frequently Asked <span className="text-secondary">Questions</span>
            </h2>

            {/* FAQ Items */}
            <div className="space-y-5" id="faqAccordion">
              <details className="bg-base-300/60 p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-primary">
                <summary className="cursor-pointer text-lg font-semibold flex justify-between items-center">
                  <span>What is Toy Universe?</span>
                  <span className="text-xl text-secondary">+</span>
                </summary>
                <p className="mt-3 text-base text-base-content/80 leading-relaxed">
                  Toy Universe is your local kids’ toy platform offering fun,
                  safe, and creative toys for every age.
                </p>
              </details>

              <details className="bg-base-300/60 p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-secondary">
                <summary className="cursor-pointer text-lg font-semibold flex justify-between items-center">
                  <span>Are your toys safe for kids?</span>
                  <span className="text-xl text-secondary">+</span>
                </summary>
                <p className="mt-3 text-base text-base-content/80 leading-relaxed">
                  Absolutely! All our toys are made from child-safe, non-toxic
                  materials with strict quality checks.
                </p>
              </details>

              <details className="bg-base-300/60 p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-primary">
                <summary className="cursor-pointer text-lg font-semibold flex justify-between items-center">
                  <span>How fast do you deliver?</span>
                  <span className="text-xl text-secondary">+</span>
                </summary>
                <p className="mt-3 text-base text-base-content/80 leading-relaxed">
                  We usually deliver within 2–5 working days across Bangladesh.
                </p>
              </details>

              <details className="bg-base-300/60 p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-secondary">
                <summary className="cursor-pointer text-lg font-semibold flex justify-between items-center">
                  <span>Can I return a product?</span>
                  <span className="text-xl text-secondary">+</span>
                </summary>
                <p className="mt-3 text-base text-base-content/80 leading-relaxed">
                  Yes, we have a simple return policy if your toy is damaged or
                  not as described.
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

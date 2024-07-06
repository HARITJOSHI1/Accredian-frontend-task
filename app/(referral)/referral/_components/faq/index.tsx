import React, { MouseEvent, useState } from "react";
import AccordionItem from "./accordian-item";

const FAQ = () => {
  return (
    <section className="relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
              <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                Any Questions? Look Here
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                Have questions about Accredian's referral program? Find answers below.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="What is Accredian's referral program?"
              text="Accredian's referral program allows you to earn rewards by inviting friends to join Accredian. When your friends sign up using your unique referral link, you earn credits or bonuses that can be redeemed for various rewards."
            />
            <AccordionItem
              header="How do I participate in the referral program?"
              text="Participating in Accredian's referral program is easy. Simply share your unique referral link with your friends and encourage them to sign up for Accredian courses or services."
            />
            <AccordionItem
              header="What rewards can I earn through the referral program?"
              text="You can earn credits or bonuses that can be used to access premium features, courses, or other benefits offered by Accredian. The more friends you refer, the more rewards you can earn!"
            />
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="When do I receive rewards for referring friends?"
              text="You receive rewards once your referred friends successfully sign up for Accredian and meet specific participation criteria, such as completing courses or making purchases. Rewards are typically credited to your account within a specified timeframe."
            />
            <AccordionItem
              header="Can I track my referrals and rewards?"
              text="Yes, Accredian provides a dashboard or a section in your account where you can track the status of your referrals and view the rewards you've earned. This helps you stay informed about your progress and the rewards you're eligible for."
            />
            <AccordionItem
              header="Is there a limit to how many friends I can refer?"
              text="There is usually no limit to the number of friends you can refer to Accredian. The more friends you refer, the more opportunities you have to earn rewards. However, specific terms and conditions may apply, so it's always good to check the program details."
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-[-1]">
        <svg
          width="1440"
          height="886"
          viewBox="0 0 1440 886"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="1308.65"
              y1="1142.58"
              x2="602.827"
              y2="-418.681"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#3056D3" stop-opacity="0.36" />
              <stop offset="1" stop-color="#F5F2FD" stop-opacity="0" />
              <stop offset="1" stop-color="#F5F2FD" stop-opacity="0.096144" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default FAQ;


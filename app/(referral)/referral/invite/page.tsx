"use client";

import React, { useState } from "react";
import Timeline from "../_components/timeline";
import HeroSection from "../_components/hero-section";
import BenefitSection from "../_components/benefits";
import Faq from "../_components/faq";

type Props = {};

const Page = (props: Props) => {
  return (
    <>
      <HeroSection />
      <Timeline />
      <BenefitSection />
      <Faq />
    </>
  );
};

export default Page;

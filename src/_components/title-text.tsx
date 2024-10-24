"use client";

import { TextGenerateEffect } from "./ui/text-generate-effect";

const TitleText = () => {
  const text = "Eco-Friendly Energy Solutions for a Sustaintable Future";

  return (
    <TextGenerateEffect
      duration={2}
      words={text}
      className="text-white text-6xl font-light w-1/2"
    />
  );
};

export default TitleText;

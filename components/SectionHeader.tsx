import React from "react";

const SectionHeader = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <>
      <div className="flex justify-center">
        <h2 className="bg-gradient-to-r from-teal-300 to-sky-400 bg-clip-text py-2 text-2xl font-semibold tracking-widest text-transparent sm:text-3xl md:text-4xl xl:text-5xl">
          {title}
        </h2>
      </div>
      <p className="mx-auto mt-4 text-center text-foreground/70 xsm:text-xs xs:text-sm sm:text-base md:max-w-2xl md:text-lg lg:max-w-3xl xl:text-xl">
        {description}
      </p>
    </>
  );
};

export default SectionHeader;

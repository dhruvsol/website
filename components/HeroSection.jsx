import Image from "next/image";
export const HeroSection = () => {
  return (
    <>
      <div className="bg-black h-screen flex justify-center items-center md:justify-around md:pt-10 md:place-items-start ">
        <div className="flex justify-center flex-col md:pt-24">
          <h1 className="text-white text-3xl font-bold md:text-4xl pb-3 md:pb-4 xl:text-6xl">
            I’m ready to Code
          </h1>
          <div className="flex gap-2">
            <h1 className="text-white text-3xl font-bold md:text-4xl xl:text-6xl">
              your
            </h1>
            <span className="text-blue text-3xl font-bold md:text-4xl xl:text-6xl">
              Smart Contracts
            </span>
          </div>
          <div>
            <p className="text-white md:text-2xl md:pt-10">
              {" I am a Blockchain & Open source enthusiast."}
              <br />
              {"Love to code in Solana Network"}
              <br />
              {""}
            </p>
          </div>
        </div>
        <div className="hidden md:block">
          <Image
            src="/1.png"
            alt="ph"
            width={500}
            height={550}
            layout="fixed"
            className="h-20"
          />
        </div>
      </div>
    </>
  );
};

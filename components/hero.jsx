import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex items-center justify-between w-full h-full">
      <div className="w-1/2">
        <h1 className="text-4xl font-bold text-gray-800">Bevarc</h1>
        <p className="text-lg text-gray-700">
          Book professional construction services with ease! We specialize in
          architecture design, interior work, building construction, renovation,
          modeling, and home painting. Reliable, expert solutions tailored to
          your needs. Schedule today!
        </p>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <Image
          src="/construction.svg"
          width={800}
          height={800}
          alt="Bevarc"
          className="w-40 h-auto"
        />
      </div>
    </div>
  );
};

export default Hero;

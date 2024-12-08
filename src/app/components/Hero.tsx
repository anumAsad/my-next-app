import Image from "next/image";
import Heroo from "../../../public/hero.png"

const Hero= () => {
  return (
    <div className="relative w-auto sm:w-full h-screen">
      {/* Background Image */}
      <Image
        src={Heroo}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />

<div className="absolute top-20 right-10 text-black text-9xl">
            ✦
          </div>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center lg:text-left">
          <h1 className=" hidden md:block text-4xl sm:text-6xl font-extrabold text-gray-900">
            Find Clothes That <br /> Match Your Style
          </h1>
          <p className="mt-4 mr-96  hidden md:block text-gray-600 text-lg">
            Browse through our diverse range of meticulously crafted garments designed <br/> to bring out your individuality and cater to your sense of style.
          </p>
          <button className="mt-6 bg-black text-white py-2 px-6  hidden md:block rounded-lg hover:bg-gray-800 transition">
            Shop Now
          </button>
        </div>
        </div>

    </div>
  );
};

export default Hero;
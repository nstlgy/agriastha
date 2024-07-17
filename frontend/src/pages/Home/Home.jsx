import React from "react";
import { assets } from "../../assets/assets";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Hero = () => (
  <div className="w-full">
    <Carousel>
      <CarouselContent>
        <CarouselItem>
          <img
            src={assets.agriculture_field}
            alt="Agricultural field"
            className="w-full h-72 object-cover rounded-lg mb-8"
          />
        </CarouselItem>

        <CarouselItem>
          <img
            src={assets.hands}
            alt="Agricultural field"
            className="w-full h-72 object-cover rounded-lg mb-8"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src={assets.farmer}
            alt="Agricultural field"
            className="w-full h-72 object-cover rounded-lg mb-8"
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

    <h1 className="text-4xl font-bold text-center mb-4">
      Welcome to Agriastha
    </h1>
    <h2 className="text-xl text-center mb-6">
      Promoting Sustainable Agriculture for a Greener Tomorrow
    </h2>
    <p className="text-center mb-6">
      At Agriastha, we are dedicated to advancing sustainable agricultural
      practices that enhance productivity and protect the environment. Join us
      in our mission to create a more sustainable future for generations to
      come.
    </p>
    <p className="text-green-600 text-center font-semibold">
      "Harvesting Trust, Cultivating the future"
    </p>
  </div>
);

const SocialIcon = ({ href, path }) => (
  <a href={href} className="text-green-600 hover:text-green-800">
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d={path} />
    </svg>
  </a>
);

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-8">
        <Hero />
      </main>
    </div>
  );
}

export default Home;

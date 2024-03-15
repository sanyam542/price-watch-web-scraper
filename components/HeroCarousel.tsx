"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const heroImages = [
  { imgUrl: "/assets/images/shoe.jpg", alt: "shoe" },
  { imgUrl: "/assets/images/earphone.jpg", alt: "earphone" },
  { imgUrl: "/assets/images/watch.jpg", alt: "watch" },
  { imgUrl: "/assets/images/mixer.jpg", alt: "mixer" },
  { imgUrl: "/assets/images/chair.jpg", alt: "chair" },
];

const HeroCarousel = () => {
  return (
    <div className="hero-carousel">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={4000}
        showArrows={true}
        showStatus={false}
      >
        {heroImages.map((image) => (
          <Image
            src={image.imgUrl}
            alt={image.alt}
            width={484}
            height={484}
            className="object-contain"
            key={image.alt}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default HeroCarousel;

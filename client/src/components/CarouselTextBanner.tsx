'use client';
// import { useRouter } from 'next/router';
import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import { carouselItems } from '@/constants';
import { Card, CardContent } from './ui/card';
import Autoplay from 'embla-carousel-autoplay';

const CarouselTextBanner = () => {
  // const router = useRouter();

  return (
    <div className="gold-gradient flex items-center justify-center">
      <Carousel
        className="w-full mx-auto"
        plugins={[
          Autoplay({
            delay: 3500,
          }),
        ]}
      >
        <CarouselContent>
          {carouselItems.map((item) => (
            <CarouselItem key={item.id}>
              <div>
                <Card className="shadow-none border-none bg-transparent">
                  <CardContent className="flex flex-col items-center justify-center p-2">
                    <p className="sm:text-lg text-wrap dark:text-secondary">
                      {item.title}
                    </p>
                    <p className="text-xs sm:text-sm text-wrap dark:text-secondary">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CarouselTextBanner;

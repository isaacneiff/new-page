
"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { coursesData } from './courses-data.tsx'; // Updated import path

export default function CoursesSection() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 8000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  const scrollTo = useCallback((index: number) => {
    carouselApi?.scrollTo(index);
  }, [carouselApi]);

  useEffect(() => {
    if (!carouselApi) return;

    const onSelect = () => {
      setActiveIndex(carouselApi.selectedScrollSnap());
    };

    carouselApi.on("select", onSelect);
    if (carouselApi.scrollSnapList().length > 0) {
       onSelect();
    }
    
    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi]);

  const handleTabChange = (value: string) => {
    const newIndex = coursesData.findIndex(course => course.id === value);
    if (newIndex !== -1) {
      setActiveIndex(newIndex);
      scrollTo(newIndex);
      const autoplay = carouselApi?.plugins()?.autoplay as any;
      if (autoplay && !autoplay.isPlaying()) {
        autoplay.play();
      } else if (autoplay) {
        autoplay.reset(); 
      }
    }
  };

  return (
    <section id="cursos" className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-secondary">
          Cursos Oferecidos
        </h2>

        {coursesData.length > 0 && (
          <Tabs
            value={coursesData[activeIndex]?.id || coursesData[0].id}
            onValueChange={handleTabChange}
            className="mb-8 w-full max-w-5xl mx-auto"
          >
            <TabsList className="flex overflow-x-auto p-2 h-auto space-x-2 bg-muted rounded-lg custom-tabs-list md:h-14">
              {coursesData.map((course) => (
                <TabsTrigger
                  key={course.id}
                  value={course.id}
                  className="text-xs sm:text-sm px-3 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground h-auto whitespace-nowrap rounded-md flex-shrink-0"
                >
                  {course.triggerTitle}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        )}

        <div className="w-full max-w-5xl mx-auto">
          <Carousel
            setApi={setCarouselApi}
            opts={{ 
              align: "start", 
              loop: true, 
            }}
            plugins={[autoplayPlugin.current]}
            className="w-full"
          >
            <CarouselContent>
              {coursesData.map((course, index) => (
                <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                  <div className="p-1 h-full">
                    <Card className="shadow-xl border-none overflow-hidden bg-card transform transition-all duration-500 ease-in-out h-full flex flex-col">
                      <div className="lg:flex h-full">
                        <div className="lg:w-2/5 relative h-64 lg:h-auto min-h-[300px] lg:min-h-[450px]">
                          <Image
                            src={course.imageSrc}
                            alt={course.imageAlt}
                            layout="fill"
                            objectFit="cover"
                            className="transition-transform duration-500 hover:scale-105"
                            data-ai-hint={course.dataAiHint}
                          />
                        </div>
                        <div className="lg:w-3/5 flex flex-col justify-between p-6 lg:p-8">
                          <CardHeader className="p-0 mb-4">
                            <div className="flex items-start sm:items-center gap-4 mb-2 sm:mb-4 flex-col sm:flex-row">
                              <div className="p-2 sm:p-3 bg-primary/10 rounded-full self-start sm:self-center">
                                {React.cloneElement(course.icon, { size: 32 })}
                              </div>
                              <CardTitle className="text-xl sm:text-2xl lg:text-3xl leading-tight text-primary">
                                {course.title}
                              </CardTitle>
                            </div>
                          </CardHeader>
                          <CardContent className="p-0 flex-grow mb-4">
                            <CardDescription className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                              {course.description}
                            </CardDescription>
                          </CardContent>
                          <CardFooter className="p-0">
                            <Button
                              size="lg"
                              className="bg-primary hover:bg-accent text-primary-foreground text-base sm:text-lg py-2.5 sm:py-3 px-6 sm:px-8 rounded-md shadow-md transition-transform hover:scale-105"
                            >
                              {course.ctaText}
                            </Button>
                          </CardFooter>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}


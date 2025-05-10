
"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import type { AutoplayType } from "embla-carousel-autoplay";
import { coursesData } from './courses-data';

export default function CoursesSection() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const autoplayPlugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  // Effect to scroll carousel when activeIndex (controlled by Tabs) changes
  useEffect(() => {
    if (carouselApi && carouselApi.selectedScrollSnap() !== activeIndex) {
      try {
        carouselApi.scrollTo(activeIndex);
      } catch (e) {
        console.error("Failed to scroll carousel:", e);
      }
    }
  }, [activeIndex, carouselApi]);

  // Effect to update activeIndex (for Tabs) when carousel selection changes
  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const onSelect = () => {
      const newSelectedSnap = carouselApi.selectedScrollSnap();
      if (activeIndex !== newSelectedSnap) {
        setActiveIndex(newSelectedSnap);
      }
    };

    // Initial sync: Set activeIndex from carousel's initial state
    if (carouselApi.scrollSnapList().length > 0) {
        const initialSnap = carouselApi.selectedScrollSnap();
        if (activeIndex !== initialSnap) {
            setActiveIndex(initialSnap);
        }
    }
    
    carouselApi.on("select", onSelect);
    carouselApi.on("reInit", onSelect); // Re-sync on re-initialization (e.g. responsive changes)

    return () => {
      carouselApi.off("select", onSelect);
      carouselApi.off("reInit", onSelect);
    };
  }, [carouselApi, activeIndex, setActiveIndex]); // Include setActiveIndex for exhaustiveness, though it's stable

  const handleTabChange = (value: string) => {
    const newIndex = coursesData.findIndex(course => course.id === value);
    if (newIndex !== -1 && newIndex !== activeIndex) {
      setActiveIndex(newIndex); // This will trigger the useEffect to scroll the carousel
      
      // Restart autoplay
      const autoplayControl = carouselApi?.plugins()?.autoplay as AutoplayType | undefined;
      if (autoplayControl && typeof autoplayControl.stop === 'function' && typeof autoplayControl.play === 'function') {
        autoplayControl.stop();
        autoplayControl.play();
      }
    }
  };

  if (!coursesData || coursesData.length === 0) {
    return (
      <section id="cursos" className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <p>Nenhum curso disponível no momento.</p>
        </div>
      </section>
    );
  }
  
  const currentTabValue = (coursesData[activeIndex] && coursesData[activeIndex].id) || (coursesData[0] ? coursesData[0].id : "");

  return (
    <section id="cursos" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-secondary">
          Cursos Oferecidos
        </h2>

        {coursesData.length > 0 && (
          <>
            <Tabs
              value={currentTabValue}
              onValueChange={handleTabChange}
              className="mb-8 w-full max-w-5xl mx-auto"
            >
              <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-2 bg-muted p-6 rounded-lg h-auto md:h-20 custom-tabs-list overflow-x-auto">
                {coursesData.map((course) => (
                  <TabsTrigger
                    key={course.id}
                    value={course.id}
                    className="text-xs sm:text-sm px-3 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground h-auto whitespace-nowrap rounded-md flex-shrink-0"
                  >
                    {course.triggerTitle}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            <div className="w-full max-w-5xl mx-auto mt-6">
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
                    <CarouselItem key={course.id} className="md:basis-1/1 lg:basis-1/1">
                      <div className="p-1 h-full">
                        <Card className="shadow-xl border-none overflow-hidden bg-card transform transition-all duration-500 ease-in-out h-full flex flex-col">
                          <div className="lg:flex h-full">
                            <div className="lg:w-2/5 relative h-64 lg:h-auto min-h-[300px] lg:min-h-[450px]">
                              <Image
                                src={course.imageSrc || `https://picsum.photos/seed/${course.id}/600/400`}
                                alt={course.imageAlt}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 33vw"
                                style={{ objectFit: 'cover' }}
                                className="transition-transform duration-500 hover:scale-105"
                                data-ai-hint={course.dataAiHint}
                                priority={index === 0} // Prioritize the first image for LCP
                              />
                            </div>
                            <div className="lg:w-3/5 flex flex-col justify-between p-6 lg:p-8">
                              <CardHeader className="p-0 mb-4">
                                <div className="flex items-start sm:items-center gap-4 mb-2 sm:mb-4 flex-col sm:flex-row">
                                  <div className="p-2 sm:p-3 bg-primary/10 rounded-full self-start sm:self-center">
                                    {React.isValidElement(course.icon) ? React.cloneElement(course.icon, { size: 32 }) : null}
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
                                  className="bg-primary hover:bg-accent text-primary-foreground text-base sm:text-lg py-2.5 sm:py-3 px-6 sm:px-8 rounded-md shadow-md transition-transform hover:scale-90"
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
          </>
        )}
      </div>
    </section>
  );
}


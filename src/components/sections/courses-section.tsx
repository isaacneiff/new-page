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
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { coursesData } from './courses-data.tsx';

export default function CoursesSection() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 8000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  const scrollTo = useCallback((index: number) => {
    if (carouselApi && carouselApi.scrollSnapList().length > index) {
      carouselApi.scrollTo(index);
    }
  }, [carouselApi]);

  useEffect(() => {
    if (!carouselApi) return;

    const onSelect = () => {
      // Check if scrollSnapList is populated before calling selectedScrollSnap
      if (carouselApi.scrollSnapList().length > 0) {
        setActiveIndex(carouselApi.selectedScrollSnap());
      }
    };

    carouselApi.on("select", onSelect);
    // Ensure onSelect is called initially if scrollSnaps are already available
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
      if (autoplay) { 
        autoplay.stop(); // Stop existing autoplay
        autoplay.play(true); // Restart from the beginning
      }
    }
  };

  const currentCourse = coursesData.length > 0 && activeIndex < coursesData.length ? coursesData[activeIndex] : null;


  return (
    <section id="cursos" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-secondary">
          Cursos Oferecidos
        </h2>

        {coursesData.length > 0 && (
          <Tabs
            // Ensure value is always valid, fallback to first course if currentCourse is null due to initial state
            value={currentCourse ? currentCourse.id : coursesData[0].id}
            onValueChange={handleTabChange}
            className="mb-8 w-full max-w-5xl mx-auto"
          >
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 bg-muted p-1 rounded-lg h-auto md:h-16 custom-tabs-list">
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
            
            {/* Render TabsContent only for the current active course/tab */}
            {currentCourse && (
                <TabsContent value={currentCourse.id} key={currentCourse.id} className="mt-6">
                    <div className="w-full max-w-5xl mx-auto">
                    <Carousel
                        // Adding a key to the Carousel that changes with activeIndex
                        // can help re-initialize it or force a re-render if necessary,
                        // particularly for `startIndex` to take effect reliably.
                        key={activeIndex} 
                        setApi={setCarouselApi}
                        opts={{
                        align: "start",
                        loop: true,
                        startIndex: activeIndex, // Set the carousel to start at the selected tab's index
                        }}
                        plugins={[autoplayPlugin.current]}
                        className="w-full"
                    >
                        <CarouselContent>
                        {/* The Carousel internally manages displaying all items; Tabs select which "view" is active */}
                        {coursesData.map((course) => (
                            <CarouselItem key={course.id} className="md:basis-1/1 lg:basis-1/1">
                            <div className="p-1 h-full">
                                <Card className="shadow-xl border-none overflow-hidden bg-card transform transition-all duration-500 ease-in-out h-full flex flex-col">
                                <div className="lg:flex h-full">
                                    <div className="lg:w-2/5 relative h-64 lg:h-auto min-h-[300px] lg:min-h-[450px]">
                                    <Image
                                        src={course.imageSrc || "https://picsum.photos/seed/image-" + course.id + "/600/400"} // Ensure fallback is unique if needed
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
                                            {/* Ensure course.icon is a valid ReactElement */}
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
                </TabsContent>
            )}
          </Tabs>
        )}
      </div>
    </section>
  );
}
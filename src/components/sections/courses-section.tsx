
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
import { coursesData, type CourseModule } from './courses-data';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ListChecks, CheckCircle } from "lucide-react";

export default function CoursesSection() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const autoplayPlugin = useRef(
    Autoplay({ delay: 7000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  useEffect(() => {
    if (carouselApi && carouselApi.selectedScrollSnap() !== activeIndex) {
      try {
        carouselApi.scrollTo(activeIndex);
      } catch (e) {
        console.error("Failed to scroll carousel:", e);
      }
    }
  }, [activeIndex, carouselApi]);

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

    if (carouselApi.scrollSnapList().length > 0) {
        const initialSnap = carouselApi.selectedScrollSnap();
        if (activeIndex !== initialSnap) {
            setActiveIndex(initialSnap);
        }
    }
    
    carouselApi.on("select", onSelect);
    carouselApi.on("reInit", onSelect);

    return () => {
      carouselApi.off("select", onSelect);
      carouselApi.off("reInit", onSelect);
    };
  }, [carouselApi, activeIndex, setActiveIndex]);

  const handleTabChange = (value: string) => {
    const newIndex = coursesData.findIndex(course => course.id === value);
    if (newIndex !== -1 && newIndex !== activeIndex) {
      setActiveIndex(newIndex);
      
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
    <section id="cursos" className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-primary">
          Cursos Oferecidos
        </h2>

        {coursesData.length > 0 && (
          <>
            <Tabs
              value={currentTabValue}
              onValueChange={handleTabChange}
              className="mb-8 w-full max-w-5xl mx-auto"
            >
              <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-2 bg-card/80 p-2 rounded-lg h-auto md:h-24 custom-tabs-list overflow-x-auto">
                {coursesData.map((course) => (
                  <TabsTrigger
                    key={course.id}
                    value={course.id}
                    className="text-xs sm:text-sm px-3 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground h-auto whitespace-normal sm:whitespace-nowrap rounded-md flex-shrink-0 leading-tight text-center"
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
                                priority={index === 0}
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
                              <CardContent className="p-0 flex-grow mb-6 space-y-4">
                                <CardDescription className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                                  {course.description}
                                </CardDescription>
                                
                                {course.modules && course.modules.length > 0 && (
                                  <div className="mt-6">
                                    <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                                      <ListChecks size={22} className="mr-2 text-primary" />
                                      O que o curso oferece?
                                    </h4>
                                    <Accordion type="single" collapsible className="w-full">
                                      {course.modules.map((module: CourseModule) => (
                                        <AccordionItem value={module.id} key={module.id}>
                                          <AccordionTrigger className="text-left hover:no-underline text-base text-foreground/90">
                                            {module.title}
                                          </AccordionTrigger>
                                          <AccordionContent className="space-y-2 text-sm text-muted-foreground/90">
                                            <p>{module.description}</p>
                                            {module.topics && module.topics.length > 0 && (
                                              <ul className="list-inside list-none space-y-1 pl-2 mt-2">
                                                {module.topics.map((topic, idx) => (
                                                  <li key={idx} className="flex items-start">
                                                    <CheckCircle size={16} className="mr-2 mt-0.5 text-primary shrink-0" />
                                                    <span>{topic}</span>
                                                  </li>
                                                ))}
                                              </ul>
                                            )}
                                          </AccordionContent>
                                        </AccordionItem>
                                      ))}
                                    </Accordion>
                                  </div>
                                )}
                              </CardContent>
                              <CardFooter className="p-0 mt-auto">
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
                <CarouselPrevious className="hidden sm:flex left-[-50px]" />
                <CarouselNext className="hidden sm:flex right-[-50px]" />
              </Carousel>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

    